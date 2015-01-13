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
    //player information
    var playerOne = ["Spiderman", 20, 100]; //player one's information wrapped up into an array
    var playerTwo = ["Batman", 20, 100];    //player two's information wrapped up into an array
    /*                                      //commented out the original code
    //player name
    var playerOneName = "Spiderman";        //declaring the first player's name
    var playerTwoName = "Batman";           //declaring the second player's name

    //player damage
    var player1Damage = 20;                 //declaring the amount of damage player 1 does
    var player2Damage = 20;                 //declaring the amount of damage player 2 does

    //player health
    var playerOneHealth = 100;              //declaring the amount of health player 1 starts with
    var playerTwoHealth = 100;              //declaring the amount of health player 2 starts with
    */
    //initiate round
    var round=0;                            //declaring initial round number

    function fight(){                       //declaring beginning of function
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);       //pop up box with each player's name and starting health (instead of using playerOneName, playerOneHealth, playerTwoName, and playerTwoHealth, the information is pulled from the arrays using the indexes for each piece of information needed (i.e player name is in the index associated with the number 0, damage is index 1, and health is 2))
        for (var i = 0; i < 10; i++)                    //starting loop that will be the fight
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5;        //calculating the minimum amount of damage player 1 takes (using playerOne array index 1 for the damage)
            var minDamage2 = playerTwo[1] * .5;        //calculating the minimum amount of damage player 2 takes (using playerTwo array index 1 for the damage)
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);       //calculating the amount of damage done to player 1 by subtracting minimum damage from player damage (both for player 1, multiply it by a random number between 0 and 1, then adding the minimum damage. (using playerOne array index 1 for the damage)
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);       //calculating the amount of damage done to player 2 by subtracting minimum damage from player damage (both for player 2, multiply it by a random number between 0 and 1, then adding the minimum damage. (using playerTwo array index 1 for the damage)

            //inflict damage
            playerOne[2]-=f1;                        //subtract the amount of damage done from the player's "initial health", each round the "initial health" is changed to the result of this calculation (replacing the health index with the new amount of health for playerOne)
            playerTwo[2]-=f2;                        //subtract the amount of damage done from the player's "initial health", each round the "initial health" is changed to the result of this calculation (replacing the health index with the new amount of health for playerTwo)

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);      //prints out each player's name and current health to the console log (instead of using playerOneName, playerOneHealth, playerTwoName, and playerTwoHealth, the information is pulled from the arrays using the indexes for each piece of information needed)

            //check for victor
            var result = winnerCheck();                 //variable declared to check if there is a winner by using the winnerCheck() function
            console.log(result);                        //prints out to the console if there is a winner
            if (result==="no winner")                   //checks the variable result to see if it equals "no winner"
            {                                           //if there is no winner, this block of code is ran
                round++;                                //round number increases
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);                  //pop up box saying Round X is over, and the player's name and current health (instead of using playerOneName, playerOneHealth, playerTwoName, and playerTwoHealth, the information is pulled from the arrays using the indexes for each piece of information needed)


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