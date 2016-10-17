const $ = require('jquery'); // Don't touch this!

/** ================================================================================
 *  Use jquery so that when you click the button with id="question4", the
 *  background of the box below the button gets filled with purple. On every 4th
 *  click, the box should then turn red instead of turning purple.
 *
 *  You'll probably find the class active very useful. Look at `scss/index.scss`
 *  ================================================================================ */
var counter = 0;
$(document).ready(function(){
	$('#question4').click(function() {
      counter += 1;
      if (counter % 4 == 0){
        $('#box').css("background-color", "#ff0000");
      }
      else{
        $('#box').css("background-color", "#7D82B8");
      }
    })
});

/** ================================================================================
 *  Don't touch anything below here!
 *  ================================================================================ */
module.exports = question4;

