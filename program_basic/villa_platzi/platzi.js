z= aleatory(10,20);

for(var i=0;i<10;i++)
{
    z= aleatory(10,20);
    document.write(z + ",");
}

document.write(z);

function aleatory(min,max)
{
    var result;
    result=  Math.floor((Math.random() * (max-min + 1)) + min);
    return result;
}