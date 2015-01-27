/**
 * Name: Kimerlee Holcom
 * Date: January 27, 2015
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

window.Person = Person;                     //storing the Person object on the window so it can be used by another file

Person.jobs = ['Teacher', 'Student', 'Actor', 'Pilot']; //create the Person.jobs variable, containing an array.
Person.actions = ['Eating', 'Sleeping', 'Working'];     //create the Person.actions variable, containing an array.

function Person(name, row) {                             //create the constructor function of Person passing in the name and row, as these are the two "keys" that will be sent from main.js

    this.name = name;                       //assign this.name to the value that is stored in the name parameter

    this.actions = Person.actions[Math.floor(Math.random() * Person.actions.length)];   //to assign ONE value to this.actions, must set it equal to Persons.actions[random number (using the .floor, and .random methods of the Math function.)

    this.jobs = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];            //to assign ONE value to this.jobs, must set it equal to Persons.jobs[random number (using the .floor, and .random methods of the Math function.)

    this.row = row;                         //assign this.row to the value stored in the row parameter

    //print out initial action for each person
    var actionId = document.getElementById('r' + this.row + 'c3');      //point to the column three in that person's row
    actionId.innerHTML = this.actions;      //sets the innerHTML to the action stored in this.actions
};

Person.prototype.actionUpdate = function(){     //create a prototype function called actionUpdate

    if(Math.floor(Math.random() < 0.01)){       //check to see if the random number(that is rounded down) is less than 0.01

        var chooseAction = Math.floor(Math.random() * Person.actions.length);        //if it is, then set variable chooseAction to a random number rounded down between 0 and the length of the Persons.actions array

        this.actions = Person.actions[chooseAction];        //set this.actions equal to Persons.actions[chooseAction]

        var actionId = document.getElementById('r' + this.row + 'c3');          //point to the row/column needed (set it to a variable to make it easier to write out)

        actionId.innerHTML = this.actions;          //enter this.actions into the HTML using innerHTML
    };
};