/**
 * Name: Kimerlee Holcom
 * Date Analyzed: 1/12/2015
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
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);       //pop up box with each player's name and starting health
        for (var i = 0; i < 10; i++)                    //starting loop that will be the fight
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;        //calculating the minimum amount of damage player 1 takes
            var minDamage2 = player2Damage * .5;        //calculating the minimum amount of damage player 2 takes
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);       //calculating the amount of damage done to player 1 by subtracting minimum damage from player damage (both for player 1, multiply it by a random number between 0 and 1, then adding the minimum damage.
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);       //calculating the amount of damage done to player 2 by subtracting minimum damage from player damage (both for player 2, multiply it by a random number between 0 and 1, then adding the minimum damage.

            //inflict damage
            playerOneHealth-=f1;                        //subtract the amount of damage done from the player's "initial health", each round the "initial health" is changed to the result of this calculation
            playerTwoHealth-=f2;                        //subtract the amount of damage done from the player's "initial health", each round the "initial health" is changed to the result of this calculation

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);      //prints out each player's name and current health to the console log

            //check for victor
            var result = winnerCheck();                 //variable declared to check if there is a winner by using the winnerCheck() function
            console.log(result);                        //prints out to the console if there is a winner
            if (result==="no winner")                   //checks the variable result to see if it equals "no winner"
            {                                           //if there is no winner, this block of code is ran
                round++;                                //round number increases
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);                  //pop up box saying Round X is over, and the player's name and current health


            } else{                                     //if there is a winner, then this block of code is ran
                alert(result);                          //an alert with the winner's name is sent to the user
                break;                                  // ends the game
            };

          };
    };

    function winnerCheck(){                             //function used to check if there is a winner
        var result="no winner";                         //default result if none of the following code is true
        if (playerOneHealth<1 && playerTwoHealth<1)     //checks to see if both players health is below 1
        {                                               //if both are < 1 ,then this block of code is ran
            result = "You Both Die";                    //the result variable is set to "You Both Die"
        } else if(playerOneHealth<1){                   //if player 1's health is < 1, then this block is ran
            result =playerTwoName+" WINS!!!"            //result variable is set to tell the user that player 2 wins
        } else if (playerTwoHealth<1)                   //if player 2's health is < 1, then this block is ran
        {
            result = playerOneName+" WINS!!!"           //result variable is set to tell the user that player 1 wins
        };
       return result;                                   //returns the value of "result" so it can be used when the function winnerCheck() is called
    };

    /*******  The program gets started below *******/
    fight();

})();