import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Make sure this matches your GitHub Pages subdirectory if used
  plugins: [react()],
})
