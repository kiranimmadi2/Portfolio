# Kiran Immadi — official portfolio

AI Engineer in Bengaluru, India. Open to AI Engineer, Forward Deployed Engineer, Generative AI Engineer, and Applied AI Engineer opportunities.

Completed **B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)** at [Dayananda Sagar University](https://www.dsu.edu.in/). [Official CSE (AI & ML) program](https://www.dsu.edu.in/engineering/cse-aiml).

Primary public address: **https://kiranimmadi.vercel.app/**

## Run and maintain

This is a static HTML/CSS/JavaScript site. Node.js is only needed for the local server and maintenance scripts; no dependency installation or production build is required.

```sh
node scripts/sync-profile.cjs
node scripts/check-profile.cjs
node server.js
```

Open the local URL printed by the server. The local static server uses `about.html`; Vercel serves its canonical `/about` URL through the existing `cleanUrls` setting.

Edit `profile.json` for identity, education, roles sought, canonical origin, and portrait choice. Then run the first two commands and commit the generated HTML, JSON, text files, sitemap, robots file, and image. The generator writes static content into HTML so crawlers can read it without running JavaScript. The original portfolio layout and project catalogue remain in `index.html`.

The selected portrait is the photograph supplied by Kiran Immadi, preserved in `assets/kiran-immadi-profile-photo-original.png` and copied without alteration to `assets/kiran-immadi-profile-photo.png`. Both home page themes and the About page use this photograph. All search metadata, structured data, image sitemap entries, and AI context files point to it. The prior illustrated portraits remain in `assets/` as backups.

## Publishing and search updates

These changes are source code until the updated branch is deployed to the existing Vercel project. No changes to Google, ChatGPT, Claude, LinkedIn, or other external profiles are made by editing this repository.

1. Deploy these files to the existing Vercel project for `kiranimmadi.vercel.app`. Confirm `/`, `/about`, `/schema.json`, `/llms.txt`, `/sitemap.xml`, and the official image URL return HTTP 200.
2. Keep `profile.json.siteUrl` set to the actual primary domain. If the domain changes, regenerate before deploying. Avoid a canonical URL pointing to a different, inactive copy of the portfolio. If GitHub Pages is also published, use the Vercel canonical on that copy or configure an appropriate move separately.
3. Verify ownership in [Google Search Console](https://search.google.com/search-console), submit `https://kiranimmadi.vercel.app/sitemap.xml`, and request indexing for the home page and `/about` using URL Inspection. This needs access to the owner's Search Console account. No fake verification token is included.
4. Validate the deployed HTML in [Google's Rich Results Test](https://search.google.com/test/rich-results) and check its reported canonical URL. An eligible profile is not a promise of a particular search appearance.
5. Keep your LinkedIn, GitHub bio, resume, and job profiles consistent: name, completed B.Tech CSE (AI & ML), DSU, primary website, and selected portrait. A university program link documents the course; it does not independently verify an individual's graduation.
6. Add concrete project case studies over time: the problem, your contribution, architecture, deployment, repository, and measured outcomes you can substantiate. Evaluate search impressions and recruiter inquiries rather than repeating keywords or claiming unverified seniority.

`robots.txt` must be served at the domain root. Vercel supports this repository's root file; a project-level GitHub Pages `/Portfolio/robots.txt` does not control the whole `github.io` origin.

`llms.txt` and `llms-full.txt` provide convenient factual summaries. Search engines and AI assistants may ignore them; they do not override other sources, existing conversations, cached results, or model training data. Correcting an incorrect third-party photo or education claim may also require correcting the external source. Re-crawling and indexing are outside this code's control, and rankings or offers cannot be guaranteed.

## Research used

- [DSU official CSE (AI & ML) program](https://www.dsu.edu.in/engineering/cse-aiml): the program combines computer science foundations with AI and machine learning. The completed qualification is supplied by the portfolio owner.
- [Google: ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page): consistent person identity, image, and professional profile links.
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): ordinary SEO, crawl access, visible text, and structured data matching the page; no special AI markup requirement.
- [Google: request a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl): URL Inspection and sitemap submission; indexing is not immediate or guaranteed.

The previous code remains preserved on `backup/current-before-006931f-20261026`, with the prior untracked files in the safety stash. These profile changes are based on the restored `006931f` version.
