// Write a script that request the username of a user, capitalize the first letter of their name and then display a welcome message with the new version of their name, the rest part would be in lower case incase a user input their username as "abABCc" it becomes "Ababcc"

var _name = prompt("What is your name?");

//var name stores the name the user enters using a prompt

var firstChar = _name.slice(0,1);

var upperCaseFirstChar = firstChar.toUpperCase();

var rest0fName = _name.slice(1, _name.length);

var lowerCaseChar = rest0fName.toLowerCase();

var capitalizedName = upperCaseFirstChar + lowerCaseChar;

alert("Hello " + capitalizedName + ", welcome to my page!")

