import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import vue from '@vitejs/plugin-vue'

const iconsPath = 'node_modules/@shoelace-style/shoelace/dist/assets';

// https://vitejs.dev/config/
export default {
  resolve: {
    alias: [
      {
        find: /\/assets\/icons\/(.+)/,
        replacement: `${iconsPath}/$1`,
      },
    ],
  },
  build: {
    rollupOptions: {
      // external: /^lit/,
      plugins: [],
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.startsWith('sl-'),
        },
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: iconsPath,
          dest: 'assets',
        },
      ],
    }),
    ,
  ],
};
