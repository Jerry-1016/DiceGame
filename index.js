var player1 = prompt("Player 1 name:");
var player2 = prompt("Player 2 name:");


var randomnum1 = Math.floor(Math.random()*6)+1 ;
var randomnum1Img = "images/dice"+randomnum1+".png";
document.querySelector(".img1").setAttribute("src" ,randomnum1Img);


var randomnum2 = Math.floor(Math.random()*6)+1 ;
var randomnum2Img = "images/dice"+randomnum2+".png";
document.querySelector(".img2").setAttribute("src" ,randomnum2Img);

if(randomnum1> randomnum2)
{
  document.querySelector("h1").innerHTML = player1+" Wins";
} else if (randomnum1<randomnum2) {
  document.querySelector("h1").innerHTML = player2+ " Wins";
} else
{
  document.querySelector("h1").innerHTML = "Its a DRAW";
}

document.querySelector(".player1").innerHTML = player1;
document.querySelector(".player2").innerHTML = player2;
