import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // tailwindcss()를 추가하면 별도의 postcss.config.js 없이 Vite가 Tailwind를 바로 처리한다
  plugins: [react(), tailwindcss()],
})
