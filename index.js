'use strict';

(function(){
  const $lowLeftLeg = $('#lowLeftLeg');
  const $lowRightLeg = $('#lowRightLeg');
  let pantsLeft = 2;

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
    $('#sunglasses').fadeIn('fast');
    console.log('done')
    // sunglasses fade in
    //
  }


})();
