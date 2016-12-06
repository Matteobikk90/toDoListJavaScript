function addNewItem(list) {
	var listItem = document.createElement("li");
	// listItem.innerText = "Hello";
	list.appendChild(listItem);
}; 

var newItem = document.getElementById('addBtn');

newItem.onclick = function() {
	addNewItem(document.getElementById("todoList"));
};