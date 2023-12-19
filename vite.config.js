import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Set the port for the Vite development server
    proxy: {
      '/api': 'http://localhost:3001', // Proxy API requests to the local server
    },
  },
});