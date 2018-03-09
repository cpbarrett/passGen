const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["(", ")", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", "|", "\\", "{", "}", "[", "]", ":", ";", "\"", "\'", "<", ">", ",", ".", "?", "/", "_"];
const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let password = [];


 //console.log(upper.length);
// console.log(lower);
 //console.log(symbols.join(""));
// console.log(numerals);
generatePassword();

function generatePassword(){
	let type;
	for (let i = 0; i < 16; i++) {
		type = Math.floor(Math.random() * 4);
		console.log(type);
		password[i] = generateCharacter(type);
	}

	console.log(password);
	console.log(password.join(""));
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