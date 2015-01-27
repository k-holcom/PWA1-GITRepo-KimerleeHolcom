/**
 * Name: Kimerlee Holcom
 * Date: January 27, 2015
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){//create self executing function

    //create and define global variables (names, people, rowNum, and 3 variables for the name columns of each row
    var names = ['Kim', 'Sara', 'Ty', 'Dan', 'Tina'],   //names array created
        people = [],                                    //people array created
        rowNum = 1,                                     //initiates row number to 1
        row1Name = document.getElementById('r1c1'),     //points to column 1 in row 1
        row2Name = document.getElementById('r2c1'),     //points to column 1 in row 2
        row3Name = document.getElementById('r3c1');     //points to column 1 in row 3

//create for loop total of 3 people.
    for(var i = 0; i < 3; i++) {                         //initiates the for loop
        //create local variables for For loop
        var namesIndex = Math.floor(Math.random() * names.length);  //creates a random number to randomly choose a name from the names array
        //after determining the random index of the names array, call Person constructor (in person_blueprint.js)
        var person = new Person(names[namesIndex], rowNum),     //creates a new Person by passing the name and row number for the new person
            personName = person.name;                           //sets personName to the name that is stored in person.name

        //add person variable (the new Person object) to the people array
        people.push(person);                //use push method to add person to people array
        if(personName != row1Name.innerHTML && personName != row2Name.innerHTML && personName != row3Name.innerHTML){
            //if they are not the same, call the populateHTML function twice
            populateHTML(personName, 'r' + rowNum + 'c1');  //once to enter the name into the HTML
            populateHTML(person.jobs, 'r' + rowNum + 'c2'); //the second time to enter the job of the person

            //if the names do match one of the 3 rows, then subtract one from the incrementing variable for the loop, and one from the rowNum
        }else{
            i--;                    //decreasing var i by 1
            rowNum--;               //decreasing rowNum by 1
        };

        //at the end of the for loop, add one to the rowNum
        rowNum++;                   //increase rowNum by 1

    };