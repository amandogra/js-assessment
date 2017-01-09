exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var pulse;
    function countNow() {
        console.log(start++);
        if (start <= end) {
            pulse = setTimeout(countNow, 100);
        }
    }
    countNow();
    return {
        cancel : function () {
            pulse && clearTimeout(pulse);
        }
    };
  }
};
