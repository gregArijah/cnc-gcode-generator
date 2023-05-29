import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: { 
    include: ['react-router-dom'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', //for local development
        //target: 'https://javatrol.herokuapp.com',  //for production
        changeOrigin: true,
      },
    },
  }
})