/*!
 * is-plural <https://github.com/jonschlinkert/is-plural>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var isPlural = require('./');

describe('isPlural', function () {
  it('should return true when a word is pluralized:', function () {
    isPlural('words').should.be.true;
    isPlural('apples').should.be.true;
  });

  it('should return false when a word is not pluralized:', function () {
    isPlural('word').should.be.false;
    isPlural('apple').should.be.false;
  });

  it('should throw an error when invalid arguments are passed:', function () {
    (function () {
      isPlural();
    }).should.throw('is-plural expects word to be a string.');
  });
});
