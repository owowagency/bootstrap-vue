module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4, {SwitchCase: 1}],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': [
            'error',
            {'ignores': ['Breadcrumb']},
        ],
    },
};
