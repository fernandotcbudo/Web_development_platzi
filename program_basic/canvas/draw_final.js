var d = document.getElementById("draw_1");
var canvas_1 = d.getContext("2d");

canvas_1.beginPath();
canvas_1.strokeStyle = "red";
canvas_1.moveTo(50,100);
canvas_1.lineTo(50,200);
canvas_1.stroke();
canvas_1.closePath();

