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
let speak = prompt("Message: ");

while (speak.length > 50) {
 window.alert("Your message is too long. Keep it under 50 characters.")
 speak = prompt("Message: ");
}
let canvas = document.getElementById("student-canvas-2");
let ctx = canvas.getContext("2d");

ctx.font = "48px Sans-Serif";
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.strokeText(speak, 30, 70, 994);
};
