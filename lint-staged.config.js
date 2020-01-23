'use strict';

module.exports = {
  '**/*.js': ['eslint --fix'],
  '**/*.{json,html,md}': ['prettier --write'],
};
