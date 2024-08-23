document.addEventListener("DOMContentLoaded", function(){
    $.ajax({
        type: "GET",
        url: "index.php",
        data:{
            info:'firstname'
        },
        dataType: "Json",
        success: function(response){
            let welcome = docuemnt.getElementById('welcome');
            welcome.innerText = "welcome "+response;
        }
    });
});
       
       document.querySelector('.ad-button').addEventListener('click', function() {
    const newRow = document.createElement('tr');
    newRow.contentEditable = "true";

    const cell1 = document.createElement('td');
    cell1.textContent = "New Project";

    const cell2 = document.createElement('td');
    cell2.textContent = "Start Date";

    const cell3 = document.createElement('td');
    cell3.textContent = "End Date";

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);

    document.querySelector('.projects-table tbody').appendChild(newRow);
});

document.querySelector('.add-button').addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.contentEditable = "true";

    const span1 = document.createElement('span');
    span1.textContent = "New Announcement";

    const span2 = document.createElement('span');
    span2.textContent = "0ms";

    const span3 = document.createElement('span');
    span3.textContent = "0";

    newItem.appendChild(span1);
    newItem.appendChild(span2);
    newItem.appendChild(span3);

    document.querySelector('.announcement-list').appendChild(newItem);
});
