alert("This program works out whether if a given year is a leap year or not, click ok and enter the year.");

var year = prompt("Enter the year");

function isLeap() {
    if (year % 4 === 0) { 
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return("Hurray! " + year + " is a leap year.");
            } else {
               return(year + " is not a Leap year, try a different year.");
           }
        } else {
            return("Hurray! " + year + " is a leap year.");
        }
    } else {
        return(year + " is not a Leap year, try a different year.");
    }
}

// use isLeap(); to call the function