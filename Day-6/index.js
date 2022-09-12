// random number between 1 to 6
var randomNum1=Math.floor(Math.random() * 6) + 1;
var randomimage1 ="dice"+randomNum1+".png";
// player 1
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);
// player 2
var randomNum2=Math.floor(Math.random() * 6) + 1;
var randomimage2 ="dice"+randomNum2+".png";
var image2=document.querySelectorAll("img")[0];
image2.setAttribute("src",randomimage2);

// how is winneer
if(randomNum1 >randomNum2)
{
    document.querySelector("h1").innerHTML ="Player 1 Wins ! 😎:";
}
else if(randomNum1< randomNum2)
{
    document.querySelector("h1").innerHTML ="Player 2 Wins ! 😎";  
}
else{
    document.querySelector("h1").innerHTML ="DRAWS";  
}