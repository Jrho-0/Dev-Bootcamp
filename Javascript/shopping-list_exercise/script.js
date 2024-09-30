var button = document.querySelector("#btn");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul")

button.addEventListener("click", function() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("testing"));
    ul.appendChild(li);
})