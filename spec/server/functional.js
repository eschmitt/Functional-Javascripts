var buster = require('buster')
  , f = require('../../functional.js')
  ;

buster.spec.expose();

var spec = describe('functional.js', function () {
  describe('reduce', function () {
    it('is a function', function () {
      buster.assert.isFunction(reduce);
    });
  });

});
