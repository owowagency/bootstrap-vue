import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear';

export default async function config(args) {
    return {
        input: 'src/index.ts',
        output: {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
            preserveModulesRoot: 'src',
        },
        plugins: [
            vue(),
            typescript({
                rollupCommonJSResolveHack: false,
                // rollupCommonJSResolveHack: false,
                clean: true,
            }),
            eslint(),
            commonjs(),
            clear({
                targets: ['./dist'],
            })
        ],
        external: ['vue'],
    };
}