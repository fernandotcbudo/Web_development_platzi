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
    money= parseInt(t.valor);
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
        console.log("x");
    }
    console.log(delivered);
}

var div= 0;
var paper= 0;
var money =0;
var box= [];
var delivered=[];
box.push(new Bill(50,10));
box.push(new Bill(20,5));
box.push(new Bill(10,5));

var b= document.getElementById("ex");
b.addEventListener("click",delivMoney);

