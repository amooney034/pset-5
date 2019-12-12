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
var speak = prompt("Message: ");
var canvas = document.getElementById("student-canvas-1");
var ctx = canvas.getContext("2d");

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
var canvas = document.getElementById("student-canvas-2");
var rectangle = canvas.getContext("2d");
 rectangle.clearRect(0, 0, canvas.width, canvas.height);
var width = prompt("Width: ");
var height = prompt("Height: ");
var x = prompt("X: ");
var y = prompt("Y: ");
    
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
var canvas = document.getElementById('student-canvas-3');
var coloredRectangle = canvas.getContext('2d');
 coloredRectangle.clearRect(0, 0, canvas.width, canvas.height);
do { 
 var color = (prompt("Color: "))
 if (color == null) {
break;
}
color = String(color)
var colorChange = color.toLowerCase()
if (colorChange != "green" && colorChange != "black" && colorChange != "blue" && colorChange != "orange" && colorChange != "purple" && colorChange != "red" && colorChange != "yellow") 
{
alert(color + " is not a supported color.")
}
} 
while (colorChange != "green" && colorChange != "black" && colorChange != "blue" && colorChange != "orange" && colorChange != "purple" && colorChange != "red" && colorChange != "yellow")
if (color != null) {
coloredRectangle.fillStyle = colorChange;
coloredRectangle.fillRect(10, 10, 100, 50);
}
};

//EXERCISE 4
const drawTriangle = function() {
const canvas = document.getElementById("student-canvas-4");
const triangle = canvas.getContext("2d");
triangle.clearRect(0, 0, canvas.width, canvas.height);
    
do {
var uno = prompt("Side 1: ")
var dos = prompt("Side 2: ")
var tres = prompt("Side 3: ")
if (uno == null || dos == null || tres == null) {
 break;
}
    
var hypo = Math.max(uno, dos, tres)
var ht = Math.min (uno, dos, tres)
var base = Math.sqrt(hypo * hypo - ht*ht)
uno = Number(uno)
dos = Number(dos)
tres = Number(tres)

if (base*base + ht*ht != hypo*hypo || base == 0 || ht == 0 || hypo == 0  || uno+dos+tres-hypo-ht != base) {
  alert("That's not a valid right triangle.")
}
else if (isNaN(uno) || isNaN(dos) || isNaN(tres)) {
 alert("One of your sides is not a number.")
}
else if (base > 1024 || ht > 512 || hypo > 1310720) {
 alert("Your triangle won't fit on the canvas.")
}
}  
while ((Math.floor(base)*Math.floor(base) + ht*ht != hypo*hypo) || isNaN(uno) || isNaN(dos) || isNaN(tres) || base > 1024 || ht > 512 || hypo > 1310720 || base == 0 || ht == 0 || hypo == 0)

if ((base*base + ht*ht == hypo*hypo) && (base < 1024 && ht < 512 && hypo < 1145) && (base != 0 && ht != 0 && hypo != 0) && (base != null && ht != null && hypo != null)) {
 ht = ht + 25
 base = base + 25
 triangle.beginPath();
 triangle.moveTo(25, 25);
 triangle.lineTo(25, ht);
 triangle.lineTo(base, ht)
 triangle.lineTo(25, 25)
 triangle.stroke();
}
};

//EXERCISE 5
const drawFace = function() {
const canvas = document.getElementById("student-canvas-5");
const face = canvas.getContext("2d");
face.clearRect(0, 0, canvas.width, canvas.height);

do {
var rad = (prompt("Radius: "))
if (rad == null) {
 break;
}
  if (radius < 32) {
    alert("Your radius must be at least 32.")
  }
  else if (isNaN(radius)) {
    alert("Your radius is not a number.")
  }
  else if (radius > 256) {
    alert("Your smiley face won't fit on the canvas.")
  }
} while (radius > 256 || isNaN(radius) || radius < 32)

var eyesRadius = 0.15 * radius
var mouthRadius = 0.7 * radius


ctx.beginPath();
ctx.arc(512, 256, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512, 256, mouthRadius, 0, Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, eyesRadius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512 + 0.4 * radius, 256 - 0.4* radius, eyesRadius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

};


