'use strict';

var REGISTRATION_KEY = '@@any-promise/REGISTRATION'

require('../register')('bluebird', {Promise: require('bluebird')})

if(window[REGISTRATION_KEY].implementation !== 'bluebird'){
  throw new Error('Expecting global registration')
}

require('./tests')
