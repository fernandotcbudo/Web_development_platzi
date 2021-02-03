var images= [];
images ["Cauchin"]="vaca.png";
images ["Pokacho"]="pollo.png";
images ["Tocin"]="cerdo.png";

class Pakiman
{
    constructor(name,life,attack)
    {
        this.image= new Image();
        this.name= name;
        this.life= life;
        this.attack= attack;

        this.image.src= images[this.name];
    }
    speak()
    {
        alert(this.name);
    }
    show()
    {
        document.body.appendChild(this.image);
        document.write("<p>");
        document.write("<strong>"+this.name+"</strong><br />");
        document.write("Life: "+this.life+"<br />");
        document.write("Attack: "+this.attack+"<br />");
        document.write("</p>");

    }
}

var colection= [];
colection.push(new Pakiman("Cauchin",100,30));
colection.push(new Pakiman("Pokacho",80,80));
colection.push(new Pakiman("Tocin",120,40));

for(var paki of colection)
{
    paki.show();
}

for(var x in colection)
{
    console.log(x)
}