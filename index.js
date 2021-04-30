var randomNumber1= Math.floor(Math.random() *6) +1;
var randomImageSourse1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSourse1);

var randomNumber2= Math.floor(Math.random() *6) +1;
var randomImageSourse2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSourse2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML= "Player 1 Wins!";
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML= "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML= "Draw!";
}
