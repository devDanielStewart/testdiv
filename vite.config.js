import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  base: '/dashboard/',
  optimizeDeps: {
    exclude: ['pyodide'] // Exclude pyodide from optimization as it uses web workers
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        manualChunks: {
          pyodide: ['pyodide'],
          react: ['react', 'react-dom'],
          charts: ['chart.js', 'react-chartjs-2'],
          material: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
}); 