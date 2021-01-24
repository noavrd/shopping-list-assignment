let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.onclick = function() {
 let inputValue = input.value;
 input.value = "";   

 let listItem = document.createElement("li");
 let listText = document.createElement("span");
 let secButton = document.createElement("button");

 listItem.appendChild(listText);
 listText.textContent = inputValue;
 listItem.appendChild(secButton);
 secButton.textContent = "delete";
 ul.appendChild(listItem);

 secButton.onclick = function() {
     ul.removeChild(listItem);
 }
 input.focus();
}