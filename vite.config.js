import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Cource_project_main/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
