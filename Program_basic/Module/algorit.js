var numbers = 100;
for(var i = 1;i <= 100; i++)
{   
    if(Div(i,3))
    {
        document.write("Fizz");
    } 
    if (Div(i,5))
    {
        document.write("Buzz");

    }
    if (!Div(i,3) && !Div(i,5))
    {
        document.write(i);
    }
    document.write("<br />");
}

function Div(num1,num2)
{
    if (num1 % num2 == 0)
    {
        return true;
    }    
    else
    {
        return false;
    }
}