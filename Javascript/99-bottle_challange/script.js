var number0fBottles = 99;

function value0fX() {
    while (number0fBottles >= 1) {
        var bottleWord = "bottles";
        if (number0fBottles === 1) {
            bottleWord = "bottle";
        }
        console.log(number0fBottles  + " " + bottleWord + " of beer on the wall\n" + number0fBottles + " bottles of beer,");

        console.log("Take one down, pass it around,");

        number0fBottles--;

        if (number0fBottles > 0) {
            console.log(number0fBottles  + " " + (number0fBottles === 1 ? "bottle" : "bottles") + " of beer on the wall")
        } else {
            console.log("No more bottles of beer on the wall.")
        }

    } 
    
}

//value0fX();

