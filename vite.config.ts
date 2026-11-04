import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serve em /pablo-tiago/. Se usar domínio próprio, troque para '/'.
  base: '/pablo-tiago/',
});