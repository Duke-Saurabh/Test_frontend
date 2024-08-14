import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      // '/api': 'http://localhost:3000',
      // '/api': 'https://astrabot-backend-aw248tbde-shivansh-kasaudhans-projects.vercel.app/',
      '/': 'https://test-backend-olive-delta.vercel.app/'
      
      
    },
  },
  plugins: [react()],
});