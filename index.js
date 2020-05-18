
var size = document.querySelectorAll(".drum").length;
for(var i=0 ; i < size ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click" , function task(){
      var buttonInnerHtml = this.innerHTML;
      makeSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);
  });
}


document.addEventListener("keypress" , function(event){
  makeSound(event.key);
  buttonAnimation(event.key);

})

function makeSound(key){

  switch (key) {
    case "w":
        var beat = new Audio("sounds/tom-1.mp3");
        beat.play();
        break;
    case "a":
        var beat = new Audio("sounds/tom-2.mp3");
        beat.play();
        break;
    case "s":
        var beat = new Audio("sounds/tom-3.mp3");
        beat.play();
        break;
    case "d":
        var beat = new Audio("sounds/tom-4.mp3");
        beat.play();
        break;
    case "j":
        var beat = new Audio("sounds/snare.mp3");
        beat.play();
        break;
    case "k":
        var beat = new Audio("sounds/crash.mp3");
        beat.play();
        break;
    case "l":
        var beat = new Audio("sounds/kick-bass.mp3");
        beat.play();
        break;
    default:
        console.log(this);

  }

}




function buttonAnimation(key){

  var activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  } , 100);

}
