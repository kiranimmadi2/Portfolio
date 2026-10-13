const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const demos = require('../project-demos.js');
const {PROJECTS_DATA, renderProjectCard} = require('../projects.js');

test('expense totals preserve currency precision and group categories', () => {
  const rows = [{amount: 0.1, category: 'Food'}, {amount: 0.2, category: 'Food'}, {amount: 300, category: 'Travel'}];
  assert.deepEqual(demos.expenseSummary(rows, 500), {total: 300.3, remaining: 199.7, categories: [['Food', 0.3], ['Travel', 300]]});
  assert.equal(demos.expenseSummary(rows.slice(0, 2), 500).total, 0.3);
  assert.equal(demos.expenseSummary([{amount: 600, category: 'Home'}], 500).remaining, -100);
  assert.deepEqual(demos.expenseSummary([]), {total: 0, remaining: 5000, categories: []});
});
test('expense inputs reject invalid amounts', () => {
  for (const amount of ['', -1, 0, NaN, Infinity, 1000001]) assert.throws(() => demos.expenseSummary([{amount, category: 'Food'}]));
});
test('material estimate responds to area and individual unit rates', () => {
  const rates = {cement: 420, bricks: 9, steel: 65};
  const estimate = demos.estimateMaterials(1000, rates);
  assert.equal(estimate.total, 435000);
  assert.deepEqual(estimate.materials.map(m => [m.quantity, m.cost]), [[400, 168000], [8000, 72000], [3000, 195000]]);
  assert.equal(demos.estimateMaterials(2000, rates).total, 870000);
  assert.equal(demos.estimateMaterials(1000, {...rates, cement: 500}).total, 467000);
  assert.equal(demos.estimateMaterials(12.5, rates).total, 5437.5);
});
test('estimate rejects empty, nonfinite and nonpositive area or rates', () => {
  const rates = {cement: 420, bricks: 9, steel: 65};
  for (const area of ['', 0, -1, Infinity, NaN, 100001]) assert.throws(() => demos.estimateMaterials(area, rates));
  assert.throws(() => demos.estimateMaterials(1000, {...rates, steel: ''}));
  assert.throws(() => demos.estimateMaterials(1000, {...rates, bricks: -1}));
});
test('sales filters recalculate source rows, revenue and weighted price', () => {
  const all = demos.salesSummary();
  assert.equal(all.units, 118);
  assert.equal(all.revenue, 2649000);
  assert.equal(all.average, 22449.15);
  const filtered = demos.salesSummary(demos.fixtures.sales, 'Samsung', '2025-02');
  assert.equal(filtered.rows.length, 1);
  assert.equal(filtered.units, 21);
  assert.equal(filtered.revenue, 514500);
  assert.equal(filtered.average, 24500);
  assert.equal(demos.salesSummary(demos.fixtures.sales, 'all', '2025-01').revenue, 1200000);
  assert.equal(demos.salesSummary(demos.fixtures.sales, 'missing').units, 0);
});
test('emoji encoding round-trips Unicode, newlines and literal HTML safely', () => {
  for (const message of ['Hello!', 'తెలుగు हिंदी 😀', 'line one\nline two', '<script>alert("sample")</script>', ' café 🌏 ']) {
    const encoded = demos.encodeEmoji(message);
    assert.equal(demos.decodeEmoji(encoded), message);
    assert.equal(demos.decodeEmoji(encoded.replaceAll(' ', '\n')), message);
  }
});
test('emoji decoder rejects malformed sequences and invalid UTF-8', () => {
  for (const input of ['', '😀', '😀x', '😚😚']) assert.throws(() => demos.decodeEmoji(input));
  assert.throws(() => demos.encodeEmoji(' '.repeat(10)));
  assert.throws(() => demos.encodeEmoji('x'.repeat(2001)));
});
test('all 17 projects have unique demos, matching static cards and metadata', () => {
  assert.equal(PROJECTS_DATA.length, 17);
  assert.equal(new Set(PROJECTS_DATA.map(p => p.id)).size, 17);
  assert.deepEqual(new Set(PROJECTS_DATA.map(p => p.demoId)), new Set(demos.demoIds));
  const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
  const schema = JSON.parse(fs.readFileSync(path.join(__dirname, '../schema.json'), 'utf8'));
  const entries = schema['@graph'].find(e => e['@type'] === 'ItemList').itemListElement;
  PROJECTS_DATA.forEach((p, i) => {
    assert.equal(p.steps.length, 4);
    assert.ok(p.problem && p.audience && p.input && p.output && p.result);
    assert.ok(html.includes(renderProjectCard(p)), `Static fallback differs for ${p.id}`);
    assert.equal(entries[i].name, p.title);
    assert.equal(entries[i].codeRepository, p.githubUrl);
  });
  assert.ok(html.indexOf('project-demos.js?v=3') < html.indexOf('projects.js?v=3'));
  assert.doesNotMatch(html, /99\.2%|98\.4%|0\.8ms|Zero Injection Risk|\+18\.4% Alpha|\+34\.2% YoY/);
});
