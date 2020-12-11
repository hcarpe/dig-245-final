"use strict";

/*******************************************************
 Start by defining all the data needed for the game
********************************************************/

var toolscomplete = false;
var seedscomplete = false;
var watercomplete = false;
var dragZ = 10;

function updateGame() {
  //handle logic here after dragging
	if (toolscomplete && seedscomplete && watercomplete){
    console.log(4);
  }
}

/*******************************************************
 Add draggable / droppable functions
********************************************************/

$(".toolsicon").draggable({
	// always show dragging on top
	drag: function(){
		$(".toolsicon").css({
			"z-index": ++dragZ
		});
	},
	// if draggable was dropped on an accepting droppable elem
	revert: function(dropElem) {
    console.log("dropElem =", dropElem);
		// if draggable was released over correct droppable
		if (dropElem && dropElem.hasClass("garden-area")) {
			console.log("correct!", dropElem);
			// disable dragging this
			$(".toolsicon").draggable("disable");
			toolscomplete = true;
      $(".garden-area").attr("src", "assets/img/toolsicon.png");
		} else {
			console.log("wrong!", dropElem);
			toolscomplete = false;
		}
		updateGame();
	},
	revertDuration: 200
});


// set which draggables the droppables accept
$(".garden-area").droppable({
	accept: ".toolsicon"
});
$(".gnome2-target").droppable({
	accept: ".gnome2"
});
