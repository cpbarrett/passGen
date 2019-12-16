function getLength(){
	let length = document.getElementById("length");

	for (let i = 0; i <= 32; i++) {
		let option = document.createElement("option");
		option.id = i;
		option.value = i;
		option.innerHTML = i;   
		//document.getElementById('length').appendChild(option);
		length.add(option);

		if (i < 8) {
			length.remove(option);
		}
	}

	//default to 16 chars (16-8)
	length.selectedIndex = 8;
}