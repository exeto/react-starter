'use strict';

module.exports = {
  extends: ['airbnb/base', require.resolve('./base')],
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    strict: ['error', 'global'],
  },
};
