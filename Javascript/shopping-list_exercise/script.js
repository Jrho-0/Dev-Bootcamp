var button = document.querySelector("#btn");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul")

function inputLength() {
    return input.value.length
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0 ) {
        createListElement()
    }
}

function addListAfterKeydown(event) {
    
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown)