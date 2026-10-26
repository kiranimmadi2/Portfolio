const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const p = JSON.parse(read('profile.json'));
const absolute = file => new URL(p.cleanUrls ? file.replace(/\.html$/, '') : file, p.siteUrl).href;
const schema = JSON.parse(read('schema.json'));
const byType = type => schema['@graph'].find(item => item['@type'] === type);
assert.equal(byType('Person').name, p.name);
assert.equal(byType('Person').alumniOf['@id'], byType('CollegeOrUniversity')['@id']);
assert.equal(byType('Person').hasCredential['@id'], byType('EducationalOccupationalCredential')['@id']);
assert.equal(byType('Person').image['@id'], byType('ImageObject')['@id']);
assert.equal(byType('ImageObject').contentUrl, absolute(p.portrait));
assert.equal(byType('CollegeOrUniversity').url, p.education.url);
assert.equal(byType('Person').alternateName, p.handle);
const image = fs.readFileSync(path.join(root, p.portrait));
assert.equal(byType('ImageObject').width, image.readUInt32BE(16));
assert.equal(byType('ImageObject').height, image.readUInt32BE(20));
const digest = file => crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
assert.equal(digest(p.portrait), digest(p.portraitSource), 'The selected image must remain unmodified');
for (const file of ['index.html', 'about.html', 'skills.html', 'projects.html', 'contact.html']) {
  const html = read(file), canonical = absolute(file === 'index.html' ? '' : file);
  assert.equal((html.match(/<title>/g) || []).length, 1, `${file}: one title`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${file}: one canonical`);
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${file}: canonical URL`);
  assert.ok(html.includes(`property="og:image" content="${absolute(p.portrait)}"`), `${file}: selected social image`);
  assert.ok(!/github\.io\/Portfolio|Senior Software Engineer|Enterprise AI Architect|Lead Flutter Developer|B\.Tech student|Diploma in Information/i.test(html), `${file}: stale identity content`);
  const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${file}: unique IDs`);
  for (const match of html.matchAll(/<(?:script|link|img)\b[^>]*\b(?:src|href)="([^"]+)"/g)) {
    const asset = match[1].split(/[?#]/)[0];
    if (!/^(?:https?:|data:|#)/.test(asset)) assert.ok(fs.existsSync(path.join(root, asset)), `${file}: missing ${asset}`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  if (file === 'index.html' || file === 'about.html') {
    const body = html.split('<body>')[1];
    assert.ok(body.includes(p.education.institution), `${file}: visible institution`);
    assert.ok(body.includes(p.education.programUrl), `${file}: official degree program link`);
    assert.ok(body.includes('Forward Deployed Engineer'), `${file}: target role`);
    assert.ok(body.includes('EDUCATION · COMPLETED'), `${file}: completed education`);
  }
}
assert.deepEqual(JSON.parse(read('index.html').match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]), schema, 'Inline schema and downloadable schema must match');
for (const file of ['llms.txt', 'llms-full.txt']) {
  const text = read(file);
  for (const value of [p.education.institution, p.education.field, p.education.programUrl, absolute(p.portrait), 'Completed', 'Forward Deployed Engineer']) assert.ok(text.includes(value), `${file}: missing ${value}`);
}
assert.ok(read('robots.txt').includes(`Sitemap: ${absolute('sitemap.xml')}`));
for (const file of ['', 'about.html', 'skills.html', 'projects.html', 'contact.html']) assert.ok(read('sitemap.xml').includes(`<loc>${absolute(file)}</loc>`));
console.log('PASS: education, identity, portrait, schema parity, canonicals, local assets, crawl files, and unique page IDs.');
