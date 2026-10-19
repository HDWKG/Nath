import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' + HashRouter = works on username.github.io and username.github.io/repo-name
export default defineConfig({ base: './', plugins: [react(), tailwindcss()] })
