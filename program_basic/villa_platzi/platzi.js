var vp= document.getElementById("Villaplatzi");
var paper= vp.getContext("2d");
var map= "tile.png";


var imagef= new Image();
imagef.src= map;
imagef.addEventListener("load",drawing);

var imagec= new Image();
imagec.src= "vaca.png";
imagec.addEventListener("load",draw_cow);

var imagech= new Image();
imagech.src= "pollo.png";
imagech.addEventListener("load",draw_ch);

var imagep= new Image();
imagep.src= "cerdo.png";
imagep.addEventListener("load",draw_p);

function drawing()
{
    paper.drawImage(imagef,0,0);
}

function draw_cow()
{
    paper.drawImage(imagec,10,10);  
}

function draw_ch()
{
    paper.drawImage(imagech,10,200);
}

function draw_p()
{
    paper.drawImage(imagep,10,150);
}

function aleatory(min,max)
{
    var result;
    result=  Math.floor((Math.random() * (max-min + 1)) + min);
    return result;
}   