/**
 * Name: Kimerlee Holcom
 * Date Analyzed: 1/7/2015
 * Course/Section: PWA-1 Section 01
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");                //printing to console FIGHT!!!

    //player name
    var playerOneName = "Spiderman";        //declaring the first player's name
    var playerTwoName = "Batman";           //declaring the second player's name

    //player damage
    var player1Damage = 20;                 //declaring the amount of damage player 1 does
    var player2Damage = 20;                 //declaring the amount of damage player 2 does

    //player health
    var playerOneHealth = 100;              //declaring the amount of health player 1 starts with
    var playerTwoHealth = 100;              //declaring the amount of health player 2 starts with

    //initiate round
    var round=0;                            //declaring initial round number

    function fight(){                       //declaring beginning of function
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)        //pop up box with each player's name and starting health
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();