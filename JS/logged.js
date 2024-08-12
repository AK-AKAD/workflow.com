document.addEventListener("DOMContentLoaded", function() {
    const addRowBtn = document.getElementById("addRowBtn");
    const logTableBody = document.getElementById("logTableBody");
    const monthBtn = document.getElementById("monthBtn");
    const timeLoggedElements = document.getElementsByClassName("time-logged");

    // Function to update the month button to the current month
    function updateMonth() {
        const now = new Date();
        const options = { month: 'short' };
        monthBtn.innerText = now.toLocaleDateString(undefined, options);
    }

    // Function to add a new row to the table
    function addRow() {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>Akin</td>
            <td class="time-logged">2h</td>
            <td>${new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</td>
            <td>Creating Database</td>
            <td>✔️</td>
        `;
        logTableBody.appendChild(row);
    }

    // Function to update time logged every hour
    function updateTimeLogged() {
        for (let i = 0; i < timeLoggedElements.length; i++) {
            let hours = parseInt(timeLoggedElements[i].innerText.replace('h', ''), 10);
            hours++;
            timeLoggedElements[i].innerText = `${hours}h`;
        }
    }

    addRowBtn.addEventListener("click", addRow);
    updateMonth();
    
    // Update time logged every hour
    setInterval(updateTimeLogged, 3600000);
});
