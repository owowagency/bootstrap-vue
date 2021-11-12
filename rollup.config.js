import pkg from './package.json';
import typescript from 'rollup-plugin-typescript';
import vue from 'rollup-plugin-vue';

const createEntry = (options) => {
    const config = {
        external: [
            'bootstrap',
            'uuid',
            'vue',
        ],
        input: 'src/index.ts',
        output: {
            file: options.file,
            format: options.format,
            globals: {
                vue: 'Vue',
            },
            name: 'BootstrapVue',
        },
        plugins: [
            typescript({}),
            vue(),
        ],
    };

    return config;
};

export default [
    createEntry({format: 'iife', file: pkg.browser}),
    createEntry({format: 'es', file: pkg.module}),
    createEntry({format: 'cjs', file: pkg.main}),
];
