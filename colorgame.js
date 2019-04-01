var numSqaures = 6;
var colors = [];
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
// var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var modeButton = document.querySelectorAll(".mode");

// colorDisplay.textContent = pickedColor;

init();

function init(){
    hardButton.classList.add("selected");
    setupModebutton();
    setupSqaures();
    reset();
}

function setupModebutton(){
    for(var i = 0; i < modeButton.length; i++){
    modeButton[i].addEventListener("click", function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSqaures = 3: numSqaures = 6;
        reset();
    });
}
}

function setupSqaures(){
    for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            colorChange(pickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Ouch, Try Again";
        }
    })
}
}


function reset(){
    //generate all new colors;
    colors = generateRandomColors(numSqaures);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match new picked colors
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "rgb(17, 63, 57)";
    resetButton.textContent = "New Colors?";
    messageDisplay.textContent = " ";
}

// easyButton.addEventListener("click", function(){
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numSqaures = 3;
//     colors = generateRandomColors(numSqaures);
//     pickedColor =pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardButton.addEventListener("click", function(){
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSqaures = 6;
//     colors = generateRandomColors(numSqaures);
//     pickedColor =pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })


resetButton.addEventListener("click", function(){
    reset();
})

// for(var i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];

//     squares[i].addEventListener("click", function(){
//         var clickedColor = this.style.backgroundColor;
//         if(clickedColor === pickedColor){
//             messageDisplay.textContent = "Correct!";
//             resetButton.textContent = "Play Again?";
//             colorChange(pickedColor);
//             h1.style.backgroundColor = pickedColor;
//         } else {
//             this.style.backgroundColor = "#232323";
//             messageDisplay.textContent = "Ouch, Try Again";
//         }
//     })
// }

function colorChange(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var array = [];
    //repeat "num" times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        array.push(randomColor());
    }
    //return the array
    return array;
}

function randomColor(){
    //pick a "red" from 0 to 255
    var red = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var green = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}