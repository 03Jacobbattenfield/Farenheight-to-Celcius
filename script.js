var f = document.getElementById("far");//gets the farenheight value

var c = document.getElementById("demo");//gets the context of demo
//conversion function below!
function convert(){
var fsub = f.value-32;
var fdiv = fsub/1.8;
    c.innerHTML=fdiv+"°C";
}
