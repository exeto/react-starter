'use strict';

const { join } = require('path');

exports.interfaceVersion = 2;

const src = join(process.cwd(), 'src');

const aliases = {
  'react-dom': '@hot-loader/react-dom',
};

exports.resolve = source => {
  const path = aliases[source] || source.replace('@', src);

  try {
    return { found: true, path: require.resolve(path) };
  } catch (err) {
    return { found: false };
  }
};
