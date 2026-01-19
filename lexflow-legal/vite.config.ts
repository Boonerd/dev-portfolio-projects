import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import './index.css'  

export default defineConfig({
  plugins: [react()],
})