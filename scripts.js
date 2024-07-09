let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

// Function to add a new task
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "editButton";
        editButton.onclick = function() {
            let newText = prompt("Edit task:", li.textContent);
            if (newText !== null && newText.trim() !== "") {
                li.textContent = newText.trim();
            }
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        deleteButton.onclick = function() {
            li.remove();
            saveTasks();
        };

        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.className = "completeButton";
        completeButton.onclick = function() {
            li.classList.toggle("completed");
            saveTasks();
        };

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(completeButton);
        taskList.appendChild(li);
        taskInput.value = "";

        saveTasks();
    }
}

// Function to save tasks to local storage
function saveTasks() {
    let tasks = [];
    taskList.querySelectorAll("li").forEach(function(task) {
        let taskObj = {
            text: task.textContent.trim(),
            completed: task.classList.contains("completed")
        };
        tasks.push(taskObj);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(taskObj) {
        let li = document.createElement("li");
        li.textContent = taskObj.text;
        if (taskObj.completed) {
            li.classList.add("completed");
        }

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "editButton";
        editButton.onclick = function() {
            let newText = prompt("Edit task:", li.textContent);
            if (newText !== null && newText.trim() !== "") {
                li.textContent = newText.trim();
                saveTasks();
            }
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        deleteButton.onclick = function() {
            li.remove();
            saveTasks();
        };

        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.className = "completeButton";
        completeButton.onclick = function() {
            li.classList.toggle("completed");
            saveTasks();
        };

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(completeButton);
        taskList.appendChild(li);
    });
}

// Load tasks when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});
