var buster = require('buster')
  , f = require('../../functional.js')
  ;

buster.spec.expose();

var spec = describe('functional.js', function () {
  describe('reduce', function () {
    it('is a function', function () {
      buster.assert.isFunction(reduce);
    });

    it('can sum the values in an array', function () {
      var sum = function (x, y) { return x + y; };
      buster.assert.equals(reduce(sum, 0, [1, 2, 3]), 6);
    });
  });

});
