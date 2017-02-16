'use strict'

window.colorizeElement = function (elem, arr, property) {
  
  var currentState = elem.style[property];

  var generateColor = function () {
    currentState = utils.getRandomElementExcept(arr, currentState);
    elem.style[property] = currentState;
  }

  elem.addEventListener('click', function () {
    generateColor();
  })

  elem.addEventListener('keydown', function (event) {
    if (isActivateEvent(event)) {
      generateColor();
    }

  })
}
