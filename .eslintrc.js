'use strict';

const { configure, presets } = require('eslint-kit');

module.exports = configure({
  mode: 'only-errors',
  presets: [
    presets.imports({
      sort: {
        newline: true,
      },
    }),
    presets.node(),
    presets.typescript(),
    presets.react({
      version: '18',
      newJSXTransform: true,
    }),
  ],
  extend: {
    ignorePatterns: ['dist'],
  },
});
