exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function (str1) {
        return str + ', ' + str1;
    }
  },

  makeClosures: function(arr, fn) {
var funcs = [],
    item,
    funcItem = function (a) {
        return function() {
            return fn(a);
        }
    };
    console.log(arr);
    for (var i =0, l=arr.length; i < l; i++) {
        item = arr[i];
        funcs.push(funcItem(item));
    }
console.log(funcs);
    return funcs;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
