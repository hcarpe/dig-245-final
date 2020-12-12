"use strict";

/*******************************************************
 Start by defining all the data needed for the game
********************************************************/

var toolscomplete = false;
var seedscomplete = false;
var watercomplete = false;
var dragZ = 10;
var task = 0;

function updateGame() {
  //handle logic here after dragging
	if (toolscomplete && seedscomplete && watercomplete){
    console.log(4);
  }
}

/*******************************************************
 Add draggable / droppable functions
********************************************************/

//tools icon dragging
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
      $(".garden-area").attr(".garden-area","background-image: url(../img/cat.jpg);");
		} else {
			console.log("wrong!", dropElem);
			toolscomplete = false;
		}
		updateGame();
	},
	revertDuration: 200
});

//seeds icon dragging
$(".seedsicon").draggable({
	// always show dragging on top
	drag: function(){
		$(".seedsicon").css({
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
			$(".seedsicon").draggable("disable");
			seedscomplete = true;
      $(".garden-area").attr("src", "assets/img/seedsicon.png");
		} else {
			console.log("wrong!", dropElem);
			seedscomplete = false;
		}
		updateGame();
	},
	revertDuration: 200
});

//watering can icon dragging
$(".watercanicon").draggable({
	// always show dragging on top
	drag: function(){
		$(".watercanicon").css({
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
			$(".watercanicon").draggable("disable");
			watercomplete = true;
      $(".garden-area").attr("src", "assets/img/seedsicon.png");
		} else {
			console.log("wrong!", dropElem);
			watercomplete = false;
		}
		updateGame();
	},
	revertDuration: 200
});


// set which draggables the droppables accept
if (toolscomplete == false) {
  $(".garden-area").droppable({
  	accept: ".toolsicon"
  });
}
if (toolscomplete == true && seedscomplete == false) {
  $(".garden-area").droppable({
  	accept: ".seedsicon"
  });
}
if (toolscomplete == true && seedscomplete == true) {
  $(".garden-area").droppable({
  	accept: ".watercanicon"
  });
}
