const { join } = require('path');

module.exports = {
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  extends: [
    '@exeto/eslint-config',
    '@exeto/eslint-config-react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'error',
    'import/no-useless-path-segments': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    react: {
      version: '16.8',
    },
    'import/resolver': {
      node: null,
      [join(process.cwd(), './utils/import-resolver')]: null,
    },
  },
};
