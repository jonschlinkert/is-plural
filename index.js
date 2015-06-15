'use strict';

var inflect = require('pluralize');

module.exports = function (word) {
  if (typeof word !== 'string') {
    throw new TypeError('is-plural expects word to be a string.');
  }
  return word === inflect(word);
};
