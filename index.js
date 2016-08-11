$(document).ready(function(){
  var $lowLeftLeg = $('#lowLeftLeg');
  var $lowRightLeg = $('#lowRightLeg');
  var pantsLeft = 2;
  $('#sunglasses').hide()

  var audio = document.getElementById("audio");

  var yello = document.getElementById("yello");


  $lowLeftLeg.click(function() {
    audio.play();
    $lowLeftLeg.animate({ opacity: 0.0 });
    pantsLeft -= 1;
    if (pantsLeft === 0) {
      pantsOff()
    }
  });

  $lowRightLeg.click(function() {
    audio.play();
    $lowRightLeg.animate({ opacity: 0.0 });
    pantsLeft -= 1;
    if (pantsLeft === 0) {
      pantsOff();
    }
  });

  var pantsOff = function() {
    $('#sunglasses').fadeIn(1000);
    yello.play();
  }
});
