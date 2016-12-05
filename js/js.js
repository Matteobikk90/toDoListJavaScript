var newItem = document.getElementById('addBtn');

newItem.onclick = addNewItem;

function addNewItem() {
	var listItem = document.createElement("li");
	listItem.innerText = "Hello";

	var list = document.getElementById("todoList");
	list.appendChild(listItem);
	
};