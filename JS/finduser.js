const users = [
    { name: "Akin Sommy", role: "Backend Developer" },
    { name: "Akin Lewis", role: "Front-end Developer" },
    { name: "Akinraji", role: "Product Designer" },
    { name: "Akin", role: "Backend Developer" }
];

function renderUsers(userList) {
    const userContainer = document.getElementById('users');
    userContainer.innerHTML = '';
    
    userList.forEach(user => {
        const userItem = document.createElement('li');

        const userDetails = document.createElement('div');
        userDetails.className = 'user-details';
        
        const userName = document.createElement('span');
        userName.textContent = user.name;
        userDetails.appendChild(userName);
        
        const userRole = document.createElement('small');
        userRole.textContent = user.role;
        userDetails.appendChild(userRole);
        
        const addButton = document.createElement('button');
        addButton.textContent = '+ Add';
        addButton.className = 'add-button';
        addButton.addEventListener('click', () => {
            alert(`${user.name} added to the team!`);
        });
        
        userItem.appendChild(userDetails);
        userItem.appendChild(addButton);
        
        userContainer.appendChild(userItem);
    });

    listUsers();
}

document.getElementById('search-button').addEventListener('click', () => {
    searchDB();
    const searchTerm = document.getElementById('user-search').value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
    renderUsers(filteredUsers);
});

// Initially render all users
renderUsers(users);

function searchDB(){
    try{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'C:\Users\akino\Documents\Mactavis Projects\GRP-4\GRP-4\GRP-4\findUser.php?action=find', true);
        xhttp.send(document.getElementById('user-search').value);
    
        let result = xhttp.responseText;
        console.log(result);

    }catch(error){
        console.log(error);
    } 
}

function listUsers(){
    try{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'C:\Users\akino\Documents\Mactavis Projects\GRP-4\GRP-4\GRP-4\findUser.php?action=list', true);
        xhttp.send();

        let result = xhttp.responseText;
        console.log(result);

    }catch(error){
        console.log(error);
    }
    
}