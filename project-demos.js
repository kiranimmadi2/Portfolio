/* Local portfolio samples: fixed fixtures and browser calculations, with no network calls. */
(function (root) {
  'use strict';
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  const money = n => new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 2}).format(n);
  const number = n => new Intl.NumberFormat('en-IN', {maximumFractionDigits: 2}).format(n);
  const round = n => Math.round((n + Number.EPSILON) * 100) / 100;
  function positive(value, label, max = 1000000) {
    if (String(value).trim() === '') throw new Error(`Enter ${label.toLowerCase()}.`);
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0 || n > max) throw new Error(`${label} must be greater than zero and no more than ${number(max)}.`);
    return n;
  }
  function expenseSummary(rows, budget = 5000) {
    const categories = {};
    let totalPaise = 0;
    for (const row of rows) {
      const amount = positive(row.amount, 'Expense amount');
      const paise = Math.round(amount * 100);
      totalPaise += paise;
      categories[row.category] = (categories[row.category] || 0) + paise;
    }
    return {total: totalPaise / 100, remaining: round(budget - totalPaise / 100), categories: Object.entries(categories).map(([label, value]) => [label, value / 100])};
  }
  function estimateMaterials(area, rates) {
    area = positive(area, 'Area', 100000);
    const materials = [['Cement', 'bags', 0.4, rates.cement], ['Bricks', 'bricks', 8, rates.bricks], ['Steel', 'kg', 3, rates.steel]].map(([label, unit, coefficient, rate]) => {
      rate = positive(rate, `${label} rate`, 100000);
      const quantity = round(area * coefficient);
      return {label, unit, coefficient, quantity, rate, cost: round(quantity * rate)};
    });
    return {materials, total: round(materials.reduce((sum, item) => sum + item.cost, 0))};
  }
  const SALES = [
    {brand: 'Samsung', period: '2025-01', units: 18, price: 24000},
    {brand: 'Vivo', period: '2025-01', units: 24, price: 16000},
    {brand: 'Pixel', period: '2025-01', units: 12, price: 32000},
    {brand: 'Samsung', period: '2025-02', units: 21, price: 24500},
    {brand: 'Vivo', period: '2025-02', units: 28, price: 16500},
    {brand: 'Pixel', period: '2025-02', units: 15, price: 31500}
  ];
  function salesSummary(rows = SALES, brand = 'all', period = 'all') {
    const filtered = rows.filter(row => (brand === 'all' || row.brand === brand) && (period === 'all' || row.period === period));
    const units = filtered.reduce((sum, row) => sum + row.units, 0);
    const revenue = filtered.reduce((sum, row) => sum + row.units * row.price, 0);
    const brands = {};
    filtered.forEach(row => { brands[row.brand] = (brands[row.brand] || 0) + row.units; });
    return {rows: filtered, units, revenue, average: units ? round(revenue / units) : 0, brands: Object.entries(brands)};
  }
  const EMOJI = Array.from('😀😁😂😃😄😅😆😉😊😋😎😍😘😗😙😚');
  function encodeEmoji(text) {
    if (!String(text).trim()) throw new Error('Enter a message to encode.');
    if (text.length > 2000) throw new Error('Keep the message within 2,000 characters.');
    return Array.from(new TextEncoder().encode(text), byte => EMOJI[byte >> 4] + EMOJI[byte & 15]).join(' ');
  }
  function decodeEmoji(text) {
    if (!String(text).trim()) throw new Error('Enter an emoji sequence to decode.');
    if (text.length > 50000) throw new Error('This sequence is too long. Use a message within 2,000 characters.');
    const symbols = Array.from(text.replace(/\s/g, ''));
    if (symbols.length % 2 || symbols.some(symbol => !EMOJI.includes(symbol))) throw new Error('Use complete pairs from this sample’s emoji alphabet. Try encoding a message first.');
    const bytes = [];
    for (let i = 0; i < symbols.length; i += 2) bytes.push(EMOJI.indexOf(symbols[i]) * 16 + EMOJI.indexOf(symbols[i + 1]));
    try { return new TextDecoder('utf-8', {fatal: true}).decode(Uint8Array.from(bytes)); }
    catch { throw new Error('These emoji pairs do not form valid text. Encode a message and try again.'); }
  }

  const BROWSER_TASKS = {
    products: {name: 'Collect prices from a sample shop', task: 'Find the names and prices of the two desk lamps on the sample shop page.', steps: [['Understand the task', 'Collect the product name and price from each lamp listing.'], ['Open the sample page', 'Navigate to an illustrative shop listing containing two desk lamps.'], ['Read the listings', 'Inspect the two product cards and identify their name and price fields.'], ['Return the requested data', 'Present the collected fields in a small table.']], rows: [['Studio Lamp', '₹1,200'], ['Reading Lamp', '₹850']]},
    form: {name: 'Fill a sample contact form', task: 'Enter Alex’s sample contact details and prepare the form for review.', steps: [['Understand the task', 'Prepare a form using the fictional contact details.'], ['Find the form', 'Locate the Name, Email, and Message fields on the sample page.'], ['Fill the fields', 'Enter Alex, alex@example.test, and “Please share the product brochure.”'], ['Review the form', 'Show the filled fields for review. Nothing is submitted.']], rows: [['Name', 'Alex'], ['Email', 'alex@example.test'], ['Message', 'Please share the product brochure.']]}
  };
  const LEGAL = {
    notice: {title: 'Fictional service agreement', excerpt: 'Either party may terminate this agreement by providing written notice not fewer than thirty days prior to the intended termination date.', translations: {English: 'Either side can end this agreement, but must give the other side written notice at least 30 days beforehand.', Hindi: 'कोई भी पक्ष यह समझौता समाप्त कर सकता है, लेकिन उसे कम से कम 30 दिन पहले दूसरे पक्ष को लिखित सूचना देनी होगी।', Telugu: 'ఏ పక్షమైనా ఈ ఒప్పందాన్ని ముగించవచ్చు. అయితే కనీసం 30 రోజుల ముందుగా మరో పక్షానికి రాతపూర్వక నోటీసు ఇవ్వాలి.'}},
    delivery: {title: 'Fictional delivery clause', excerpt: 'The supplier shall deliver the agreed materials within fourteen calendar days following receipt of the purchase order.', translations: {English: 'The supplier must deliver the agreed materials within 14 days after receiving the purchase order.', Hindi: 'खरीद आदेश मिलने के 14 दिनों के भीतर आपूर्तिकर्ता को तय सामग्री पहुँचानी होगी।', Telugu: 'కొనుగోలు ఆర్డర్ అందుకున్న 14 రోజులలోపు సరఫరాదారు అంగీకరించిన సామగ్రిని అందించాలి.'}}
  };
  const HEALTH = [
    {date: 'Day 1', steps: 4200, sleep: 6.5, pulse: 74, event: 'Sample patient profile created.'},
    {date: 'Day 2', steps: 6100, sleep: 7, pulse: 72, event: 'Fictional lab report added to the patient timeline.'},
    {date: 'Day 3', steps: 5800, sleep: 7.5, pulse: 73, event: 'Sample appointment scheduled in the patient portal.'}
  ];
  const MCP = {
    scan: {request: {operation: 'scan_project', project: '/sample/app'}, response: {files: ['app.py', 'models.py', 'tests/test_app.py'], language: 'Python'}},
    analyze: {request: {operation: 'analyze_python_file', file: 'models.py'}, response: {classes: ['Customer'], functions: ['create_customer', 'get_customer'], imports: ['dataclasses']}},
    search: {request: {operation: 'search_code', pattern: 'TODO'}, response: {matches: [{file: 'app.py', line: 18, text: '# TODO: validate sample input'}]}}
  };
  const JOBS = {
    flutter: {role: 'Flutter Developer', company: 'Sample Studio', skills: 'Flutter, Dart, Firebase', projects: ['Expenses Tracker', 'Family Tree'], links: ['https://github.com/kiranimmadi2/expenses-tracker_app', 'https://github.com/kiranimmadi2/family-tree']},
    ai: {role: 'AI Application Developer', company: 'Example Labs', skills: 'Python, LangChain, LLM integration', projects: ['AI Browser Automation', 'GenAI Email Writer'], links: ['https://github.com/kiranimmadi2/AI-Agent-Browser-Automation', 'https://github.com/kiranimmadi2/GenAi-Email-Writter']}
  };
  const PEOPLE = {
    mira: ['Mira', 'Grandmother of Alex and Jamie. Parent of Priya.'],
    dev: ['Dev', 'Grandfather of Alex and Jamie. Parent of Priya.'],
    priya: ['Priya', 'Child of Mira and Dev. Parent of Alex and Jamie.'],
    sam: ['Sam', 'Partner of Priya. Parent of Alex and Jamie.'],
    alex: ['Alex', 'Child of Priya and Sam. Sibling of Jamie.'],
    jamie: ['Jamie', 'Child of Priya and Sam. Sibling of Alex.']
  };
  const NEWS = {
    transit: {title: 'Fictional town launches a bus pilot', text: 'Maple Town has introduced a six-week electric bus pilot on two routes. The trial includes four buses and a temporary charging station near the depot. Riders can use the existing ticket system. The town will collect passenger feedback and compare operating costs before deciding whether to expand the service. No expansion decision has been made yet.', brief: ['Maple Town is testing four electric buses on two routes.', 'Feedback and operating costs will inform a later decision.'], detailed: ['A six-week pilot is running on two routes.', 'Four buses use a temporary depot charging station.', 'Existing tickets remain valid during the pilot.', 'The town will review costs and feedback before considering expansion.']},
    library: {title: 'Fictional library adds evening workshops', text: 'The Brookfield Library is introducing free evening workshops in basic coding and digital photography. The sessions will run each Thursday for one month, with 20 places available per session. Local volunteers will lead the workshops. Registration opens next week. The library will ask attendees for feedback before scheduling another series.', brief: ['Brookfield Library is piloting free evening workshops.', 'Registration and feedback will shape future sessions.'], detailed: ['Coding and photography workshops run on Thursdays for one month.', 'Each session has 20 places and volunteer instructors.', 'Registration opens next week.', 'Attendee feedback will inform any future series.']}
  };
  const SONAR = {
    rock: {label: 'Rock', values: [0.12, 0.26, 0.18, 0.43, 0.31, 0.22, 0.39, 0.17], explanation: 'This illustrative sample is assigned the Rock label. A real classifier would use the complete feature vector and a trained model.'},
    mine: {label: 'Mine', values: [0.23, 0.48, 0.67, 0.82, 0.72, 0.59, 0.46, 0.33], explanation: 'This illustrative sample is assigned the Mine label. These drawn values are not a field measurement or an inference result.'}
  };
  const RECORDINGS = [
    {id: 'r1', camera: 'Entrance', time: 'Morning', timestamp: '09:15', duration: '00:32', event: 'Door opened', path: 'sample/entrance/09-15.mp4'},
    {id: 'r2', camera: 'Entrance', time: 'Evening', timestamp: '18:40', duration: '00:21', event: 'Delivery arrived', path: 'sample/entrance/18-40.mp4'},
    {id: 'r3', camera: 'Courtyard', time: 'Morning', timestamp: '10:05', duration: '00:45', event: 'Activity in courtyard', path: 'sample/courtyard/10-05.mp4'},
    {id: 'r4', camera: 'Courtyard', time: 'Evening', timestamp: '19:10', duration: '00:18', event: 'Lights switched on', path: 'sample/courtyard/19-10.mp4'}
  ];
  const META = {
    'browser-agent': ['Follow a browser task', 'Choose a task and advance one action at a time. The pages and results are prepared examples.'],
    legal: ['Make a clause easier to read', 'Compare a fictional excerpt with a prepared translation. No document upload or AI request occurs.'],
    query: ['Ask the sample dataset', 'Choose a prepared business question, then inspect its SQL and calculated answer.'],
    native: ['Follow the native-code journey', 'Trigger the example and follow each handoff. This walkthrough does not call native code.'],
    health: ['Explore a patient timeline', 'Switch between fictional days to see recorded values and events. This is not a diagnostic tool.'],
    expenses: ['Watch small purchases add up', 'Add and remove sample expenses against a ₹5,000 budget. All calculations happen in your browser.'],
    mcp: ['Inspect a tool request', 'Select an operation and reveal its prepared response. No files or MCP services are accessed.'],
    email: ['From job listing to outreach', 'Choose a fictional job and tone to inspect matched work and a prepared draft. No email is sent.'],
    family: ['Find the family connection', 'Expand the branches and select a person to read their relationship. All people are fictional.'],
    home: ['Explore material assumptions', 'Adjust area and sample unit rates. This educational calculator is separate from the rule-based design project.'],
    trading: ['Replay a sample market scenario', 'Fictitious historical-style scenarios illustrate indicators and risk rules. No live prices or trades.'],
    sales: ['Explore sample sales', 'Filter a fictional monthly dataset and see the calculations and chart change together.'],
    news: ['Turn an article into a briefing', 'Choose a fictional article and summary length. Summaries are prepared examples, not generated news.'],
    sonar: ['Look inside a classification example', 'Select a drawn signal and reveal its assigned label. No model inference or measured accuracy.'],
    cloud: ['Find the right recording', 'Filter fictional recordings and inspect their details and storage path. No video or cloud connection.'],
    surveillance: ['Connect a view to an event', 'Switch drawn camera scenes and toggle fixed overlays. No live detection or recognition.'],
    emoji: ['Give your message an emoji form', 'Encode and decode text with a reversible UTF-8 mapping. This is encoding, not secure encryption.']
  };
  const select = (name, label, options, value) => `<div class="demo-field"><label for="demo-${name}">${escape(label)}</label><select id="demo-${name}" data-field="${name}" aria-describedby="demo-feedback">${options.map(([v, text]) => `<option value="${escape(v)}" ${String(v) === String(value) ? 'selected' : ''}>${escape(text)}</option>`).join('')}</select></div>`;
  const input = (name, label, value, type = 'text', extra = '') => `<div class="demo-field"><label for="demo-${name}">${escape(label)}</label><input id="demo-${name}" data-field="${name}" type="${type}" value="${escape(value)}" aria-describedby="demo-feedback" ${extra}></div>`;
  const button = (action, text, extra = '') => `<button type="button" class="demo-button" data-action="${action}" ${extra}>${escape(text)}</button>`;
  const box = (title, content, extra = '') => `<section class="demo-box ${extra}"><h4>${escape(title)}</h4>${content}</section>`;
  const paragraph = text => `<p>${escape(text)}</p>`;
  const pre = text => `<pre>${escape(typeof text === 'object' ? JSON.stringify(text, null, 2) : text)}</pre>`;
  const metric = (label, value) => `<div class="demo-metric"><span>${escape(label)}</span><strong>${escape(value)}</strong></div>`;
  const workspaceHeader = (title, detail) => `<div class="workspace-title"><strong>${escape(title)}</strong><span>${escape(detail)}</span></div>`;
  const emptyWorkspace = (symbol, title, detail, stages) => `<div class="workspace-empty"><span aria-hidden="true">${escape(symbol)}</span><h4>${escape(title)}</h4><p>${escape(detail)}</p><div>${stages.map((stage, i) => `<span><b>${i + 1}</b>${escape(stage)}</span>`).join('')}</div></div>`;
  function sparkline(values, caption) {
    const min = Math.min(...values), max = Math.max(...values), range = max - min || 1;
    const points = values.map((v, i) => `${20 + i * 400 / (values.length - 1)},${110 - (v - min) * 85 / range}`).join(' ');
    return `<figure class="workspace-signal"><figcaption>${escape(caption)}</figcaption><svg viewBox="0 0 440 140" role="img" aria-label="${escape(caption)}"><path d="M20 30H420M20 70H420M20 110H420" class="signal-grid"/><polyline points="${points}" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>${values.map((v, i) => `<circle cx="${20 + i * 400 / (values.length - 1)}" cy="${110 - (v - min) * 85 / range}" r="4" fill="currentColor"/>`).join('')}</svg><div class="signal-values">${values.map(v => `<span>${escape(number(v))}</span>`).join('')}</div></figure>`;
  }
  const WORKSPACE_GUIDES = {
    'browser-agent': ['Mission control', ['Choose a browser task', 'Advance one action at a time', 'Inspect the prepared output']],
    legal: ['Reading preferences', ['Choose a fictional clause', 'Pick your explanation language', 'Compare wording with meaning']],
    query: ['Your data question', ['Choose a business question', 'Reveal the prepared SQL', 'Compare the chart and source rows']],
    native: ['Action launcher', ['Choose an example action', 'Follow each handoff', 'See the result return to Flutter']],
    health: ['Patient timeline', ['Choose a sample day', 'Explore the recorded values', 'Read its care-team event']],
    expenses: ['Record a purchase', ['Name the purchase', 'Set its amount and category', 'Watch the budget update']],
    mcp: ['Tool explorer', ['Select a code operation', 'Inspect the request arguments', 'Reveal the structured response']],
    email: ['Draft preferences', ['Choose a fictional job', 'Pick the email tone', 'Review the matches and draft']],
    family: ['Tree navigation', ['Expand a generation', 'Select a person', 'Read their relationship']],
    home: ['Planning assumptions', ['Choose the sample area', 'Adjust the unit rates', 'Inspect the calculated breakdown']],
    trading: ['Replay controls', ['Choose a fictitious scenario', 'Compare its market indicators', 'Toggle the example risk policy']],
    sales: ['Dashboard filters', ['Pick a brand or period', 'Compare the calculated totals', 'Inspect the source rows']],
    news: ['Reading desk', ['Choose a fictional article', 'Pick the briefing length', 'Compare source and summary']],
    sonar: ['Signal selection', ['Choose a drawn signal', 'Inspect its illustrative values', 'Reveal its assigned category']],
    cloud: ['Recording filters', ['Choose a camera and time', 'Select a sample recording', 'Inspect the event and storage key']],
    surveillance: ['Monitor controls', ['Choose a drawn camera scene', 'Turn the fixed overlay on or off', 'Read the associated sample event']],
    emoji: ['Message studio', ['Write a short message', 'Encode it as emoji pairs', 'Decode the sequence back to text']]
  };
  function table(headers, rows, caption = 'Sample results') {
    return `<div class="demo-table-wrap"><table><caption>${escape(caption)}</caption><thead><tr>${headers.map(h => `<th scope="col">${escape(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(value => `<td>${escape(value)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  function bars(rows, caption = 'Sample values', formatter = number) {
    const max = Math.max(1, ...rows.map(row => row[1]));
    return `<figure class="demo-chart"><figcaption>${escape(caption)}</figcaption>${rows.map(([label, value]) => `<div class="demo-bar-row"><span>${escape(label)}</span><div class="demo-bar-track"><i style="width:${Math.max(0, Math.min(100, value / max * 100))}%"></i></div><strong>${escape(formatter(value))}</strong></div>`).join('')}</figure>`;
  }
  function initial(id) {
    const fields = {
      'browser-agent': {task: 'products'}, legal: {document: 'notice', language: 'English'}, query: {question: 'brand'}, native: {action: 'checksum'},
      health: {day: '0'}, expenses: {name: 'Lunch', amount: '180', category: 'Food'}, mcp: {tool: 'scan'}, email: {job: 'flutter', tone: 'concise'},
      family: {}, home: {area: '1000', cement: '420', bricks: '9', steel: '65'}, trading: {scenario: 'positive', guardrails: true},
      sales: {brand: 'all', period: 'all'}, news: {article: 'transit', length: 'brief'}, sonar: {signal: 'rock'}, cloud: {camera: 'all', time: 'all'},
      surveillance: {scene: 'entrance', overlays: false}, emoji: {message: 'Hello, world!', encoded: ''}
    };
    return {fields: {...fields[id]}, step: -1, revealed: false, person: 'priya', ancestors: false, children: true, recording: 'r1', expenses: [{id: 1, name: 'Groceries', amount: 750, category: 'Food'}, {id: 2, name: 'Bus pass', amount: 300, category: 'Travel'}], nextExpenseId: 3, encoded: '', decoded: ''};
  }
  function controls(id, state) {
    const f = state.fields;
    switch (id) {
      case 'browser-agent': return select('task', 'Sample task', Object.entries(BROWSER_TASKS).map(([k, v]) => [k, v.name]), f.task) + button('advance', 'Start walkthrough');
      case 'legal': return select('document', 'Fictional document', Object.entries(LEGAL).map(([k, v]) => [k, v.title]), f.document) + select('language', 'Explanation language', ['English', 'Hindi', 'Telugu'].map(x => [x, x]), f.language);
      case 'query': return select('question', 'Business question', [['brand', 'How many phones were sold by each brand?'], ['month', 'What was the revenue in each month?']], f.question) + button('reveal', 'Show sample answer');
      case 'native': return select('action', 'Sample action', [['checksum', 'Calculate a checksum'], ['image', 'Process an image']], f.action) + button('advance', 'Trigger sample action');
      case 'health': return select('day', 'Sample day', HEALTH.map((v, i) => [String(i), v.date]), f.day);
      case 'expenses': return `<form class="demo-expense-form" data-expense-form novalidate>${input('name', 'Expense name', f.name, 'text', 'maxlength="60"')}${input('amount', 'Amount (₹)', f.amount, 'number', 'min="0.01" max="1000000" step="0.01"')}${select('category', 'Category', ['Food', 'Travel', 'Home', 'Other'].map(x => [x, x]), f.category)}<button class="demo-button" type="submit">Add expense</button></form>`;
      case 'mcp': return select('tool', 'Sample operation', [['scan', 'Scan project structure'], ['analyze', 'Analyze a Python file'], ['search', 'Search a code pattern']], f.tool) + button('reveal', 'Inspect sample response');
      case 'email': return select('job', 'Fictional job listing', Object.entries(JOBS).map(([k, v]) => [k, `${v.role} · ${v.company}`]), f.job) + select('tone', 'Email tone', [['concise', 'Concise'], ['warm', 'Warm']], f.tone) + button('reveal', 'Show prepared draft');
      case 'family': return button('ancestors', `${state.ancestors ? 'Hide' : 'Show'} grandparents`, `aria-expanded="${state.ancestors}"`) + button('children', `${state.children ? 'Hide' : 'Show'} children`, `aria-expanded="${state.children}"`);
      case 'home': return input('area', 'Floor area (sq ft)', f.area, 'number', 'min="1" max="100000" step="1"') + input('cement', 'Cement / bag (₹)', f.cement, 'number', 'min="0.01" max="100000" step="0.01"') + input('bricks', 'Brick / piece (₹)', f.bricks, 'number', 'min="0.01" max="100000" step="0.01"') + input('steel', 'Steel / kg (₹)', f.steel, 'number', 'min="0.01" max="100000" step="0.01"');
      case 'trading': return select('scenario', 'Fictitious replay scenario', [['positive', 'Positive news, moderate movement'], ['volatile', 'Positive news, high volatility'], ['negative', 'Negative news, falling price']], f.scenario) + `<label class="demo-check"><input type="checkbox" data-field="guardrails" ${f.guardrails ? 'checked' : ''}>Apply example risk rules</label>`;
      case 'sales': return select('brand', 'Brand', [['all', 'All brands'], ...['Samsung', 'Vivo', 'Pixel'].map(x => [x, x])], f.brand) + select('period', 'Period', [['all', 'Both months'], ['2025-01', 'January 2025'], ['2025-02', 'February 2025']], f.period);
      case 'news': return select('article', 'Fictional article', Object.entries(NEWS).map(([k, v]) => [k, v.title]), f.article) + select('length', 'Summary length', [['brief', 'Brief · 2 points'], ['detailed', 'Detailed · 4 points']], f.length);
      case 'sonar': return select('signal', 'Illustrative signal', [['rock', 'Sample A'], ['mine', 'Sample B']], f.signal) + button('reveal', 'Reveal assigned label');
      case 'cloud': return select('camera', 'Camera', [['all', 'All cameras'], ['Entrance', 'Entrance'], ['Courtyard', 'Courtyard']], f.camera) + select('time', 'Recording time', [['all', 'Any time'], ['Morning', 'Morning'], ['Evening', 'Evening']], f.time);
      case 'surveillance': return select('scene', 'Drawn camera view', [['entrance', 'Entrance'], ['courtyard', 'Courtyard']], f.scene) + `<label class="demo-check"><input type="checkbox" data-field="overlays" ${f.overlays ? 'checked' : ''}>Show sample detection overlays</label>`;
      case 'emoji': return `<div class="demo-field demo-field-wide"><label for="demo-message">Your message</label><textarea id="demo-message" data-field="message" aria-describedby="demo-feedback" maxlength="2000" rows="2">${escape(f.message)}</textarea></div>${button('encode', 'Encode message')}<div class="demo-field demo-field-wide"><label for="demo-encoded">Emoji sequence</label><textarea id="demo-encoded" data-field="encoded" aria-describedby="demo-feedback" maxlength="50000" rows="3" placeholder="Encode a message or paste this sample’s emoji pairs"></textarea></div>${button('decode', 'Decode sequence')}`;
      default: return '';
    }
  }
  function results(id, s) {
    const f = s.fields;
    switch (id) {
      case 'browser-agent': {
        const task = BROWSER_TASKS[f.task], index = Math.max(0, s.step);
        const page = s.step < 1 ? emptyWorkspace('↗', 'The browser is ready', 'Start the walkthrough to follow the task through a sample page.', ['Understand', 'Navigate', 'Collect']) : f.task === 'products' ? `<div class="browser-product-grid">${task.rows.map(([name, price], i) => `<div class="browser-product"><div class="browser-lamp lamp-${i}" aria-hidden="true"><i></i><b></b></div><strong>${escape(name)}</strong><span>${s.step >= 2 ? escape(price) : 'Reading the listing…'}</span></div>`).join('')}</div>` : `<div class="browser-form-preview"><span>Sample contact form</span>${task.rows.map(([name, value]) => `<div><small>${escape(name)}</small><p>${s.step >= 2 ? escape(value) : 'Waiting for the fill action…'}</p></div>`).join('')}</div>`;
        return `<div class="browser-mission">${box('The task', paragraph(task.task))}<div class="browser-window"><div class="browser-toolbar"><span aria-hidden="true">● ● ●</span><span>sample.shop/${f.task === 'products' ? 'lamps' : 'contact'}</span><small>Illustration</small></div>${page}</div><div class="browser-progress"><span>Action ${Math.max(0, s.step + 1)} of 4</span><strong>${s.step < 0 ? 'Ready to begin' : escape(task.steps[index][0])}</strong></div><ol class="demo-action-list">${task.steps.map(([name, text], i) => `<li class="${s.step >= i ? 'is-complete' : ''}"><span>${s.step > i ? '✓' : i + 1}</span><div><strong>${escape(name)}</strong>${s.step === i ? paragraph(text) : ''}</div></li>`).join('')}</ol>${s.step === 3 ? table(['Field', 'Sample value'], task.rows, 'Prepared task output') : ''}</div>`;
      }
      case 'legal': {
        const doc = LEGAL[f.document], lang = {English: 'en', Hindi: 'hi', Telugu: 'te'}[f.language];
        const notice = f.document === 'notice';
        const excerpt = escape(doc.excerpt).replace(notice ? 'thirty days' : 'fourteen calendar days', `<mark>${notice ? 'thirty days' : 'fourteen calendar days'}</mark>`);
        return `<div class="legal-reading-desk"><section class="legal-source demo-paper"><div class="paper-label"><span>FICTIONAL DOCUMENT</span><span>01 / 01</span></div><h4>${escape(doc.title)}</h4><span class="paper-section">${notice ? 'Clause 01 · Ending the agreement' : 'Clause 02 · Delivery deadline'}</span><blockquote>${excerpt}</blockquote><div class="paper-rule"></div><p class="paper-footnote">Read the original wording alongside the explanation.</p></section><section class="legal-meaning"><span class="workspace-kicker">PLAIN-LANGUAGE EXPLANATION</span><h4>What this clause means</h4><span class="language-badge">${escape(f.language)}</span><p lang="${lang}" class="legal-translation">${escape(doc.translations[f.language])}</p><div class="legal-facts"><div><span>${notice ? 'Notice period' : 'Delivery deadline'}</span><strong>${notice ? '30 days' : '14 days'}</strong></div><div><span>${notice ? 'How to notify' : 'Count starts at'}</span><strong>${notice ? 'In writing' : 'Order received'}</strong></div></div><p class="paper-footnote">Prepared example for a fictional clause · no legal advice.</p></section></div>`;
      }
      case 'query': {
        if (!s.revealed) return workspaceHeader('QueryAI · sample_sales', 'Question workspace') + emptyWorkspace('SQL', 'What would you like to find out?', 'Choose a question and show its sample answer. No query is sent to a database.', ['Your question', 'Prepared SQL', 'Calculated answer']);
        const rows = f.question === 'brand' ? salesSummary().brands : ['2025-01', '2025-02'].map(p => [p === '2025-01' ? 'January' : 'February', salesSummary(SALES, 'all', p).revenue]);
        const sql = f.question === 'brand' ? 'SELECT brand, SUM(units) AS units\nFROM sample_sales\nGROUP BY brand;' : 'SELECT period, SUM(units * price) AS revenue\nFROM sample_sales\nGROUP BY period;';
        return workspaceHeader('QueryAI · sample_sales', '6 fictional source rows') + `<div class="query-question"><span>You asked</span><p>${f.question === 'brand' ? 'How many phones were sold by each brand?' : 'What was the revenue in each month?'}</p></div><div class="query-answer-grid">${box('Prepared SQL', pre(sql), 'query-sql')}${bars(rows, 'The answer, at a glance', f.question === 'brand' ? number : money)}</div>` + table([f.question === 'brand' ? 'Brand' : 'Month', f.question === 'brand' ? 'Units' : 'Revenue'], rows.map(([k, v]) => [k, f.question === 'brand' ? number(v) : money(v)]), 'Calculated answer from fictional data');
      }
      case 'native': {
        const steps = [['Flutter', 'A tap in the interface starts the requested action.'], ['Dart FFI', 'Dart passes arguments across the foreign-function boundary.'], ['Native C++', 'The native function performs processing. This portfolio illustration runs no C++ code.'], ['Result', f.action === 'checksum' ? 'A prepared checksum value (0x3A7F) returns to the interface.' : 'A prepared “Image processed” result returns to the interface.']];
        return workspaceHeader('SingleTap · native handoff', 'Concept walkthrough') + `<div class="native-layers">${steps.map(([name], i) => `<div class="native-layer ${i === s.step ? 'is-active' : ''}"><span>${['UI', 'FFI', 'C++', '↩'][i]}</span><div><strong>${escape(name)}</strong><small>${['User starts a task', 'Arguments cross the boundary', 'The native function handles the task', 'The interface receives a value'][i]}</small></div><b>${s.step > i ? '✓' : String(i + 1).padStart(2, '0')}</b></div>`).join('')}</div>` + box(s.step < 0 ? 'Ready for an action' : steps[s.step][0], paragraph(s.step < 0 ? 'Trigger the sample to see how the task moves between layers.' : steps[s.step][1]), 'native-detail');
      }
      case 'health': {
        const day = HEALTH[Number(f.day)];
        return workspaceHeader('HealthOS · patient portal', 'Fictional patient') + `<div class="patient-identity"><span aria-hidden="true">A</span><div><h4>Alex’s sample timeline</h4><p>${escape(day.date)} · recorded values and care events</p></div></div><div class="demo-metrics">${metric('Recorded steps', number(day.steps))}${metric('Recorded sleep', `${day.sleep} hours`)}${metric('Sample pulse', `${day.pulse} bpm`)}</div>` + bars(HEALTH.map(d => [d.date, d.steps]), 'Fictional three-day step history') + `<div class="care-event"><span aria-hidden="true">+</span><div><small>${escape(day.date)} · sample event</small><p>${escape(day.event)}</p></div></div>`;
      }
      case 'expenses': {
        const summary = expenseSummary(s.expenses);
        const percent = Math.min(100, summary.total / 5000 * 100);
        return workspaceHeader('Your sample budget', `${s.expenses.length} recorded purchases`) + `<div class="budget-summary"><div class="budget-ring" style="--budget-progress:${percent}%"><div><strong>${number(round(summary.total / 5000 * 100))}%</strong><span>of sample budget</span></div></div><div class="demo-metrics">${metric('Sample budget', money(5000))}${metric('Total spent', money(summary.total))}${metric(summary.remaining >= 0 ? 'Remaining' : 'Over budget', money(Math.abs(summary.remaining)))}</div></div><h4 class="workspace-section-label">Purchase history</h4><ul class="demo-expense-list">${s.expenses.map(row => `<li><span class="expense-category-icon" aria-hidden="true">${{Food:'F', Travel:'T', Home:'H', Other:'O'}[row.category]}</span><div><strong>${escape(row.name)}</strong><span>${escape(row.category)}</span></div><strong>${money(row.amount)}</strong>${button('remove-expense', 'Remove', `data-id="${row.id}" aria-label="Remove ${escape(row.name)}"`)}</li>`).join('')}</ul>` + (summary.categories.length ? bars(summary.categories, 'Calculated spending by category', money) : box('No expenses yet', paragraph('Add a purchase to see the totals change.')));
      }
      case 'mcp': return workspaceHeader('Code analysis console', 'Prepared tool exchange') + `<div class="mcp-exchange"><section class="mcp-request"><div class="console-label"><span>REQUEST</span><small>operation + arguments</small></div>${pre(MCP[f.tool].request)}</section><div class="mcp-boundary"><span>Code inspection</span><b aria-hidden="true">↓</b></div><section class="mcp-response"><div class="console-label"><span>RESPONSE</span><small>structured context</small></div>${s.revealed ? pre(MCP[f.tool].response) : emptyWorkspace('{ }', 'The response will appear here', 'Inspect the sample response to see the context an agent could receive.', ['Files', 'Elements', 'Patterns'])}</section></div>`;
      case 'email': {
        const job = JOBS[f.job];
        const links = job.links.map((link, i) => `${job.projects[i]}: ${link}`).join('\n');
        const draft = f.tone === 'warm' ? `Hello ${job.company} team,\n\nYour ${job.role} opportunity caught my attention. My portfolio includes work relevant to ${job.skills}, especially ${job.projects.join(' and ')}.\n\n${links}\n\nI’d enjoy hearing more about your team and discussing how this experience could contribute.\n\nBest,\nKiran` : `Hello ${job.company} team,\n\nI’m interested in your ${job.role} role. Relevant portfolio work:\n${links}\n\nCould we discuss how my experience with ${job.skills} fits the role?\n\nRegards,\nKiran`;
        return workspaceHeader('Outreach composer', 'Prepared draft · never sent') + `<div class="email-job-context"><span class="workspace-kicker">SAMPLE JOB REQUIREMENTS</span><h4>${escape(job.role)}</h4><p>${escape(job.company)} · ${escape(job.skills)}</p><div class="email-project-matches">${job.projects.map(p => `<span>↗ ${escape(p)}</span>`).join('')}</div></div><section class="email-letter"><div class="email-envelope"><span>To</span><strong>${escape(job.company)} hiring team</strong><span>Subject</span><strong>Introduction · ${escape(job.role)}</strong></div>${s.revealed ? `<div class="email-letter-body">${pre(draft)}</div>` : emptyWorkspace('@', 'An introduction with relevant work', 'Show the prepared draft to see how these requirements and projects shape the email.', ['Requirements', 'Matching projects', 'Draft'])}</section>`;
      }
      case 'family': {
        const row = ids => `<div class="demo-tree-row">${ids.map(person => `<button class="demo-person ${person === s.person ? 'is-selected' : ''}" data-action="person" data-person="${person}" aria-pressed="${person === s.person}"><span aria-hidden="true">${PEOPLE[person][0].slice(0, 1)}</span>${escape(PEOPLE[person][0])}</button>`).join('')}</div>`;
        return workspaceHeader('The sample family', 'Select a person to explore') + `<div class="family-workspace"><div class="demo-tree"><span class="family-canvas-label">Fictional family · ${1 + Number(s.ancestors) + Number(s.children)} generations</span>${s.ancestors ? row(['mira', 'dev']) + '<div class="demo-tree-connector" aria-hidden="true"></div>' : ''}${row(['priya', 'sam'])}${s.children ? '<div class="demo-tree-connector" aria-hidden="true"></div>' + row(['alex', 'jamie']) : ''}</div><section class="family-profile"><span class="family-profile-avatar" aria-hidden="true">${PEOPLE[s.person][0][0]}</span><span class="workspace-kicker">SELECTED PERSON</span><h4>${escape(PEOPLE[s.person][0])}</h4><p>${escape(PEOPLE[s.person][1])}</p><span class="family-profile-note">Follow the connections in the tree.</span></section></div>`;
      }
      case 'home': {
        const estimate = estimateMaterials(f.area, f);
        return workspaceHeader('Material planning illustration', 'Teaching coefficients') + `<div class="home-estimate-top"><div class="home-area"><span>FLOOR AREA IN THIS EXAMPLE</span><strong>${number(Number(f.area))} <small>sq ft</small></strong><div class="home-area-sketch" aria-hidden="true"><i></i><i></i><i></i></div></div>${metric('Illustrative material total', money(estimate.total))}</div>` + table(['Material', 'Quantity', 'Unit rate', 'Cost'], estimate.materials.map(m => [m.label, `${number(m.quantity)} ${m.unit}`, money(m.rate), money(m.cost)]), 'Sample material calculation') + box('Assumptions you can inspect', paragraph('Per sq ft: 0.4 cement bags, 8 bricks, and 3 kg of steel. These are arbitrary teaching coefficients. The total excludes labour, transport, taxes, finishes, and structural design; it is not a construction quote.'));
      }
      case 'trading': {
        const fixture = {positive: {price: [100, 102, 103, 104], sentiment: 'Positive', volatility: 2, action: 'Illustrate a candidate action'}, volatile: {price: [100, 118, 91, 110], sentiment: 'Positive', volatility: 12, action: 'Illustrate a candidate action'}, negative: {price: [100, 98, 95, 94], sentiment: 'Negative', volatility: 4, action: 'Hold in this illustration'}}[f.scenario];
        const blocked = f.guardrails && fixture.volatility > 5;
        return workspaceHeader('Market replay', 'Fictitious historical-style scenario') + `<div class="demo-metrics">${metric('Prepared sentiment', fixture.sentiment)}${metric('Example volatility', `${fixture.volatility}%`)}${metric('Final sample price', `${fixture.price[3]} units`)}</div>` + sparkline(fixture.price, 'Fictitious price replay · four points') + `<section class="trading-decision ${blocked ? 'is-blocked' : ''}"><span>${blocked ? 'RULE INTERVENED' : 'ILLUSTRATED DECISION'}</span><h4>${blocked ? 'Pause the candidate action' : fixture.sentiment === 'Negative' ? 'Hold in this illustration' : 'Review the candidate action'}</h4><p>${escape(blocked ? 'The example rule blocks the candidate action because volatility exceeds 5%.' : fixture.action)}</p></section>` + box('Example risk policy', paragraph('Block candidate actions above 5% volatility; cap a hypothetical position at 10%. These rules are educational and are not verified project behavior or investment advice.'));
      }
      case 'sales': {
        const summary = salesSummary(SALES, f.brand, f.period);
        return workspaceHeader('Mobile sales dashboard', `${summary.rows.length} fictional source rows selected`) + `<div class="demo-metrics">${metric('Units in selection', number(summary.units))}${metric('Sample revenue', money(summary.revenue))}${metric('Weighted unit price', money(summary.average))}</div>` + bars(summary.brands, 'Calculated units by brand') + table(['Brand', 'Month', 'Units', 'Unit price'], summary.rows.map(row => [row.brand, row.period, number(row.units), money(row.price)]), 'Fictional source rows');
      }
      case 'news': {
        const article = NEWS[f.article];
        return `<div class="news-reading-desk"><article class="news-source demo-paper"><div class="paper-label"><span>FICTIONAL ARTICLE</span><span>Reading desk</span></div><h4>${escape(article.title)}</h4><p>${escape(article.text)}</p><span class="paper-footnote">Original source text for this local example</span></article><section class="news-briefing"><span class="workspace-kicker">YOUR PREPARED BRIEFING</span><h4>The points to take away</h4><span class="language-badge">${article[f.length].length} summary points</span><ol>${article[f.length].map((point, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><p>${escape(point)}</p></li>`).join('')}</ol><p class="paper-footnote">Change the length to compare a brief and detailed reading.</p></section></div>`;
      }
      case 'sonar': {
        const sample = SONAR[f.signal];
        return workspaceHeader('Sonar classification workbench', 'Illustrative signal · 8 bands') + sparkline(sample.values, 'Drawn signal values (illustrative units)') + `<div class="sonar-label"><div><span class="workspace-kicker">ASSIGNED SAMPLE LABEL</span><h4>${s.revealed ? sample.label : 'Ready to inspect'}</h4><p>${escape(s.revealed ? sample.explanation : 'Reveal the assigned label to follow the input-to-category workflow.')}</p></div><span class="sonar-label-symbol" aria-hidden="true">${s.revealed ? (f.signal === 'rock' ? '◈' : '◎') : '?'}</span></div>`;
      }
      case 'cloud': {
        const rows = RECORDINGS.filter(r => (f.camera === 'all' || r.camera === f.camera) && (f.time === 'all' || r.time === f.time));
        const selected = rows.find(r => r.id === s.recording) || rows[0];
        return workspaceHeader('Recording library', `${rows.length} fictional clips`) + `<div class="cloud-library"><div class="demo-recordings">${rows.map(r => `<button class="demo-recording ${r.id === selected?.id ? 'is-selected' : ''}" data-action="recording" data-id="${r.id}" aria-pressed="${r.id === selected?.id}"><span class="recording-thumbnail" aria-hidden="true">▣</span><strong>${r.camera}</strong><span>${r.timestamp} · ${r.duration}</span></button>`).join('')}</div>${selected ? `<section class="recording-inspector"><span class="workspace-kicker">SELECTED SAMPLE RECORDING</span><h4>${selected.camera} · ${selected.timestamp}</h4><p>${selected.event}</p>${table(['Detail', 'Value'], [['Camera', selected.camera], ['Event', selected.event], ['Time', selected.timestamp], ['Duration', selected.duration], ['Illustrative storage key', selected.path]], 'Recording details')}</section>` : box('No sample recordings', paragraph('Try another camera or time.'))}</div><div class="demo-pipeline"><span>Capture</span><span>Upload</span><span>Store</span><span>Authorized review</span></div>`;
      }
      case 'surveillance': {
        const entry = f.scene === 'entrance';
        return workspaceHeader('Monitoring desk', 'Drawn frame · fixed overlay') + `<div class="surveillance-workspace"><div class="demo-camera-scene" role="img" aria-label="Drawn ${entry ? 'entrance' : 'courtyard'} scene${f.overlays ? ' with a fixed sample detection box' : ''}"><div class="demo-scene-label">DRAWN SAMPLE · ${entry ? 'ENTRANCE' : 'COURTYARD'}</div><div class="demo-building ${entry ? '' : 'courtyard'}"></div><div class="demo-silhouette"></div>${f.overlays ? '<div class="demo-detection-box"><span>Sample activity</span></div>' : ''}<span class="demo-scene-time">Frame 01 · prepared illustration</span></div><section class="monitor-event"><span class="workspace-kicker">EVENT CONTEXT</span><h4>${f.overlays ? 'Sample activity marked' : 'Overlay hidden'}</h4><p>${escape(f.overlays ? (entry ? 'Prepared entrance event: activity near the doorway at 09:15. The box is a fixed overlay.' : 'Prepared courtyard event: activity near the wall at 10:05. The box is a fixed overlay.') : 'Show overlays to connect the marked area to its prepared event description.')}</p><span class="monitor-status">${f.overlays ? 'Fixed annotation visible' : 'Scene only'}</span></section></div>`;
      }
      case 'emoji': return workspaceHeader('Your message, in another form', 'Reversible encoding') + `<div class="emoji-output-cards">${box('Encoded output', s.encoded ? `<p class="demo-emoji-output">${escape(s.encoded)}</p>` : '<span class="emoji-placeholder" aria-hidden="true">😄 😊 😆 😋</span>' + paragraph('Encode your message to see the emoji pairs.'), 'emoji-encoded-card')}${box('Decoded text', s.decoded ? `<p class="demo-decoded-output">${escape(s.decoded)}</p>` : paragraph('Decode the sequence to recover its text.'), 'emoji-decoded-card')}</div><div class="emoji-alphabet"><span class="workspace-kicker">THE 16-SYMBOL ALPHABET</span><div>${EMOJI.map((symbol, i) => `<span><b>${symbol}</b><small>${i.toString(16).toUpperCase()}</small></span>`).join('')}</div><p>Each byte becomes two symbols. Spaces separate byte pairs. Anyone who knows the mapping can reverse it.</p></div>`;
      default: return box('Sample unavailable', paragraph('Choose another project.'));
    }
  }
  function mount(host, id, options = {}) {
    if (!META[id]) { host.textContent = 'This sample is unavailable.'; return () => {}; }
    let state = initial(id), disposed = false;
    for (const [key, value] of Object.entries(options.fields || {})) if (key in state.fields) state.fields[key] = value;
    for (const key of ['person', 'ancestors', 'children']) if (key in (options.view || {})) state[key] = options.view[key];
    const draw = () => {
      const guide = WORKSPACE_GUIDES[id];
      host.innerHTML = `<div class="project-demo workspace-${id}" data-demo="${id}"><header class="demo-heading"><div><span class="demo-local-label"><span aria-hidden="true">●</span> Interactive sample · runs locally</span><h3>${META[id][0]}</h3><p>${META[id][1]}</p></div>${button('reset', 'Reset sample')}</header><div class="workspace-grid"><aside class="workspace-control-panel"><h4>${guide[0]}</h4><div class="demo-controls">${controls(id, state)}</div><p class="demo-feedback" id="demo-feedback" role="status" aria-live="polite"></p><ol class="workspace-guide">${guide[1].map((text, i) => `<li><span>${i + 1}</span>${escape(text)}</li>`).join('')}</ol></aside><div class="workspace-result-panel"><div data-demo-result>${results(id, state)}</div></div></div><p class="demo-announcement visually-hidden" role="status" aria-live="polite"></p></div>`;
    };
    function readFields() {
      host.querySelectorAll('[data-field]').forEach(el => { state.fields[el.dataset.field] = el.type === 'checkbox' ? el.checked : el.value; });
    }
    function update(message = 'Sample updated.') {
      const active = host.ownerDocument.activeElement;
      const focusAction = active?.dataset.action, focusPerson = active?.dataset.person, focusId = active?.dataset.id;
      try {
        const html = results(id, state);
        host.querySelector('[data-demo-result]').innerHTML = html;
        host.querySelector('.demo-feedback').textContent = '';
        host.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
        host.querySelector('.demo-announcement').textContent = message;
        const advance = host.querySelector('[data-action="advance"]');
        if (advance) { advance.textContent = state.step < 0 ? (id === 'native' ? 'Trigger sample action' : 'Start walkthrough') : state.step === 3 ? 'Replay walkthrough' : 'Next action →'; }
        ['ancestors', 'children'].forEach(key => {
          const control = host.querySelector(`[data-action="${key}"]`);
          if (control) { control.textContent = `${state[key] ? 'Hide' : 'Show'} ${key === 'ancestors' ? 'grandparents' : 'children'}`; control.setAttribute('aria-expanded', String(state[key])); }
        });
        if (focusAction && !active.isConnected) {
          const replacement = Array.from(host.querySelectorAll('[data-action]')).find(el => el.dataset.action === focusAction && (!focusPerson || el.dataset.person === focusPerson) && (!focusId || el.dataset.id === focusId));
          (replacement || host.querySelector('[data-field]') || host.querySelector('[data-action="reset"]'))?.focus();
        }
      } catch (error) {
        host.querySelector('.demo-feedback').textContent = error.message;
        host.querySelectorAll('[data-field]').forEach(el => el.setAttribute('aria-invalid', 'true'));
        host.querySelector('[data-demo-result]').innerHTML = box('Check your input', paragraph('Correct the highlighted values to update the sample.'));
      }
    }
    function handle(action, target) {
      if (disposed) return;
      if (action === 'reset') { state = initial(id); draw(); host.querySelector('[data-action="reset"]').focus(); host.querySelector('.demo-feedback').textContent = 'Sample reset to its starting values.'; return; }
      readFields();
      try {
        switch (action) {
          case 'advance': state.step = state.step === 3 ? 0 : state.step + 1; break;
          case 'reveal': state.revealed = true; break;
          case 'add-expense': {
            const name = state.fields.name.trim();
            if (!name) throw new Error('Enter an expense name.');
            const amount = round(positive(state.fields.amount, 'Expense amount'));
            if (amount < 0.01) throw new Error('Expense amount must be at least ₹0.01.');
            if (state.expenses.length >= 100) throw new Error('This sample supports up to 100 expenses. Remove a row or reset it.');
            state.expenses.push({id: state.nextExpenseId++, name, amount, category: state.fields.category});
            break;
          }
          case 'remove-expense': state.expenses = state.expenses.filter(row => row.id !== Number(target.dataset.id)); break;
          case 'ancestors': state.ancestors = !state.ancestors; if (!state.ancestors && ['mira', 'dev'].includes(state.person)) state.person = 'priya'; break;
          case 'children': state.children = !state.children; if (!state.children && ['alex', 'jamie'].includes(state.person)) state.person = 'priya'; break;
          case 'person': state.person = target.dataset.person; break;
          case 'recording': state.recording = target.dataset.id; break;
          case 'encode': {
            state.encoded = encodeEmoji(state.fields.message);
            state.decoded = '';
            host.querySelector('[data-field="encoded"]').value = state.encoded;
            state.fields.encoded = state.encoded;
            break;
          }
          case 'decode': state.decoded = decodeEmoji(state.fields.encoded); break;
        }
        update(action === 'advance' ? `Walkthrough step ${state.step + 1} of 4.` : action === 'add-expense' ? 'Expense added. Totals updated.' : action === 'remove-expense' ? 'Expense removed. Totals updated.' : action === 'encode' ? 'Message encoded. The sequence is ready to decode.' : action === 'decode' ? 'Sequence decoded.' : 'Sample updated.');
      } catch (error) {
        host.querySelector('.demo-feedback').textContent = error.message;
        const key = action === 'decode' ? 'encoded' : action === 'encode' ? 'message' : /name/.test(error.message) ? 'name' : 'amount';
        host.querySelector(`[data-field="${key}"]`)?.setAttribute('aria-invalid', 'true');
      }
    }
    const onClick = event => { const target = event.target.closest('[data-action]'); if (target && host.contains(target)) handle(target.dataset.action, target); };
    const onChange = event => {
      if (!event.target.matches('[data-field]')) return;
      readFields();
      if (['browser-agent', 'native'].includes(id)) state.step = -1;
      if (['query', 'mcp', 'email', 'sonar'].includes(id)) state.revealed = false;
      if (id === 'emoji') {
        if (event.target.dataset.field === 'message') { state.encoded = ''; state.decoded = ''; host.querySelector('[data-field="encoded"]').value = ''; }
        else state.decoded = '';
      }
      if (id !== 'expenses') update('Selection changed. Sample updated.');
    };
    const onSubmit = event => { if (event.target.matches('[data-expense-form]')) { event.preventDefault(); handle('add-expense', event.target); } };
    const onInput = event => {
      if (id === 'home' && event.target.matches('[data-field]')) { readFields(); update('Material estimate updated.'); }
      if (id === 'emoji' && event.target.matches('[data-field]')) onChange(event);
    };
    draw();
    host.addEventListener('click', onClick);
    host.addEventListener('change', onChange);
    host.addEventListener('submit', onSubmit);
    host.addEventListener('input', onInput);
    return () => { disposed = true; host.removeEventListener('click', onClick); host.removeEventListener('change', onChange); host.removeEventListener('submit', onSubmit); host.removeEventListener('input', onInput); state = null; };
  }
  const api = {mount, expenseSummary, estimateMaterials, salesSummary, encodeEmoji, decodeEmoji, demoIds: Object.keys(META), fixtures: {sales: SALES}};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ProjectDemos = api;
})(typeof window !== 'undefined' ? window : globalThis);
