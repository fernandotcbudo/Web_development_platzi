var text = document.getElementById("box_lines");
var button = document.getElementById("button_lines");
button.addEventListener("click",draw_click);

var d = document.getElementById("draw_1");
var canvas_1 = d.getContext("2d");
var width_fin= d.width; 

function draw_line(color,x_ini,y_ini,x_fin,y_fin)
{
    canvas_1.beginPath();
    canvas_1.strokeStyle = color;
    canvas_1.moveTo(x_ini,y_ini);
    canvas_1.lineTo(x_fin,y_fin);
    canvas_1.stroke();
    canvas_1.closePath();

}


function draw_click()
{
    var lines = parseInt(text.value);
    var l= 0;
    var yi,xi;
    var space= width_fin/lines


    for(l=0; l<lines ;l++)
{
    yi= space * l;
    xi= space * (l+1);
    draw_line("red",yi,0,300,xi);
    draw_line("red",0,yi,xi,300);
    console.log("Line"+l)
}

    draw_line("blue",1,1,1,300);
    draw_line("blue",1,300,300,300);
    draw_line("blue",300,1,1,1);
    draw_line("blue",300,300,300,1);

} 




/*
while (l < lines)
{
    yi= 10 * l;
    xi= 10 * (l+1);
    draw_line("red",100,yi,xi,100);
    l= l + 1;
}
*/


