class Bill
{
    constructor(v,c)
    {
        this.valor=v;
        this.cantidad=c;
    }
}


function delivMoney()
{   
    var t= document.getElementById("bills");
    money= parseInt(t.value);

    for(var bi of box)
    {
        if(money > 0)
        {
            div= Math.floor(money/bi.valor);

            if(div > bi.cantidad)
            {
                paper= bi.cantidad;
            }
            else
            {
                paper= div;
            }
            delivered.push(new Bill(bi.valor,paper));
            money= money - (bi.valor * paper);
        }
    }
    if (money > 0)
    {   
        r.innerHTML= "I don't have this amount of money";
    }
    else
    {
        for(var e of delivered)
        {   
            if (e.cantidad > 0)
            {r.innerHTML= r.innerHTML + e.cantidad + " bills of $" + e.valor + "<br />";}
        } 
    }
}

var box= [];
box.push(new Bill(100,5));
box.push(new Bill(50,10));
box.push(new Bill(20,5));
box.push(new Bill(10,10));
box.push(new Bill(5,5));

var delivered=[];

var div= 0;
var paper= 0;
var money= 0;

var b= document.getElementById("ex");
var r= document.getElementById("result");
b.addEventListener("click",delivMoney);


