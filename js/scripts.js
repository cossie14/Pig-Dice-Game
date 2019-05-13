$(document).ready(function() {
 $("#help").click(function() {
   $(".come").hide(2000)
   $(".hide").fadeIn(2000);
 });

 $("#home").click(function() {
   $(".hide").hide(2000)
   $(".come").fadeIn(2000);
 });
});

function myFunction() {

 var temp=0;

 var image = new Array(6);
image[0]= 'img/dice1.png';
image[1]= 'img/dice2.png';
image[2]= 'img/dice3.png';
image[3]= 'img/dice4.png';
image[4]= 'img/dice5.png';
image[5]= 'img/dice6.png';
 temp = Math.floor(Math.random() * 6);

 document.getElementById("results").src=image[temp];

}
