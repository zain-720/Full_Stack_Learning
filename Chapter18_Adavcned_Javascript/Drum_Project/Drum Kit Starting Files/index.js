
for (var i =0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        

        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    }); // Add event listener for curr button
}

document.addEventListener("keydown", function (event) { // Listener for pressing keys

    makeSound(event.key);
    buttonAnimation(event.key);
});




function makeSound(buttonInnerHTML) { //Function to handle making the sound 

    switch (buttonInnerHTML){

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(buttonInnerHTML){

    var activeButtonkeyCLass = document.querySelector("."+buttonInnerHTML);

    activeButtonkeyCLass.classList.add("pressed"); //Add the pressed class to current class list to make the button a slightly darker shade, 
                                                   //indicating being pressed
    
    //Now to make it go back to the original color after some time
    // Use the setTimeout function to make this sligth delay then action
    setTimeout(function() {
        activeButtonkeyCLass.classList.remove("pressed"); //Removed the shading
    }, 100); // Runs this anonymous function after 100 milliseconds 

}