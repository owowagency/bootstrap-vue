import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import DTS from "vite-plugin-dts";
import { viteStaticCopy as Copy } from 'vite-plugin-static-copy'
import VueDocgen from './vite/plugin-docgen';
import Delete from './vite/plugin-delete';

export default defineConfig({
    plugins: [
        Delete(),
        Vue(),
        VueDocgen(),
        DTS({
            exclude: [
                'src/**/*test.ts',
                'src/**/*stories.ts',
                'test',
                'vite',
                'vite.config.ts',
                'vitest.config.ts',
            ],
            outDir: 'dist/lib',
        }),
        Copy({
            targets: [
                {src: 'src', dest: '..'},
                {src: 'src/**/*.scss', dest: '../scss', rename: (_name, _extension, fullPath) => fullPath.replace(/^src\//, '')},
                {src: 'package.json', dest: '..'},
                {src: 'README.md', dest: '..'},
                {src: 'CONTRIBUTING.md', dest: '..'},
                {src: 'LICENSE', dest: '..'},
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
        outDir: 'dist/lib',
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
            },
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
