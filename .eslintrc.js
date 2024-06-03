module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: [
        'import',
        'react',
        'prettier',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {

        'prettier/prettier': ['warn',
            {endOfLine: 'auto'},
        ],
        'react/react-in-jsx-scope': 'off',
    },
};