$(document).ready(function() {
      var firstplayer;
      var secondplayer;
      var firstplayerscore = 0;
      var secondplayerscore = 0;
      var finalscore = 0;
      var activePlayer = 1;
      var result =1;

      $("#sly").click(function(event) {
      $("#cossie").attr("src","img/comp.png");
      $("#galfie").attr("src","img/guys.png");
            });
            $("#gal").click(function(event) {
              $("#comp").attr("src","img/comp.png");
              $("#two").attr("src","img/two.png");
            });
            $("#gal1").click(function(event) {
                   if($('#gal').is(':checked')) {
                     $("#cosy1").attr("src","img/3.png");
                     $("#cosy2").attr("src","img/com.png");
                     firstplayer = "You";
                     secondplayer = "Computer";
                   } else {
                     $("#cosy").attr("src","img/1.png");
                     $("#cosy1").attr("src","img/2.png");
                     player1 = "Player 1";
                     player2 = "Player 2";
                   }
                   $(".cos").show();
                   $(".OUTCOMEBASE").show();
                   firstplayerscore = 0;
                   secondplayerscore = 0;
                   finalscore = 0;
                   activePlayer = 1;

                   $(".firstplayer").text(player1);
                   $(".secondplayer").text(player2);

                   $(".firstplayerscore").text(firstplayerscore);
                   $(".secondplayerscore").text(secondplayerscore);
                   $(".finalscore").text(finalscore);
                   changeplayer(activePlayer);
                   $(".homepage").hide();
                   $(".RULES").hide();
                   $(".hero").hide();
                 });
