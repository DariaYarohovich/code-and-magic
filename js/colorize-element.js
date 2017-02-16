'use strict'

window.colorizeElement = function (elem, arr, property) {

  var currentState = elem.style[property];

  var generateColor = function () {
    elem.setAttribute('aria-pressed', true);
    currentState = utils.getRandomElementExcept(arr, currentState);
    elem.style[property] = currentState;
    elem.setAttribute('aria-pressed', false);
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
