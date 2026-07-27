# Mid Year Review website bundle

This bundle contains the complete production website and every project artifact required to reproduce, edit, validate, build, and publish it: source code, static assets, generated website files, source ledger, specifications, validation and deployment scripts, hosting configuration, and dependency lockfile.

## Publish the finished website

Use the contents of `website/` as the publishing root. Its `index.html`, `assets/`, images, and `server/` folder are already production-built. Keep the folder structure intact when uploading.

## Edit or rebuild the website

Use `editable-source/`. It contains the React/TypeScript source, public assets, content-validation scripts, source ledger, specifications, package manifest and lockfile, and existing Sites hosting configuration. It also includes the original project README and lint/TypeScript/Vite configuration. After installing dependencies, run:

```sh
npm run validate:content
npm run lint
npm run build
```

The resulting publishable files will be created in `dist/`.

`node_modules/` is intentionally not included: it contains downloaded third-party packages rather than website code, and is recreated exactly from the included `package-lock.json` with `npm install`. Git history is also not included because it is not part of the website or its publishable code.

## ChatGPT browser upload

Download this ZIP and attach it with the browser's upload control (rather than pasting it as text). Ask ChatGPT to use `website/` as the ready-to-publish static site, or `editable-source/` if you want it to modify the code first.
