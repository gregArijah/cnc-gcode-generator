import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
//import { createProxyMiddleware } from 'http-proxy-middleware';
//import reactRefresh from '@vitejs/plugin-react-refresh';

// export default {
//   plugins: [reactRefresh()],
//   optimizeDeps: {
//     include: ['react-router-dom'],
//   },
// };



// https://vitejs.dev/config/
export default defineConfig({
  base: '/javatrol',
  plugins: [
    react(),
    reactRefresh(),
    tailwindcss(),
  ],
  optimizeDeps: { 
    include: ['react-router-dom'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  }
})
