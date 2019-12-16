function getLength(){
	let length = document.getElementById("length");
	
	for (let i = 8; i <= 32; i++) {
		let option = document.createElement("option");
		option.id = i;
		option.value = i;
		option.innerHTML = i;   
		//document.getElementById('length').appendChild(option);
		length.add(option);
	}

	//default to 16 chars
	length.value = 16;
	length.selectedIndex = 16;
}