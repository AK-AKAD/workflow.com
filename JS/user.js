// document.querySelector('.ad-button').addEventListener('click', function() {
//     const newRow = document.createElement('tr');
//     newRow.contentEditable = "true";

//     const cell1 = document.createElement('td');
//     cell1.textContent = "New Project";

//     const cell2 = document.createElement('td');
//     cell2.textContent = "Start Date";

//     const cell3 = document.createElement('td');
//     cell3.textContent = "End Date";

//     newRow.appendChild(cell1);
//     newRow.appendChild(cell2);
//     newRow.appendChild(cell3);

//     document.querySelector('.projects-table tbody').appendChild(newRow);
// });

// document.querySelector('.add-button').addEventListener('click', function() {
//     const newItem = document.createElement('li');
//     newItem.contentEditable = "true";

//     const span1 = document.createElement('span');
//     span1.textContent = "New Announcement";

//     const span2 = document.createElement('span');
//     span2.textContent = "0ms";

//     const span3 = document.createElement('span');
//     span3.textContent = "0";

//     newItem.appendChild(span1);
//     newItem.appendChild(span2);
//     newItem.appendChild(span3);

//     document.querySelector('.announcement-list').appendChild(newItem);
// });


document.addEventListener('DOMContentLoaded', () => {
    const addProjectBtn = document.getElementById('addProjectBtn');
    const projectsTable = document.getElementById('projectsTable');
    const agendaTabs = document.querySelectorAll('.agenda-tabs button');
    const agendaContent = document.getElementById('agendaContent');

    // Add new project row
    addProjectBtn.addEventListener('click', () => {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>New Project</td>
            <td>Start Date</td>
            <td>End Date</td>
        `;

        projectsTable.appendChild(newRow);
    });

    // Switch agenda tabs
    agendaTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            agendaTabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');

            // Update agenda content based on selected tab
            const tabType = tab.getAttribute('data-tab');
            switch (tabType) {
                case 'today':
                    agendaContent.innerHTML = '<p>No agenda items for today.</p>';
                    break;
                case 'overdue':
                    agendaContent.innerHTML = '<p>You have overdue tasks.</p>';
                    break;
                case 'upcoming':
                    agendaContent.innerHTML = '<p>Upcoming tasks are listed here.</p>';
                    break;
            }
        });
    });
});
