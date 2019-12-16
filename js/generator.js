const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["(", ")", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", "|", "\\", "{", "}", "[", "]", ":", ";", "\"", "\'", "<", ">", ",", ".", "?", "/", "_"];
const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword(){
	let type = 0;
	let password = [];
	let generated = "";
	updateField(generated);

	for (let i = 0; i < 16; i++) {
		type = Math.floor(Math.random() * 4);
		password.push(generateCharacter(type));
	}

	generated = password.join("");
	updateField(generated);	

	console.log(password);
	console.log(generated);
}

function generateCharacter(type) {
	let char;

	if(type === 0){
		char = upper[Math.floor(Math.random() * upper.length)];
	}
	if(type === 1){
		char = lower[Math.floor(Math.random() * lower.length)];
	}
	if(type === 2){
		char = symbols[Math.floor(Math.random() * symbols.length)];
	}
	if(type === 3){
		char = numerals[Math.floor(Math.random() * numerals.length)];
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
	copyText.setSelectionRange(0, 99999); /*For mobile devices*/

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);

}
