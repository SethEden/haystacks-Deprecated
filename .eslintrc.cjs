module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'import/extensions': 'off',
    'no-console': 'off',
  },
};
