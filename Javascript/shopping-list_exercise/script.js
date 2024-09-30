var button = document.querySelector("#btn");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul")

button.addEventListener("click", function() {
    if (input.value.length > 0 ) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})

input.addEventListener("keydown", function(event) {
    if (input.value.length > 0 && event.key === "Enter") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";   
    }
})