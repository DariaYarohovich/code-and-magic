'use strict';

(function(exports) {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');

  var setupKeydownHandler = function (event) {
    if (window.utils.isHideEvent(event)) {
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
    if(window.utils.isActivateEvent(event)) {
      setupFormOpen();
    }
  })

  /*close setup window*/
  setupClose.addEventListener('click', setupFormClose);

  setupClose.addEventListener('keydown', function (event) {
    if(window.utils.isActivateEvent(event)) {
      setupFormClose();
    }
  })
})()
