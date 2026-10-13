const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {JSDOM} = require('jsdom');
const {PROJECTS_DATA} = require('../projects.js');

function setup() {
  const dom = new JSDOM('<!doctype html><html><body><header><a href="#">Home</a></header><main><div id="projects-unified-grid"></div></main><footer>Footer</footer></body></html>', {runScripts: 'outside-only', url: 'http://localhost:3000/'});
  const w = dom.window, doc = w.document;
  w.TextEncoder = TextEncoder;
  w.TextDecoder = TextDecoder;
  // Reflect inert like a browser; jsdom does not implement this platform property.
  Object.defineProperty(w.HTMLElement.prototype, 'inert', {
    get() { return this.hasAttribute('inert'); },
    set(value) { this.toggleAttribute('inert', Boolean(value)); }
  });
  // jsdom has no layout engine; visibility for keyboard tests is supplied explicitly.
  w.HTMLElement.prototype.getClientRects = function () { return this.closest('[hidden], [inert]') ? [] : [{width: 100, height: 40}]; };
  for (const file of ['project-demos.js', 'projects.js']) w.eval(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'));
  const get = selector => { const el = doc.querySelector(selector); assert.ok(el, `Missing element: ${selector}`); return el; };
  const click = selector => get(selector).click();
  const change = (field, value) => { const el = get(`[data-field="${field}"]`); if (el.type === 'checkbox') el.checked = value; else el.value = value; el.dispatchEvent(new w.Event('change', {bubbles: true})); };
  const result = () => get('[data-demo-result]').textContent;
  const includes = text => assert.ok(result().includes(text), `Missing sample result: ${text}`);
  const open = id => { click(`[data-explore="${id}"]`); click('#pm-tab-sample'); };
  const action = name => click(`[data-action="${name}"]`);
  return {dom, w, doc, get, click, change, result, includes, open, action};
}

test('every project has a functioning distinct interaction, reset, workflow and source link', () => {
  const q = setup();
  try {
    for (const p of PROJECTS_DATA) {
      q.open(p.id);
      assert.equal(q.get('#pm-title').textContent, p.title);
      assert.equal(q.get('#pm-github-btn').href, p.githubUrl);
      assert.ok(q.get('.demo-local-label').textContent.includes('Interactive sample · runs locally'));
      switch (p.demoId) {
        case 'browser-agent': for (let i = 0; i < 4; i++) q.action('advance'); q.includes('Studio Lamp'); q.change('task', 'form'); for (let i = 0; i < 4; i++) q.action('advance'); q.includes('alex@example.test'); break;
        case 'legal': q.change('language', 'Telugu'); q.includes('రాతపూర్వక'); q.change('document', 'delivery'); q.includes('14'); break;
        case 'query': q.action('reveal'); q.includes('SUM(units)'); q.change('question', 'month'); q.action('reveal'); q.includes('January'); q.includes('₹12,00,000'); break;
        case 'native': q.change('action', 'image'); for (let i = 0; i < 4; i++) q.action('advance'); q.includes('Image processed'); break;
        case 'health': q.change('day', '2'); q.includes('5,800'); q.includes('appointment'); break;
        case 'expenses': q.change('name', 'Lunch'); q.change('amount', '180.25'); q.get('[data-expense-form] button').click(); q.includes('₹1,230.25'); q.click('[data-action="remove-expense"][data-id="3"]'); q.includes('₹1,050'); break;
        case 'mcp': q.change('tool', 'analyze'); q.action('reveal'); q.includes('create_customer'); break;
        case 'email': q.change('job', 'ai'); q.change('tone', 'warm'); q.action('reveal'); q.includes('Hello Example Labs team'); q.includes('AI Browser Automation'); break;
        case 'family': q.action('ancestors'); q.click('[data-person="mira"]'); q.includes('Grandmother'); q.action('children'); assert.equal(q.doc.querySelector('[data-person="alex"]'), null); break;
        case 'home': q.change('area', '2000'); q.includes('₹8,70,000'); q.change('steel', '70'); q.includes('₹9,00,000'); break;
        case 'trading': q.change('scenario', 'volatile'); q.includes('blocks'); q.change('guardrails', false); q.includes('candidate action'); assert.ok(!q.result().includes('rule blocks')); break;
        case 'sales': q.change('brand', 'Samsung'); q.change('period', '2025-02'); q.includes('₹5,14,500'); assert.equal(q.doc.querySelectorAll('[data-demo-result] tbody tr').length, 1); break;
        case 'news': q.change('article', 'library'); q.change('length', 'detailed'); q.includes('20 places'); break;
        case 'sonar': q.change('signal', 'mine'); q.action('reveal'); q.includes('Mine'); break;
        case 'cloud': q.change('camera', 'Courtyard'); q.change('time', 'Evening'); q.includes('19:10'); assert.equal(q.doc.querySelectorAll('.demo-recording').length, 1); break;
        case 'surveillance': q.change('scene', 'courtyard'); q.change('overlays', true); assert.ok(q.doc.querySelector('.demo-detection-box')); q.includes('10:05'); q.change('overlays', false); assert.equal(q.doc.querySelector('.demo-detection-box'), null); break;
        case 'emoji': q.change('message', 'తెలుగు 😀 <img src=x onerror=alert(1)>'); q.action('encode'); q.action('decode'); q.includes('తెలుగు 😀 <img src=x onerror=alert(1)>'); assert.equal(q.doc.querySelector('[data-demo-result] img'), null); break;
        default: assert.fail(`Missing acceptance scenario: ${p.demoId}`);
      }
      q.action('reset');
      assert.equal(q.get('.demo-feedback').textContent, 'Sample reset to its starting values.');
      q.click('#pm-tab-workflow');
      q.click('[data-workflow-step="2"]');
      assert.equal(q.get('#pm-step-title').textContent, p.steps[2][0]);
      assert.equal(q.get('#pm-step-description').textContent, p.steps[2][1]);
      q.click('#pm-close-btn');
      assert.equal(q.get('#project-detail-modal').getAttribute('aria-hidden'), 'true');
      assert.equal(q.get('#pm-demo-host').children.length, 0);
    }
  } finally { q.dom.window.close(); }
});

test('invalid sample inputs report inline errors and recover without stale calculations', () => {
  const q = setup();
  try {
    q.open('expenses-tracker-app');
    q.change('name', ''); q.get('[data-expense-form] button').click();
    assert.match(q.get('.demo-feedback').textContent, /expense name/);
    q.change('name', 'Recovery'); q.change('amount', '-10'); q.get('[data-expense-form] button').click();
    assert.match(q.get('.demo-feedback').textContent, /greater than zero/);
    assert.equal(q.get('[data-field="amount"]').getAttribute('aria-invalid'), 'true');
    q.change('amount', '50'); q.get('[data-expense-form] button').click(); q.includes('₹1,100');
    assert.equal(q.get('.demo-feedback').textContent, '');
    q.click('#pm-close-btn'); q.open('homebuildai'); q.change('area', '');
    assert.match(q.get('.demo-feedback').textContent, /Enter area/);
    assert.ok(!q.result().includes('₹4,35,000'));
    q.change('area', '1000'); q.includes('₹4,35,000');
    q.get('[data-field="area"]').value = '2000';
    q.get('[data-field="area"]').dispatchEvent(new q.w.Event('input', {bubbles: true}));
    q.includes('₹8,70,000');
    q.click('#pm-close-btn'); q.open('text-to-emoji-encryption-and-decryption');
    q.change('encoded', 'bad sequence'); q.action('decode');
    assert.match(q.get('.demo-feedback').textContent, /complete pairs/);
    q.change('message', 'Recovered'); q.action('encode'); q.action('decode'); q.includes('Recovered');
  } finally { q.dom.window.close(); }
});

test('each personalized overview starts the chosen scenario with the correct input and view', () => {
  const q = setup();
  try {
    assert.equal(new Set(PROJECTS_DATA.map(p => p.experience.headline)).size, 17);
    for (const p of PROJECTS_DATA) {
      for (const [index, scenario] of p.experience.starts.entries()) {
        q.click(`[data-explore="${p.id}"]`);
        assert.equal(q.get('.project-explorer').dataset.projectKind, p.demoId);
        assert.equal(q.get('.product-introduction-copy h3').textContent, p.experience.headline);
        assert.equal(q.get('.product-introduction-visual').querySelectorAll('.cover-window').length, 1);
        q.click(`[data-project-start="${index}"]`);
        assert.equal(q.get('#pm-tab-sample').getAttribute('aria-selected'), 'true');
        assert.equal(q.get('.project-demo').dataset.demo, p.demoId);
        for (const [key, value] of Object.entries(scenario.fields || {})) {
          const field = q.get(`[data-field="${key}"]`);
          assert.equal(field.type === 'checkbox' ? field.checked : field.value, value, `${p.id} · ${scenario.label} · ${key}`);
        }
        if (scenario.view?.person) assert.equal(q.get(`[data-person="${scenario.view.person}"]`).getAttribute('aria-pressed'), 'true');
        q.click('#pm-close-btn');
      }
    }
  } finally { q.dom.window.close(); }
});

test('switching and reopening projects isolates state and does not duplicate listeners', () => {
  const q = setup();
  try {
    for (let i = 0; i < 5; i++) {
      q.open('expenses-tracker-app');
      q.get('[data-expense-form] button').click();
      assert.equal(q.doc.querySelectorAll('.demo-expense-list li').length, 3);
      q.includes('₹1,230');
      q.click('#pm-next-btn');
      assert.equal(q.get('#pm-title').textContent, 'MCP Code Analysis');
      assert.equal(q.get('#pm-tab-overview').getAttribute('aria-selected'), 'true');
      q.click('#pm-prev-btn'); q.click('#pm-tab-sample');
      assert.equal(q.doc.querySelectorAll('.demo-expense-list li').length, 2);
      q.click('#pm-close-btn');
    }
  } finally { q.dom.window.close(); }
});

test('dialog contains keyboard focus, supports tab navigation and restores the trigger', () => {
  const q = setup();
  try {
    const trigger = q.get('[data-explore="query-ai"]');
    trigger.focus(); trigger.click();
    assert.equal(q.doc.activeElement.id, 'pm-close-btn');
    assert.equal(q.get('main').inert, true);
    q.get('#pm-github-btn').focus();
    q.get('#pm-github-btn').dispatchEvent(new q.w.KeyboardEvent('keydown', {key: 'Tab', bubbles: true, cancelable: true}));
    assert.equal(q.doc.activeElement.id, 'pm-prev-btn');
    q.get('#pm-prev-btn').dispatchEvent(new q.w.KeyboardEvent('keydown', {key: 'Tab', shiftKey: true, bubbles: true, cancelable: true}));
    assert.equal(q.doc.activeElement.id, 'pm-github-btn');
    q.get('#pm-tab-overview').focus();
    q.get('#pm-tab-overview').dispatchEvent(new q.w.KeyboardEvent('keydown', {key: 'ArrowRight', bubbles: true, cancelable: true}));
    assert.equal(q.doc.activeElement.id, 'pm-tab-sample');
    const question = q.get('[data-field="question"]'); question.focus();
    question.dispatchEvent(new q.w.KeyboardEvent('keydown', {key: 'ArrowLeft', bubbles: true, cancelable: true}));
    assert.equal(q.get('#pm-title').textContent, 'QueryAI');
    question.dispatchEvent(new q.w.KeyboardEvent('keydown', {key: 'Escape', bubbles: true, cancelable: true}));
    assert.equal(q.doc.activeElement, trigger);
    assert.equal(q.get('main').inert, false);
  } finally { q.dom.window.close(); }
});

test('clipboard rejection gives truthful recovery instructions', async () => {
  const q = setup();
  try {
    q.w.navigator.clipboard = {writeText: async () => { throw new Error('denied'); }};
    q.open('query-ai'); q.click('#pm-copy-btn');
    await new Promise(resolve => setImmediate(resolve));
    assert.match(q.get('#pm-feedback').textContent, /Could not copy automatically/);
    assert.ok(q.get('#pm-feedback').textContent.includes(PROJECTS_DATA[2].githubUrl));
    q.w.navigator.clipboard = {writeText: async () => {}};
    q.click('#pm-copy-btn'); await new Promise(resolve => setImmediate(resolve));
    assert.equal(q.get('#pm-feedback').textContent, 'Code link copied.');
  } finally { q.dom.window.close(); }
});
