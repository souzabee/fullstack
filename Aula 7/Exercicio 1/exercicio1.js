let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0 , 0 , 50 , 50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo (50 , 50 )
ctx.lineTo(150 , 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(250 , 0 , 250, 50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(150 , 150);
ctx.lineTo(250 ,50);
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(0 , 100 , 30 , 100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(270 , 125 , 300 , 50);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo ( 0 , 150);
ctx.lineTo(300 , 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'aqua';
ctx.arc(150 , 115 , 15 , 1*Math.PI , 10*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150 , 150 ,70 , 5*Math.PI , 2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150 , 150 ,100 , 1*Math.PI , 1.25*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150 , 150 ,100 , 1.75*Math.PI , 0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(100 , 150 , 50 , 50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'purple';
ctx.moveTo ( 150 , 150);
ctx.lineTo(150 , 300);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.fillStyle = 'aqua';
ctx.arc(150 , 300 , 50 , 1*Math.PI , 2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.fillStyle = 'yellow';
ctx.arc(75 , 225 , 15 , 1*Math.PI , 10*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.fillStyle = 'yellow';
ctx.arc(225 , 225 , 15 , 1*Math.PI , 10*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150 , 300 , 85 , 2*Math.PI , 1.5*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150 , 300 , 70 , 1.5*Math.PI , 2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'yellow';
ctx.moveTo (0 , 250);
ctx.lineTo (25 , 250);
ctx.lineTo (25 ,275);
ctx.lineTo (50 , 275);
ctx.lineTo (50 , 300);
ctx.lineTo (0 , 300)
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'brown';
ctx.fillStyle = 'brown';
ctx.moveTo (300 , 250);
ctx.lineTo (275 , 250);
ctx.lineTo (275 ,275);
ctx.lineTo (250 , 275);
ctx.lineTo (250 , 300);
ctx.lineTo (300 , 300)
ctx.stroke();
ctx.fill();
ctx.closePath();