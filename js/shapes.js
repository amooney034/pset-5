window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
}
//EXERCISE 1
const sayHello = function() {
let speak = prompt("Message: ");
let canvas = document.getElementById("student-canvas-1");
let ctx = canvas.getContext("2d");

while (speak.length > 50) {
 window.alert("Your message is too long. Keep it under 50 characters.")
 speak = prompt("Message: ");
}

ctx.font = "48px Sans-Serif";
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.strokeText(speak, 30, 70, 994);
};

//EXERCISE 2
const drawRectangle = function() {
let canvas = document.getElementById("student-canvas-2");
let rectangle = canvas.getContext("2d");
 rectangle.clearRect(0, 0, canvas.width, canvas.height);
let width = prompt("Width: ");
let height = prompt("Height: ");
let x = prompt("X: ");
let y = prompt("Y: ");
    
while (width > canvas.width || width < 1) {
window.alert("Your width must be between 1 and 1024.")
width = prompt("Width: ");
height = prompt("Height: ");
x = prompt("X: ");
y = prompt("Y: ");
}
    
while (height > canvas.height || height < 1 ) {
window.alert("Your height must be between 1 and 512.")
width = prompt("Width: ");
height = prompt("Height: ");
x = prompt("X: ");
y = prompt("Y: ");
}
    
while (x > 1024 || height < 1 ) {
window.alert("Your x-coordinate must be between 1 and 1024.")
width = prompt("Width: ");
height = prompt("Height: ");
x = prompt("X: ");
y = prompt("Y: ");
}
    
while (height > 512 || height < 1 ) {
window.alert("Your y-coordinate must be between 1 and 512.")
width = prompt("Width: ");
height = prompt("Height: ");
x = prompt("X: ");
y = prompt("Y: ");
}
    
context.rect(x, y, width, height);
context.clearRect(0, 0, canvas.width, canvas.height);
context.stroke();
};

//EXERCISE 3
const drawColoredRectangle = function() {
let canvas = document.getElementById('student-canvas-3');
let coloredRectangle = canvas.getContext('2d');
 coloredRectangle.clearRect(0, 0, canvas.width, canvas.height);
  do {
    var color = (prompt("Color: "))
    if (color == null) {
      break;
    }
    color = String(color)
    var color_case = color.toLowerCase()
    if (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow") {
      alert(color + " is not a supported color.")
    }
  } while (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow")

  if (color != null) {
  coloredRectangle.fillStyle = color_case;
    coloredRectangle.fillRect(10, 10, 100, 50);
  }
};

//EXERCISE 4
const drawTriangle = function() {

};

/*
 * Exercise 5.
 */

const drawFace = function() {

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

};


//EXERCISE 2
const drawRectangle = function() {

};
//EXERCISE 3
const drawColoredRectangle = function() {

};

//EXERCISE 4
const drawTriangle = function() {

};

/*
 * Exercise 5.
 */

const drawFace = function() {

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

};

