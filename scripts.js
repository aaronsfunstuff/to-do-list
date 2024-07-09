let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
