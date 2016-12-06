exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      for (var i=0,l = arr.length; i<l; i++) {
          if (arr[i]=== item) {
              return i;
          }
      }
      return -1;
  },

  sum: function(arr) {
      var result = 0;
      for (var i = 0, l = arr.length; i<l; i++) {
        result+=arr[i];
      }
      return result;
  },

  remove: function(arr, item) {
    var tempArr = [];
    for (var i=0, l=arr.length; i<l; i++) {
        if (arr[i] != item) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
  },

  removeWithoutCopy: function(arr, item) {
      for (var i=0, l=arr.length; i<l; i++) {
          if (arr[i] == item) {
              arr.splice(i, 1);
              i--;
              l--;
          }
      }
      return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count: function(arr, item) {
      var count = 0;
      for (var i=0, l=arr.length; i<l; i++) {
          if (arr[i] === item) {
              count++;
          }
      }
      return count;
  },

  duplicates: function(arr) {
      var parsed = [];
      var dupes = [];
      for (var i = 0, len = arr.length; i < len; i++) {
          //if the current item is present in the parsed array, then it is a duplicate
          if (parsed.indexOf(arr[i]) >= 0 && dupes.indexOf(arr[i]) < 0) {
              //else push it to dupes
              dupes.push(arr[i]);
          }
          //push to the parsed array anyway
          parsed.push(arr[i]);
      }
      return dupes;
  },

  square: function(arr) {
      var tempArr = []
      for (var i = 0, len = arr.length; i < len; i++) {
          tempArr.push(arr[i]*arr[i]);
      }
      return tempArr;
  },

  findAllOccurrences: function(arr, target) {
    var tempArr = [];
    for (var i=0, l=arr.length; i<l; i++) {
        if (arr[i] === target) {
            tempArr.push(i);
        }
    }
    return tempArr;
  }
};
