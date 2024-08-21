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

// const CLIENT_ID = '938323347705-350h9ce8cl2lamcotn0osfcm5ut13qbj.apps.googleusercontent.com'; // Replace with your actual client ID
// const API_KEY = 'AIzaSyC3Ut-pcurJosI_in9dTYRszQSz1lolx68'; // Replace with your actual API key
// const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
// const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

// const authorizeButton = document.getElementById('authorize_button');
// const content = document.getElementById('content');

// function handleClientLoad() {
//     gapi.load('client:auth2', initClient);
// }

// function initClient() {
//     gapi.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOCS,
//         scope: SCOPES
//     }).then(() => {
//         const authInstance = gapi.auth2.getAuthInstance();
//         authorizeButton.onclick = () => handleAuthClick(authInstance);
//         authInstance.isSignedIn.listen(updateSigninStatus);
//         updateSigninStatus(authInstance.isSignedIn.get());
//     }, error => {
//         console.error(JSON.stringify(error, null, 2));
//     });
// }

// function updateSigninStatus(isSignedIn) {
//     if (isSignedIn) {
//         authorizeButton.style.display = 'none';
//         listUpcomingEvents();
//     } else {
//         authorizeButton.style.display = 'block';
//     }
// }

// function handleAuthClick(authInstance) {
//     authInstance.signIn();
// }

// function listUpcomingEvents() {
//     gapi.client.calendar.events.list({
//         'calendarId': 'primary',
//         'timeMin': (new Date()).toISOString(),
//         'showDeleted': false,
//         'singleEvents': true,
//         'maxResults': 10,
//         'orderBy': 'startTime'
//     }).then(response => {
//         const events = response.result.items;
//         content.innerHTML = '<h2>Upcoming Events:</h2>';
//         if (events.length > 0) {
//             const ul = document.createElement('ul');
//             events.forEach(event => {
//                 const li = document.createElement('li');
//                 const when = event.start.dateTime || event.start.date;
//                 li.textContent = `${event.summary} (${when})`;
//                 ul.appendChild(li);
//             });
//             content.appendChild(ul);
//         } else {
//             content.innerHTML += '<p>No upcoming events found.</p>';
//         }
//     });
// }

// handleClientLoad();
