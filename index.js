// function for button click
/*
addEventListener() method sets up a function that will be called whenever the specified event is delivered to the target(button)
addEventListener(type, listener) -- type = event type, listen -- receives notification when an event occurs and func is called
 */

// Detect button press
var numberOfDrums = document.querySelectorAll('.drum').length;

for ( var i = 0; i < numberOfDrums; i++) {
    // event listener for specific button element
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        buttonAnimation(btnInnerHTML);

    });
}
// Detect keyboard press
// event listener for entire document
// When an event occurs, such as a button click or a key press, 
// the event object containing information about the event is automatically passed back to the function as an argument
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(checkKey) {
    switch (checkKey) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
 
        default:
            console.log(btnInnerHTML);
            break;
    }

}

// button animations
function buttonAnimation(checkKey) {
    var activeButton = document.querySelector("." + checkKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}