'use strict';

module.exports = {
  extends: ['airbnb', require.resolve('./base')],
  plugins: ['react-hooks'],
  env: {
    browser: true,
  },
  rules: {
    'global-require': 'off',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['**/.eslintrc.js'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        strict: ['error', 'global'],
      },
    },
  ],
};
