function crossList() {

	var me = this;	
	console.log(me);
	var checkId = "cb_" + totalItems;
	console.log(checkId);

};

function addNewItem(list, itemText) {

	totalItems++;

	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.onclick = crossList;

	// listItem.innerText = "Hello";
	listItem.innerText = itemText;

	listItem.appendChild(checkBox);

	list.appendChild(listItem);

}; 

var totalItems = 0;
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







