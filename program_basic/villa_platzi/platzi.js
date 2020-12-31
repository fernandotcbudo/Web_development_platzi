/*L1:Adding event listener , bringing the canvas , generating 2d context.*/
document.addEventListener("keyup",movePig);
var vp= document.getElementById("Villaplatzi");
var paper= vp.getContext("2d");
/*L2:Defining variables of position .*/
var amount= aleatory(5,15);
var posx= 218;
var posy= 218;

/*L3:In this lines we create a literal object (json) for each image. And, its different attributes.*/
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

/*L4:In this lines we assign to each object, a new element in this case will be Image. Also the variable url and  the event load.*/
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


/*L5:We need to create functions that evaluate if the Image is charged. And initiate the drawing function..*/
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
/*L6:This function draw the image on the canvas with coordinates given. The for loop creates an aleatory amount of images.  .*/
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
/*L7:With this function we can move the pig with our keyboards arrows.*/
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
/*L8:This function creates an aleatory number with min and max range of numbers.*/
function aleatory(min,max)
{
    var result;
    result=  Math.floor((Math.random() * (max-min + 1)) + min);
    return result;
}   