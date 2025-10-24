import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Remove base for local dev, add for build
  base: process.env.NODE_ENV === 'production' ? '/dev-portfolio-projects/' : '/',
  plugins: [react()],
});