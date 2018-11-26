// window.onload = function() {
//   novaDiv();
// }

var newSticker = document.getElementById("stickers");
var newDiv = document.createElement("div");
var btn = document.getElementById("btn");

var textarea = document.createElement("textarea");
var button = document.createElement("button");

function novaDiv() {

	var bckColor = Math.floor((Math.random() * 5) + 1);

	switch(bckColor) {
	case 1:
		bckColor = "#ffcce6";
		break;
	case 2:
		bckColor = "#b3e6ff";
		break;
	case 3:
		bckColor = "#ffff80";
		break;
	case 4:
		bckColor = "#ff8080";
		break;
	case 5:
		bckColor = "#a3c2c2";
		break;
  }

  newDiv.classList.add("stick");
  newDiv.appendChild(textarea);
  newDiv.appendChild(button);
  // newDiv.style.display = "block";

  textarea.style.backgroundColor = bckColor;
  textarea.style.borderColor = bckColor;

  button.id = "btn";
  button.textContent = "+";
  button.style.backgroundColor = bckColor;
  button.style.borderColor = bckColor;
  button.setAttribute("onclick", "novaDiv()");

  document.body.appendChild(newDiv);
  console.log(newDiv);
}