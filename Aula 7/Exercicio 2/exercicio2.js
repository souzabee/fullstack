let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc (370 , 200 , 70 , 1*Math.PI , 10*Math.PI);
ctx.fill ();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'indianred';




