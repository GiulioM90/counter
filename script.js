var number = document.getElementById("number");
var count = 0;
var plusbutton = document.getElementById("pluscontainer");

var minbutton = document.getElementById ("mincontainer");

plusbutton.onclick = function() {
  count += 1;
  number.innerHTML =  count;
};
minbutton.onclick = function (){
  count -=1;
  number.innerHTML = count;
};