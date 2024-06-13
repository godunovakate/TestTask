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
        "simple-import-sort",
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
        "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    },
};
