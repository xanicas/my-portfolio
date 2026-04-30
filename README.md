# Alexandra Silva — Portfolio

Personal portfolio site for **Alexandra Silva**, a frontend developer. Built with React and Vite, deployed to GitHub Pages.

## About

This repo is a minimal, easy-to-edit layout: navigation, hero, projects, about, and contact. Replace the placeholder project cards and contact details with your own links and copy.

## Tech stack

- HTML, CSS, JavaScript
- [React](https://react.dev/) with [Vite](https://vite.dev/)
- [Google Fonts](https://fonts.google.com/) — Inter & Space Grotesk
- Light/dark styles via `prefers-color-scheme`
- Responsive layout

## Running locally

Use **Node.js 20.19+**, **22.13+**, or **24+** (matches `package.json` `engines` and **ESLint 10**). The GitHub Actions workflow uses Node 20. **Node 21** is not supported by Vite 6’s own engine range.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/my-portfolio/` because of the `base` path in `vite.config.js`).

Build for production:

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

1. In the repo on GitHub: **Settings → Pages**. Set **Source** to **GitHub Actions** (not “Deploy from a branch”).
2. Push to `main`, or run **Deploy React Portfolio to GitHub Pages** manually from the **Actions** tab (`workflow_dispatch`). The workflow runs `npm ci`, `npm run build`, and publishes the `dist` folder.

The site is configured for a project page at **`/my-portfolio/`** (`base` in `vite.config.js`). If your repository name is different, change `base` to `"/<your-repo-name>/"`.

## Contact

Update these in `src/components/Contact.jsx` (and anywhere else you like):

- Email
- [LinkedIn](https://www.linkedin.com/in/alexandrasilva)
- [GitHub](https://github.com/alexandrasilva)

## License

Copyright 2026 Alexandra Silva. All rights reserved.
