module.exports = {
    clearMocks: true,
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.test.json',
        },
    },
    moduleFileExtensions: [
        'js',
        'ts',
        'json',
        'vue',
    ],
    setupFiles:  [
        './test/helpers.ts',
    ],
    testEnvironment: 'jsdom',
    transform: {
        '.*\\.(js)$': 'babel-jest',
        '.*\\.(ts)$': 'babel-jest',
        '.*\\.(vue)$': '@vue/vue3-jest',
    },
};
