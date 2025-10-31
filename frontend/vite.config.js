import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  css: {
    postcss: './postcss.config.js', // points to your ES module PostCSS config
  },
  build: {
    outDir: 'dist',           // default build output folder
    chunkSizeWarningLimit: 1000, // optional: suppress >500kB warnings
  },
});
