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
assert.equal(schema['@graph'].filter(item => item['@type'] === 'WebSite').length, 1);
assert.equal(byType('WebSite').name, p.name);
assert.ok(byType('WebSite').alternateName.includes(`${p.name} Portfolio`));
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
const icon = fs.readFileSync(path.join(root, p.favicon));
assert.equal(digest(p.favicon), digest(p.faviconSource), 'Use the existing visible KI logo');
assert.equal(icon.readUInt32BE(16), icon.readUInt32BE(20), 'Favicon must be square');
assert.ok(icon.readUInt32BE(16) > 48, 'Use a high resolution favicon');
const ico = fs.readFileSync(path.join(root, 'favicon.ico'));
assert.equal(ico.readUInt16LE(2), 1);
assert.equal(ico.readUInt16LE(4), 1);
assert.deepEqual(ico.subarray(ico.readUInt32LE(18)), icon, 'ICO fallback must show the same logo');
const descriptions = new Set();
const pages = new Map(['index.html', 'about.html', 'skills.html', 'projects.html', 'contact.html'].map(file => [file === 'index.html' ? '/' : '/' + file.replace(/\.html$/, ''), read(file)]));
const pageLinks = new Map();
for (const file of ['index.html', 'about.html', 'skills.html', 'projects.html', 'contact.html']) {
  const html = read(file), canonical = absolute(file === 'index.html' ? '' : file);
  assert.equal((html.match(/<title>/g) || []).length, 1, `${file}: one title`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${file}: one canonical`);
  const description = html.match(/<meta name="description" content="([^"]+)"/)[1];
  assert.ok(!descriptions.has(description), `${file}: distinct page description`);
  descriptions.add(description);
  const styles = [...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)].map(m => m[1]);
  assert.equal(styles.length, new Set(styles).size, `${file}: no duplicate stylesheet links`);
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${file}: canonical URL`);
  assert.ok(html.includes(`property="og:image" content="${absolute(p.portrait)}"`), `${file}: selected social image`);
  assert.equal((html.match(/rel="icon"/g) || []).length, 1, `${file}: one stable favicon`);
  assert.ok(html.includes(`rel="icon" type="image/png" sizes="180x180" href="/${p.favicon}"`), `${file}: crawlable KI favicon`);
  assert.ok(html.includes(`property="og:site_name" content="${p.name}"`), `${file}: consistent site name`);
  assert.ok(!/github\.io\/Portfolio|Senior Software Engineer|Enterprise AI Architect|Lead Flutter Developer|B\.Tech student|Diploma in Information/i.test(html), `${file}: stale identity content`);
  const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${file}: unique IDs`);
  for (const match of html.matchAll(/<(?:script|link|img)\b[^>]*\b(?:src|href)="([^"]+)"/g)) {
    const asset = match[1].split(/[?#]/)[0];
    if (!/^(?:https?:|data:|#)/.test(asset)) assert.ok(fs.existsSync(path.join(root, asset.replace(/^\//, ''))), `${file}: missing ${asset}`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  if (file === 'index.html') {
    // The only body change allowed is making the existing name a real About link.
    const body = html.slice(html.indexOf('<body>')).replace(/\r\n/g, '\n').replace('<a href="/about" aria-label="About Kiran Immadi and his education">I\'m Kiran.</a>', "I'm Kiran.");
    assert.equal(crypto.createHash('sha256').update(body).digest('hex'), p.homeBodySha256, 'The original home design and visible text must remain intact');
    assert.ok(html.includes(`name="google-site-verification" content="${p.googleSiteVerification}"`));
  }
  if (file === 'about.html') {
    const body = html.split(/<body\b[^>]*>/)[1];
    assert.ok(body.includes(p.education.institution), `${file}: visible institution`);
    assert.ok(body.includes(p.education.programUrl), `${file}: official degree program link`);
    assert.ok(body.includes('B.Tech graduate'), `${file}: completed education`);
    assert.ok(body.includes(`src="${p.portrait}"`), `${file}: visible photo agrees with structured data`);
    assert.ok(!body.includes('src="profile.jpg"'), `${file}: old photo is no longer referenced`);
    assert.ok(body.includes('— Completed'), `${file}: qualification status`);
  }
  const pathname = new URL(canonical).pathname;
  const targets = [];
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const target = new URL(href.replace(/&amp;/g, '&'), canonical);
    if (target.origin !== new URL(p.siteUrl).origin) continue;
    assert.ok(pages.has(target.pathname), `${file}: missing internal page ${target.pathname}`);
    if (target.hash) assert.ok(pages.get(target.pathname).includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${file}: missing anchor ${target.hash}`);
    targets.push(target.pathname);
  }
  pageLinks.set(pathname, targets);
}
const reachable = new Set(['/']);
for (const pathname of reachable) for (const next of pageLinks.get(pathname) || []) reachable.add(next);
assert.equal(reachable.size, pages.size, 'Every sitemap page must be reachable by HTML links from the home page');
assert.deepEqual(JSON.parse(read('index.html').match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]), schema, 'Inline schema and downloadable schema must match');
for (const file of ['llms.txt', 'llms-full.txt']) {
  const text = read(file);
  for (const value of [p.education.institution, p.education.field, p.education.programUrl, absolute(p.portrait), 'Completed', 'Forward Deployed Engineer']) assert.ok(text.includes(value), `${file}: missing ${value}`);
}
assert.ok(read('robots.txt').includes(`Sitemap: ${absolute('sitemap.xml')}`));
for (const file of ['', 'about.html', 'skills.html', 'projects.html', 'contact.html']) assert.ok(read('sitemap.xml').includes(`<loc>${absolute(file)}</loc>`));
console.log('PASS: original home appearance preserved; every page reachable; metadata, visible photo, schema, canonical links, crawl files, and assets agree.');
