# Vite Plugin React Scan

A zero-configuration Vite plugin that seamlessly integrates [react-scan](https://github.com/aidenybai/react-scan) into your React development workflow.

## Features

- 🚀 Automatic integration of react-scan
- 🔧 Dev server only injection
- 🌐 Uses unpkg CDN for script loading
- 💨 Minimal setup required
- 🔥 Works with HMR

## Installation

Install the plugin using your preferred package manager:

```bash
npm install vite-plugin-react-scan -D
# or
yarn add vite-plugin-react-scan -D
# or
pnpm add vite-plugin-react-scan -D
# or
bun add vite-plugin-react-scan -D
```

## Usage

Add the plugin to your `vite.config.js` or `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/react';
import reactScan from 'vite-plugin-react-scan';

export default defineConfig({
  plugins: [
    react(),
    reactScan()
  ]
});
```

## How It Works

- Automatically injects the react-scan script during development
- Only active during the development server
- Adds the script to the body of your HTML
- No manual configuration needed

## Requirements

- Vite
- React

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.