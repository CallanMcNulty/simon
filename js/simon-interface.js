var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function(){
  sequenceActive = true;
  game = new Simon();
  sequenceActive = true;
  displaySequence(game);

  $(".color").click(function() {
    console.log("in");
    if(!sequenceActive) {
      if($(this).attr("id")===game.sequence[game.currentColor]) {
        if(game.iterate()) {
          displaySequence(game);
        }
      } else {
        alert("You Lose.");
        game.reset();
        displaySequence(game);
      }
    }
  });
});

var displaySequence = function(simon) {
  var currentColor = simon.sequence[simon.currentColor];
  $("#"+currentColor).removeClass(currentColor);
  $("#"+currentColor).addClass("flash");
  setTimeout(function(){
    $("#"+currentColor).removeClass("flash"); $("#"+currentColor).addClass(currentColor);
    if(simon.currentColor===simon.sequence.length-1)
    {
      sequenceActive = false;
      simon.currentColor = 0;
      return;
    } else {
      simon.iterate();
    }
    displaySequence(simon);
  }, 1000);
};
