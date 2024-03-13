import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "avatar",
      fileName: (format) => `avatar.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    },
    target: "esnext",
  },
})
