
(function(exports) {

  var ESCAPE_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

  exports.isActivateEvent = function (event) {
    return event.keyCode && event.keyCode === ENTER_KEY_CODE;
  }

  exports.isHideEvent = function (event) {
    return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
  }

  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random()*arr.length)];
  };

  exports.getRandomElementExcept = function (arr, elem) {
      var newColor = null;

      while (!newColor || newColor === elem) {
        newColor = getRandomElement(arr);
      }
      return newColor;
    }

  })(this.utils = {});
