/************************
* Name: Kimerlee Holcom
* Date: January 21, 2015
* Class/Section: PWA-I/01
**/

// Create privatized scope using a self-executing function
(function(){																//calls main function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),					//sets the variable to what is located in the HTML id "results"
		searchInput = document.forms[0].search,								//sets variable to the search form located in the HTML (not correctly declared right missing "var")
		currentSearch = ''													//variable set to empty string (not correctly declared right missing "var")
	;

	// Validates search query
	var validqte = function(query){											//anonymous function declared with the parameter query entered (validqte may be misspelled) -- changed == to a single = (not comparing it is setting up an anonymous function
		//console.log("this is right BEFORE the while loop");					//checking functionality
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){										//beginning of a while loop. Starts while the string is at the first character(String is set to empty. Should it check to see if it is == or ===?) -- changed it from = to === to compare the two instead of setting them equal
			query = query.substring(1, query.length);						//sets query to the substring starting at the second character to the end of the string(shouldn't it be 0 instead of 1?)
		};
		while(query.charAt(query.length-1) === "") {							//new loop that checks to see if the last character of the "query" is empty.
			query = query.substring(0, query.length - 1);						//sets the query to the whole string from the character in the 0 index spot of the string, all the way to the end of the string removing whitespace at end of query
		};																	//had to add a closing }
		
		// Check search length, must have 3 characters
		if(query.length < 3){												//checking to see if the query length is smaller than 3
			alert("Your search query is too small, try again.");			//this line alerts the user that their search inquiry is too small. (There needs to be a " at the end of the alert() ) -- added a " at the end of the string inside the alert()
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();											//this make sure the id (in html) is focused and nothing else. (Should it be searchForm not searchInput?)
			return;															//this is used as a way to end the script instead of returning a value.
		};
		
		search(query);														//calls the search function with the query as the argument
	};
	
	// Finds search matches
	var search = function(query){											//beginning of a while loop. Starts while the string is at the first character(String is set to empty) -- had to add an open {
		
		// split the user's search query string into an array
		var queryArray = query.split(" ");									//This line of code assumes query is an array, therefore it is joining it to become a string (should use .split(" ") to split the string to an array) -- used .split() instead of .join()
		
		// array to store matched results from database.js
		var results = [];													//This sets up the variable results and believe they are trying to create a new array because of the use of the brackets[]

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){								//For loop that is using the variable i as a counter and j as the length of db and each time the loop is used, i is increased by 1
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); 							//this sets the variable dbTitleEnd to the current index being used by the variable i, it is then putting a | at the end of each one
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);		//sets the variable dbitem to all lowercase letters, and the string from character 0 to the value of dbTitleEnd -- had to change it from .tolowercase to .toLowerCase (camelcase)

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++) {				//embedded for loop, uses ii for increment, jj for the array length variable and increments ii by 1 each time it is looped.
				var qitem = queryArray[ii].toLowerCase();					//sets qitem to the array item at that specific index (noted by ii) to all lowercase letters -- had to change it from .tolowercase to .toLowerCase (camelcase)

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);						//sets variable compare to the dbitem to the same index as the one in qitem.
				if (compare !== -1) {										//checks to see if the variable compare is not false(aka is true)
					results.push(db[i]);									//if the check is true, then it adds that item to the array for results

				};															//ends if statement
			};																//this is suppose to end the embedded for loop(needs a }) -- had to add a closing }
		};																	//suppose to end the original for loop(needs } as well) -- had to add a closing }

		results.sort();														//sorts the array results alphabetically
		
		// Check that matches were found, and run output functions
		if(results.length === 0){												//checks to see if the number of matches equals 0 (should be == or === not just =)
			noMatch();														//runs the noMatch function if it is true
		}else{																//this block runs if the condition above is false
			showMatches(results);											//runs the showMatches function with a argument of results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){												//anonymous function (noMatch()) defined
		var html = ''+														//creates html variable with '' adding next line
			'<p>No Results found.</p>'+										//adds the paragraph "No Results found." and adds next line
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'//adds the paragraph "Try searching for "JavaScript". Just an idea." with its own inline style.
		;																	//ends the variable definition
		resultsDIV.innerHTML = html;										//sets the resultsDiv html to what the variable html is equal to.
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){									//defining the showMatches function using anonymous function
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',										//defining and setting the variable html to the paragraph tag for "Results",
			title,															//title variable is used in the definition of the html variable,
			url																//as is the url variable
		;																	//end of setting what html is equal to
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){							//for loop using i as incrementing number, j as the length of the results array, and increasing i each time the loop is used
			// title of video ends with pipe
			// pull the title's string using index numbers
			var titleEnd = results[i].indexOf('|');								//setting the variable titleEnd to the value of what the index (i) of results is equal to, adding a | to the end
			title = results[i].substring(0, titleEnd);						//setting the title to the substring of the value of index(i) of the results array starting at character 0 (the first character) and going to the value of titleEnd -- had to change subString() to substring() (no camelcase)
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);	//setting url to the the value of results at index i but only that which is after the | (after titleEnd) to the end of the index i
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';			//adding a link to the source using html tags for links and paragraphs
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.				//inserting the link made above into the resultsDiv id
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {								//creating a new anonymous function when the search form is submitted
		var query = searchInput.value;										//setting the value of the new variable query to the value of the search form
		validqte(query);													//calling the validqte() with an arguement of query

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;														//returns the value false
	};																		//had to add a closing }

})();																		//end of program -- this is correct no errors on this line