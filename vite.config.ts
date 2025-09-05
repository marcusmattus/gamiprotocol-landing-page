import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: true,
    headers: {
      // More permissive CSP for development
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: https://auth.privy.io https://*.privy.io; style-src 'self' 'unsafe-inline' blob:; img-src 'self' data: blob: https:; font-src 'self' data: blob:; connect-src 'self' ws: wss: http://localhost:* https://localhost:* https://auth.privy.io https://*.privy.io https://api.privy.io wss://*.privy.io; frame-src 'self' https://auth.privy.io https://*.privy.io; object-src 'none'; worker-src 'self' blob: 'unsafe-eval';"
    }
  }
});