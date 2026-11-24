
let form = document.getElementById("taskForm");

let title = document.getElementById("title");
let description = document.getElementById("description");
let date = document.getElementById("date");

let taskList = document.getElementById("taskList");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let taskTitle = title.value;
    let taskDescription = description.value;
    let taskDate = date.value;

    let task = document.createElement("div");

    task.classList.add("task");

    task.innerHTML = `
        <h3>${taskTitle}</h3>
        <p>${taskDescription}</p>
        <p><b>Date:</b> ${taskDate}</p>
    `;

    taskList.appendChild(task);

    form.reset();

});
