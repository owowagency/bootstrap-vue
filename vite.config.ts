import { fileURLToPath, URL } from 'node:url'

import { defineConfig, Plugin } from 'vite'
import Vue from '@vitejs/plugin-vue'
import DTS from "vite-plugin-dts";

function VueDocgen(): Plugin {
    return {
        name: 'vue-docgen',
        transform(_, id) {
            // If vue file doesn't have a <docs> block, don't transform
            if (!/vue&type=docs/.test(id)) {
              return;
            }

            // If vue file has a <docs> block, ignore it in the output
            return {
              code: 'export default Comp => {Comp}',
              map: {
                mappings: '',
              },
            };
        },
    }
}

export default defineConfig({
    plugins: [
        Vue(),
        VueDocgen(),
        DTS({
          exclude: [
            'src/**/*test.ts',
            'src/**/*stories.ts',
            'test',
            'vite.config.ts',
            'vitest.config.ts',
          ],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    esbuild: {
      minifyIdentifiers: false,
    },
    build: {
        emptyOutDir: true,
        sourcemap: true,
        lib: {
            name: 'BootstrapVue',
            entry: 'src/index.ts',
            formats: ['es', 'cjs'],
            fileName: (format, entryName) => {
                const ext = format === 'cjs' ? format : 'js';

                if (entryName === 'index') {
                  return `bootstrap-vue.${ext}`;
                }

                return `${entryName}.${ext}`;
            }
        },
        rollupOptions: {
            external: [
                'bootstrap',
                'uuid',
                'vue',
            ],
            output: {
                preserveModules: true,
                exports: "named",
                globals: {
                    vue: 'Vue',
                    uuid: 'uuid',
                },
            },
        },
    },
})
