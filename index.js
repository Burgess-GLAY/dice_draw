var randomnumber1 = Math.random()*6;
randomnumber1 = Math.floor(randomnumber1)+1; //1-6
var randomdiceimage = "dice" + randomnumber1 + ".png";//dice1.png-dice6.png
var randomimagesource = "images/" + randomdiceimage;//images/dice1.png-images/dice6.png
 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomimagesource);

 var randomnumber2 = Math.random()*6;
 randomnumber2 = Math.floor(randomnumber2)+1;
 var randomimagesource2 = "images/dice" + randomnumber2 + ".png";
 var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);
 
 if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS!!";
 }
 else if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!!";
 }
 else{
    document.querySelector("h1").innerHTML="DRAW!!";
 }