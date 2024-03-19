// /** @type {import('vite').UserConfig} */
import vue from '@vitejs/plugin-vue'

export default ({
    plugins: [vue()],
    build:{
      outDir: 'docs/portfolio-site'
    }
});