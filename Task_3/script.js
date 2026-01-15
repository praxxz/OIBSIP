const taskInput = document.getElementById('taskInput');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false,
        date: new Date().toLocaleString()
    };

    createTaskElement(task);
    taskInput.value = "";
    updateCounts();
}


function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.id = task.id;

    li.innerHTML = `
        <div class="task-content">
            <span class="task-text">${task.text}</span>
            <span class="task-date">${task.date}</span>
        </div>
        <div class="actions">
            <button class="btn-complete" onclick="toggleComplete(${task.id})">
                <i class="fas ${task.completed ? 'fa-undo' : 'fa-check'}"></i>
            </button>
            <button class="btn-edit" onclick="editTask(${task.id})">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-delete" onclick="deleteTask(${task.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    if (task.completed) {
        completedList.appendChild(li);
    } else {
        pendingList.appendChild(li);
    }
}


function toggleComplete(id) {
    const item = document.getElementById(id);
    const isCompleted = item.classList.contains('completed');
    const btnIcon = item.querySelector('.btn-complete i');

    if (isCompleted) {
        item.classList.remove('completed');
        btnIcon.classList.remove('fa-undo');
        btnIcon.classList.add('fa-check');
        pendingList.appendChild(item);
    } else {
        item.classList.add('completed');
        btnIcon.classList.remove('fa-check');
        btnIcon.classList.add('fa-undo');
        completedList.appendChild(item);
    }
    updateCounts();
}


function deleteTask(id) {
    const item = document.getElementById(id);
    item.style.transform = "translateX(50px)";
    item.style.opacity = "0";
    setTimeout(() => {
        item.remove();
        updateCounts();
    }, 300);
}


function editTask(id) {
    const item = document.getElementById(id);
    const textSpan = item.querySelector('.task-text');
    const newText = prompt("Update your task:", textSpan.innerText);
    
    if (newText !== null && newText.trim() !== "") {
        textSpan.innerText = newText;
    }
}


function updateCounts() {
    document.getElementById('pendingCount').innerText = pendingList.children.length;
    document.getElementById('completedCount').innerText = completedList.children.length;
}
