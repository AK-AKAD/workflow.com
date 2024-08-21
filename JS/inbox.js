document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const messageLists = document.querySelectorAll(".message-list");
    const tabButtons = document.querySelectorAll(".tab-menu button");
    const replyBtn = document.getElementById("replyBtn");
    const deleteBtn = document.getElementById("deleteBtn");
    const emailReply = document.querySelector(".email-reply");
    const sendReplyBtn = document.getElementById("sendReplyBtn");
    const replyText = document.getElementById("replyText");
    const messageItem = document.querySelectorAll(".message-item");
    const emailContentView = document.querySelector(".email-view");

    
    tabButtons.forEach(function(button) {
        button.addEventListener("click", displayTabContent);
    });

    function displayTabContent() {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        messageLists.forEach(list => list.classList.remove("active"));

        const tab = this.dataset.tab;
        this.classList.add("active");
        document.getElementById(tab).classList.add("active");
    }
    messageItem.forEach(message => {
        message.addEventListener("click", openMessageContent);
    });

    function openMessageContent() {
        openMessage();
    }

    const openMessage = () => {
        const emailContent = `<div>

                <div class="email-header">
                    <p><strong>From :</strong> Akin@workflow.com</p>
                    <p><strong>To :</strong> yinka@workflow.com</p>
                    <p><strong>Today, 16:09</strong></p>
                </div>
                <div class="message-info">
                    <span class="sender">Akin</span>
                    <span class="time">16:09</span>
                    <p>Have you received the request I sent to your...</p>
                </div>

                <div class="email-actions">
                    <button id="replyBtn">Reply</button>
                    <button id="deleteBtn">Delete</button>
                </div>
                <div class="email-reply hidden">
                    <textarea id="replyText" placeholder="Type your reply here..."></textarea>
                    <button id="sendReplyBtn">Send</button>
                </div>
            </div>`
        emailContentView.innerHTML = emailContent    
    }
    
    searchBtn.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase();
        messageLists.forEach(function(list) {
            const messages = list.querySelectorAll(".message-item");
            messages.forEach(function(message) {
                const sender = message.querySelector(".sender").innerText.toLowerCase();
                const preview = message.querySelector("p").innerText.toLowerCase();
                if (sender.includes(query) || preview.includes(query)) {
                    message.style.display = "flex";
                } else {
                    message.style.display = "none";
                }
            });
        });
    });

    
    replyBtn.addEventListener("click", function() {
        emailReply.classList.toggle("hidden");
    });

    sendReplyBtn.addEventListener("click", function() {
        alert("Reply sent: " + replyText.value);
        replyText.value = "";
        emailReply.classList.add("hidden");
    });

    
    deleteBtn.addEventListener("click", function() {
        const activeList = document.querySelector(".message-list.active");
        const selectedMessage = activeList.querySelector(".message-item");
        if (selectedMessage) {
            selectedMessage.remove();
            document.getElementById("junk").appendChild(selectedMessage);
            selectedMessage.classList.add("read");
            alert("Message moved to Junk.");
        }
    });
});


