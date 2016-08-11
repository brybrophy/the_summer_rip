'use strict';

(function(){
  var $lowLeftLeg = $('#lowLeftLeg');
  var $lowRightLeg = $('#lowRightLeg');
  let pantsLeft = 2;
  $('#sunglasses').hide()

  var audio = document.getElementById("audio");

  var yello = document.getElementById("yello");


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

  var pantsOff = function() {
    $('#sunglasses').fadeIn(1000);
    yello.play();
  }
})();
