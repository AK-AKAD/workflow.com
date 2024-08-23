document.getElementById('addRowButton').addEventListener('click', function() {
    let table = document.getElementById('checklistTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    let nameCell = newRow.insertCell(0);
    let assigneesCell = newRow.insertCell(1);
    let activityCell = newRow.insertCell(2);
    let dueCell = newRow.insertCell(3);
    let statusCell = newRow.insertCell(4);
    let overdueTasksCell = newRow.insertCell(5);
    let actionsCell = newRow.insertCell(6);

    nameCell.setAttribute('contenteditable', 'true');
    nameCell.setAttribute('id', 'Task_desc');
    assigneesCell.setAttribute('contenteditable', 'true');
    assigneesCell.setAttribute('id', 'Assignee');
    activityCell.setAttribute('id', 'Activity');
    dueCell.setAttribute('contenteditable', 'true');
    dueCell.setAttribute('id', 'Due_date');
    let userInput = '';
    dueCell.addEventListener('click', function() {
        userInput = prompt('year-month-day');
        let input = userInput.split("-");
        switch (input[1]){
            case "1":
                dueCell.innerHTML = "Jan "+input[2];
                break;
            case "2":
                dueCell.innerHTML = "Feb "+input[2];
                break;
            case "3":
                dueCell.innerHTML = "Mar "+input[2];
                break;
            case "4":
                dueCell.innerHTML = "Apr "+input[2];
                break;
            case "5":
                dueCell.innerHTML = "May "+input[2];
                break;
            case "6":
                dueCell.innerHTML = "Jun "+input[2];
                break;
            case "7":
                dueCell.innerHTML = "Jul "+input[2];
                break;
            case "8":
                dueCell.innerHTML = "Aug "+input[2];
                break;
            case "9":
                dueCell.innerHTML = "Sept "+input[2];
                break;
            case "10":
                dueCell.innerHTML = "Oct "+input[2];
                break;
            case "11":
                dueCell.innerHTML = "Nov "+input[2];
                break;
            case "12":
                dueCell.innerHTML = "Dec "+input[2];
                break;
        }
    });

    statusCell.setAttribute('contenteditable', 'true');
    statusCell.setAttribute('id', 'Progress');    overdueTasksCell.setAttribute('contenteditable', 'true');

    statusCell.classList.add('status'); // Change class based on status
    statusCell.setAttribute('data-status', 'on-track');
    statusCell.innerHTML = 'Due-soon <div class="status-dropdown"><div data-status="due-soon">Due soon</div><div data-status="on-track">On-Track</div></div>';
// Initial value, can be edited

    //Delete Button
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
    table.deleteRow(newRow.rowIndex - 1);
    });

// button to add to db
    let addTaskButton = document.createElement('button');
    addTaskButton.innerText = 'Add Task';
    addTaskButton.classList.add('add-Task');

    addTaskButton.addEventListener('click', function(){
        console.log('click');

        let Task = document.getElementById('Task_desc').innerText;
        let Assignee = document.getElementById('Assignee').innerText;
        let date = new Date();
        let Activity = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        let Due_date = userInput;
        let Status = document.getElementById('Progress').innerText;

        upload(Task, Assignee, Activity, Due_date, Status);
        actionsCell.removeChild(addTaskButton);
        actionsCell.appendChild(deleteButton);
    });
    actionsCell.appendChild(addTaskButton);
    addDropdownEventListeners();

});


function addDropdownEventListeners() {
    document.querySelectorAll('.status').forEach(statusCell => {
        statusCell.addEventListener('click', function(event) {
            if (event.target.classList.contains('status-dropdown')) {
                let selectedStatus = event.target.getAttribute('data-status');
                statusCell.innerText = event.target.innerText;
                statusCell.className = 'status ' + selectedStatus;
            }
        });
    });

    document.querySelectorAll('.status-dropdown div').forEach(option => {
        option.addEventListener('click', function() {
            let statusCell = this.closest('.status');
            statusCell.innerText = this.innerText;
            statusCell.className = 'status ' + this.getAttribute('data-status');
        });
    });
}
    
document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', function() {
        let row = button.closest('tr');
        row.parentNode.removeChild(row);
    });
});
addDropdownEventListeners();


document.addEventListener("DOMContentLoaded", function(){
    // Get already added tasks from the database

    console.log('function ran');
    $.ajax({
        type: "GET",
        url:"checklist.php",
        data: {
            info: 'list'
        },
        dataType: "Json",
        success: function(response){
            console.log(response);
        }
    });
    
});



// upload new tasks onto the database
function upload(Task, Assignee, Activity, Due_date, Status){
    // Remove redudant information
    console.log('upload function called');
    try{
        $.ajax({
            type: "POST",
            url: "checklist.php",
            data:{
                action: "insert",
                task: Task,
                activity: Activity,
                assignee: Assignee,
                due_date: Due_date,
                typeofInfo: 'task',
                status: Status
            },
            dataType: "Json",
            success: function(response){
                console.log(response);
            }
        });
    }catch(Exception){
        console.log(Exception);
    }
    
}
// To update already existing tasks on the database
// add an update button to the row to make this easier
document.getElementById('update').addEventListener('Click', function(){
    
    $.ajax({
        type: "POST",
        url: "checklist.php",
        data: {
            action: "update",
            task: Task,
            activity: Activity,
            assignee: Assignee,
            due_date: Due_date,
            typeofInfo: 'task',
            status: Status
        },
        dataType: "Json",
        success: function(response){
            console.log(response);
        }

    });
})

