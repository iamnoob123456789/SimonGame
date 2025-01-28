alert("hello");
var level=0;
let userClickedPattern=[];
let buttonColours=["red","blue","green","yellow"];
let gamePattern=[];
var started=false;
var level=0;
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level" +level);
    nextSequence();
    started=true;
  }
})
$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
    console.log("success");
    if(userClickedPattern.length==gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }else{
      console.log("wrong");
      var audio=new Audio("sounds/wrong.mp3");
      audio.play();
      $(body).addClass("game-over");
      setTimeout(function(){
        $(body).removeClass("game-over");
      },200);
      $("#level-title").text("Game Over,Press Any Key to Restart");
      startOver();
      
      

    }
  }
}
function nextSequence() {
  level++;
  $("#level-title").text("Level "+level);
    let randomNumber=Math.floor(Math.random()*4);
    let randomChoosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChoosenColor);


$("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChoosenColor);

}

function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor){

  var delayInMilliseconds = 100; //1 second
  $("#"+currentColor).addClass("pressed");
  setTimeout(function() {
    //your code to be executed after 1 second
    $("#"+userChosenColour).removeClass("pressed");
  }, delayInMilliseconds);
     
}
function checkAnswer(){
    let lastAnswer=userClickedPattern[userClickedPattern.length-1];
    let userAnswer=gamePattern[gamePattern.length-1];
    if(lastAnswer==userAnswer){
      console.log("success");
    }else{
      console.log("wrong");
    }
    let 
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}