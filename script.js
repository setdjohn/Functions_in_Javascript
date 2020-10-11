var prompter= prompt("Player will win once health is at 0- type OK")
var dragon = 10
var fire = 3
var ice = 1
var poison = 4

function dragonSlayer(name, health){
  var ele = document.createElement("div");
  ele.innerHTML=name+" — "+health;
  document.body.appendChild(ele);
}

for(var i=0; i<1; i++){
  if(dragon<=0){
    document.body.querySelector(".win").innerHTML="PLAYER WINS!";
}
  dragonSlayer("Dragon", dragon);
}

document.body.querySelector(".Fbutton").addEventListener("click", function(){
dragonSlayer("Dragon", dragon=dragon-fire+1);
})
document.body.querySelector(".Ibutton").addEventListener("click", function(){
dragonSlayer("Dragon", dragon=dragon-ice-1);
})
document.body.querySelector(".Pbutton").addEventListener("click", function(){
dragonSlayer("Dragon", dragon=dragon-poison);
})


if(0>=dragon){
  $.notify("player wins")

  document.body.querySelector(".win").innerHTML="PLAYER WINS!";
}