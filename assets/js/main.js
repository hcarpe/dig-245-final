function doFirst() {
  toolspic = document.getElementById('toolsicon');
  //seedspic = document.getElementById('seedsicon');
  //watercanpic = document.getElementById('watercanicon');
  gardenpic = document.getElementById('garden');

  toolspic.addEventListener("dragstart", startDrag, false);
  gardenpic.addEventListener("dragEnter", function(e){e.preventDefault();}, false);
  gardenpic.addEventListener("dragOver", function(e){e.preventDefault();}, false);
  gardenpic.addEventListener("drop", dropped, false);
}

function startDrag(e) {
  var code = '<img src="assets/img/toolsicon.png" class="img-fluid my-2 mx-5" id="toolsicon" alt="Tools icon">';
  e.dataTransfer.setData('Text', code);
}

function dropped(e) {
  e.preventDefault();
  gardenpic.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener("load", doFirst, false);
