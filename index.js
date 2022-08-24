var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;//gives the character of the drum we have hit
    //In an event, this refers to the element that received the event.i.e.when we click the drum then this function gives the information about the drum we have clicked
    //and the character inside it can be extracted through innerHTML
    // var animation=this.style.color="white";
    //Detecting Button Press
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    //Detecting Keyboard Press
   document.addEventListener("keypress",function(event){//Callback Function:-it is called back by that object that experienced the click
    makeSound(event.key);
    buttonAnimation(event.key);
});


  });

}
function makeSound(key){
  switch (key) {
    case "w":
    var tom1=new Audio('sounds/tom-1.mp3');//It implies that there would be a constructor function named Audio including method and this line creates its object
    tom1.play();//Calling Method in constructor function
      break;
      case "a":
      var tom2=new Audio('sounds/tom-2.mp3');
      tom2.play();
        break;
        case "s":
        var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play();
          break;
          case "d":
          var tom4=new Audio('sounds/tom-4.mp3');
          tom4.play();
            break;
            case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
              break;
              case "k":
              var kick=new Audio('sounds/kick-bass.mp3');
              kick.play();
                break;
                case "l":
                var crash=new Audio('sounds/crash.mp3');
                crash.play();
                  break;
    default:console.log("Invalid Expression");

  }
}

function buttonAnimation(currentkey){
  var activeButton=document.querySelector("."+currentkey);

  activeButton.classList.add("pressed");//adding a class name pressed in styles.css to javascript to activeButton

  setTimeout(function(){//used for Time Delay
      activeButton.classList.remove("pressed");
  },100);
}

// function makeSound(buttonInnerHTML){
//    if(buttonInnerHTML==="w"){
//      var audio=new Audio('sounds/tom-1.mp3');
//      audio.play();
//    }
//    elseif(buttonInnerHTML==="a"){
//      var audio=new Audio('sounds/tom-2.mp3');
//      audio.play();
//    }
//    elseif(buttonInnerHTML==="s"){
//      var audio=new Audio('sounds/tom-3.mp3');
//      audio.play();
//    }
//    elseif(buttonInnerHTML==="d"){
//      var audio=new Audio('sounds/tom-4.mp3');
//      audio.play();
//    }
//    elseif(buttonInnerHTML==="j"){
//      var audio=new Audio('sounds/snare.mp3');
//      audio.play();
//    }
//    elseif(buttonInnerHTML==="k"){
//      var audio=new Audio('sounds/kick-bass.mp3');
//      audio.play();
//    }
//    else{
//      var audio=new Audio('sounds/crash.mp3');
//      audio.play();
//    }
// }
