var ninjaMoved = false
var currentX = 0
var counter = 0

function onLoad(){

  // var screenHeight = screen.height + "px";
  // var screenWidth = screen.width + "px";
  // document.getElementById("gameArea").style.height = screenHeight
  // document.getElementById("gameArea").style.width = screenWidth

}

function moveNinja(e){
  //$("#className").style("bottom","40px")
  //var ninja = document.getElementById('ninja').style;
  if (e.target.classList.contains('reStart')){
    return;
  }
  if (ninjaMoved) {

  }else {
    var currentX = document.getElementById("ninja").style.top
    console.log(currentX);
    counter += 1
    $("#ninja").animate({
      top: '-=75px',
    });

    setTimeout(moveBackNinja, 400);
  }
  ninjaMoved = !ninjaMoved;
  currentX = currentX
  gameOver()
}
function moveBackNinja(){

  $("#ninja").animate({top: '450px'});
  ninjaMoved = !ninjaMoved
}

function gameOver(){
  if (counter == 5) {
    $("#ninja").fadeOut(200).fadeIn(200).fadeOut(200);
  }
}

$(function(){
  $('body:not(.reStart)').on('click', moveNinja);
  $('button#reStart').on('click', function(e){
    e.preventDefault();
    counter = 0;
  })
})
