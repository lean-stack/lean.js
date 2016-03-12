// UMD pattern: https://github.com/umdjs/umd/blob/master/templates/returnExports.js

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.lean = factory();
  }
}(this, function () {

  'use strict';

  var lean = {
    VERSION: '0.0.1',
    lesson:  'Part 1: The Very Beginning.'
  };

  return lean;
}));
