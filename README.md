# Email Validator

A simple TypeScript-based email validation webpage with CI/CD pipeline and automated testing.

## Features

- Real-time email validation with visual feedback
- TypeScript for type safety
- Comprehensive unit tests with Jest
- CI/CD pipeline with GitHub Actions
- Automatic deployment to GitHub Pages

## Development

### Prerequisites

- Node.js 18 or 20
- npm

### Setup

```bash
npm install
npm run build
```

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Building

```bash
# Build TypeScript
npm run build

# Build in watch mode
npm run build:watch

# Clean build directory
npm run clean
```

## CI/CD Pipeline

The project uses GitHub Actions for:

- **Continuous Integration**: Runs tests and type checking on every push/PR
- **Continuous Deployment**: Automatically deploys to GitHub Pages on master branch

## Live Demo

Once deployed, the application will be available at: https://janiiiskola.github.io

## Trunk-Based Development

This project follows trunk-based development practices:

- All changes are made directly to the master branch
- Small, frequent commits
- Automated testing ensures code quality
- Automatic deployment of passing builds# Test direct push
