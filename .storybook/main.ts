import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from "vite";
import { viteStaticCopy as Copy } from 'vite-plugin-static-copy';

const config: StorybookConfig = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                vueDocgenOptions: {},
            }
        },
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    viteFinal: (config, options) => {
        return mergeConfig(config, {
            // This is needed because the copy plugin can't copy files outside of the root directory
            // The files are copied back to the root by the post script
            build: {
                outDir: 'storybook-static/dist'
            }
        });
    },
};

export default config;
