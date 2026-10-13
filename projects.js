/* Project stories. IDs and repository URLs stay stable; sample workflows run locally. */
const PROJECTS_DATA = [
  {
    id: 'ai-agent-browser-automation', title: 'AI Browser Automation', category: 'AI & automation',
    description: 'Turn a plain-language task into browser actions, from filling forms to collecting information.',
    audience: 'People repeating the same tasks across websites.',
    problem: 'Opening pages, entering information, and collecting results by hand takes time and attention.',
    result: 'A browser agent interprets the task and works through the required actions.',
    input: 'A task in everyday language', output: 'Completed actions and collected data',
    features: ['Natural-language browser tasks', 'Configurable AI models', 'Persistent browser sessions'],
    steps: [['Describe the task', 'The WebUI accepts a goal written in everyday language.'], ['Plan browser actions', 'An AI model and browser-use turn the goal into actions on the page.'], ['Interact with the page', 'The browser opens pages, enters information, and collects the requested data.'], ['Review the result', 'The user can inspect the outcome and the browser session.']],
    implementation: 'Python and Gradio provide the WebUI; browser-use and Playwright connect the agent to the browser. The repository credits the browser-use foundation.',
    tags: ['Python', 'Gradio', 'Browser-Use', 'Playwright'], demoId: 'browser-agent', layout: 'wide',
    githubUrl: 'https://github.com/kiranimmadi2/AI-Agent-Browser-Automation'
  },
  {
    id: 'indian-law-ai-assistant', title: 'Indian Law AI Assistant', category: 'AI & documents',
    description: 'Make legal documents easier to understand with plain-language explanations and Indian-language translations.',
    audience: 'Readers who need help understanding a legal document.',
    problem: 'Formal language and unfamiliar terminology make legal documents difficult to read.',
    result: 'Document summaries and translated explanations make the text easier to follow.',
    input: 'A PDF, Word document, or image', output: 'A summary in the reader’s language',
    features: ['Document uploads', 'Language detection', 'Case summaries and translation'],
    steps: [['Provide a document', 'The app accepts PDF, DOCX, or image documents.'], ['Read the content', 'The document content and its language are prepared for analysis.'], ['Explain and translate', 'An OpenAI or Gemini model produces a summary and translated explanation.'], ['Review the original', 'The reader compares the explanation with the source document.']],
    implementation: 'The Python app supports OpenAI and Google Gemini models. The sample uses fictional excerpts and prepared translations; it provides no legal advice.',
    tags: ['Python', 'OpenAI', 'Gemini'], demoId: 'legal', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/Indian-Law-AI-Assistant'
  },
  {
    id: 'query-ai', title: 'QueryAI', category: 'AI & data',
    description: 'Ask a business question in ordinary language and explore the answer as a table or chart.',
    audience: 'Business teams exploring information held in a database.',
    problem: 'Answering a simple data question can require someone who knows SQL and the database structure.',
    result: 'A conversational interface connects questions to structured queries and visual results.',
    input: 'A question about business data', output: 'A query, table, and chart',
    features: ['Natural-language queries', 'Structured database retrieval', 'Charts and result tables'],
    steps: [['Ask a question', 'A React interface captures the business question.'], ['Translate to a query', 'The documented NLP layer uses Gemini to turn the question into SQL.'], ['Retrieve the answer', 'The backend connects the query to the internal database.'], ['Show the result', 'Tables and charts make the returned data easier to interpret.']],
    implementation: 'The README describes React, Gemini, database APIs, and D3.js / Chart.js. This portfolio sample uses fixed questions and fictional sales data.',
    tags: ['React', 'Gemini', 'SQL', 'Data Visualization'], demoId: 'query', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/QueryAI.An-AI-powered-Data-Query-Interface'
  },
  {
    id: 'singletap', title: 'SingleTap', category: 'Flutter & native code',
    description: 'Explore how a Flutter interface can pass a task to native code and bring the result back to the screen.',
    audience: 'Teams exploring Flutter applications with native processing.',
    problem: 'Some application tasks need to connect a cross-platform interface with native code.',
    result: 'The portfolio’s described approach connects Flutter and native C++ through Dart FFI.',
    input: 'An action in the Flutter interface', output: 'A result returned from native code',
    features: ['Flutter interface concept', 'Dart FFI integration concept', 'Native C++ processing concept'],
    steps: [['Flutter interface', 'A user starts an action in the app.'], ['Dart FFI bridge', 'Dart Foreign Function Interface provides a route to a native function.'], ['Native processing', 'A native function performs the task and returns a value.'], ['Update the interface', 'The result returns to Dart and is displayed in Flutter.']],
    implementation: 'This illustrates the Flutter / Dart FFI / C++ approach described in the portfolio. Repository documentation was unavailable during verification; no performance claims are made.',
    sourceAvailable: false, tags: ['Flutter', 'Dart', 'C++ FFI'], demoId: 'native', layout: 'wide',
    githubUrl: 'https://github.com/kiranimmadi2/SingleTap'
  },
  {
    id: 'healthos', title: 'HealthOS', category: 'Flutter & healthcare',
    description: 'Bring patient, doctor, hospital, and lab workflows together in a shared Flutter health platform.',
    audience: 'Patients and care teams working across appointments and reports.',
    problem: 'Different participants in healthcare need coordinated access to information and workflows.',
    result: 'Separate role-based apps share a common platform and reusable application packages.',
    input: 'Patient and care-team information', output: 'Coordinated portals and health records',
    features: ['Patient and doctor applications', 'Hospital and lab portals', 'Shared models and UI components'],
    steps: [['Choose a portal', 'Patients, doctors, hospitals, and labs have dedicated Flutter applications.'], ['Share components', 'Shared packages provide models, UI elements, and database access.'], ['Coordinate information', 'Supabase supplies authentication, database, storage, and realtime services.'], ['Use the AI gateway', 'Documented Edge Functions proxy Gemini requests from the application.']],
    implementation: 'Flutter with Riverpod and GoRouter forms the frontend. Supabase provides the backend; Gemini is accessed via Edge Functions. The timeline sample shows fictional records, without diagnosis.',
    tags: ['Flutter', 'Riverpod', 'Supabase', 'Gemini'], demoId: 'health', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/healthos'
  },
  {
    id: 'expenses-tracker-app', title: 'Expenses Tracker', category: 'Flutter & finance',
    description: 'Keep everyday spending in one place and see how individual expenses add up.',
    audience: 'People who want a clearer view of their spending.',
    problem: 'Small purchases are easy to lose track of across notes and receipts.',
    result: 'An expense-tracking app organizes spending; the sample shows category totals and a running budget.',
    input: 'Expenses and categories', output: 'An organized spending view',
    features: ['Expense tracking', 'Flutter application', 'Firebase and BLoC stack'],
    steps: [['Record a purchase', 'Capture an expense in the application.'], ['Organize the state', 'BLoC separates application state from interface updates.'], ['Connect the data layer', 'The repository describes a Flutter app using Firebase.'], ['Review spending', 'The local illustration groups expenses and calculates a budget balance.']],
    implementation: 'The repository description confirms Flutter, Firebase, and BLoC. Budget calculations here are portfolio sample behavior, without claims about production features.',
    tags: ['Flutter', 'BLoC', 'Firebase'], demoId: 'expenses', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/expenses-tracker_app'
  },
  {
    id: 'mcp-server', title: 'MCP Code Analysis', category: 'Developer tools',
    description: 'Give coding agents structured context about a Python project: its files, functions, and potential issues.',
    audience: 'Developers and agent builders exploring Python codebases.',
    problem: 'An agent needs usable code context before it can reason about a project.',
    result: 'Python code-analysis operations return structured information about project files and patterns.',
    input: 'A project path or analysis request', output: 'Structured code context',
    features: ['Project structure scanning', 'Python code-element extraction', 'Pattern and anti-pattern detection'],
    steps: [['Select an operation', 'Choose project scanning, file analysis, or pattern searching.'], ['Inspect the files', 'The Python tool reads code from the target project.'], ['Extract structure', 'It maps classes, functions, imports, or potential anti-patterns.'], ['Return agent context', 'Structured results can be used as a code-analysis tool backend.']],
    implementation: 'The repository uses the Python standard library. Its README lists full JSON-RPC MCP server registration as roadmap work. The sample illustrates tool requests rather than a connected MCP session.',
    tags: ['Python', 'Code Analysis', 'MCP Tool Backend'], demoId: 'mcp', layout: 'wide',
    githubUrl: 'https://github.com/kiranimmadi2/MCP-Server'
  },
  {
    id: 'genai-email-writter', title: 'GenAI Email Writer', category: 'AI & writing',
    description: 'Connect a job listing to relevant portfolio work and turn that context into a personalized outreach email.',
    audience: 'People preparing targeted professional outreach.',
    problem: 'A generic email rarely explains why someone’s work fits a particular opportunity.',
    result: 'The generator extracts job information and includes relevant portfolio links in an email draft.',
    input: 'A careers page or job listing', output: 'A tailored outreach draft',
    features: ['Job listing extraction', 'Portfolio relevance matching', 'Contextual email generation'],
    steps: [['Read the listing', 'The Streamlit app takes a careers-page URL and extracts job listings.'], ['Find requirements', 'LangChain helps structure the listing into useful context.'], ['Match portfolio work', 'Relevant links are retrieved from a vector database.'], ['Draft the email', 'Groq supplies model inference to produce personalized outreach.']],
    implementation: 'The documented stack uses Streamlit, LangChain, and Groq. Sample jobs, tone choices, and drafts are prepared locally; no email is sent.',
    tags: ['Python', 'LangChain', 'Groq', 'Streamlit'], demoId: 'email', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/GenAi-Email-Writter'
  },
  {
    id: 'family-tree', title: 'Family Tree', category: 'Flutter & relationships',
    description: 'Build a family tree and make the connections between relatives easier to discover.',
    audience: 'Families documenting people and their relationships.',
    problem: 'Names alone do not show how relatives across generations are connected.',
    result: 'A navigable family tree connects profiles with relationship paths.',
    input: 'People and family relationships', output: 'A tree with discoverable connections',
    features: ['Family profiles and relationships', 'Relationship-path discovery', 'Search and language support'],
    steps: [['Add a person', 'Capture names, dates, places, and photos in the tree.'], ['Link relatives', 'Relationships connect the individual profiles.'], ['Explore connections', 'The app helps explain paths between people in the family.'], ['Find profiles', 'Search and person handles help users navigate their tree.']],
    implementation: 'The Plink Tree README describes Flutter, flutter_bloc, GoRouter, and Firebase. The sample contains fictional people and expandable branches.',
    tags: ['Flutter', 'BLoC', 'Firebase', 'GoRouter'], demoId: 'family', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/family-tree'
  },
  {
    id: 'homebuildai', title: 'HomeBuildAI', category: 'Flutter & planning',
    description: 'Explore a rule-based approach to home design and how sample planning assumptions affect material costs.',
    audience: 'People exploring an early home-design idea.',
    problem: 'Early planning involves space choices and assumptions that can be hard to compare.',
    result: 'The repository describes a rule-based home design generator built as a Flutter application.',
    input: 'Home-design requirements', output: 'A rule-based design concept',
    features: ['Home-design focus', 'Rule-based generation', 'Flutter application'],
    steps: [['Describe the space', 'Provide requirements to guide a home-design concept.'], ['Apply design rules', 'The documented approach is rule-based generation.'], ['Review a concept', 'Flutter provides the application interface.'], ['Explore assumptions', 'The portfolio calculator separately illustrates area-based material costs; it is not a verified project estimator.']],
    implementation: 'The README identifies a rule-based home design generator in Flutter. The material calculator is an educational illustration with explicit coefficients, excluding labour and other construction costs.',
    tags: ['Flutter', 'Dart', 'Rule-Based Design'], demoId: 'home', layout: 'wide',
    githubUrl: 'https://github.com/kiranimmadi2/HomeBuildAI'
  },
  {
    id: 'ai-stock-trading-app', title: 'AI Stock Trading', category: 'AI & market data',
    description: 'Bring market data and news sentiment into a trading dashboard and decision pipeline.',
    audience: 'Developers exploring market-data and sentiment workflows.',
    problem: 'Prices and news arrive from different sources and need to be considered together.',
    result: 'The project describes a Flutter dashboard connected to a FastAPI trading backend.',
    input: 'Market data and news sentiment', output: 'A dashboard and trading decision flow',
    features: ['Market-data integration', 'News sentiment analysis', 'Flutter dashboard and FastAPI backend'],
    steps: [['Collect data', 'Stock APIs provide market information to the backend.'], ['Consider sentiment', 'News sentiment contributes context to the decision pipeline.'], ['Prepare an action', 'The project describes integration with brokerage services.'], ['Display the state', 'A Flutter frontend presents the dashboard.']],
    implementation: 'The README describes FastAPI, stock APIs, brokerage integrations, and Flutter. The local replay uses fictitious prices and illustrative risk rules; it places no trades and makes no return claims.',
    tags: ['FastAPI', 'Python', 'Flutter'], demoId: 'trading', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/AI-Stock-Trading-APP'
  },
  {
    id: 'mobile-sales-analysis', title: 'Mobile Sales Analysis', category: 'Data & analytics',
    description: 'Explore mobile-phone listings to understand how brands, prices, and customer ratings compare.',
    audience: 'Analysts examining a mobile marketplace dataset.',
    problem: 'A spreadsheet of listings hides patterns in pricing, ratings, and brand availability.',
    result: 'Exploratory analysis turns the dataset into comparisons and visual insights.',
    input: 'Mobile marketplace data', output: 'Brand, price, and rating comparisons',
    features: ['Price and rating distributions', 'Brand comparisons', 'Exploratory charts'],
    steps: [['Load the dataset', 'The documented dataset includes brand, model, memory, storage, rating, and prices.'], ['Inspect distributions', 'Python analysis explores ratings and selling prices.'], ['Compare brands', 'Charts compare brand availability and average prices.'], ['Explain patterns', 'The analysis translates observations into marketplace insights.']],
    implementation: 'The README describes Pandas, Matplotlib, and Seaborn. The portfolio uses a separate fictional monthly sales fixture so visitors can try filters.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'], demoId: 'sales', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/Mobile_Sales_Analysis'
  },
  {
    id: 'news-summarization', title: 'News Summarization', category: 'AI & news',
    description: 'Explore company news, compare sentiment, and turn article information into a shorter briefing.',
    audience: 'Readers following news about a company.',
    problem: 'Reading many articles makes it difficult to see the overall story quickly.',
    result: 'The application brings news articles, sentiment information, and Hindi audio summaries into one interface.',
    input: 'A company and analysis period', output: 'Article insights and a shorter briefing',
    features: ['News extraction', 'Sentiment and topic analysis', 'Hindi text-to-speech summaries'],
    steps: [['Choose a company', 'The user selects a company and period in Streamlit.'], ['Collect articles', 'The backend extracts news through GoogleNews.'], ['Analyze the text', 'TextBlob and NLTK support sentiment and topic analysis.'], ['Review the briefing', 'The interface presents article insights and Hindi audio summaries using gTTS.']],
    implementation: 'The repository documents Streamlit, FastAPI, TextBlob, NLTK, and gTTS. The sample compares fictional articles with prepared summaries; it fetches no live news.',
    tags: ['Python', 'Streamlit', 'FastAPI', 'TextBlob'], demoId: 'news', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/News-Summarization'
  },
  {
    id: 'rock-vs-mine-prediction', title: 'Rock vs Mine Prediction', category: 'Machine learning',
    description: 'Explore a classification task that distinguishes rock and mine samples from sonar signals.',
    audience: 'Learners and developers exploring signal classification.',
    problem: 'A list of sonar measurements is difficult to interpret without a classification model.',
    result: 'The repository describes a model that classifies sonar samples into rock or mine categories.',
    input: 'Sonar signal measurements', output: 'A rock or mine classification',
    features: ['Sonar-based classification', 'Two labeled output categories', 'Machine-learning project'],
    steps: [['Inspect a sample', 'A sonar sample contains a sequence of signal measurements.'], ['Prepare the features', 'The measurements become the model’s input features.'], ['Classify the signal', 'A trained classifier distinguishes the rock and mine categories.'], ['Review the label', 'The predicted category can be compared with a known sample label.']],
    implementation: 'The repository description confirms the sonar-classification objective; a README was unavailable. The sample reveals fixed labeled examples, without running a model or claiming accuracy.',
    tags: ['Python', 'Machine Learning', 'Sonar Data'], demoId: 'sonar', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/Rock-vs-Mine-Prediction'
  },
  {
    id: 'cloud-based-cctv-footage', title: 'Cloud CCTV Footage', category: 'Video & cloud',
    description: 'Organize camera recordings so authorized users can find and review footage through a shared system.',
    audience: 'Teams managing recordings from multiple cameras.',
    problem: 'Finding a recording is harder when footage is spread across devices and storage locations.',
    result: 'A cloud footage-management system provides storage, access, and recording retrieval.',
    input: 'Camera footage and recording details', output: 'An accessible recording library',
    features: ['Cloud footage management', 'Recording playback and retrieval', 'Authorized access'],
    steps: [['Capture footage', 'Camera recordings enter the footage-management workflow.'], ['Store recordings', 'Cloud storage holds footage and its identifying details.'], ['Find a recording', 'Users locate footage by camera and time.'], ['Review with access control', 'Authorized users access the requested recording.']],
    implementation: 'The README describes storage, streaming, playback, and access control, but lists multiple possible technologies. This explorer does not claim a specific deployed cloud architecture.',
    tags: ['Python', 'Cloud Storage', 'Video Management'], demoId: 'cloud', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/cloud-based-CCTV-footage'
  },
  {
    id: 'cctv-surveillance-prototype', title: 'CCTV Surveillance Prototype', category: 'Video & interfaces',
    description: 'Explore a dashboard concept that brings camera feeds, search, and alerts into one view.',
    audience: 'Teams evaluating a camera-monitoring interface.',
    problem: 'Separate feeds and alerts make it difficult to follow events across cameras.',
    result: 'The prototype demonstrates a dashboard for camera feeds and alert management.',
    input: 'Camera views and event information', output: 'A monitoring dashboard',
    features: ['Camera dashboard prototype', 'Search interface', 'Alert management concept'],
    steps: [['Open the dashboard', 'The HTML prototype presents camera views.'], ['Inspect a view', 'A selected view gives context for monitoring activity.'], ['Explore search and alerts', 'The repository describes recognition search and alert management in the prototype.'], ['Review an event', 'The prepared overlay illustration connects a marked region to an event card.']],
    implementation: 'The repository identifies an HTML dashboard prototype. This sample uses drawn scenes and fixed overlays; it performs no facial recognition or live detection.',
    tags: ['HTML', 'JavaScript', 'Dashboard Prototype'], demoId: 'surveillance', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/cctv-surveillance-prototype'
  },
  {
    id: 'text-to-emoji-encryption-and-decryption', title: 'Text to Emoji Encoding', category: 'Web & creative tools',
    description: 'Turn a message into an emoji sequence, then decode it to recover the original text.',
    audience: 'People exploring a playful way to represent text.',
    problem: 'An ordinary message can be represented in a more playful visual form.',
    result: 'A reversible mapping converts text to emoji symbols and back.',
    input: 'A text message', output: 'An emoji sequence and decoded text',
    features: ['Text-to-emoji conversion', 'Reversible decoding', 'Browser-based interaction'],
    steps: [['Enter a message', 'Start with text to represent as emoji symbols.'], ['Map the characters', 'The original project describes a predefined character-to-emoji mapping.'], ['Read the symbols', 'The encoded message is represented by an emoji sequence.'], ['Reverse the mapping', 'Decoding recovers the original text. This is encoding, not secure encryption.']],
    implementation: 'This sample maps UTF-8 bytes to pairs of emoji symbols so Unicode text can round-trip. It is a portfolio implementation of the encoding idea, not an AES cipher.',
    tags: ['JavaScript', 'HTML', 'CSS'], demoId: 'emoji', layout: 'standard',
    githubUrl: 'https://github.com/kiranimmadi2/Text-to-Emoji-Encryption-and-Decryption'
  }
];

const PROJECT_GRADIENTS = ['mint', 'lavender', 'rose', 'azure', 'emerald', 'peach', 'orchid', 'teal', 'sunrise', 'aqua', 'indigo', 'citrus', 'coral', 'ocean', 'sage', 'twilight', 'blush'];
PROJECTS_DATA.forEach((project, index) => { project.gradient = PROJECT_GRADIENTS[index]; project.number = index + 1; });

// Each explorer has its own story, visual identity, and useful starting scenarios.
const PROJECT_EXPERIENCES = {
  'browser-agent': {icon: '↗', eyebrow: 'A copilot for repetitive web tasks', headline: 'Describe the task. Follow the actions.', accent: '#72c6ed', light: '#096a8e', action: 'Walk through a browser task', starts: [{label: 'Collect product prices', detail: 'Follow navigation, extraction, and the final table.', fields: {task: 'products'}}, {label: 'Prepare a contact form', detail: 'See the form fields filled for review.', fields: {task: 'form'}}]},
  legal: {icon: '§', eyebrow: 'Legal language, made easier to read', headline: 'Understand the clause. In your language.', accent: '#e8c580', light: '#805b17', action: 'Read a sample clause', starts: [{label: 'Simplify a service clause', detail: 'Compare formal wording with its meaning.', fields: {document: 'notice', language: 'English'}}, {label: 'Read it in Telugu', detail: 'Keep the original beside a prepared translation.', fields: {document: 'notice', language: 'Telugu'}}, {label: 'Check a delivery clause', detail: 'Understand the sample delivery deadline.', fields: {document: 'delivery', language: 'English'}}]},
  query: {icon: 'SQL', eyebrow: 'A conversation with your data', headline: 'Ask a question. See the answer.', accent: '#bca6ff', light: '#6243b7', action: 'Ask the sample dataset', starts: [{label: 'Compare phone brands', detail: 'See the question, SQL, chart, and source rows.', fields: {question: 'brand'}}, {label: 'Compare monthly revenue', detail: 'Follow a question through to a calculated answer.', fields: {question: 'month'}}]},
  native: {icon: 'FFI', eyebrow: 'Inside a Flutter-to-native handoff', headline: 'One tap. A journey through native code.', accent: '#80baff', light: '#215da5', action: 'Follow a sample action', starts: [{label: 'Follow a checksum task', detail: 'Trace Flutter → Dart FFI → C++ → result.', fields: {action: 'checksum'}}, {label: 'Follow image processing', detail: 'See the same handoff for a different task.', fields: {action: 'image'}}]},
  health: {icon: '+', eyebrow: 'A shared picture of care', headline: 'Different care teams. One shared picture.', accent: '#86dfbc', light: '#237b55', action: 'Explore a patient timeline', starts: [{label: 'Start with day one', detail: 'Explore the fictional patient’s recorded values.', fields: {day: '0'}}, {label: 'Visit the appointment day', detail: 'See day three and its sample care event.', fields: {day: '2'}}]},
  expenses: {icon: '₹', eyebrow: 'A little clarity for everyday spending', headline: 'Know where your money goes.', accent: '#ffc095', light: '#97501c', action: 'Open the sample budget', starts: [{label: 'Add a lunch purchase', detail: 'Watch the total and Food category update.', fields: {name: 'Lunch', amount: '180', category: 'Food'}}, {label: 'Add a weekend train ticket', detail: 'See the effect of a Travel expense.', fields: {name: 'Train ticket', amount: '350', category: 'Travel'}}]},
  mcp: {icon: '{ }', eyebrow: 'Useful context for coding agents', headline: 'Give your agent a map of the code.', accent: '#b8acff', light: '#6652b2', action: 'Inspect a tool request', starts: [{label: 'Map the sample project', detail: 'Inspect a structured file listing.', fields: {tool: 'scan'}}, {label: 'Look inside a Python file', detail: 'Find the classes, functions, and imports.', fields: {tool: 'analyze'}}, {label: 'Find a code pattern', detail: 'Explore a prepared search response.', fields: {tool: 'search'}}]},
  email: {icon: '@', eyebrow: 'Outreach with a reason to connect', headline: 'Make your next introduction relevant.', accent: '#79ded0', light: '#167a6d', action: 'Build a sample introduction', starts: [{label: 'Apply for a Flutter role', detail: 'Match the listing to relevant mobile projects.', fields: {job: 'flutter', tone: 'concise'}}, {label: 'Introduce your AI work', detail: 'Try a warmer draft for a fictional AI team.', fields: {job: 'ai', tone: 'warm'}}]},
  family: {icon: '⌘', eyebrow: 'Names become connections', headline: 'Every relative has a place in your story.', accent: '#f2b3d1', light: '#a33b70', action: 'Explore the sample family', starts: [{label: 'Find the grandparents', detail: 'Expand a generation and inspect Mira’s connection.', view: {ancestors: true, person: 'mira'}}, {label: 'Explore the siblings', detail: 'Select Alex and follow the family relationship.', view: {children: true, person: 'alex'}}]},
  home: {icon: '⌂', eyebrow: 'An early idea for a future home', headline: 'Start shaping the home you imagine.', accent: '#95d5db', light: '#267b83', action: 'Explore material assumptions', starts: [{label: 'Explore a 650 sq ft example', detail: 'Adjust the area and teaching rates.', fields: {area: '650'}}, {label: 'Compare a larger example', detail: 'See how a 1,200 sq ft area changes the illustration.', fields: {area: '1200'}}]},
  trading: {icon: '↗', eyebrow: 'Understand the decision pipeline', headline: 'See how market data becomes a decision.', accent: '#99b9ff', light: '#4266b3', action: 'Replay a sample scenario', starts: [{label: 'Follow moderate movement', detail: 'Inspect fictitious prices and prepared sentiment.', fields: {scenario: 'positive', guardrails: true}}, {label: 'See a risk rule intervene', detail: 'Compare a volatile scenario with the rule on or off.', fields: {scenario: 'volatile', guardrails: true}}]},
  sales: {icon: '▥', eyebrow: 'Let the data tell its story', headline: 'Find the patterns behind the numbers.', accent: '#d3df88', light: '#687625', action: 'Explore the sample dashboard', starts: [{label: 'Compare all brands', detail: 'Explore the fictional two-month sales dataset.', fields: {brand: 'all', period: 'all'}}, {label: 'Focus on Samsung in February', detail: 'Use a narrower view to inspect the source rows.', fields: {brand: 'Samsung', period: '2025-02'}}]},
  news: {icon: '≡', eyebrow: 'Less reading, a clearer briefing', headline: 'Catch up without reading every article.', accent: '#ffb6a5', light: '#ac5038', action: 'Read a sample briefing', starts: [{label: 'Read a short bus-pilot briefing', detail: 'Compare the fictional article with two key points.', fields: {article: 'transit', length: 'brief'}}, {label: 'Explore a detailed library story', detail: 'See the original beside four prepared summary points.', fields: {article: 'library', length: 'detailed'}}]},
  sonar: {icon: '∿', eyebrow: 'A closer look at classification', headline: 'From a signal to a meaningful label.', accent: '#8bcdf7', light: '#236f9e', action: 'Inspect a sample signal', starts: [{label: 'Inspect sample A', detail: 'Explore the drawn values and assigned Rock label.', fields: {signal: 'rock'}}, {label: 'Compare sample B', detail: 'See a different signal with a prepared Mine label.', fields: {signal: 'mine'}}]},
  cloud: {icon: '▣', eyebrow: 'Footage, organized around the moment', headline: 'The recording you need, easier to find.', accent: '#a1d1b9', light: '#387852', action: 'Browse the sample library', starts: [{label: 'Find an entrance recording', detail: 'Filter the morning clips and inspect their details.', fields: {camera: 'Entrance', time: 'Morning'}}, {label: 'Review the evening courtyard', detail: 'Follow a recording into its illustrative storage path.', fields: {camera: 'Courtyard', time: 'Evening'}}]},
  surveillance: {icon: '◎', eyebrow: 'A monitoring interface with context', headline: 'See the scene. Understand the event.', accent: '#b5b9f5', light: '#6267b1', action: 'Inspect a drawn camera view', starts: [{label: 'Inspect the entrance event', detail: 'Connect a fixed overlay with its sample event.', fields: {scene: 'entrance', overlays: true}}, {label: 'Explore the courtyard', detail: 'Toggle the prepared overlay and compare the views.', fields: {scene: 'courtyard', overlays: false}}]},
  emoji: {icon: '☺', eyebrow: 'A small tool with a playful twist', headline: 'Say it in emoji. Bring it back to words.', accent: '#f2b7d5', light: '#a74776', action: 'Play with a message', starts: [{label: 'Encode a friendly hello', detail: 'Try a Unicode message and reverse the mapping.', fields: {message: 'Hello తెలుగు 😀'}}, {label: 'Hide a meeting note in plain sight', detail: 'Turn a short message into reversible emoji pairs.', fields: {message: 'Meet you at 6!'}}]}
};
PROJECTS_DATA.forEach(project => { project.experience = PROJECT_EXPERIENCES[project.demoId]; });

function renderProjectOverview(p) {
  const x = p.experience;
  return `<div class="product-introduction"><div class="product-introduction-copy"><span class="explorer-eyebrow">${projectEscape(x.eyebrow)}</span><h3>${projectEscape(x.headline)}</h3><p>${projectEscape(p.description)}</p><button class="project-explore-btn" data-open-sample>${projectEscape(x.action)} <span aria-hidden="true">→</span></button></div><div class="product-introduction-visual project-art-${p.gradient}">${renderProjectCover(p)}<span class="product-visual-caption">Illustrative project preview</span></div></div>
    <div class="product-context"><div><span>The challenge</span><p>${projectEscape(p.problem)}</p></div><div><span>Who it helps</span><p>${projectEscape(p.audience)}</p></div><div><span>The outcome</span><p>${projectEscape(p.result)}</p></div></div>
    <section class="product-scenarios"><div class="product-section-heading"><h3>Choose a place to start</h3><p>Explore a prepared example, step by step.</p></div><div class="product-scenario-grid">${x.starts.map((start, i) => `<button class="product-scenario" data-project-start="${i}"><span class="product-scenario-number">${String(i + 1).padStart(2, '0')}</span><strong>${projectEscape(start.label)}</strong><span>${projectEscape(start.detail)}</span><b aria-hidden="true">↗</b></button>`).join('')}</div></section>
    <div class="product-capabilities">${p.features.map(f => `<span><i aria-hidden="true">✓</i>${projectEscape(f)}</span>`).join('')}</div>`;
}

function projectEscape(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
}
function renderProjectTags(tags) {
  return `<div class="card-tags-row">${tags.map(tag => `<span class="project-tag"><span class="tag-dot"></span>${projectEscape(tag)}</span>`).join('')}</div>`;
}
function renderProjectActions(project) {
  return `<div class="card-action-row"><button class="project-explore-btn" data-explore="${project.id}" aria-haspopup="dialog" aria-label="Explore ${projectEscape(project.title)}">Explore project <span aria-hidden="true">↗</span></button><a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link" aria-label="View code for ${projectEscape(project.title)}">View code <span aria-hidden="true">↗</span></a></div>`;
}
function renderProjectPreview(project) {
  return `<div class="project-story-preview"><div><span>START WITH</span><p>${projectEscape(project.input)}</p></div><span class="story-arrow" aria-hidden="true">→</span><div><span>EXPLORE THE RESULT</span><p>${projectEscape(project.output)}</p></div></div>`;
}
function renderProjectCover(project) {
  const chip = text => `<div class="cover-input">${projectEscape(text)}</div>`;
  const pills = texts => `<div class="cover-pills">${texts.map(t => `<span>${projectEscape(t)}</span>`).join('')}</div>`;
  const line = (label, value) => `<div class="cover-line"><span>${projectEscape(label)}</span><strong>${projectEscape(value)}</strong></div>`;
  const chart = (heights = [25, 42, 36, 65, 85]) => `<div class="cover-chart">${heights.map(h => `<i style="height:${h}%"></i>`).join('')}</div>`;
  const code = text => `<pre class="cover-code">${projectEscape(text)}</pre>`;
  const wave = '<svg class="cover-wave" viewBox="0 0 240 45" fill="none"><path d="M0 30 12 29 20 15 27 36 36 22 45 28 57 5 69 38 80 17 89 30 102 12 114 34 126 20 140 26 154 7 166 31 180 15 194 29 207 22 220 30 240 27" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>';
  let title, content;
  switch (project.demoId) {
    case 'browser-agent':
      title = 'Browser task → actions';
      content = chip('“Collect the product names and prices”') + code('browser.navigate("sample.shop")') + '<p class="cover-success">✓ Task broken into browser actions</p>' + pills(['Navigate', 'Fill forms', 'Extract data']) + line('Prepared output', '2 sample rows');
      break;
    case 'legal':
      title = 'Document → explanation';
      content = '<div class="cover-document"><small>ORIGINAL CLAUSE</small><p>Written notice not fewer than thirty days prior…</p></div><div class="cover-document cover-highlight"><small>PLAIN LANGUAGE</small><p>Give written notice at least 30 days before.</p></div>' + pills(['English', 'Hindi', 'Telugu']);
      break;
    case 'query':
      title = 'Question → SQL → insight';
      content = chip('“Show total sales by year”') + code('SELECT year, SUM(sales)\nFROM sample_orders\nGROUP BY year;') + chart();
      break;
    case 'native':
      title = 'Flutter meets native code';
      content = chip('A tap starts the sample action') + '<div class="cover-flow"><span>Flutter</span><b>→</b><span>Dart FFI</span><b>→</b><span>C++</span></div><div class="cover-result">Result returns to the interface <span>↩</span></div><p class="cover-note">Concept walkthrough</p>';
      break;
    case 'health':
      title = 'Connected care portals';
      content = '<div class="cover-portals"><span><b>Patient</b><small>Appointments</small></span><span><b>Doctor</b><small>Care records</small></span><span><b>Lab</b><small>Reports</small></span><span><b>Hospital</b><small>Coordination</small></span></div><div class="cover-result">One shared platform</div>';
      break;
    case 'expenses':
      title = 'Every purchase, in perspective';
      content = line('Sample budget', '₹5,000') + '<div class="cover-total"><small>SPENT SO FAR</small><strong>₹1,050</strong></div><div class="cover-progress"><i style="width:21%"></i></div>' + line('Groceries', '₹750') + line('Bus pass', '₹300');
      break;
    case 'mcp':
      title = 'Codebase → agent context';
      content = chip('analyze_python_file("models.py")') + code('{\n  "classes": ["Customer"],\n  "functions": ["create", "find"]\n}') + '<p class="cover-success">Structured sample response</p>';
      break;
    case 'email':
      title = 'Job listing → tailored draft';
      content = chip('Flutter Developer · sample listing') + pills(['Flutter', 'Dart', 'Firebase']) + '<div class="cover-document"><small>MATCHED PORTFOLIO WORK</small><p>Expenses Tracker · Family Tree</p></div><div class="cover-email-lines"><i></i><i></i><i></i></div><p class="cover-note">Relevant projects shape the email</p>';
      break;
    case 'family':
      title = 'People → connections';
      content = '<div class="cover-tree"><div><span>Mira</span><span>Dev</span></div><i></i><div><span>Priya</span><span>Sam</span></div><i></i><div><span>Alex</span><span>Jamie</span></div></div><p class="cover-note">Explore a sample family relationship</p>';
      break;
    case 'home':
      title = 'Rules → home design';
      content = '<div class="cover-floorplan"><span class="floor-living">Living</span><span class="floor-bed">Bedroom</span><span class="floor-kitchen">Kitchen</span><span class="floor-bath">Bath</span></div><p class="cover-note">Illustrative layout · rule-based concept</p>';
      break;
    case 'trading':
      title = 'Market data + news context';
      content = '<div class="cover-trend"><svg viewBox="0 0 240 65" fill="none"><path d="M0 55 25 44 50 50 75 26 100 37 125 19 150 29 175 12 200 21 240 5" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg></div>' + pills(['Price data', 'News sentiment']) + line('Sample workflow', 'Review → decision');
      break;
    case 'sales':
      title = 'Marketplace data → patterns';
      content = '<div class="cover-mini-bars"><div><span>Samsung</span><i style="width:75%"></i></div><div><span>Vivo</span><i style="width:100%"></i></div><div><span>Pixel</span><i style="width:52%"></i></div></div>' + pills(['Brand', 'Price', 'Rating']) + '<p class="cover-note">Illustrative brand comparison</p>';
      break;
    case 'news':
      title = 'Article → shorter briefing';
      content = chip('Sample story: electric bus pilot') + '<div class="cover-document"><small>PREPARED BRIEFING</small><p>• Four buses on two routes<br>• A six-week trial<br>• Feedback before expansion</p></div>' + pills(['Articles', 'Sentiment', 'Audio']);
      break;
    case 'sonar':
      title = 'Sonar signal → sample label';
      content = chip('Illustrative signal · sample A') + wave + '<div class="cover-classification"><span>Input features</span><b>→</b><strong>Rock</strong></div><p class="cover-note">Prepared example · no live inference</p>';
      break;
    case 'cloud':
      title = 'Camera footage → library';
      content = '<div class="cover-recording"><i>▶</i><div><b>Entrance</b><small>09:15 · sample recording</small></div></div><div class="cover-recording"><i>▶</i><div><b>Courtyard</b><small>10:05 · sample recording</small></div></div>' + pills(['Store', 'Find', 'Review']);
      break;
    case 'surveillance':
      title = 'Camera view → event context';
      content = '<div class="cover-camera"><span class="cover-camera-label">DRAWN SAMPLE</span><div class="cover-camera-door"></div><div class="cover-camera-person"></div><div class="cover-camera-box"></div></div>' + line('Prepared event', 'Entrance activity');
      break;
    case 'emoji':
      title = 'A playful, reversible message';
      content = '<div class="cover-encoding"><span>Hi</span><b>↓</b><strong>😄😊 😆😋</strong><b>↓</b><span>Hi</span></div><p class="cover-note">Text → emoji pairs → original text</p>';
      break;
    default: title = project.title; content = chip(project.input) + '<div class="cover-result">' + projectEscape(project.output) + '</div>';
  }
  return `<div class="project-cover-preview" aria-hidden="true"><div class="cover-window"><div class="cover-window-header"><span>${projectEscape(title)}</span><small>Sample</small></div><div class="cover-window-body">${content}</div></div></div>`;
}
function renderProjectCard(project) {
  return `<article class="project-card card-${project.layout}" data-project-id="${project.id}"><div class="project-artwork project-art-${project.gradient}" role="img" aria-label="${projectEscape(project.title)} illustrative overview: ${projectEscape(project.input)} → ${projectEscape(project.output)}">${renderProjectCover(project)}<span class="project-art-number" aria-hidden="true">${String(project.number).padStart(2, '0')}</span></div><div class="project-card-content"><div class="project-category">${projectEscape(project.category)}</div><h3 class="card-title">${projectEscape(project.title)}</h3><p class="card-description">${projectEscape(project.description)}</p>${renderProjectTags(project.tags)}${renderProjectActions(project)}</div></article>`;
}

let currentModalIndex = 0;
let projectReturnFocus = null;
let projectBackgroundState = [];
let demoCleanup = null;

function ensureProjectModalExists() {
  if (document.getElementById('project-detail-modal')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="project-modal-backdrop" id="project-detail-modal" aria-hidden="true" inert>
      <section class="project-modal-card project-explorer" role="dialog" aria-modal="true" aria-labelledby="pm-title" aria-describedby="pm-subtitle" tabindex="-1">
        <header class="pm-header"><div class="pm-identity"><div class="pm-identity-icon" id="pm-identity-icon" aria-hidden="true"></div><div class="pm-title-wrap"><span class="explorer-eyebrow" id="pm-category"></span><h2 id="pm-title"></h2><p id="pm-subtitle"></p></div></div><div class="pm-header-right"><span class="pm-project-count" id="pm-count"></span><div class="pm-nav-controls"><button class="pm-nav-btn" id="pm-prev-btn" aria-label="Previous project">←</button><button class="pm-nav-btn" id="pm-next-btn" aria-label="Next project">→</button></div><button class="pm-close-btn" id="pm-close-btn" aria-label="Close project explorer">✕</button></div></header>
        <div class="pm-body">
          <div class="pm-tabs-nav" role="tablist" aria-label="Project sections">
            <button class="pm-tab-btn is-active" id="pm-tab-overview" role="tab" data-tab="overview" aria-controls="pm-panel-overview" aria-selected="true">Overview</button>
            <button class="pm-tab-btn" id="pm-tab-sample" role="tab" data-tab="sample" aria-controls="pm-panel-sample" aria-selected="false" tabindex="-1">Try a sample</button>
            <button class="pm-tab-btn" id="pm-tab-workflow" role="tab" data-tab="workflow" aria-controls="pm-panel-workflow" aria-selected="false" tabindex="-1">How it works</button>
          </div>
          <div class="pm-tab-panel is-active" id="pm-panel-overview" role="tabpanel" aria-labelledby="pm-tab-overview" tabindex="0"></div>
          <div class="pm-tab-panel" id="pm-panel-sample" role="tabpanel" aria-labelledby="pm-tab-sample" tabindex="0" hidden><div id="pm-demo-host"></div></div>
          <div class="pm-tab-panel" id="pm-panel-workflow" role="tabpanel" aria-labelledby="pm-tab-workflow" tabindex="0" hidden></div>
        </div>
        <footer class="pm-footer"><p class="pm-kbd-hint">Explore the idea, then inspect the code.</p><div class="pm-footer-actions"><button class="btn btn-outline" id="pm-copy-btn">Copy code link</button><a target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="pm-github-btn">View code on GitHub ↗</a></div></footer>
        <p class="pm-feedback" id="pm-feedback" role="status" aria-live="polite"></p>
      </section>
    </div>`);
  attachProjectModalEvents();
}
function openProjectModal(index, trigger) {
  ensureProjectModalExists();
  const modal = document.getElementById('project-detail-modal');
  const wasOpen = modal.classList.contains('is-active');
  if (!wasOpen) {
    projectReturnFocus = trigger || document.activeElement;
    projectBackgroundState = Array.from(document.body.children).filter(el => el !== modal && !['SCRIPT', 'STYLE'].includes(el.tagName)).map(el => ({el, inert: el.inert}));
    projectBackgroundState.forEach(({el}) => { el.inert = true; });
  }
  if (demoCleanup) demoCleanup();
  currentModalIndex = (index + PROJECTS_DATA.length) % PROJECTS_DATA.length;
  const p = PROJECTS_DATA[currentModalIndex];
  const explorer = modal.querySelector('.project-explorer');
  explorer.dataset.projectKind = p.demoId;
  explorer.style.setProperty('--project-accent-dark', p.experience.accent);
  explorer.style.setProperty('--project-accent-light', p.experience.light);
  document.getElementById('pm-identity-icon').textContent = p.experience.icon;
  document.getElementById('pm-title').textContent = p.title;
  document.getElementById('pm-subtitle').textContent = `${p.category} · Project ${String(currentModalIndex + 1).padStart(2, '0')}`;
  document.getElementById('pm-category').textContent = p.category;
  document.getElementById('pm-count').textContent = `${currentModalIndex + 1} / ${PROJECTS_DATA.length}`;
  document.getElementById('pm-feedback').textContent = '';
  document.getElementById('pm-panel-overview').innerHTML = renderProjectOverview(p);
  document.getElementById('pm-panel-workflow').innerHTML = `
    <div class="workflow-intro"><h3>From input to outcome</h3><p>Select a step to see its role in the workflow.</p></div>
    <div class="workflow-workbench"><div class="workflow-steps" role="group" aria-label="Workflow steps">${p.steps.map(([name], i) => `<button data-workflow-step="${i}" aria-pressed="${i === 0}" class="workflow-step ${i === 0 ? 'is-selected' : ''}"><span>${String(i + 1).padStart(2, '0')}</span>${projectEscape(name)}</button>`).join('')}</div>
    <div class="workflow-detail" aria-live="polite"><span class="explorer-eyebrow" id="pm-step-count">STEP 01</span><h3 id="pm-step-title">${projectEscape(p.steps[0][0])}</h3><p id="pm-step-description">${projectEscape(p.steps[0][1])}</p><div class="workflow-handoff"><div><span>Starts with</span><strong id="pm-step-input">${projectEscape(p.input)}</strong></div><b aria-hidden="true">→</b><div><span>Continues to</span><strong id="pm-step-output">${projectEscape(p.steps[1][0])}</strong></div></div></div></div>
    <div class="explorer-implementation"><h3>Inside the project</h3><p>${projectEscape(p.implementation)}</p>${renderProjectTags(p.tags)}</div>`;
  const demoHost = document.getElementById('pm-demo-host');
  if (typeof ProjectDemos !== 'undefined') demoCleanup = ProjectDemos.mount(demoHost, p.demoId);
  else { demoHost.textContent = 'The sample could not load. Refresh the page to try again.'; demoCleanup = null; }
  document.getElementById('pm-github-btn').href = p.githubUrl;
  switchModalTab('overview');
  modal.inert = false;
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('is-active');
  document.body.classList.add('project-modal-open');
  modal.querySelector('.pm-body').scrollTop = 0;
  if (!wasOpen) document.getElementById('pm-close-btn').focus();
  else if (document.activeElement === document.body || !modal.contains(document.activeElement)) document.getElementById('pm-tab-overview').focus();
}
function closeProjectModal() {
  const modal = document.getElementById('project-detail-modal');
  if (!modal || !modal.classList.contains('is-active')) return;
  if (demoCleanup) demoCleanup();
  demoCleanup = null;
  document.getElementById('pm-demo-host').replaceChildren();
  modal.classList.remove('is-active');
  document.body.classList.remove('project-modal-open');
  projectBackgroundState.forEach(({el, inert}) => { el.inert = inert; });
  projectBackgroundState = [];
  if (projectReturnFocus?.isConnected) projectReturnFocus.focus();
  modal.inert = true;
  modal.setAttribute('aria-hidden', 'true');
  projectReturnFocus = null;
}
function switchModalTab(tabName, focusTab = false) {
  const modal = document.getElementById('project-detail-modal');
  modal.querySelectorAll('[role="tab"]').forEach(btn => {
    const active = btn.dataset.tab === tabName;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
    btn.tabIndex = active ? 0 : -1;
    if (active && focusTab) btn.focus();
  });
  modal.querySelectorAll('[role="tabpanel"]').forEach(panel => {
    const active = panel.id === `pm-panel-${tabName}`;
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });
}
function showToast(message) {
  const feedback = document.getElementById('pm-feedback');
  if (feedback) feedback.textContent = message;
}
function attachProjectModalEvents() {
  const modal = document.getElementById('project-detail-modal');
  modal.addEventListener('click', async event => {
    const button = event.target.closest('button');
    if (event.target === modal || button?.id === 'pm-close-btn') { closeProjectModal(); return; }
    if (!button) return;
    if (button.id === 'pm-prev-btn') openProjectModal(currentModalIndex - 1);
    else if (button.id === 'pm-next-btn') openProjectModal(currentModalIndex + 1);
    else if (button.dataset.tab) switchModalTab(button.dataset.tab);
    else if (button.hasAttribute('data-project-start')) {
      if (typeof ProjectDemos === 'undefined') { showToast('The interactive sample could not load. Refresh the page to try again.'); return; }
      const p = PROJECTS_DATA[currentModalIndex];
      const start = p.experience.starts[Number(button.dataset.projectStart)];
      if (demoCleanup) demoCleanup();
      demoCleanup = ProjectDemos.mount(document.getElementById('pm-demo-host'), p.demoId, start);
      switchModalTab('sample', true);
      modal.querySelector('.pm-body').scrollTop = 0;
    }
    else if (button.hasAttribute('data-open-sample')) { switchModalTab('sample', true); modal.querySelector('.pm-body').scrollTop = 0; }
    else if (button.hasAttribute('data-workflow-step')) {
      const i = Number(button.dataset.workflowStep), p = PROJECTS_DATA[currentModalIndex];
      modal.querySelectorAll('[data-workflow-step]').forEach(btn => {
        btn.classList.toggle('is-selected', btn === button);
        btn.setAttribute('aria-pressed', String(btn === button));
      });
      document.getElementById('pm-step-count').textContent = `STEP ${String(i + 1).padStart(2, '0')}`;
      document.getElementById('pm-step-title').textContent = p.steps[i][0];
      document.getElementById('pm-step-description').textContent = p.steps[i][1];
      document.getElementById('pm-step-input').textContent = i === 0 ? p.input : p.steps[i - 1][0];
      document.getElementById('pm-step-output').textContent = i === p.steps.length - 1 ? p.output : p.steps[i + 1][0];
    } else if (button.id === 'pm-copy-btn') {
      const url = PROJECTS_DATA[currentModalIndex].githubUrl;
      const copyIndex = currentModalIndex;
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(url);
        if (copyIndex === currentModalIndex && modal.classList.contains('is-active')) showToast('Code link copied.');
      } catch { if (copyIndex === currentModalIndex && modal.classList.contains('is-active')) showToast(`Could not copy automatically. You can copy this link: ${url}`); }
    }
  });
  modal.addEventListener('keydown', event => {
    if (!modal.classList.contains('is-active')) return;
    if (event.key === 'Escape') { event.preventDefault(); closeProjectModal(); return; }
    if (event.key === 'Tab') {
      const items = Array.from(modal.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')).filter(el => !el.disabled && !el.closest('[hidden]') && el.getClientRects().length && el.tabIndex >= 0);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || !items.includes(document.activeElement))) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || !items.includes(document.activeElement))) { event.preventDefault(); first?.focus(); }
      return;
    }
    const target = event.target;
    if (target.getAttribute('role') === 'tab' && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const tabs = Array.from(modal.querySelectorAll('[role="tab"]')), i = tabs.indexOf(target);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (i + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      switchModalTab(tabs[next].dataset.tab, true);
      return;
    }
    if (target.closest('input, select, textarea, button, a, [contenteditable], #pm-demo-host')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); openProjectModal(currentModalIndex + (event.key === 'ArrowRight' ? 1 : -1)); }
  });
}
function renderGithubCard() {
  return `<div class="github-profile-cta-card card-wide"><h3>More ideas, more code.</h3><p class="cta-subtitle">Explore the repositories behind these projects and more of my work.</p><a href="https://github.com/kiranimmadi2?tab=repositories" target="_blank" rel="noopener noreferrer" class="btn btn-github-all">View all repositories →</a></div>`;
}
function initUnifiedProjects() {
  const grid = document.getElementById('projects-unified-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS_DATA.map(renderProjectCard).join('') + renderGithubCard();
  grid.addEventListener('click', event => {
    if (event.target.closest('a')) return;
    const card = event.target.closest('[data-project-id]');
    if (!card) return;
    const i = PROJECTS_DATA.findIndex(p => p.id === card.dataset.projectId);
    if (i >= 0) openProjectModal(i, card.querySelector('[data-explore]'));
  });
  ensureProjectModalExists();
}
if (typeof document !== 'undefined') {
  if (document.getElementById('projects-unified-grid')) initUnifiedProjects();
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initUnifiedProjects);
  else initUnifiedProjects();
}
if (typeof module !== 'undefined' && module.exports) module.exports = {PROJECTS_DATA, renderProjectCard, renderProjectPreview, renderProjectTags, renderProjectActions, renderGithubCard, initUnifiedProjects, openProjectModal, closeProjectModal};
