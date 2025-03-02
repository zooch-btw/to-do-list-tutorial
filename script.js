"use strict";
//Init an empty array element called task
let tasks = [];
//Add an ON CLICK event listenenr to the "add a task button" that calls a function
document.getElementById("addTaskBtn").addEventListener("click", function () {
  // Get value of the input box and store it in an variable called taskInput
  let taskInput = document.getElementById("taskInput").value;

  //Check if TaskInput has something in it
  if (taskInput) {
    //Add new tasks to task array
    tasks.push(taskInput);

    //Clear input field after adding task
    document.getElementById("taskInput").value = "";

    //Call new function to updaye task list display
    displayTasks();
  }
});

//Fuction to display all tasks in list
function displayTasks() {
  //Select unordered list (tasklist) in the HTML
  let taskList = document.getElementById("taskList");

  //Clear existing task lst before updating it
  taskList.innerHTML = "";

  //Loop through every task in array amd make a list item for each one
  tasks.forEach((task, index) => {
    //Make new <li> element for each task
    let li = document.createElement("li");

    //Add CSS classes for styling
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    li.innerHTML = `${task} <button class='btn btn-secondary btn-sm' onclick='removeTask(${index})'> √ </button>`;

    //Append new task to task list
    taskList.appendChild(li);
  });

  updateTaskCounter();
}
//Function to remove task from list when checkmark is clicked
function removeTask(index) {
  //Remove task from array
  tasks.splice(index, 1);
  // Call displayTasks function to update task list display
  displayTasks();
}

// Event listener for "Clear all tasks" Button
document.getElementById("clearTaskBtn").addEventListener("click", function () {
  // Empty tasks array to remove all tasks
  tasks = [];
  // Call function to update task list display
  displayTasks();
});

document
  .getElementById("addTaskBtn")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const button = document.getElementById("addTaskBtn");
  const originalText = "Add Task";

  const taskText = taskInput.value.trim();

  if (taskText === "") return; // Prevent empty tasks

  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskItem.addEventListener("click", function () {
    this.classList.toggle("completed"); // Toggle the completed class on click
  });

  document.getElementById("taskList").appendChild(taskItem);
  taskInput.value = ""; // Clear input field
}


  button.innerHTML = "Task Added!";

  // Reset button text after 2 seconds
  setTimeout(() => {
    button.innerHTML = originalText;
  }, 2000);
}

// Feature #1: Allow user to use the enter key
document
  .getElementById("taskInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("addTaskBtn").click();
    }
  });

// This will be called whenever the user adds a new task
function updateTaskCounter() {
  document.getElementById(
    "taskCounter"
  ).innerText = `Total Tasks: ${tasks.length}`;
}

//Event listener for the "Clear All Tasks" button
document.getElementById("clearTaskBtn").addEventListener("click", function () {
  tasks = [];
  //call function to update the task list display
  displayTasks();
  // Ensure the counter updates when clearing tasks
  updateTaskCounter();
});
