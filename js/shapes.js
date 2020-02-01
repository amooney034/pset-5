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
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}
//EXERCISE 1
const sayHello = function() {
let speak = prompt("Message: ");

while (speak.length > 50) {
 window.alert("Your message is too long. Keep it under 50 characters.")
 speak = prompt("Message: ");
}
let canvas = document.getElementById("student-canvas-1");
let ctx = canvas.getContext("2d");

ctx.font = "48px Sans-Serif";
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.strokeText(speak, 30, 70, 994);
};

//EXERCISE 2
const drawRectangle = function() {
const canvas = document.getElementById("student-canvas-2");
const ctx = canvas.getContext("2d");
 ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    if (width > canvas.width || width < 1) {
      alert("Your width must be between 1 and 1024.")
}
    else if (height > canvas.height || height < 1) {
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
} while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512)

  if (!(width == null) && !(height == null) && !(x == null) && !(y == null)) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.closePath();
    ctx.stroke();
  }
};

//EXERCISE 3
const drawColoredRectangle = function() {
 let canvas = document.getElementById('student-canvas-3');
  let ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 1024, 512);

  let color = prompt("Color: ")
      color = color.toLowerCase();

  if (color === null){
    ctx.clearRect(0, 0, 1024, 512);
  } else if (color !== "blue" && color !== "black" && color !== "green" && color !== "orange" && color !== "purple" && color !== "red" && color !== "yellow" ) {
    alert(color + " is not a supported color.")
    color = (prompt("Color: ")).toLowerCase();
  }

    ctx.fillStyle = color;
    ctx.fillRect(10, 10, 100, 50);

};

//EXERCISE 4
const drawTriangle = function() {
const canvas = document.getElementById("student-canvas-4");
const ctx = canvas.getContext("2d");
 ctx.clearRect(0, 0, canvas.width, canvas.height);

do {
  var sideOne = prompt("Side 1: ")
  var sideTwo = prompt("Side 2: ")
  var sideThree = prompt("Side 3: ")
      
  var hypo = Math.max(sideOne, sideTwo, sideThree)
  var height = Math.min (sideOne, sideTwo, sideThree)
  var base = Math.sqrt(hypo*hypo - height*height)

    if (base == 0 && height == 0 && hypo == 0) {
       break;
}
      
sideOne = Number(sideOne)
sideTwo = Number(sideTwo)
sideThree = Number(sideThree)

    if (base*base + height*height != hypo*hypo || base == 0 || height == 0 || hypo == 0  || sideOne+sideTwo+sideThree-hypo-height != base) {
      alert("That's not a valid right triangle.")
}
    else if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
      alert("One of your sides is not a number.")
}
    else if (base > 1024 || height > 512 || hypo > 1310720) {
      alert("Your triangle won't fit on the canvas.")
}
}   while ((Math.floor(base)*Math.floor(base) + height*height != hypo*hypo) || isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree) || base > 1024 || height > 512 || hypo > 1310720 || base == 0 || height == 0 || hypo == 0)

  if ((base*base + height*height == hypo*hypo) && (base < 1024 && height < 512 && hypo < 1145) && (base != 0 && height != 0 && hypo != 0) && (base != null && height != null && hypo != null)) {
    height = height + 25
    base = base + 25
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(25, height);
    ctx.lineTo(base, height)
    ctx.lineTo(25, 25)
    ctx.stroke();
}
};

//EXERCISE 5
const drawFace = function() {
const canvas = document.getElementById("student-canvas-5");
const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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
} while (rad > 256 || isNaN(rad) || rad < 32)

var eyesRad = 0.15 * rad
var mouthRad = 0.7 * rad


ctx.beginPath();
ctx.arc(512, 256, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512, 256, mouthRad, 0, Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512 - 0.4 * rad, 256 - 0.4 * rad, eyesRad, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512 + 0.4 * rad, 256 - 0.4* rad, eyesRad, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
};

//EXERCISE 6
const drawPyramid = function() {
const canvas = document.getElementById("student-canvas-6");
const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
var dist = 0;
var height = 0;
var adjustingDist = 0;
var adjustingHt = 0;
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
} while (isNaN(side) || side > 100 || side < 1)
    dist = Number(dist);
    height = Number(height);
    side = Number(side);
    for (x = 5; x > 0; x--) {
    check = x
while(check >= 1) {
     ctx.beginPath();
     ctx.rect(10 + dist, (502 - side) - height, side,  side);
     ctx.stroke();
     ctx.closePath();
     dist = dist + side
     check--
}
     adjustingDist++
     dist = adjustingDist * (1/2 * side)
     adjustingHt++
     height = adjustingHt * side
}
};
