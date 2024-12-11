import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactScan from 'vite-plugin-react-scan'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactScan()],
})
