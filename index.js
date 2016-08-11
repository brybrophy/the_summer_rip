'use strict';

(function(){
  const $lowLeftLeg = $('#lowLeftLeg');
  const $lowRightLeg = $('#lowRightLeg');
  let pantsLeft = 2;
  $('#sunglasses').hide()

  var audio = document.getElementById("audio");

  $lowLeftLeg.click(() => {
    audio.play();
    $lowLeftLeg.fadeTo(500, 0.01)
    pantsLeft -= 1;
    if (pantsLeft === 0) {
      pantsOff()
    }
  });

  $lowRightLeg.click(() => {
    audio.play();
    $lowRightLeg.fadeTo(500, 0.01)
    pantsLeft -= 1;
    if (pantsLeft === 0) {
      pantsOff();
    }
  });

  const pantsOff = function() {
    $('#sunglasses').fadeIn(1000);
  }
})();
