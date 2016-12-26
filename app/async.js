exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var dfd = $.Deferred();
    // Resolve after a random interval
    setTimeout(function() {
        dfd.resolve(value);
    }, 10);

    // Reject after a random interval
    setTimeout(function() {
        dfd.reject(false);
    }, 10);

    //return the promise
    return dfd.promise();
  },

  manipulateRemoteData: function(url) {
      var prom = $.Deferred();
      $.ajax(url).then(function (response) {
          var peopleObj = response.people,
              peopleArr = [];
          for (var i =0, l=peopleObj.length; i < l; i++) {
              peopleArr.push(peopleObj[i].name);
          }
          prom.resolve(peopleArr.sort());
      });

      return prom.promise();
  }
};
