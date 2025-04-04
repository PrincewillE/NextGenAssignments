// Adding a new task to the todo

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== ''){
        const taskList = document.getElementById('taskList');
        
        // create a new list item
        const li = document.createElement('li');

        // Add task text to the list item
        li.innerHTML = `
            <span class="task-text">${taskValue}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        // Add list item
        taskList.appendChild(li);

        // clear field after adding the task
        taskInput.value = '';

        // toggle task completion
        li.addEventListener('click', () => toggleCompletion(li));
    }
}

function toggleCompletion(task) {
    task.classList.toggle('completed');
}