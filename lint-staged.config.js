'use strict';

module.exports = {
  '**/*.js': ['eslint --fix', 'git add'],
  '**/*.{json,html,md}': ['prettier --write', 'git add'],
};
