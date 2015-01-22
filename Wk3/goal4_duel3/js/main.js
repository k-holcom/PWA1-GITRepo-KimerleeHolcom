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
    var players = [
        playerOne = {name:'Kabal', damage:20, health:100},          //Object for Player one (name, damage and health)
        playerTwo = {name:'Kratos', damage:20, health:100}          //Object for Player two (name, damage and health)
    ];

    //initiate round
    var round=0;                            //declaring initial round number

    // create button variable to make things easier down the road
    var button =document.querySelector('.buttonblue');                  //created a variable that holds the pointer for the fight button HTML

    // Initializing Player health at top of screen
    document.getElementById('kabal').innerHTML = players[0].health;         //showing player's initial health by changing HTML via innerHTML
    document.getElementById('kratos').innerHTML = players[1].health;        //showing player's initial health by changing HTML via innerHTML

    //manipulate CSS to have health numbers look like they are above the fighter
    document.getElementById('kabal').style.margin = '0px 0px 0px 20%';          //changed the margin from 0px 0px 0px 15% to 0px 0px 0px 20%
    document.getElementById('kratos').style.margin = '0px 0px 0px 55%';          //changed the margin from 0px 0px 0px 40% to 0px 0px 0px 55%

            function fight() {                       //declaring beginning of function

                    //random formula is - Math.floor(Math.random() * (max - min) + min);
                    var minDamage1 = players[0].damage * .5;        //calculating the minimum amount of damage player 1 takes (the information from the object created in the players array)
                    var minDamage2 = players[1].damage * .5;        //calculating the minimum amount of damage player 2 takes (the information from the object created in the players array)
                    var f1 = Math.floor(Math.random() * (players[0].damage - minDamage1) + minDamage1);       //calculating the amount of damage done to player 1 by subtracting minimum damage from player damage (getting player damage from the object created in players array)
                    var f2 = Math.floor(Math.random() * (players[1].damage - minDamage2) + minDamage2);       //calculating the amount of damage done to player 2 by subtracting minimum damage from player damage (getting player damage from the object created in players array)

                    //inflict damage
                    players[0].health = players[0].health - f1;                        //subtract the amount of damage done from the player's "initial health", each round the "initial health" is changed to the result of this calculation (replacing the health key with the new amount of health for playerOne)
                    players[1].health = players[1].health - f2;                        //subtract the amount of damage done from the player's "initial health", each round the "initial health" is changed to the result of this calculation (replacing the health key with the new amount of health for playerTwo)
                    //console.log(players[0].health, players[1].health);              //checking to see if correct math is done (to see why health is displayed as the same)

                    //check for victor
                    var result = winnerCheck();                 //variable declared to check if there is a winner by using the winnerCheck() function
                    console.log(result);                        //prints out to the console if there is a winner
                    if (result === "no winner")                   //checks the variable result to see if it equals "no winner"
                    {                                           //if there is no winner, this block of code is ran
                        round++;                                //round number increases
                        document.getElementById('kabal').innerHTML = players[0].health;         //changing HTML to player's current health
                        document.getElementById('kratos').innerHTML = players[1].health;        //changing HTML to player's current health
                        document.getElementById('round').innerHTML = 'Round ' + round + ' is over!'; //changing HTML so it tells the user what round is done.


                    } else {                                     //if there is a winner, then this block of code is ran

                        //console.log(document.getElementById('scores').innerHTML);
                        document.getElementById('scores').innerHTML = result;           //changing the innerHTML of the id scores to the result of winnerCheck() if there is a winner, or both die
                        document.getElementById('scores').style.textAlign = 'center';   //centering the text of the result.
                        document.getElementById('round').innerHTML = result;
                        //alert(result);                          //an alert with the winner's name is sent to the user
                        button.innerHTML = 'Done!';
                        button.setAttribute('onclick', null);
                        //break;                                  // ends the game
                    };

            };


    function winnerCheck(){                             //function used to check if there is a winner
        var result="no winner";                         //default result if none of the following code is true
        if (players[0].health<1 && players[1].health<1)           //checks to see if both players health is below 1 (uses information from players array of the player objects)
        {                                               //if both are < 1 ,then this block of code is ran
            result = "You Both Die";                    //the result variable is set to "You Both Die"
        } else if(players[0].health<1){                   //if player 1's health is < 1, then this block is ran (using playerOne object (health key) in the players array)
            result =players[1].name+" WINS!!!"            //result variable is set to tell the user that player 2 wins (using playerTwo object (name key) in the players array)
        } else if (players[1].health<1)                   //if player 2's health is < 1, then this block is ran (using playerTwo object (health key) in the players array)
        {
            result = players[0].name+" WINS!!!"           //result variable is set to tell the user that player 1 wins (using playerOne object (name key) in the players array)
        };
       return result;                                   //returns the value of "result" so it can be used when the function winnerCheck() is called
    };
    var winnerResult = winnerCheck();

    /*******  The program gets started below *******/
button.onclick = function(e) {
    fight();

    e.preventDefault();
    return false;
};
})();