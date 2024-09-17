var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var number0fPeople = names.length;

var randomPersonPosition = Math.random() * number0fPeople;

var randomPerson = Math.floor(randomPersonPosition);

function whosPaying() {

    return(randomPerson + " is going to buy lunch today!");

}

whosPaying();