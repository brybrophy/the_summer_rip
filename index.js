$(document).ready(function(){
  var $lowLeftLeg = $('#lowLeftLeg');
  var $lowRightLeg = $('#lowRightLeg');
  var pantsLeft = 2;
  $('#sunglasses').hide();
  $('#speech2').hide();


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
    $('#sunglasses').delay(1000).fadeIn(1000);
    $('#speech1').fadeOut(500);
    $('#speech2').delay(1000).fadeIn(500);
    setTimeout(function () {
      yello.play();
    }, 1000);
  }
});
