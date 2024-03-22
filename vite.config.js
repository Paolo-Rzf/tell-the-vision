import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src:"/src",
      icons:"/src/assets/icons",
      components: "/src/components",
      pages: "/src/pages",
      helpers: "/src/helpers",
      routes: "/src/routes",
      css: "/src/assets/css",
    },
  },
})
