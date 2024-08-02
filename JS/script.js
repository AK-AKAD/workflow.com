function addAnnouncement() {
    const table = document.getElementById("announcementTable");
    const announcement = document.getElementById("announcement").value;
    const time = document.getElementById("time").value;
    const add = document.getElementById("add").value;

    if (announcement && time && add) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = announcement;
        cell2.textContent = time;
        cell3.textContent = add;

        document.getElementById("announcement").value = '';
        document.getElementById("time").value = '';
        document.getElementById("add").value = '';
    } else {
        alert("Please fill all fields");
    }
}

function addProject() {
    const table = document.getElementById("projectsTable");
    const title = document.getElementById("title").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if (title && startDate && endDate) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = title;
        cell2.textContent = startDate;
        cell3.textContent = endDate;

        document.getElementById("title").value = '';
        document.getElementById("startDate").value = '';
        document.getElementById("endDate").value = '';
    } else {
        alert("Please fill all fields");
    }
}

// run the php script for the page 
windows.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.php', true);
}