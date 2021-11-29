import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';

const createEntry = (options) => {
    return {
        file: `dist/${options.file}`,
        format: options.format,
        globals: {
            vue: 'Vue',
            uuid: 'uuid',
        },
        name: 'BootstrapVue',
    };
};

export default {
    external: [
        'bootstrap',
        'uuid',
        'vue',
    ],
    input: 'src/index.ts',
    output: [
        createEntry({format: 'iife', file: pkg.browser}),
        createEntry({format: 'es', file: pkg.module}),
        createEntry({format: 'cjs', file: pkg.main}),
    ],
    plugins: [
        json(),
        vue(),
        typescript(),
        copy({
            targets: [
                {src: 'src/**/*.scss', dest: 'dist/scss', rename: (name, extension, fullPath) => fullPath.replace(/^src\//, '')},
                {src: 'package.json', dest: 'dist'},
                {src: 'README.md', dest: 'dist'},
            ],
        }),
    ],
};
