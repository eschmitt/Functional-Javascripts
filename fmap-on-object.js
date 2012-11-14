//
// fmap on Object
//
var fmap = function (fn, obj) {
  var result = {},
      key;
  fn = Function.toFunction(fn);
  for (key in obj) {
    result[i] = fn.apply(null, [obj[i], i]);
  }
  return result;
};
