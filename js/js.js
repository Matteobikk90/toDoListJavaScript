function addNewItem(list, itemText) {
	var listItem = document.createElement("li");

	// listItem.innerText = "Hello";
	listItem.innerText = itemText;

	list.appendChild(listItem);
}; 

var newItem = document.getElementById('addBtn');

newItem.onclick = function() {

	// var itemText = prompt("What do you want to had to the list??");
	
		var getValue = document.getElementById("getValue");

		var itemText = getValue.value;

		if(!itemText || itemText == "" || itemText == " ") {
		return false;
		}

		addNewItem(document.getElementById("todoList"), itemText);
		getValue.select();
};

///////////////////////////////////////////////////////////////////////

// var newItem2 = document.getElementById('addBtn2');

// newItem2.onkeyup = function(event) {
	
// 	// var itemText = prompt("What do you want to had to the list??");
	
// 	if(event.which == 13) {

// 		var itemText = event.which;

// 		if(!itemText || itemText == "" || itemText == " ") {
// 		return false;
// 		}

// 		addNewItem(document.getElementById("todoList2"), itemText);

// 	}

// };







