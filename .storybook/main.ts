import type { StorybookConfig } from "@storybook/vue3-vite";

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
        config.plugins = config.plugins?.filter(async (plugin) => {
            plugin = await plugin;

            return typeof plugin === 'boolean' || Array.isArray(plugin) || plugin?.name !== 'vite-plugin-static-copy:build';
        });

        return config;
    },
};

export default config;
