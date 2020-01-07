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
const slate = document.getElementById("student-canvas-1");
const work = slate.getContext("2d");
work.clearRect(0, 0, slate.width, slate.height);
do {
var tooLong = prompt("Message: ")
if (tooLong == null) {
break;
}
if (tooLong.length > 50) {
alert("Your message is too long. Keep it under 50 characters")
}
} 
while(tooLong.length > 50)

if (tooLong != null) {
work.font = "48px sans-serif";
work.strokeText(tooLong, 30, 70, 994);
}
};

//EXERCISE 2
const drawRectangle = function() {
const slate = document.getElementById("student-canvas-2");
const work = slate.getContext("2d");
work.clearRect(0, 0, slate.width, slate.height);

var width = 0;
var height = 0;
var x = 0;
var y = 0;
do {
var width = prompt("Width: ")
var height = prompt("Height: ")
var x = prompt("X: ")
var y = prompt("Y: ")
if (width == null || height == null || x == null || y == null) {
break;
}
if (width > slate.width || width < 1) {
alert("Your width must be between 1 and 1024.")
}
else if (height > slate.height || height < 1) {
alert("Your height must be between 1 and 512.")
}
else if (x < 1 || x > 1024) {
alert("Your x-coordinate must be between 1 and 1024.")
}
else if (y < 1 || y > 512) {
alert("Your y-coordinate must be between 1 and 512.")
}
else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
alert("One of your values is not a number.")
}
else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
alert("Your rectangle won't fit on the canvas.")
}
} 
while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512)

if (!(width == null) && !(height == null) && !(x == null) && !(y == null)) {
work.beginPath();
work.rect(x, y, width, height);
work.closePath();
work.stroke();
}
};

//EXERCISE 3
const drawColoredRectangle = function() {
const slate = document.getElementById("student-canvas-3");
const work = slate.getContext("2d");
work.clearRect(0, 0, slate.width, slate.height);
do {
var color = (prompt("Color: "))
if (color == null) {
break;
}
color = String(color)
var colorChange = color.toLowerCase()
if (colorChange != "green" && colorChange != "black" && colorChange != "blue" && colorChange != "orange" && colorChange != "purple" && colorChange != "red" && colorChange != "yellow") {
alert(color + " is not a supported color.")
}
} 
while (colorChange != "green" && colorChange != "black" && colorChange != "blue" && colorChange != "orange" && colorChange != "purple" && colorChange != "red" && colorChange != "yellow")

if (color != null) {
work.fillStyle = colorChange;
work.fillRect(10, 10, 100, 50);
}
};

//EXERCISE 4
const drawTriangle = function() {
const slate = document.getElementById("student-canvas-4");
const work = slate.getContext("2d");
work.clearRect(0, 0, slate.width, slate.height);
do {
var one = prompt("Side 1: ")
var two = prompt("Side 2: ")
var three = prompt("Side 3: ")
var hypo = Math.max(one, two, three)
var height = Math.min (one, two, three)
var base = Math.sqrt(hypo*hypo - height*height)

if (base == 0 && height == 0 && hypo == 0) {
break;
} 
one = Number(one)
two = Number(two)
three = Number(three)
    
if (base*base + height*height != hypo*hypo || base == 0 || height == 0 || hypo == 0  || one+two+three-hypo-height != base) {
alert("That's not a valid right triangle.")
}
else if (isNaN(one) || isNaN(two) || isNaN(three)) {
alert("One of your sides is not a number.")
}
else if (base > 1024 || height > 512 || hypo > 1310720) {
alert("Your triangle won't fit on the canvas.")
}
}   
while ((Math.floor(base)*Math.floor(base) + height*height != hypo*hypo) || isNaN(one) || isNaN(two) || isNaN(three) || base > 1024 || height > 512 || hypo > 1310720 || base == 0 || height == 0 || hypo == 0)

if ((base*base + height*height == hypo*hypo) && (base < 1024 && height < 512 && hypo < 1145) && (base != 0 && height != 0 && hypo != 0) && (base != null && height != null && hypo != null)) {
height = height + 25
base = base + 25
work.beginPath();
work.moveTo(25, 25);
work.lineTo(25, height);
work.lineTo(base, height)
work.lineTo(25, 25)
work.stroke();
}
};


//EXERCISE 5
const drawFace = function() {
const slate = document.getElementById("student-canvas-5");
const work = slate.getContext("2d");
work.clearRect(0, 0, slate.width, slate.height);
do {
var rad = (prompt("Radius: "))
if (rad == null) {
break;
}
if (rad < 32) {
alert("Your radius must be at least 32.")
}
else if (isNaN(rad)) {
alert("Your radius is not a number.")
}
else if (rad > 256) {
alert("Your smiley face won't fit on the canvas.")
}
} 
while (rad > 256 || isNaN(rad) || rad < 32)
var eyes = 0.15 * rad
var mouth = 0.7 * rad

work.beginPath();
work.arc(512, 256, rad, 0, 2 * Math.PI);
work.stroke();
work.closePath();
work.beginPath();
work.arc(512, 256, mouth, 0, Math.PI);
work.stroke();
work.closePath();
work.beginPath();
work.arc(512 - 0.4 * rad, 256 - 0.4 * rad, eyes, 0, 2 * Math.PI);
work.stroke();
work.closePath();
work.beginPath();
work.arc(512 + 0.4 * rad, 256 - 0.4* rad, eyes, 0, 2 * Math.PI);
work.stroke();
work.closePath();

};


/*
 * Exercise 6 (extra credit).
 */
const drawPyramid = function() {
const canvas = document.getElementById("student-canvas-6");
const work = canvas.getContext("2d");
work.clearRect(0, 0, canvas.width, canvas.height);
var dist = 0;
var height = 0;
var adjustDist = 0;
var adjustHeight = 0;
var check = 5;
var side;
do {
var side = prompt("Side: ")
if (side == null) {
break;
}
if (side < 1) {
alert("Your block size must be at least 1.")
}
else if (side > 100) {
alert("Your pyramid won't fit on the canvas")
}
else if (isNaN(side)) {
alert("Your block size is not a number.")
}
} 
while (isNaN(side) || side > 100 || side < 1)
dist = Number(dist);
height = Number(height);
side = Number(side);
for (x = 5; x > 0; x--) {
check = x
while(check >= 1) {
work.beginPath();
work.rect(10 + dist, (502 - side) - height, side,  side);
work.stroke();
work.closePath();
dist = dist + side
check--
}
adjustDist++
dist = adjustDist * (1/2 * side)
adjustHeight++
height = adjustHeight * side
}
};


