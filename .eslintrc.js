module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/typescript',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['unused-imports'],
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'curly': ['error', 'all'],
        'eol-last': 'error',
        indent: ['error', 4, {SwitchCase: 1}],
        'no-multi-spaces': 'error',
        'no-param-reassign': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'never'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'sort-imports': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'unused-imports/no-unused-imports-ts': 'error',
        indent: ['error', 4, {SwitchCase: 1}],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': [
            'error',
            {'ignores': ['Breadcrumb']},
        ],
    },
    overrides: [
        {
            files: ['**/*.test.ts'],
            env: {jest: true},
        },
    ],
};