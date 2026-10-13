# Project explorer

The portfolio uses `projects.js` for project stories and `project-demos.js` for local samples. `project-explorer.css` scopes the new layout. No sample makes network requests or uses credentials.

Each card has its own CSS gradient cover with a compact, project-specific illustrative interface. Covers highlight the input, workflow, or result without making performance claims. The project grid uses three columns on desktop, two below 1,000 px, and one below 650 px. Card descriptions stay concise; the detailed input-to-output diagram lives in the explorer overview.

Every explorer has a distinct introduction and visual identity, plus starting-scenario buttons that open the sample with its corresponding inputs. `project-experiences.css` styles the product-specific workspaces: a browser mission, legal reading desk, query console, native stack, patient timeline, purchase ledger, code console, email composer, family canvas, material calculator, market replay, sales dashboard, editorial desk, signal workbench, recording library, monitoring desk, and emoji studio. Samples reset to their default values when reset, switched, or reopened. The workflow tab shows each step’s incoming and outgoing handoff.

Run locally with `node server.js` or `npm start`. Install the test-only dependency with `npm ci --ignore-scripts`, then run `npm test` for calculations, metadata consistency, and DOM interaction tests covering all 17 projects. The page itself needs no dependencies or build step. DOM tests simulate layout visibility and the inert property; they do not replace browser visual checks. After changing project content, run `npm run sync:projects` to update the static HTML fallback, JSON-LD, schema file, and project directories in the LLM text files.

## Content verification

Repository metadata and README files were inspected on 12 October 2026 through the GitHub connector. Repository URLs are retained in each project entry.

- Browser Automation: Python / Gradio WebUI on browser-use; model configuration and persistent sessions documented.
- Indian Law Assistant: document upload, language detection, summaries, translation, OpenAI and Gemini documented. Previous RAG / FAISS / contract-risk claims removed.
- QueryAI: React, Gemini, structured queries, charting documented. Unsupported latency, precision and zero-risk claims removed.
- SingleTap: repository documentation unavailable (404). Existing Flutter / FFI approach is explicitly illustrative; benchmark and launcher claims removed.
- HealthOS: Flutter role-based portals, Riverpod, GoRouter, Supabase and Gemini documented. Previous on-device ONNX / NPU / privacy claims removed.
- Expenses Tracker: repository description confirms Flutter, Firebase and BLoC; README is minimal. Sample budgets do not assert production features.
- MCP Code Analysis: standard-library Python, code scanning, extraction and pattern search documented. Full JSON-RPC MCP registration is roadmap work, not presented as implemented.
- GenAI Email Writer: Streamlit, LangChain, Groq, job extraction and vector-database portfolio matching documented.
- Family Tree: Plink Tree profiles, relationships, handles, search, Flutter / BLoC / Firebase documented. Unsupported node counts and export claims removed.
- HomeBuildAI: README identifies a rule-based home-design Flutter project. Vision AI / CAD / market-feed / budget-variance claims removed; the local estimate is separately labeled educational.
- AI Stock Trading: README describes Flutter, FastAPI, stock APIs and brokerage integration. No documented returns or production risk-rule claims are retained.
- Mobile Sales Analysis: README describes listings, brands, ratings, prices and Pandas / Matplotlib / Seaborn. Monthly sales rows in the demo are fictional.
- News Summarization: Streamlit, FastAPI, company news sentiment, TextBlob, NLTK and Hindi gTTS summaries documented. Fictional sample articles are prepared locally.
- Rock vs Mine: repository description confirms sonar classification; README unavailable (404). Sample labels and signals are illustrative, with no accuracy claims.
- Cloud CCTV: README describes footage storage, streaming, playback and access control, with technology alternatives. No one deployed cloud stack is asserted.
- CCTV Surveillance: HTML dashboard prototype documented; overlays are fixed illustrations, not live inference.
- Emoji Encoding: README describes reversible character mapping. Sample uses UTF-8 byte pairs; it is not secure encryption or AES.

## Manual acceptance checks

Open each project, try its sample, reset it, select a workflow step, and verify its source link. Test next/previous navigation and closing/reopening to confirm state isolation. Check keyboard-only use, both themes, a narrow viewport, and reduced-motion preferences. Enter empty / invalid amounts and malformed emoji sequences; feedback should explain how to recover. Clipboard failures must not report a successful copy.
