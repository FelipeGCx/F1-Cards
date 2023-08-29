import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
         @import "@/sass/_variables.scss";
         @import "@/sass/_normalize.scss";
         @import "@/sass/_components.scss";
         @import "@/sass/_mixins.scss";
         `,
      },
    },
  },
});
