const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["(", ")", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", "|", "\\", "{", "}", "[", "]", ":", ";", "\"", "\'",
	 "<", ">", ",", ".", "?", "/", "_"];

function generatePassword(){
	let password = [];
	let length = document.getElementById("length").selectedIndex + 6;
	let generated = "";
	let withSymbols = document.getElementById("formCheck-1").checked;
	updateField(generated);
	console.log(withSymbols);

	for (let i = 0; i < length; i++) {
		password.push(generateCharacter(withSymbols));
	}

	generated = password.join("");
	updateField(generated);	

	console.log(password);
	//console.log(generated);
}

function generateCharacter(withSymbols) {
	let char = "";
	let type = null;
	if (withSymbols) {
	    type = Math.floor(Math.random() * 4);
	} else {
	    type = Math.floor(Math.random() * 3);
	}

	switch(type) {
		case 0:
			char = upper[Math.floor(Math.random() * upper.length)];
			break;
		case 1:
			char = lower[Math.floor(Math.random() * lower.length)];
			break;
		case 2:
		    char = numerals[Math.floor(Math.random() * numerals.length)];
			break;
		case 3:
			char = symbols[Math.floor(Math.random() * symbols.length)];
			break;
		default:
			break;
	}
	return char;
}

function updateField(generated){
	/* Get the text field*/
	let field = document.getElementById("field"); 

	//update field value to generated
	document.getElementById("box").reset();
	field.value = generated; 

}

function copyPassword(){
	/* Get the text field */
	let copyText = 	document.getElementById("field"); 

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 33); /*For mobile devices*/

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied: " + copyText.value);

}
