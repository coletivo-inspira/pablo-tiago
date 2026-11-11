import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Domínio próprio: o site é servido na raiz. Sem domínio (github.io/pablo-tiago/), use '/pablo-tiago/'.
  base: '/',
});