import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
// Remove the path import and __dirname usage

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['setupTests.ts'], // Use a relative path without ./
    globals: true
  }
});