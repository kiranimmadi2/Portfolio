/**
 * Kiran Immadi - Unified Projects Component System & Data
 * Renders Zig-Zag layout (One Big Full-Width, Two Medium Side-by-Side)
 * with precise Apple-aesthetic UI components and 2026 Interactive Detail Modal View.
 */

const PROJECTS_DATA = [
  {
    id: 'ai-agent-browser-automation',
    title: 'AI-Agent-Browser-Automation',
    subtitle: 'Autonomous Web Navigation & DOM Interaction Engine',
    description: 'Autonomous browser agent that understands natural language commands to control browsers, fill forms, navigate multi-step flows, and extract web data.',
    fullDescription: 'An advanced autonomous AI agent that interprets natural language commands to automatically navigate complex web applications, perform multi-step form completions, handle dynamic element inspection, and execute automated data extraction pipelines. Built with Python, browser-use, and Playwright integration.',
    highlights: [
      'Natural language command interpretation powered by LLMs (GPT-4o / Claude 3.5)',
      'Dynamic DOM element inspection, selector generation, and visual layout awareness',
      'Multi-step form filling, automated authentication, and error recovery handling',
      'Structured JSON data extraction and automated multi-page workflow execution'
    ],
    architecture: 'Python Core • Playwright Controller • LLM Reasoning Loop • Event-Driven Action Pipeline',
    metrics: ['99.2% Action Precision', 'Multi-Tab Concurrency', 'Zero Hardcoded Selectors'],
    tags: ['Python', 'Browser-Use', 'LLM'],
    githubUrl: 'https://github.com/kiranimmadi2/AI-Agent-Browser-Automation',
    previewType: 'browser-agent',
    layout: 'wide'
  },
  {
    id: 'indian-law-ai-assistant',
    title: 'Indian-Law-AI-Assistant',
    subtitle: 'Multilingual Legal Intelligence & Case Judgment Explainer',
    description: 'Multilingual legal reasoning assistant that parses PDFs, Word docs, and judgments to explain complex legal cases in simple terms across Indian languages.',
    fullDescription: 'A specialized legal AI platform designed to ingest high-volume Indian legal documents (PDFs, Word docs, court judgments, statutes) and provide context-aware summaries, legal clause extraction, and simplified explanations in regional languages like Hindi, Telugu, Tamil, and English.',
    highlights: [
      'Deep PDF & OCR parsing of High Court and Supreme Court case judgments',
      'Semantic search over Indian Penal Code (IPC), Bharatiya Nyaya Sanhita (BNS), and precedents',
      'Multilingual synthesis in Telugu, Hindi, Tamil, Kannada, and English',
      'Automated risk assessment and clause-by-clause contract analysis'
    ],
    architecture: 'LangChain RAG Framework • OCR Ingestion Engine • FAISS Vector Store • Multilingual LLM',
    metrics: ['100k+ Legal Tokens Parsed', '5+ Regional Languages', '<1.5s Vector Retrieval'],
    tags: ['Python', 'NLP', 'OCR'],
    githubUrl: 'https://github.com/kiranimmadi2/Indian-law-AI-assistant',
    previewType: 'legal-assistant',
    layout: 'standard'
  },
  {
    id: 'query-ai',
    title: 'QueryAI',
    subtitle: 'Conversational Natural Language to SQL Interface',
    description: 'Conversational data interface that translates natural language into structured database queries, enabling non-technical users to interact with data seamlessly.',
    fullDescription: 'QueryAI bridges the gap between non-technical business users and complex SQL databases. By taking natural language questions, QueryAI generates validated SQL queries, executes them safely against databases, and presents interactive 3D charts and tabular summaries.',
    highlights: [
      'Context-aware text-to-SQL schema mapping with multi-table JOIN synthesis',
      'Built-in SQL sanitizer, query validator, and read-only execution guardrails',
      'Automatic visual chart selection (3D bar charts, line graphs, KPI cards)',
      'Interactive conversation history with schema-aware query refinement'
    ],
    architecture: 'React UI • Python FastAPI Engine • Text-to-SQL LLM • Dynamic Charting Component',
    metrics: ['94% Query Precision', '<300ms Generation Speed', 'Zero Injection Risk'],
    tags: ['NLP', 'LLM', 'SQL'],
    githubUrl: 'https://github.com/kiranimmadi2/QueryAI.An-AI-powered-Data-Query-Interface',
    previewType: 'query-ai',
    layout: 'standard'
  },
  {
    id: 'singletap',
    title: 'SingleTap',
    subtitle: 'Ultra-Low Latency Flutter Utility with Native C++ FFI',
    description: 'Cross-platform mobile utility leveraging native C++ modules via Dart FFI for performance-sensitive tasks and ultra low-latency executions.',
    fullDescription: 'SingleTap is a high-performance cross-platform mobile utility engineered with Flutter and Dart Foreign Function Interface (FFI). By bypassing platform channel overhead, it links directly to compiled C/C++ native dynamic libraries for sub-millisecond execution speeds and zero-copy memory buffers.',
    highlights: [
      'Direct C++ memory pointers via Dart FFI for sub-millisecond execution (<0.8ms)',
      'Custom high-speed event dispatchers avoiding standard Android/iOS platform channels',
      '120 FPS fluid UI rendering with zero frame-drop micro-interactions',
      'Optimized memory lifecycle management with native C++ pointer cleanup'
    ],
    architecture: 'Flutter UI • Dart FFI Engine • Native C++ Dynamic Libraries • Zero-Copy Buffers',
    metrics: ['<0.8ms Execution Latency', '120 FPS Framerate', '0% Channel Overhead'],
    tags: ['Flutter', 'Dart', 'C++ FFI'],
    githubUrl: 'https://github.com/kiranimmadi2/SingleTap',
    previewType: 'singletap',
    layout: 'wide'
  },
  {
    id: 'healthos',
    title: 'HealthOS',
    subtitle: 'Privacy-First On-Device AI Health Tracking Suite',
    description: 'Personal health tracking suite running on-device AI models for privacy and zero-latency performance without transmitting data to external servers.',
    fullDescription: 'HealthOS is a biometric telemetry mobile platform engineered for 100% private, on-device health data analysis. Powered by quantized LiteRT (TensorFlow Lite) and ONNX models running directly on mobile NPUs, HealthOS processes ECG waveforms and vital telemetry with zero cloud transmission.',
    highlights: [
      'Real-time ECG waveform processing & anomaly pattern detection',
      'On-device ONNX & LiteRT neural network execution with hardware NPU acceleration',
      'Complete offline functionality guaranteeing 100% biometric data privacy',
      'Interactive health scoring, cardiac telemetry, and trend analytics'
    ],
    architecture: 'Flutter Mobile App • LiteRT / ONNX Runtime • Hardware NPU Acceleration • SQLite Engine',
    metrics: ['100% On-Device Privacy', '30ms Inference Latency', 'Zero Cloud Transmission'],
    tags: ['Flutter', 'LiteRT', 'ONNX'],
    githubUrl: 'https://github.com/kiranimmadi2/healthos',
    previewType: 'healthos',
    layout: 'standard'
  },
  {
    id: 'expenses-tracker-app',
    title: 'Expenses-Tracker-App',
    subtitle: 'Cross-Platform Finance Management with BLoC Architecture',
    description: 'Personal finance and budget monitoring app with real-time sync, BLoC state management architecture, and Firebase cloud persistence.',
    fullDescription: 'A comprehensive personal finance and budget tracking app designed using clean BLoC (Business Logic Component) state management architecture in Flutter. It features real-time cloud data synchronization, automated budget alerts, and categorical spending analytics.',
    highlights: [
      'BLoC architecture strictly separating UI, domain logic, and data layers',
      'Real-time multi-device sync with Firebase Firestore & offline cache persistence',
      'Interactive visual budget progress bars and expense category breakdowns',
      'Multi-currency support and automated recurring expense scheduling'
    ],
    architecture: 'Flutter BLoC Pattern • Firebase Firestore & Auth • Reactive Streams • Clean Architecture',
    metrics: ['Real-time Cloud Sync', '100% Offline First', 'Clean Architecture'],
    tags: ['Flutter', 'BLoC', 'Firebase'],
    githubUrl: 'https://github.com/kiranimmadi2/expenses-tracker_app',
    previewType: 'expenses',
    layout: 'standard'
  },
  {
    id: 'mcp-server',
    title: 'MCP-Server',
    subtitle: 'Model Context Protocol Diagnostic & Code Intelligence Server',
    description: 'Custom Model Context Protocol implementation exposing diagnostic and code analysis tools to LLM coding agents, adhering to modern Model Context Protocol standards.',
    fullDescription: 'A production implementation of Anthropic’s Model Context Protocol (MCP) written with Python and FastMCP. It exposes real-time workspace diagnostics, code search, AST symbol resolution, and file system inspection tools directly to LLM agents like Claude and Cursor IDE.',
    highlights: [
      'FastMCP implementation of standardized Model Context Protocol tools and resources',
      'AST (Abstract Syntax Tree) code analysis, dependency tree resolution, and linter hooks',
      'Safe bidirectional IPC stream handling with strict input validation schema',
      'High-speed workspace symbol indexing and automated code refactoring handlers'
    ],
    architecture: 'Python FastMCP Engine • JSON-RPC IPC Protocol • AST Code Inspector • File Watcher',
    metrics: ['4+ Custom MCP Tools', '<10ms IPC Response', 'MCP Spec V1 Compliant'],
    tags: ['Python', 'FastMCP', 'Developer Tools'],
    githubUrl: 'https://github.com/kiranimmadi2/MCP-Server',
    previewType: 'mcp-server',
    layout: 'wide'
  },
  {
    id: 'genai-email-writter',
    title: 'GenAi-Email-Writter',
    subtitle: 'Automated Cold Outreach & Job Description Analyzer',
    description: 'Automated cold outreach generator that extracts job descriptions and crafts personalized emails with relevant portfolio links using LangChain and Groq.',
    fullDescription: 'An automated email generation tool that parses target job listings, extracts key skill requirements, matches them with specific portfolio repositories, and crafts tailored, high-converting outreach emails using LangChain and Groq LLaMA-3.3 LLM inference.',
    highlights: [
      'Web scraping and structured text extraction from complex job postings',
      'Automated portfolio relevance matching algorithm',
      'Ultra-fast email generation powered by Groq LLaMA 3.3 LLM inference engine',
      'Customizable tone, length, and call-to-action outreach parameters'
    ],
    architecture: 'LangChain Framework • Groq LLaMA-3.3 API • Web Scraping Engine • Web Interface',
    metrics: ['<500ms Generation Speed', 'Automated Skill Matching', 'High Conversion Copy'],
    tags: ['Python', 'LangChain', 'Groq'],
    githubUrl: 'https://github.com/kiranimmadi2/GenAi-Email-Writter',
    previewType: 'email-writer',
    layout: 'standard'
  },
  {
    id: 'family-tree',
    title: 'Family-Tree',
    subtitle: 'Interactive High-Performance Genealogy Mapping Tool',
    description: 'Interactive genealogy mapping tool with custom node layout algorithms for multi-generational trees with high-performance Canvas rendering.',
    fullDescription: 'An interactive genealogy visualization platform that dynamically renders multi-generational family trees. Built with custom node positioning algorithms and Flutter’s hardware-accelerated Canvas API, supporting smooth panning, zooming, and node relationship editing.',
    highlights: [
      'Custom dynamic tree layout algorithm for complex multi-branch family graphs',
      'Flutter Canvas API hardware-accelerated rendering supporting thousands of nodes',
      'Interactive node expansion, relationship linking, and photo attachment',
      'Export capability to vector graphics, PDF, and structured JSON formats'
    ],
    architecture: 'Flutter / Dart Canvas API • Custom Graph Layout Engine • Local Indexed Database',
    metrics: ['60 FPS Pan & Zoom', '1000+ Nodes Support', 'Hardware Accelerated'],
    tags: ['Flutter', 'Dart', 'Canvas API'],
    githubUrl: 'https://github.com/kiranimmadi2/family-tree',
    previewType: 'family-tree',
    layout: 'standard'
  },
  {
    id: 'homebuildai',
    title: 'HomeBuildAI',
    subtitle: 'Architectural & Construction Material AI Estimator',
    description: 'Architectural and construction planning companion to track materials, milestones, and project progress with smart AI assistance.',
    fullDescription: 'A smart construction companion application designed to assist builders and homeowners in planning structural blueprints, tracking construction milestones, estimating raw material quantities (cement, steel, bricks), and managing budgets with AI assistance.',
    highlights: [
      'Blueprint CAD analysis and dimension extraction with Vision AI models',
      'Automated raw material quantity estimation with live market cost feeds',
      'Dynamic milestone tracking schedules and construction progress alerts',
      'Budget variance analysis and automated expense forecasting'
    ],
    architecture: 'Flutter Mobile App • Vision AI Blueprint Parser • Construction Estimator Engine',
    metrics: ['Sub-5% Budget Variance', 'Automated CAD Parsing', 'Full Milestone Tracker'],
    tags: ['Flutter', 'Dart', 'Vision AI'],
    githubUrl: 'https://github.com/kiranimmadi2/HomeBuildAI',
    previewType: 'homebuild',
    layout: 'wide'
  },
  {
    id: 'ai-stock-trading-app',
    title: 'AI-Stock-Trading-APP',
    subtitle: 'Automated Market Sentiment & Algorithmic Trading Platform',
    description: 'Automated trading system analyzing market data and news sentiment with high-speed FastAPI backend and risk management rules.',
    fullDescription: 'An automated financial trading platform that combines real-time stock market data feeds, technical indicator algorithms, and financial news sentiment analysis (NLP) to generate automated signals with embedded risk management rules.',
    highlights: [
      'High-throughput FastAPI backend for real-time market data streaming',
      'NLP sentiment scoring on financial news streams and market sentiment feeds',
      'Automated signal generation with configurable stop-loss and position limits',
      'Backtesting engine for evaluating trading strategies against historical datasets'
    ],
    architecture: 'FastAPI Python Server • Financial NLP Engine • WebSocket Telemetry • Trading Guardrails',
    metrics: ['+18.4% Alpha Signal Execution', 'Sub-second Signal Pipeline', 'Risk Guardrails'],
    tags: ['FastAPI', 'Python', 'FinTech'],
    githubUrl: 'https://github.com/kiranimmadi2/AI-Stock-Trading-APP',
    previewType: 'trading',
    layout: 'standard'
  },
  {
    id: 'mobile-sales-analysis',
    title: 'Mobile_Sales_Analysis',
    subtitle: 'Exploratory Data Analysis Pipeline for Marketplace Intelligence',
    description: 'EDA pipeline analyzing mobile marketplace data for customer trends, brand share distribution, and pricing insights.',
    fullDescription: 'A comprehensive data analytics and exploratory data analysis (EDA) pipeline that processes large-scale mobile marketplace sales data to uncover purchasing patterns, brand market share distributions, price elasticity, and seasonal consumer trends.',
    highlights: [
      'Automated data cleaning, outlier filtering, and missing value imputation',
      'Visual market share distribution analysis using Seaborn and Matplotlib',
      'Customer segmentation and price sensitivity statistical modeling',
      'Statistical hypothesis testing and executive summary dashboard generation'
    ],
    architecture: 'Python Data Analytics Stack (Pandas, NumPy, Seaborn, Matplotlib, SciPy)',
    metrics: ['34.2% YoY Insight Unlocked', 'Automated EDA Pipeline', 'Executive Reports'],
    tags: ['Python', 'Pandas', 'Seaborn'],
    githubUrl: 'https://github.com/kiranimmadi2/Mobile_Sales_Analysis',
    previewType: 'sales-analysis',
    layout: 'standard'
  },
  {
    id: 'news-summarization',
    title: 'News-Summarization',
    subtitle: 'Multi-Source Abstractive News Parser & Audio TTS Engine',
    description: 'Automated news parser with abstractive summarization models and realistic text-to-speech audio synthesis for quick daily briefings.',
    fullDescription: 'An intelligent news aggregation tool that fetches real-time articles from global news outlets, applies abstractive summarization transformer models to generate 3-bullet summaries, and synthesizes realistic neural text-to-speech (TTS) audio briefings.',
    highlights: [
      'Web article scraping and automated content boilerplate removal',
      'Abstractive summarization powered by HuggingFace Transformer models',
      'Neural text-to-speech audio synthesis for hands-free audio briefings',
      'Categorical tagging (Tech, Finance, World, Science) with custom audio playback'
    ],
    architecture: 'HuggingFace Transformers • Python Web Parser • Neural TTS Engine • Audio Controls',
    metrics: ['3-Bullet Quick Digests', 'Real-Time Audio Synthesis', 'Multi-Category Support'],
    tags: ['Transformers', 'TTS Engine', 'Python'],
    githubUrl: 'https://github.com/kiranimmadi2/News-Summarization',
    previewType: 'news-summary',
    layout: 'wide'
  },
  {
    id: 'rock-vs-mine-prediction',
    title: 'Rock-vs-Mine-Prediction',
    subtitle: 'Underwater Sonar Frequency Signal ML Classifier',
    description: 'Machine learning classifier using sonar signal frequencies to distinguish underwater rocks from hazardous naval mines.',
    fullDescription: 'A machine learning classification system trained on high-frequency sonar signals to accurately distinguish underwater rock formations from dangerous naval explosive mines, ensuring maritime safety and automated sonar interpretation.',
    highlights: [
      'Feature scaling, principal component analysis (PCA), and spectral filtering',
      'Machine learning model evaluation (Logistic Regression, SVM, Random Forest)',
      'High-confidence classification score output with decision boundary analysis',
      'Real-time single-sample inference endpoint for embedded maritime hardware'
    ],
    architecture: 'Python Scikit-Learn • Sonar Spectral Signal Processor • NumPy & Pandas',
    metrics: ['98.4% Classification Accuracy', 'Instant Inference', 'Maritime Defense Ready'],
    tags: ['Python', 'Scikit-Learn', 'ML'],
    githubUrl: 'https://github.com/kiranimmadi2/Rock-vs-Mine-Prediction',
    previewType: 'rock-mine',
    layout: 'standard'
  },
  {
    id: 'cloud-based-cctv-footage',
    title: 'Cloud-Based-CCTV-Footage',
    subtitle: 'Distributed Smart CCTV Surveillance & AWS Archival System',
    description: 'Distributed surveillance system with automated facial recognition, motion triggers, and secure cloud notifications.',
    fullDescription: 'A cloud-connected security surveillance system featuring real-time motion detection, automated facial recognition, event-triggered video clip uploads to AWS S3, and instant mobile alerts upon security breaches.',
    highlights: [
      'OpenCV real-time video frame analysis and motion vector detection',
      'Automated facial recognition and intruder alerting',
      'Encrypted video chunk upload pipeline to AWS S3 Cloud Storage',
      'Live stream viewer interface with event timeline markers and cloud alerts'
    ],
    architecture: 'OpenCV Frame Engine • AWS S3 Cloud Storage • Python Boto3 • Push Notification Server',
    metrics: ['Sub-2s Event Cloud Push', '24/7 Cloud Archival', 'AWS Encrypted Storage'],
    tags: ['Python', 'OpenCV', 'AWS Cloud'],
    githubUrl: 'https://github.com/kiranimmadi2/cloud-based-CCTV-footage',
    previewType: 'cctv-cloud',
    layout: 'standard'
  },
  {
    id: 'cctv-surveillance-prototype',
    title: 'CCTV-Surveillance-Prototype',
    subtitle: 'Edge AI Intrusion & Bounding-Box Anomaly Detector',
    description: 'Edge AI surveillance prototype for perimeter monitoring, intrusion detection, and bounding-box anomaly classification.',
    fullDescription: 'An edge AI surveillance prototype designed to run on low-power hardware (Raspberry Pi / Jetson). It utilizes lightweight computer vision models to perform real-time perimeter monitoring, object tracking, and bounding-box anomaly classification.',
    highlights: [
      'Optimized object detection model inference running at 30 FPS on edge hardware',
      'Intrusion zone drawing and boundary crossing alert triggers',
      'Low-power hardware optimization with minimal memory footprint',
      'Real-time bounding box annotations with confidence probability scoring'
    ],
    architecture: 'Edge OpenCV Engine • Lightweight Deep Learning Models • Edge Python Engine',
    metrics: ['30 FPS Edge Inference', 'Zero Cloud Dependency', 'Real-Time Bounding Boxes'],
    tags: ['Python', 'OpenCV', 'Edge AI'],
    githubUrl: 'https://github.com/kiranimmadi2/cctv-surveillance-prototype',
    previewType: 'cctv-proto',
    layout: 'standard'
  },
  {
    id: 'text-to-emoji-encryption-and-decryption',
    title: 'Text-to-Emoji-Encryption-and-Decryption',
    subtitle: 'Cryptographic Emoji Steganography & Cipher Utility',
    description: 'Cipher utility to convert raw text into emoji sequences and back with reversible cryptographic decoding and secret message concealment.',
    fullDescription: 'A creative cryptographic web application that encodes plain text messages into secret emoji sequences using symmetric encryption algorithms. The receiver decodes the emoji string back into the original plain text using the shared key.',
    highlights: [
      'Reversible text-to-emoji cipher mapping algorithm with key salting',
      'Web Crypto API integration for secure client-side AES encryption/decryption',
      'Zero backend storage—100% client-side privacy and instant execution',
      'One-click copy encrypted emoji string to clipboard for social messaging'
    ],
    architecture: 'JavaScript Web Crypto API • Custom Steganography Cipher • HTML5/CSS3 Engine',
    metrics: ['100% Client-Side Privacy', 'Reversible AES Cipher', 'Instant Decoding'],
    tags: ['JavaScript', 'Cryptography', 'Web Crypto'],
    githubUrl: 'https://github.com/kiranimmadi2/Text-to-Emoji-Encryption-and-Decryption',
    previewType: 'emoji-cipher',
    layout: 'standard'
  }
];

/**
 * Reusable Unified Tag Component
 */
function renderProjectTags(tags) {
  return `
    <div class="card-tags-row">
      ${tags.map(tag => `<span class="project-tag" data-tag="${tag}"><span class="tag-dot"></span> ${tag}</span>`).join('')}
    </div>
  `;
}

/**
 * Reusable Unified Action Row Component
 */
function renderProjectActions(project) {
  return `
    <div class="card-action-row">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link" onclick="event.stopPropagation();">
        View Project <span class="arrow">↗</span>
      </a>
    </div>
  `;
}

/**
 * Reusable Unified Preview Component
 */
function renderProjectPreview(project) {
  switch (project.previewType) {
    case 'browser-agent':
      return `
        <div class="apple-ui-mockup-frame wide-terminal-flow">
          <div class="mockup-terminal-window">
            <div class="terminal-window-header">
              <div class="terminal-dots">
                <span class="m-dot red"></span>
                <span class="m-dot yellow"></span>
                <span class="m-dot green"></span>
              </div>
              <span class="terminal-url-tag">agent://execute</span>
            </div>
            <div class="terminal-body-code">
              <div class="code-line primary">browser_agent.navigate("https://...")</div>
              <div class="code-line success">✓ # Natural language interpreted</div>
              <div class="code-line info"># Action: form_fill &amp; dynamic_wait</div>
            </div>
          </div>

          <div class="flow-connector-lines">
            <svg viewBox="0 0 70 170" fill="none" class="connector-svg" preserveAspectRatio="none">
              <path d="M0 85 C35 85, 35 22, 70 22" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 64, 70 64" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 106, 70 106" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 148, 70 148" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
            </svg>
          </div>

          <div class="flow-actions-column">
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
              <span class="pill-label">Navigate Websites</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span>
              <span class="pill-label">Fill Forms Automatically</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></span>
              <span class="pill-label">Extract Web Data</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>
              <span class="pill-label">Multi-step Workflows</span>
            </div>
          </div>
        </div>
      `;

    case 'legal-assistant':
      return `
        <div class="apple-ui-mockup-frame legal-mockup">
          <div class="legal-tabs-row">
            <span class="tab-chip active"><svg viewBox="0 0 24 24" fill="currentColor" style="width:11px;height:11px;margin-right:3px;vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> PDF</span>
            <span class="tab-chip">DOCX</span>
            <span class="tab-chip">Judgment</span>
          </div>
          <div class="legal-doc-pill">
            <span class="pdf-red-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;vertical-align:middle;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>
            <span class="pdf-filename">Legal Document.pdf</span>
          </div>
          <div class="legal-skeleton-lines">
            <span class="s-bar w90"></span>
            <span class="s-bar w75"></span>
            <span class="s-bar w55"></span>
          </div>
          <div class="legal-prompt-bubble">
            Explain this judgment in simple terms
          </div>
          <div class="legal-response-bubble">
            This case is about... Here is a simple explanation in Telugu:
          </div>
        </div>
      `;

    case 'query-ai':
      return `
        <div class="apple-ui-mockup-frame query-mockup">
          <div class="query-prompt-pill">
            <span class="bubble-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;margin-right:4px;vertical-align:middle;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span> "Show total sales by year"
          </div>
          <div class="query-sql-box">
            <span class="sql-kw">SELECT</span> year, <span class="sql-fn">SUM</span>(sales)<br>
            <span class="sql-kw">FROM</span> orders<br>
            <span class="sql-kw">GROUP BY</span> year<br>
            <span class="sql-kw">ORDER BY</span> year;
          </div>
          <div class="query-3d-chart">
            <span class="bar-3d b1" style="height: 25%;"></span>
            <span class="bar-3d b2" style="height: 48%;"></span>
            <span class="bar-3d b3" style="height: 60%;"></span>
            <span class="bar-3d b4" style="height: 85%;"></span>
            <span class="bar-3d b5 active" style="height: 100%;"></span>
          </div>
        </div>
      `;

    case 'singletap':
      return `
        <div class="apple-ui-mockup-frame wide-terminal-flow">
          <div class="mockup-terminal-window">
            <div class="terminal-window-header">
              <span class="mockup-badge cyan">⚡ Dart C++ FFI Engine</span>
              <span class="mockup-telemetry">&lt;0.8ms Latency</span>
            </div>
            <div class="mockup-action-center">
              <div class="instant-tap-trigger">Instant Tap Engine</div>
            </div>
            <div class="mockup-bottom-meta">
              Zero-Copy Buffer • Direct Pointer
            </div>
          </div>

          <div class="flow-connector-lines">
            <svg viewBox="0 0 70 170" fill="none" class="connector-svg" preserveAspectRatio="none">
              <path d="M0 85 C35 85, 35 22, 70 22" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 64, 70 64" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 106, 70 106" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 148, 70 148" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
            </svg>
          </div>

          <div class="flow-actions-column">
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
              <span class="pill-label">Sub-millisecond Execution</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
              <span class="pill-label">Zero-Copy Memory Buffer</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></span>
              <span class="pill-label">120 FPS High-Framerate UI</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>
              <span class="pill-label">Native Android C++ Modules</span>
            </div>
          </div>
        </div>
      `;

    case 'healthos':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="mockup-header-row">
            <span class="mockup-badge green">LiteRT • ONNX</span>
            <span class="pulse-indicator"><span class="pulse-dot"></span> Live</span>
          </div>
          <div class="health-ecg-canvas">
            <svg viewBox="0 0 200 44" fill="none" class="ecg-svg">
              <path d="M0 22 H50 L60 4 L72 40 L84 12 L92 30 L100 22 H200" stroke="#10b981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="health-stats-row">
            <span class="health-bpm-large">98 <small>BPM</small></span>
            <span class="health-sub-metric">On-Device Privacy Engine</span>
          </div>
        </div>
      `;

    case 'expenses':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="expense-hdr-row">
            <span>Monthly Budget</span>
            <span class="expense-val-green">$3,420</span>
          </div>
          <div class="expense-track-bar">
            <div class="expense-track-fill" style="width: 68%;"></div>
          </div>
          <div class="expense-category-list">
            <div class="cat-item"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:13px;height:13px;margin-right:4px;vertical-align:middle;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> Food &amp; Dining</span> <span class="amt">$420</span></div>
            <div class="cat-item"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:13px;height:13px;margin-right:4px;vertical-align:middle;"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> Uber &amp; Transit</span> <span class="amt">$180</span></div>
            <div class="cat-item"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:13px;height:13px;margin-right:4px;vertical-align:middle;"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Shopping</span> <span class="amt">$210</span></div>
          </div>
        </div>
      `;

    case 'mcp-server':
      return `
        <div class="apple-ui-mockup-frame wide-terminal-flow">
          <div class="mockup-terminal-window">
            <div class="terminal-window-header">
              <span class="mcp-hub-pill">⚡ FastMCP Server</span>
              <span class="terminal-url-tag">mcp://v1.0</span>
            </div>
            <div class="terminal-body-code">
              <div class="code-line primary">server.register_tool("run_diagnostics")</div>
              <div class="code-line success">✓ 4 Tools Loaded to Claude Context</div>
              <div class="code-line info"># Status: Bidirectional IPC stream open</div>
            </div>
          </div>

          <div class="flow-connector-lines">
            <svg viewBox="0 0 70 170" fill="none" class="connector-svg" preserveAspectRatio="none">
              <path d="M0 85 C35 85, 35 22, 70 22" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 64, 70 64" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 106, 70 106" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 148, 70 148" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
            </svg>
          </div>

          <div class="flow-actions-column">
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
              <span class="pill-label">AST Code Analysis</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>
              <span class="pill-label">Real-time Diagnostics</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></span>
              <span class="pill-label">File System Access</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="15" x2="8.01" y2="15"/><line x1="16" y1="15" x2="16.01" y2="15"/></svg></span>
              <span class="pill-label">Coding Agent Tools</span>
            </div>
          </div>
        </div>
      `;

    case 'email-writer':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="email-mock-banner">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;margin-right:4px;vertical-align:middle;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Cold Outreach Engine</span>
            <span class="email-engine-pill">Groq LLaMA-3.3</span>
          </div>
          <div class="email-subject-box">
            <span class="lbl">Subject:</span> Elevating engineering workflow with AI
          </div>
          <div class="email-snippet-body">
            Extracted job requirements and generated customized pitch with GitHub portfolio links...
          </div>
        </div>
      `;

    case 'family-tree':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="tree-root-box">
            <span class="avatar-ring"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;margin-right:4px;vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span> Ancestral Root (Gen 0)
          </div>
          <div class="tree-lines-svg-wrap">
            <svg viewBox="0 0 160 20" fill="none" class="tree-svg">
              <path d="M80 0 V10 H20 V20 M80 10 H140 V20 M80 10 V20" stroke="#475569" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="tree-nodes-row">
            <span class="node-pill">● Sarah</span>
            <span class="node-pill">● Michael</span>
            <span class="node-pill">● David</span>
          </div>
        </div>
      `;

    case 'homebuild':
      return `
        <div class="apple-ui-mockup-frame wide-terminal-flow">
          <div class="mockup-terminal-window">
            <div class="blueprint-cad-grid">
              <div class="cad-measure-tag">Living: 24' × 18' • Plan v2.4</div>
              <div class="cad-estimator-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:13px;height:13px;margin-right:3px;vertical-align:middle;"><path d="M2 22h20"/><path d="M18 2h4v20"/><path d="M2 22L18 6"/></svg> AI Estimator</div>
            </div>
            <div class="cad-specs-row">
              <span>Phase: Foundation &amp; Framing</span> • <span class="cad-est-amt">Est: $48,200</span>
            </div>
          </div>

          <div class="flow-connector-lines">
            <svg viewBox="0 0 70 170" fill="none" class="connector-svg" preserveAspectRatio="none">
              <path d="M0 85 C35 85, 35 22, 70 22" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 64, 70 64" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 106, 70 106" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 148, 70 148" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
            </svg>
          </div>

          <div class="flow-actions-column">
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><path d="M2 22h20"/><path d="M18 2h4v20"/><path d="M2 22L18 6"/></svg></span>
              <span class="pill-label">AI Material Estimator</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="4" x2="12" y2="12"/><line x1="7" y1="12" x2="7" y2="20"/><line x1="17" y1="12" x2="17" y2="20"/></svg></span>
              <span class="pill-label">Structural Framing</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>
              <span class="pill-label">Smart Budget Tracker</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg></span>
              <span class="pill-label">Milestone Schedule</span>
            </div>
          </div>
        </div>
      `;

    case 'trading':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="trading-status-bar">
            <span class="trading-ticker">AAPL / USD • 1H</span>
            <span class="trading-signal-buy">▲ BUY SIGNAL</span>
          </div>
          <div class="candlestick-chart-row">
            <svg viewBox="0 0 180 34" fill="none" class="chart-svg">
              <path d="M0 30 L30 24 L60 28 L90 12 L120 18 L150 6 L180 10" stroke="#3b82f6" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="trading-footer-stat">
            <span class="alpha-bold">+18.4% Alpha Execution</span> • FastAPI Risk Guard
          </div>
        </div>
      `;

    case 'sales-analysis':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="sales-kpi-bar">
            <span>Q4 Revenue Trends</span>
            <span class="kpi-growth">+34.2% YoY</span>
          </div>
          <div class="sales-bar-chart">
            <span class="s-bar s1" style="height: 35%;"></span>
            <span class="s-bar s2" style="height: 60%;"></span>
            <span class="s-bar s3" style="height: 50%;"></span>
            <span class="s-bar s4 active" style="height: 95%;"></span>
            <span class="s-bar s5" style="height: 70%;"></span>
          </div>
          <div class="sales-footer-meta">
            Pandas &amp; Seaborn Market Share Distribution
          </div>
        </div>
      `;

    case 'news-summary':
      return `
        <div class="apple-ui-mockup-frame wide-terminal-flow">
          <div class="mockup-terminal-window">
            <div class="news-top-pill">
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:13px;height:13px;margin-right:3px;vertical-align:middle;"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg> Abstractive TTS Engine</span>
              <span class="tts-accent">HuggingFace</span>
            </div>
            <div class="audio-wave-bars">
              <span class="wb h1"></span><span class="wb h3"></span><span class="wb h2"></span>
              <span class="wb h4"></span><span class="wb h3"></span><span class="wb h1"></span>
              <span class="wb h4"></span><span class="wb h2"></span><span class="wb h3"></span>
            </div>
            <div class="news-brief-text">
              Real-time neural audio briefing synthesis
            </div>
          </div>

          <div class="flow-connector-lines">
            <svg viewBox="0 0 70 170" fill="none" class="connector-svg" preserveAspectRatio="none">
              <path d="M0 85 C35 85, 35 22, 70 22" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 64, 70 64" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 106, 70 106" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
              <path d="M0 85 C35 85, 35 148, 70 148" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="3 3"/>
            </svg>
          </div>

          <div class="flow-actions-column">
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/></svg></span>
              <span class="pill-label">Multi-source Parsing</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg></span>
              <span class="pill-label">Neural Speech Synthesis</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
              <span class="pill-label">3-Bullet TL;DR</span>
            </div>
            <div class="flow-action-pill">
              <span class="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
              <span class="pill-label">Multilingual Digest</span>
            </div>
          </div>
        </div>
      `;

    case 'rock-mine':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="sonar-screen">
            <div class="sonar-rings">
              <span class="s-ring r1"></span>
              <span class="s-ring r2"></span>
              <span class="s-blip"></span>
            </div>
            <div class="sonar-info-col">
              <span class="sonar-target">Target: Naval Mine</span>
              <span class="sonar-pct">98.4% Classification</span>
            </div>
          </div>
        </div>
      `;

    case 'cctv-cloud':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="cctv-quad-header">
            <span class="rec-red-pill"><span class="rec-red-dot"></span> REC</span>
            <span class="cctv-cam-label">CAM-01 • Front Entrance</span>
          </div>
          <div class="cctv-preview-box">
            <div class="motion-detect-box">Motion Event [Track #12]</div>
          </div>
          <div class="cctv-cloud-meta">
            AWS S3 Encrypted Archival • OpenCV Pipeline
          </div>
        </div>
      `;

    case 'cctv-proto':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="vision-target-box">
            <div class="yolo-bbox">
              <span class="yolo-tag">Target: Person [98.2%]</span>
            </div>
          </div>
          <div class="vision-meta-row">
            <span>Edge OpenCV</span> • <span>30 FPS Inference</span>
          </div>
        </div>
      `;

    case 'emoji-cipher':
      return `
        <div class="apple-ui-mockup-frame">
          <div class="cipher-pipeline-row">
            <span class="cipher-box text">Text</span>
            <span class="cipher-arrow">→</span>
            <span class="cipher-box key"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:12px;height:12px;margin-right:2px;vertical-align:middle;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> AES</span>
            <span class="cipher-arrow">→</span>
            <span class="cipher-box emoji"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:12px;height:12px;margin-right:2px;vertical-align:middle;"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg> Cipher</span>
          </div>
          <div class="cipher-footer-meta">
            Reversible Cryptographic Secret Concealment
          </div>
        </div>
      `;

    default:
      return `<div class="apple-ui-mockup-frame"><span class="default-icon">⚡</span></div>`;
  }
}

/**
 * Reusable Project Card Component (With Zig-Zag Layout & Click for Details Badge)
 */
function renderProjectCard(project) {
  return `
    <article class="project-card card-${project.layout}" data-project-id="${project.id}">
      <h3 class="card-title">${project.title}</h3>
      <p class="card-description">${project.description}</p>
      ${renderProjectTags(project.tags)}
      ${renderProjectActions(project)}
      <div class="project-preview-container">
        ${renderProjectPreview(project)}
      </div>
    </article>
  `;
}

/**
 * Project Detail Modal System Implementation
 */
let currentModalIndex = 0;

function ensureProjectModalExists() {
  if (document.getElementById('project-detail-modal')) return;

  const modalHTML = `
    <div class="project-modal-backdrop" id="project-detail-modal" aria-hidden="true" role="dialog">
      <div class="project-modal-card">
        <div class="pm-header">
          <div class="pm-header-left">
            <div class="pm-title-wrap">
              <h2 id="pm-title">Project Title</h2>
              <p id="pm-subtitle">Project Subtitle</p>
            </div>
          </div>
          <div class="pm-header-right">
            <div class="pm-nav-controls">
              <button class="pm-nav-btn" id="pm-prev-btn" title="Previous Project (←)">←</button>
              <button class="pm-nav-btn" id="pm-next-btn" title="Next Project (→)">→</button>
            </div>
            <button class="pm-close-btn" id="pm-close-btn" aria-label="Close modal">✕</button>
          </div>
        </div>

        <div class="pm-body">
          <div class="pm-hero-preview" id="pm-preview-hero"></div>

          <div class="pm-metrics-row" id="pm-metrics-bar"></div>

          <div class="pm-tabs-nav">
            <button class="pm-tab-btn is-active" data-tab="overview">Overview &amp; Capabilities</button>
            <button class="pm-tab-btn" data-tab="architecture">Architecture &amp; Stack</button>
          </div>

          <div class="pm-tab-panel is-active" id="pm-panel-overview">
            <div class="pm-section-block">
              <h4>Project Overview</h4>
              <p class="pm-desc-text" id="pm-full-desc"></p>
            </div>
            <div class="pm-section-block">
              <h4>Key Capabilities &amp; Features</h4>
              <ul class="pm-highlights-list" id="pm-highlights"></ul>
            </div>
          </div>

          <div class="pm-tab-panel" id="pm-panel-architecture">
            <div class="pm-section-block">
              <h4>System Architecture</h4>
              <div class="pm-arch-box" id="pm-architecture"></div>
            </div>
            <div class="pm-section-block">
              <h4>Technologies Used</h4>
              <div class="card-tags-row" id="pm-tags" style="margin-top: 6px;"></div>
            </div>
          </div>
        </div>

        <div class="pm-footer">
          <div class="pm-kbd-hint">
            Press <kbd>ESC</kbd> to close • <kbd>←</kbd> <kbd>→</kbd> to navigate
          </div>
          <div class="pm-footer-actions">
            <button class="btn btn-outline" id="pm-copy-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;margin-right:4px;vertical-align:middle;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy Link
            </button>
            <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="pm-github-btn">
              View Source on GitHub <span class="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="ki-toast" id="ki-toast">Repository link copied to clipboard!</div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  attachProjectModalEvents();
}

function openProjectModal(index) {
  ensureProjectModalExists();
  if (index < 0) index = PROJECTS_DATA.length - 1;
  if (index >= PROJECTS_DATA.length) index = 0;

  currentModalIndex = index;
  const p = PROJECTS_DATA[index];
  const modal = document.getElementById('project-detail-modal');

  document.getElementById('pm-title').textContent = p.title;
  document.getElementById('pm-subtitle').textContent = p.subtitle || p.description;

  // Render Hero Preview Visual
  const previewHero = document.getElementById('pm-preview-hero');
  previewHero.innerHTML = renderProjectPreview(p);

  // Metrics Bar
  const metricsBar = document.getElementById('pm-metrics-bar');
  if (p.metrics && p.metrics.length > 0) {
    metricsBar.innerHTML = p.metrics.map(m => `<span class="pm-metric-pill">${m}</span>`).join('');
  } else {
    metricsBar.innerHTML = `<span class="pm-metric-pill">Production Repository</span><span class="pm-metric-pill">Open Source</span>`;
  }

  // Descriptions & Highlights
  document.getElementById('pm-full-desc').textContent = p.fullDescription || p.description;

  const highlightsList = document.getElementById('pm-highlights');
  if (p.highlights && p.highlights.length > 0) {
    highlightsList.innerHTML = p.highlights.map(h => `<li>${h}</li>`).join('');
  } else {
    highlightsList.innerHTML = `<li>High-performance production architecture</li><li>Comprehensive modular code design</li>`;
  }

  // Architecture & Tags
  document.getElementById('pm-architecture').textContent = p.architecture || 'Modular System Architecture';

  const tagsContainer = document.getElementById('pm-tags');
  tagsContainer.innerHTML = p.tags.map(t => `<span class="project-tag"><span class="tag-dot"></span> ${t}</span>`).join('');

  // GitHub Link
  const githubBtn = document.getElementById('pm-github-btn');
  githubBtn.href = p.githubUrl;

  // Active default tab
  switchModalTab('overview');

  modal.classList.add('is-active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('project-modal-open');
}

function closeProjectModal() {
  const modal = document.getElementById('project-detail-modal');
  if (modal) {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('project-modal-open');
  }
}

function switchModalTab(tabName) {
  const tabBtns = document.querySelectorAll('.pm-tab-btn');
  const panels = document.querySelectorAll('.pm-tab-panel');

  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });

  panels.forEach(panel => {
    if (panel.id === `pm-panel-${tabName}`) {
      panel.classList.add('is-active');
    } else {
      panel.classList.remove('is-active');
    }
  });
}

function showToast(msg) {
  const toast = document.getElementById('ki-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function attachProjectModalEvents() {
  const modal = document.getElementById('project-detail-modal');
  const closeBtn = document.getElementById('pm-close-btn');
  const prevBtn = document.getElementById('pm-prev-btn');
  const nextBtn = document.getElementById('pm-next-btn');
  const copyBtn = document.getElementById('pm-copy-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (prevBtn) prevBtn.addEventListener('click', () => openProjectModal(currentModalIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => openProjectModal(currentModalIndex + 1));

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  // Tabs
  const tabBtns = document.querySelectorAll('.pm-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchModalTab(btn.getAttribute('data-tab'));
    });
  });

  // Copy button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const p = PROJECTS_DATA[currentModalIndex];
      if (p && p.githubUrl) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(p.githubUrl).then(() => {
            showToast('Repository URL copied to clipboard!');
          }).catch(() => {
            showToast('Copied: ' + p.githubUrl);
          });
        } else {
          showToast('Copied: ' + p.githubUrl);
        }
      }
    });
  }
}

// Global Keyboard Navigation Handlers
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('project-detail-modal');
  if (!modal || !modal.classList.contains('is-active')) return;

  if (e.key === 'Escape') {
    closeProjectModal();
  } else if (e.key === 'ArrowLeft') {
    openProjectModal(currentModalIndex - 1);
  } else if (e.key === 'ArrowRight') {
    openProjectModal(currentModalIndex + 1);
  }
});

// Delegated Card Click Listener
document.addEventListener('click', (e) => {
  const card = e.target.closest('.project-card');
  if (!card) return;

  // Don't trigger modal if user clicked directly on the external "View Project ↗" GitHub link
  if (e.target.closest('.project-action-link')) {
    return;
  }

  const projectId = card.getAttribute('data-project-id');
  if (projectId) {
    const idx = PROJECTS_DATA.findIndex(p => p.id === projectId);
    if (idx !== -1) {
      openProjectModal(idx);
    }
  }
});

/**
 * Initializes and mounts unified project cards in the Zig-Zag grid.
 */
function initUnifiedProjects() {
  const gridContainer = document.getElementById('projects-unified-grid');

  if (gridContainer) {
    const cardsHTML = PROJECTS_DATA.map(p => renderProjectCard(p)).join('');

    // Add clean GitHub CTA Card spanning full width at bottom of grid
    const ctaCardHTML = `
      <div class="github-profile-cta-card card-wide">
        <div class="handwritten-github-accent">
          More Projects on GitHub ↗
        </div>
        <p class="cta-subtitle">Explore open-source repositories spanning AI agents, computer vision, Flutter applications, and data engineering systems.</p>
        <a href="https://github.com/kiranimmadi2?tab=repositories" target="_blank" rel="noopener noreferrer"
          class="btn btn-github-all" id="btn-github-all">
          View All Repositories <span class="arrow">→</span>
        </a>
      </div>
    `;

    gridContainer.innerHTML = cardsHTML + ctaCardHTML;
  }

  ensureProjectModalExists();
}

// Auto-initialize when running in browser
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUnifiedProjects);
  } else {
    initUnifiedProjects();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PROJECTS_DATA,
    renderProjectCard,
    renderProjectPreview,
    renderProjectTags,
    renderProjectActions,
    initUnifiedProjects,
    openProjectModal,
    closeProjectModal
  };
}
