let removeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>`;

let completeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>`;


//Grab the 'add' button
let addButton = document.getElementById('add');
//runs when add button is clicked
addButton.addEventListener('click', function () {
	// const toDoList = document.getElementById('todo');
	// toDoList.appendChild(newItem);

	//GRABS THE VALUE OF INPUT
	let newItem = document.getElementById('weka').value;
	//funtion only runs if input is not empty
	if (newItem) {
		//adds new item to the list
		addItemTodo(newItem);
		//reset input
		document.getElementById('weka').value = '';
	}
});

//GRAB THE INPUT FIELD
let addItem = document.getElementById('weka');

//add event listener to the enter key
addItem.addEventListener('keypress', function (e) {
	//runs only if enter is pressed
	if (13 === e.keyCode) {
		let newItem = document.getElementById('weka').value;

		if (newItem) {
			addItemTodo(newItem);

			document.getElementById('weka').value = '';
		}
	}
});

//ADDING ITEMS TO THE TODO LIST
function addItemTodo(text) {
	//grab the ul
	let list = document.getElementById('todo');
	//create an li
	var item = document.createElement('li');

	item.innerHTML = text;

	list.insertBefore(item, list.childNodes[0]);
	//Div for buttons
	var manip = document.createElement('div');
	//add a class name for the buttons '
	manip.classList.add('buttons');

	let remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeSVG;
	remove.addEventListener('click', removeItem);

	let complete = document.createElement('button');
	complete.classList.add('complete');
	complete.innerHTML= completeSVG ;
	complete.addEventListener('click', completedItem);

	manip.appendChild(remove);
	manip.appendChild(complete);
	

	item.appendChild(manip);

	function removeItem() {
		item.remove();
	}


	let done = document.getElementById('completed');

	let itemTwo = document.createElement('li');

	itemTwo.innerText = item;

	//Removing from the todo list

	function completedItem() {
		item.remove();
		done.appendChild(item);
		//done.insertBefore(itemTwo,)
	}
}
