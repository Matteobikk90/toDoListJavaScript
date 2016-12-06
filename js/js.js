function addNewItem(list, itemText) {
	var listItem = document.createElement("li");

	// listItem.innerText = "Hello";
	listItem.innerText = itemText;

	list.appendChild(listItem);
}; 

var newItem = document.getElementById('addBtn');

newItem.onclick = function() {
	var itemText = prompt("What do you want to had to the list??");

	if(!itemText || itemText == "" || itemText == " ") {
		return false;
	}

	addNewItem(document.getElementById("todoList"), itemText);
};