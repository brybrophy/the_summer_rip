'use strict';

(function(){
  const $lowLeftLeg = $('#lowLeftLeg');
  const $lowRightLeg = $('#lowRightLeg');

  $lowLeftLeg.click(() => {
    $lowLeftLeg.fadeTo(500, 0.01)
    
  });

  $lowRightLeg.click(() => {
    $lowRightLeg.fadeTo(500, 0.01)
  });


})();
