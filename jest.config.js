module.exports = {
    clearMocks: true,
    moduleFileExtensions: [
        'js',
        'ts',
        'json',
        'vue',
    ],
    transform: {
        '.*\\.(ts)$': 'babel-jest',
        '.*\\.(vue)$': '@vue/vue3-jest',
    },
};
