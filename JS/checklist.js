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
    assigneesCell.setAttribute('contenteditable', 'true');
    activityCell.setAttribute('contenteditable', 'true');
    dueCell.setAttribute('contenteditable', 'true');
    statusCell.setAttribute('contenteditable', 'true');
    overdueTasksCell.setAttribute('contenteditable', 'true');

    statusCell.classList.add('status'); // Change class based on status
    statusCell.setAttribute('data-status', 'on-track');
    statusCell.innerHTML = 'Due-soon <div class="status-dropdown"><div data-status="due-soon">Due soon</div><div data-status="on-track">On-Track</div></div>';
// Initial value, can be edited

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1);
    });

    actionsCell.appendChild(deleteButton);
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

function xmlrequest(action, parameters, url){
    var xhttp = new XMLHttpRequest();
    xhttp.open(action, 'checklist.php?'+url);
    xhttp.send(parameters);

    const data = xhttp.response;

}
// Get aleready added tasks from the database
document.onload = () => {
    xmlrequest('GET', '', 'tasks');

/*
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'checklist.php');
    xhttp.send();

    const data = xhttp.response;
    // Code to arrange data in tabular form
    console.log(data);
*/    
}

// upload new tasks onto the database
document.getElementById('Task').addEventListener('Click', function(){

    // Remove redudant information
    xmlrequest('POST', 'Task='+Task+'Assignee='+Assignee+'Prj_Name='+Prj_Name+'Due-date='+Due-date+'Status='+Status,'insert');
})

// To update already existing tasks on the database
// add an update button to the row to make this easier
document.getElementById('update').addEventListener('Click', function(){
    xmlrequest('POST', 'Task='+Task+'Assignee='+Assignee+'Prj_Name='+Prj_Name+'Due-date='+Due-date+'Status='+Status, 'update')
})

