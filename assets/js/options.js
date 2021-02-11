function getLength(){
	let length = document.getElementById("length");

	for (let i = 6; i <= 32; i++) {
		let option = document.createElement("option");
		option.id = i;
		option.value = i;
		option.innerHTML = i;   
		//document.getElementById('length').appendChild(option);
		length.add(option);
	}

	//default to 16 chars (16-6)
	length.selectedIndex = 10;
}