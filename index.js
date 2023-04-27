function myFunction(){
var randomeNumber1=Math.floor((Math.random()*6)+1);
var randomsource="images/dice"+randomeNumber1+".png";
var randomimage= document.querySelector(".img1");
randomimage.setAttribute("src", randomsource);

var randomNumber2 = (Math.floor(Math.random()*6)+1);
var randomSource1="images/dice"+randomNumber2+".png";
var randomimage1=document.querySelectorAll("img")[1];
randomimage1.setAttribute("src", randomSource1);

if(randomeNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Win";
}
else if(randomeNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 win";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
}
