var d = document.getElementById("draw_1");
var canvas_1 = d.getContext("2d");

function draw_line(color,x_ini,y_ini,x_fin,y_fin)
{
    canvas_1.beginPath();
    canvas_1.strokeStyle = color;
    canvas_1.moveTo(x_ini,y_ini);
    canvas_1.lineTo(x_fin,y_fin);
    canvas_1.stroke();
    canvas_1.closePath();

}

draw_line("red",100,100,200,100);
draw_line("blue",100,100,100,200);
draw_line("yellow",200,100,200,200);
draw_line("green",100,200,200,200);
draw_line("pink",150,50,250,50);
draw_line("brown",100,100,150,50);