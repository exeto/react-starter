'use strict';

const { join } = require('path');

exports.interfaceVersion = 2;

const src = join(process.cwd(), 'src');

exports.resolve = source => {
  try {
    return { found: true, path: require.resolve(source.replace('@', src)) };
  } catch (err) {
    return { found: false };
  }
};
