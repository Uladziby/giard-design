// @ts-nocheck
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
      root: path.resolve(__dirname, 'src'),
      build: {
            outDir: '../dist',
      },
      resolve: {
            alias: {
                  '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
                  assets: path.resolve(__dirname, 'src/assets'),
                  components: path.resolve(__dirname, 'src/components'),
                  utils: path.resolve(__dirname, 'src/utils'),
            },
      },
      server: {
            port: 8080,
            hot: true,
      },
});
