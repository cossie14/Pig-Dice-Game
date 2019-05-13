$(document).ready(function() {
 $("#help").click(function() {
   $(".come").hide(2000)
    $(".seen").hide(2000)
     $("footer").hide(2000)
   $(".hide").fadeIn(2000);
 });

 $("#home").click(function() {
   $(".hide").hide(2000)
     $(".seen").fadeIn(2000)
   $(".come").fadeIn(2000);
    $("footer").fadeIn(2000)
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
function resetGame() {
   location.reload();
}

var add = function (a, b) {
   return parseInt(a + b);
}
function addscore(accumulator, a) {
   return accumulator + a;
}

var player1 = [];
var player2 = [];
var player1held= [];
var player2held = [];
var player2score = [];
function diceFunction() {
   var random = Math.floor((Math.random() * 6) + 1);
   var random2 = Math.floor((Math.random() * 6) + 1);
   result = add(random, random2);
   document.getElementById("dice1").innerHTML = "DICE 1 : " + random;
   document.getElementById("dice2").innerHTML = "DICE 2 : " + random2;
   document.getElementById("final").innerHTML = "TOTAL : " + result;
   if ((random > 1) && (random2 > 1)) {
       player1.push(result);
       player1score = player1.reduce(addscore);
       document.getElementById("player1score").innerHTML = player1score;
   } else if ((random === 1) || (random2 === 1)) {
       $("#d2roll").show();
       $("#d1roll").hide();
       $("#player2").addClass("player2turn");
       $("#player1").removeClass("player2turn");
       $("#d2-hold").show();
       $("#d1-hold").hide();
       document.getElementById("p1ayer1score").innerHTML = 0;
   }
}
function dice2Function() {
   var random = Math.floor((Math.random() * 6) + 1);
   var random2 = Math.floor((Math.random() * 6) + 1);
   var result1 = add(random, random2);
   document.getElementById("dice3").innerHTML = "DICE 1 : " + random;
   document.getElementById("dice4").innerHTML = "DICE 2 : " + random2;
   document.getElementById("final2").innerHTML = "TOTAL : " + result1;
   if ((random > 1) && (random2 > 1)) {
       player2.push(result1);
       player2score = player2.reduce(addscore);
       document.getElementById("p2score").innerHTML = player2score;
   } else if ((random === 1) || (random2 === 1)) {
       $("#d1roll").show();
       $("#d2roll").hide();
       $("#player1").addClass("player2turn");
       $("#player2").removeClass("player2turn");
       $("#d1-hold").show();
       $("#d2-hold").hide();
       document.getElementById("player2score").innerHTML = 0;
   }
}
$(document).ready(function () {
   document.getElementById("d1-hold").addEventListener("click", function () {
       d1held.push(p1score);
       var final = d1held.reduce(addscore);
       document.getElementById("p1-held").innerHTML = final;
       $("#d1-hold").hide();
       $("#d2roll").show();
       $("#d1roll").hide();
       $("#player2").addClass("player2turn");
       $("#player1").removeClass("player2turn");
       $("#d2-hold").show();
       document.getElementById("p1ayerscore").innerHTML = 0;
       player1 = [];
       player1score = 0;
       if (final >= 100) {
           document.getElementById("p1ayer1score").innerHTML = "WINNER!!";
       }
   });
});
$(document).ready(function () {
   document.getElementById("d2-hold").addEventListener("click", function () {
       d2held.push(player2score);
       var final = d2held.reduce(addscore);
       document.getElementById("p2-held").innerHTML = final;
       $("#d2-hold").hide();
       $("#d1roll").show();
       $("#d2roll").hide();
       $("#player1").addClass("player2turn");
       $("#player2").removeClass("player2turn");
       $("#d1-hold").show();
       document.getElementById("player2score").innerHTML = 0;
       player2 = [];
       player2score = 0;
       if (final >= 100) {
           document.getElementById("player2score").innerHTML = "WINNER!!";
       }
   });
});
