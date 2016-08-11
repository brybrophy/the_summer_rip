'use strict';

(function(){
  const $lowLeftLeg = $('#lowLeftLeg');
  const $lowRightLeg = $('#lowRightLeg');
  let pantsLeft = 2;
  $('#sunglasses').hide()

  $lowLeftLeg.click(() => {
    $lowLeftLeg.fadeTo(500, 0.01)
    pantsLeft -= 1;
    if (pantsLeft === 0) {
      pantsOff()
    }
  });

  $lowRightLeg.click(() => {
    $lowRightLeg.fadeTo(500, 0.01)
    pantsLeft -= 1;
    if (pantsLeft === 0) {
      pantsOff();
    }
  });

  const pantsOff = function() {
    console.log('done')
    $('#sunglasses').show();
  }
})();
