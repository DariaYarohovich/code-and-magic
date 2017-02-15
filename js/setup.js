'use strict'

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = setup.querySelector('#wizard-coat');
var wizardEyes = setup.querySelector('#wizard-eyes');
var fireballBlock = setup.querySelector('.setup-fireball-wrap');
var fireball = fireballBlock.querySelector('.setup-fireball');

var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
}

var isHideEvent = function (event) {
  return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
}

var setupKeydownHandler = function (event) {
  if (isHideEvent(event)) {
    setupFormClose();
  }
}

var setupFormOpen = function() {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
  setupOpen.setAttribute('aria-pressed', true);
  setupClose.setAttribute('aria-pressed', false);
}

var setupFormClose = function() {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
  setupOpen.setAttribute('aria-pressed', false);
  setupClose.setAttribute('aria-pressed', true);
}

/*open setup window*/
setupOpen.addEventListener('click', setupFormOpen);

setupOpen.addEventListener('keydown' , function (event) {
  if(isActivateEvent(event)) {
    setupFormOpen();
  }
})

/*close setup window*/
setupClose.addEventListener('click', setupFormClose);

setupClose.addEventListener('keydown', function (event) {
  if(isActivateEvent(event)) {
    setupFormClose();
  }
})

/*choose color function*/
function chooseColor(colorArr) {
    return colorArr[Math.floor(Math.random()*colorArr.length)];
};

/*change coat color*/
var coatColor = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

wizardCoat.addEventListener('click', function() {
    wizardCoat.style.fill = chooseColor(coatColor);
});

/*change eyes color*/
var eyesColor = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

wizardEyes.addEventListener('click', function() {
    wizardEyes.style.fill = chooseColor(eyesColor);
});

/*change fireball color*/
var fireballColor = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
];

fireball.addEventListener('click', function() {
    fireballBlock.style.backgroundColor = chooseColor(fireballColor);
});


