'use strict'

window.utils = {

  getRandomElement: function (arr) {
    return arr[Math.floor(Math.random()*arr.length)];
  },

  getRandomElementExcept: function (arr, elem) {
    var newColor = null;

    while (!newColor || newColor === elem) {
      newColor = utils.getRandomElement(arr);
    }
    return newColor;
  }
}
