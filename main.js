var noOfButtons = document.querySelectorAll(".drum").length;

//random beats
document.querySelector(".random-beat").addEventListener("click", function () {
  this.classList.add("pressed-beat-generator");
  let numberOfRandomBeat = 20;
  let randomPlayer = setInterval(() => {
    const randomNoteArrayIndex = Math.floor(
      Math.random() * (noOfButtons + 1)
    );
    const selectedNote = document.querySelectorAll("button")[
      randomNoteArrayIndex
    ];

    makeSound(selectedNote.innerHTML);
    buttonAnimation(selectedNote.innerHTML);

    numberOfRandomBeat--;
    
    if (numberOfRandomBeat === 0) {
      clearInterval(randomPlayer);
      this.classList.remove("pressed-beat-generator");
    }
  }, 120);
});

for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "i":
        var crash2 = new Audio("sounds/zapsplat_musical_percussive_triangle_single_hit_002_77567.mp3");
        crash2.play();
    break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
