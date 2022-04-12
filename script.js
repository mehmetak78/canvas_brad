// https://www.youtube.com/watch?v=gm1QtePAYTM

// Basics

let canvas = document.getElementById("basics");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20,20, 150, 100);
ctx.fillStyle = "blue";
ctx.fillRect(200,20, 150, 100);

ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.strokeRect(100,150,150,100);

ctx.clearRect(25,25, 140, 90);

ctx.fillStyle = "purple"
ctx.font = "30px Arial"
ctx.fillText("Fill Text",400, 50)

ctx.strokeStyle = "orange";
ctx.lineWidth = 2;
ctx.strokeText("Stroke Text", 400,100)

// Paths

canvas = document.getElementById("paths");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
//ctx.lineTo(50, 50)
ctx.closePath()
//ctx.stroke();
ctx.fillStyle = "coral"
ctx.fill();

ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.rect(300, 50, 150, 100);
ctx.fillStyle = "teal";
ctx.fill();

ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
ctx.arc(centerX, centerY, 100, 0, Math.PI *2);
ctx.moveTo(centerX + 50, centerY);
ctx.arc(centerX, centerY , 50, 0, Math.PI,  false);
ctx.moveTo(centerX - 30, centerY - 50);
ctx.arc(centerX - 40, centerY - 50 , 10, 0, Math.PI * 2,  false);
ctx.moveTo(centerX + 50, centerY - 50);
ctx.arc(centerX + 40, centerY - 50 , 10, 0, Math.PI * 2,  false);
ctx.stroke();

