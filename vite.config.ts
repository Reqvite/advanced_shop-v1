/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import removeTestIdAttribute from 'rollup-plugin-jsx-remove-attributes';
import {fileURLToPath} from 'url';
import {defineConfig} from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    removeTestIdAttribute({
      include: [/\.[tj]sx$/],
      exclude: ['**/node_modules/**'],
      attributes: ['data-testid'],
      environments: ['production'],
      debug: true,
      usage: 'vite'
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js'
  }
});
