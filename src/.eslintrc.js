'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [require.resolve('../eslint-config/react')],
  settings: {
    'import/resolver': {
      parcel: {
        rootDir: 'src',
      },
    },
  },
};
