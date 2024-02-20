document.addEventListener("DOMContentLoaded", showTask); 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        li.addEventListener("click", function() { // Add click listener to each task for checking off
            this.classList.toggle("checked");
            saveData();
        });

        let span = document.createElement("span");
        span.textContent = "\u00D7";
        span.className = "close";
        span.onclick = function() { // Add onclick event to remove task
            this.parentElement.style.display = "none"; // Hide the task
            saveData(); // Update localStorage after removal
        };
        li.appendChild(span);
        listContainer.appendChild(li);
        saveData(); // Save tasks whenever a new one is added
    }
    inputBox.value = ""; // Clear input box after adding
}

// Event delegation to handle task checking directly on the ul element is removed since we're adding individual listeners to each task

function saveData() {
    let tasks = [];
    Array.from(listContainer.children).forEach(li => {
        // Store task content and state
        tasks.push({ text: li.innerText, checked: li.classList.contains("checked") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        listContainer.innerHTML = ""; // Clear existing tasks before showing
        tasks.forEach(task => {
            let li = document.createElement("li");
            if (task.checked) {
                li.classList.add("checked");
            }
            li.appendChild(document.createTextNode(task.text));

            let span = document.createElement("span");
            span.textContent = "\u00D7";
            span.className = "close";
            span.onclick = function() {
                this.parentElement.style.display = "none"; // Hide the task
                saveData(); // Update localStorage after removal
            };
            li.appendChild(span);

            li.addEventListener("click", function() { // Add click listener to each task for checking off
                this.classList.toggle("checked");
                saveData();
            });

            listContainer.appendChild(li);
        });
    }
}

