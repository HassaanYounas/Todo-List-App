var addBtn = document.getElementById("add-btn");
var noTaskMsg = document.getElementById("noTask");
var noneCompleteMsg = document.getElementById("noneComplete");
var todo = document.getElementById("to-do");
var completed = document.getElementById("completed");
var counterTodo = 1, counterCompleted = 1, same = true;

var data = {
	todo : [],
	completed : []
}

// To add a new task to the todo list
function addTask() {
	let task = document.getElementById("item").value;
	let text = document.querySelectorAll(".text");

	if (text.length > 0) {
		for (let i = 0; i < text.length; i++) {
			var p = text[i].childNodes;
			if (task == p[1].innerHTML) {
				same = false;
				break;
			} 
		}	
	}

	if (task && same) {
		// Adding the text to the data object
		data.todo.push(task);
		noTaskMsg.style.display = "none";

		let tickId = "tick" + counterTodo;
		let deleteId = "delete" + counterTodo;
		const divTodo = document.createElement("div");

		divTodo.classList.add("tasks");
		divTodo.innerHTML = `
			<div class="text">
	          <p>${task}</p>
	        </div>
	        <div class="deleteIcon" id="${deleteId}">
	          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="delete" x="0px" y="0px" viewBox="0 0 486.4 486.4" style="enable-background:new 0 0 486.4 486.4;" xml:space="preserve" width="30px" height="30px" fill="#f96868">
	            <path d="M446,70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5,0-53.5,24-53.5,53.5V70H40.4c-7.5,0-13.5,6-13.5,13.5    S32.9,97,40.4,97h24.4v317.2c0,39.8,32.4,72.2,72.2,72.2h212.4c39.8,0,72.2-32.4,72.2-72.2V97H446c7.5,0,13.5-6,13.5-13.5    S453.5,70,446,70z M168.6,53.5c0-14.6,11.9-26.5,26.5-26.5h96.2c14.6,0,26.5,11.9,26.5,26.5V70H168.6V53.5z M394.6,414.2    c0,24.9-20.3,45.2-45.2,45.2H137c-24.9,0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z" />
	            <path d="M243.2,411c7.5,0,13.5-6,13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v238.5    C229.7,404.9,235.7,411,243.2,411z"/>
	            <path d="M155.1,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9    C141.6,390.1,147.7,396.1,155.1,396.1z"/>
	            <path d="M331.3,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9    C317.8,390.1,323.8,396.1,331.3,396.1z"/>
	          </svg>
	        </div>
	        <div class="tickIcon" id="${tickId}">
	          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="tick" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve" width="30px" height="30px" fill="#1bfc8c">
	            <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
	            <path d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406   l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411   C39.251,14.885,38.62,14.922,38.252,15.336z"/>
	          </svg>
	        </div>`;

		todo.appendChild(divTodo);

		// To remove a task from the todo list
		let deleteBtn = document.querySelector("#delete" + counterTodo);
		deleteBtn.addEventListener("click", () => {
	        todo.removeChild(divTodo);
		})

		// Once the user has completed a task
		let tickBtn = document.querySelector("#tick" + counterTodo);
		checkBox(task, tickBtn, divTodo);

		same = true;
		counterTodo++;
	}
}

// To transfer the todo data from todo to completed
function checkBox(task, tickBtn, divTodo) {
	tickBtn.addEventListener("click", () => {
		let removeId = "remove" + counterCompleted;
		noneCompleteMsg.style.display = "none";
		
		// Adding the text to the data object
		data.todo.splice(task, 1);
		data.completed.push(task);

		const divComplete = document.createElement("div");
		divComplete.classList.add("completed");

		divComplete.innerHTML = `
			<div class="text">
	          <p>${task}</p>
	        </div>
	        <div class="removeIcon" id="${removeId}">
	          <svg class="remove" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64" fill="#636363">
	            <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
	          </svg>
	        </div>`;

        completed.appendChild(divComplete);
        todo.removeChild(divTodo);

        // To remove a task from the todo list
		let removeBtn = document.querySelector("#remove" + counterCompleted);
		removeBtn.addEventListener("click", () => {
	        completed.removeChild(divComplete);
		})

        counterCompleted++;
	})
}

function displayMsg() {
	let tasks = document.querySelectorAll(".tasks");
	let completed = document.querySelectorAll(".completed");

	if (tasks.length == 0) noTaskMsg.style.display = "block";
	if (completed.length == 0) noneCompleteMsg.style.display = "block";
}

// To display message to add a new task or no completed tasks
document.onclick = () => {
	displayMsg();
}

// To give the enter key same functionality as the add button
document.onkeyup = (e) => {
	if (e.code == "Enter") {
		same = true;
		addTask();
	}	
}

// To get the task and display it in to do
addBtn.addEventListener("click", addTask);