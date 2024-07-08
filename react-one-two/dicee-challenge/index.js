let diceOne = Math.floor(Math.random()*6);
let diceTwo = Math.floor(Math.random()*6);
let header = document.querySelector("#header-title");
let diceImageOne = document.querySelector(".img1");
let diceImageTwo = document.querySelector(".img2");

if(diceOne > diceTwo)
    header.innerHTML = "🚩 Player 1 Wins!";
else if(diceTwo > diceOne)
    header.innerHTML = "Player 2 Wins! 🚩";
else
    header.innerHTML = "Draw!";

diceImageOne.setAttribute("src","images/dice"+ (diceOne+1).toString()+".png");
diceImageTwo.setAttribute("src","images/dice"+ (diceTwo+1).toString()+".png");