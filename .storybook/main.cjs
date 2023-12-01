const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                vueDocgenOptions: {},
            }
        },
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-scss',
    ],
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    webpackFinal: (config) => {
        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config.resolve.extensions,
            }),
        ];

        return config;
    },
};
