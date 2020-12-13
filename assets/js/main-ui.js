"use strict";

/*******************************************************
 Start by defining all the data needed for the game
********************************************************/

var toolscomplete = false;
var seedscomplete = false;
var watercomplete = false;
var dragZ = 10;

/*******************************************************
 Add draggable / droppable functions
********************************************************/

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
      window.location.href = "../pages/seedspt2.html";
		} else {
			console.log("wrong!", dropElem);
			seedscomplete = false;
      window.location.href = "../pages/seedswrong.html";
		}
	},
	revertDuration: 200
});

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
      window.location.href = "../pages/toolspt2.html";
		} else {
			console.log("wrong!", dropElem);
			toolscomplete = false;
      window.location.href = "../pages/toolswrong.html";
		}
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
      window.location.href = "../pages/waterpt2.html";
		} else {
			console.log("wrong!", dropElem);
			watercomplete = false;
      window.location.href = "../pages/waterwrong.html";
		}
	},
	revertDuration: 200
});

$(".trashicon").draggable({
	// always show dragging on top
	drag: function(){
		$(".trashicon").css({
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
			$(".trashicon").draggable("disable");
			watercomplete = true;
      window.location.href = "../pages/trash.html";
		} else {
			console.log("wrong!", dropElem);
		}
	},
	revertDuration: 200
});

$(".tractoricon").draggable({
	// always show dragging on top
	drag: function(){
		$(".tractoricon").css({
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
			$(".tractoricon").draggable("disable");
			watercomplete = true;
      window.location.href = "../pages/tractor.html";
		} else {
			console.log("wrong!", dropElem);
		}
	},
	revertDuration: 200
});


// set which draggables the droppables accept
if (seedscomplete == false) {
  $(".garden-area").droppable({
  	accept: ".seedsicon"
  });
}
if (seedscomplete == true && toolscomplete == false) {
  $(".garden-area").droppable({
  	accept: ".toolsicon"
  });
}
if (toolscomplete == true && seedscomplete == true) {
  $(".garden-area").droppable({
  	accept: ".watercanicon"
  });
}
if (3==3) {
  $(".garden-area").droppable({
  	accept: ".wrongicon"
  });
}
