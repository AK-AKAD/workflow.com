
document.querySelector('.filter button').addEventListener('click', function() {
    const filterText = document.querySelector('.filter input').value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const name = cells[0].textContent.toLowerCase();
        const assignees = cells[1].textContent.toLowerCase();

        if (name.includes(filterText) || assignees.includes(filterText)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
