document.addEventListener("keyup",movePig);
var vp= document.getElementById("Villaplatzi");
var paper= vp.getContext("2d");

var amount= aleatory(5,15);
var posx= 218;
var posy= 218;


var background= {
    url:"tile.png",
    chargeOK: false
};

var cow= {
    url:"vaca.png",
    chargeOK: false
};

var pig= {
    url:"cerdo.png",
    chargeOK: false
};

var chi= {
    url:"pollo.png",
    chargeOK: false
};

background.image= new Image();
background.image.src= background.url;
background.image.addEventListener("load",charge_b);

cow.image= new Image();
cow.image.src= cow.url;
cow.image.addEventListener("load",charge_c);

pig.image= new Image();
pig.image.src= pig.url;
pig.image.addEventListener("load",charge_p);

chi.image= new Image();
chi.image.src= chi.url;
chi.image.addEventListener("load",charge_ch);



function charge_b()
{
    background.chargeOK = true;
    drawing();
}


function charge_c()
{
    cow.chargeOK = true;
    drawing();
}

function charge_p()
{
    pig.chargeOK = true;
    drawing();
}

function charge_ch()
{
    chi.chargeOK = true;
    drawing();
}

function drawing()
{
    if (background.chargeOK)
    {
        paper.drawImage(background.image,0,0);
    }

    if (cow.chargeOK)
    {   
        for (var v=0; v<amount;v++)
        {
            var x= aleatory(0,7);
            var y= aleatory(0,10);
            var x= x*60;
            var y= y*40;
            paper.drawImage(cow.image,x,y);
        }
    }

    if (pig.chargeOK)
    {   
        paper.drawImage(pig.image,posx,posy);  
    }

    if (chi.chargeOK)
    {   
        for (var v=0; v<amount;v++)
        {
            var x= aleatory(0,10);
            var y= aleatory(0,7);
            var x= x*60;
            var y= y*40;
            paper.drawImage(chi.image,x,y);
        }
    }

}

function movePig(event)
{
    var movementPig= 50;
    var keys= {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };

    switch(event.keyCode)
    {
        case keys.UP:
            posy= posy - movementPig;
                drawing(posx,posy);
                break;

        case keys.DOWN:
            posy= posy + movementPig;
                drawing(posx,posy);
                break;

        case keys.RIGHT:
            posx= posx + movementPig;
                drawing(posx,posy);
                break;

        case keys.LEFT:
            posx= posx - movementPig;
                drawing(posx,posy);
                break;
            
       
    }
       
    
}

function aleatory(min,max)
{
    var result;
    result=  Math.floor((Math.random() * (max-min + 1)) + min);
    return result;
}   