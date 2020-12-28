var keys = {
    UP:38,
    DOWN:40,
    LEFT:37,    
    RIGHT:39
};

document.addEventListener("keyup",draw_Key);
var listener= document.getElementById("canvas_ev")
var paper= listener.getContext("2d");
var x= 150;
var y= 150;

function draw_line(color,x_ini,y_ini,x_fin,y_fin,canvas_1)
{
    canvas_1.beginPath();
    canvas_1.strokeStyle = color;
    canvas_1.lineWidth= 3;
    canvas_1.moveTo(x_ini,y_ini);
    canvas_1.lineTo(x_fin,y_fin);
    canvas_1.stroke();
    canvas_1.closePath();

}

draw_line("red",149,149,151,151,paper);


function draw_Key(event)
{   
    var color_f="red"
    var movement= 10

    if(event.keyCode == keys.UP)
    {
        draw_line(color_f,x,y,x,y - movement, paper);
        y = y - movement;
    }
    if(event.keyCode == keys.DOWN)
    {
        draw_line(color_f,x,y,x,y + movement, paper);
        y = y + movement;
    }
    if(event.keyCode == keys.LEFT)
    {
        draw_line(color_f,x,y,x - movement,y, paper);
        x = x - movement;
    }
    if(event.keyCode == keys.RIGHT)
    {
        draw_line(color_f,x,y,x + movement,y, paper);
        x = x + movement;
    }
}
