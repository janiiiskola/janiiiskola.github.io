Basic site built with React 19, TypeScript, and Vite. Deployed to GitHub Pages via GitHub Actions.

## Development

```sh
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Type-check and build to `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Deployment

Changes merge to `master` via pull request. The GitHub Actions workflow builds and deploys to GitHub Pages automatically on merge.
