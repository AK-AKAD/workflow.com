document.getElementById('addTaskBtn').addEventListener('click', function() {
    openModal();
});

document.getElementById('fillIn').addEventListener('click', function() {
    addNewTask();
});

var modal = document.getElementById('simpleModal');
var addTaskBtn = document.getElementById('addTaskBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

function addNewTask(title = 'New Task', assignees = 'Assignee', due = 'Due Date') {
    const tasksTable = document.getElementById('tasks-table').getElementsByTagName('tbody')[0];

    // Create a new row
    const newRow = tasksTable.insertRow();

    // Create and insert cells for title, assignees, due date, and actions
    const titleCell = newRow.insertCell(0);
    const assigneesCell = newRow.insertCell(1);
    const dueCell = newRow.insertCell(2);
    const actionsCell = newRow.insertCell(3);

    // Set default content
    titleCell.textContent = title;
    assigneesCell.textContent = assignees;
    dueCell.textContent = due;

    // Create update button
    const updateButton = document.createElement('button');
    updateButton.className = 'update-button';
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', function() {
        updateTask(newRow);
    });

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteTask(newRow);
    });

    // Append buttons to actions cell
    actionsCell.appendChild(updateButton);
    actionsCell.appendChild(deleteButton);
}

function updateTask(row) {
    // Logic to update the task can go here
    // For now, we just log the updated content
    console.log('Updated task:', {
        title: row.cells[0].textContent,
        assignees: row.cells[1].textContent,
        due: row.cells[2].textContent
    });
}

function deleteTask(row) {
    row.parentNode.removeChild(row);
}

// Example: Adding initial tasks
addNewTask('Landing page design', 'Adeyinka, Mmesoma', 'Aug 20');
addNewTask('Create Database', 'Akin', 'Aug 20');
addNewTask('Document', 'Olamide', 'Aug 20');


addTaskBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}
function outsideClick(e) {
    if(e.target == modal) {
    modal.style.display = 'none';
}
 } ;
