var ninjaMoved = false
var currentX = 0
var counter = 0
var isGameOver = false
var restartButton = $("#reStartBtn")
var gif = $("#gif").hide()



var current = document.getElementById("ninja");
current.className = "active ninja";



var myInterval = setInterval(function () {
  collisionDetecter()

}, 100);
var moveBlockInterval = setInterval(function(){
  moveBlock()

},3000);
function onLoad(){
  moveBlock();
  collisionDetecter();

  // var screenHeight = screen.height + "px";
  // var screenWidth = screen.width + "px";
  // document.getElementById("gameArea").style.height = screenHeight
  // document.getElementById("gameArea").style.width = screenWidth

}

function moveNinja(e){
  console.log("test")
  //$("#className").style("bottom","40px")
  //var ninja = document.getElementById('ninja').style;
  if (e.target.classList.contains('reStart')){
    return;
  }
  if (ninjaMoved) {

  }else {
    var currentX = document.getElementById("ninja").style.top


    $(".active").animate({
      top: '-=120px',
    });


    setTimeout(moveBackNinja, 400);
  }
  ninjaMoved = !ninjaMoved;
  currentX = currentX;
  $("#startingH1").text(counter);




}
function moveBackNinja(){

  $("#ninja").animate({top: '450px'},500);
  ninjaMoved = !ninjaMoved;

}

function gameOver(){

    $("#ninja").fadeOut(200).fadeIn(200).fadeOut(200, function(){
      current.className = "ninja";

      restartButton.show();
    });
    $("#startingH1").text("Game Over");
    isGameOver = true


}

$(function(){
  $('body:not(.reStart)').on('click  touchstart', moveNinja);
  $('button#reStart').on('click', function(e){
    e.preventDefault();
    counter = 0;
  })
})

document.getElementById("reStartBtn").addEventListener("click", reStartGame);

function reStartGame(){
  $("#reStartBtn").hide();
  gif.hide()
  current.className = "active ninja"
  counter = 0;
  $("#ninja").fadeIn()
  isGameOver = false;
  moveBlock()



}

function moveBlock(){
var x = Math.floor((Math.random() * 3) + 1);
console.log(x)
if (isGameOver) {
  console.log("game is over");
  clearInterval(moveBlockInterval);
}else{
      $("#block" + x).animate({
        left: "-50px",

      },3000);
      $("#block" + x).hide();
      $("#block" + x).animate({
        left: "400px",
      },1);
      $("#block" + x).show();
    }
    console.log(x);
}




function playGif(){
  setInterval(function(){
    gif.hide()

  },1000)
}

function collisionDetecter(){


  var ninja = document.getElementById("ninja");
  var block = document.getElementById("block3");
  var block1 = document.getElementById("block1");
  var block2 = document.getElementById("block2");
  var nY = ninja.offsetTop;
  var nX = ninja.offsetLeft;
  var nW = ninja.offsetWidth;
  var nH = ninja.offsetHeight;
  var bY = block.offsetTop;
  var bX = block.offsetLeft;
  var bW = block.offsetWidth;
  var bH = block.offsetHeight;
  var b1Y = block1.offsetTop;
  var b1X = block1.offsetLeft;
  var b1W = block1.offsetWidth;
  var b1H = block1.offsetHeight;
  var b2Y = block2.offsetTop;
  var b2X = block2.offsetLeft;
  var b2W = block2.offsetWidth;
  var b2H = block2.offsetHeight;
  if((((nX+nW) > bX && nX < (bX+bW) && (nY+nH) > bY && nY < (bY+bH))) ||
  (((nX+nW) > b1X && nX < (b1X+b1W) && (nY+nH) > b1Y && nY < (b1Y+b1H))) || (((nX+nW) > b2X && nX < (b2X+b2W) && (nY+nH) > b2Y && nY < (b2Y+b2H)))){
		// Do anything you want in the program when collision is detected
		console.log("Collision detected");
    $("#block").stop();
    $("#block1").stop();
    $("#block2").stop();
    clearInterval(myInterval);
    isGameOver = true
    $("#startingH1").text("Game Over");
    gif.show()
    playGif()
    gameOver();

	}


}
