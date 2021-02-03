var express = require("express");

var app= express();

app.get("/", init);

function init(petition,response)
{
    response.send("<strong> Hi world! </strong>")
}

app.listen(8989)