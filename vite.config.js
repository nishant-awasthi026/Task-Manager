import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    port: parseInt(process.env.PORT) || 3000, // Use Render's port or default to 3000
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 00cb5e2432ec27e2d09cefa231aeee3d27c67b63