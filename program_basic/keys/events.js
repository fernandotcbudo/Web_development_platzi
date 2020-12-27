document.addEventListener("keyup",draw_Key);

var keys = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};

console.log(keys);

function draw_Key(event)
{
    if(event.keyCode == keys.UP)
    {
        console.log("arriba");
    }
    if(event.keyCode == keys.DOWN)
    {
        console.log("abajo");
    }
    if(event.keyCode == keys.LEFT)
    {
        console.log("izquierda");
    }
    if(event.keyCode == keys.RIGHT)
    {
        console.log("derecha");
    }
}
