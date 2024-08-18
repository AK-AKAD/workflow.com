document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        // Add the message to the sent messages list
        const sentMessagesList = document.getElementById('sent-messages-list');
        const newMessageItem = document.createElement('li');
        newMessageItem.textContent = messageText;
        sentMessagesList.appendChild(newMessageItem);

        // Clear the message input
        messageInput.value = '';
    }
});
