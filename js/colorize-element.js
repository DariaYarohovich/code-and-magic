'use strict';

(function() {
  var wizardCoat = document.querySelector('#wizard-coat');
  var wizardEyes = document.querySelector('#wizard-eyes');
  var fireballBlock = document.querySelector('.setup-fireball-wrap');

  /*coat colors*/
  var coatColor = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  /*eyes colors*/
  var eyesColor = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  /*fireball colors*/
  var fireballColor = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

   function colorizeElement(elem, arr, property) {

    var generateColor = function () {
      var currentState = elem.style[property];
      currentState = window.utils.getRandomElementExcept(arr, currentState);
      elem.style[property] = currentState;
    }

    elem.addEventListener('click', function () {
      generateColor();
    })

    elem.addEventListener('keydown', function (event) {
      if (window.utils.isActivateEvent(event)) {
        generateColor();
      }

    })
  };

  colorizeElement(wizardCoat, coatColor, 'fill');
  colorizeElement(wizardEyes, eyesColor, 'fill');
  colorizeElement(fireballBlock, fireballColor, 'backgroundColor');

})()
