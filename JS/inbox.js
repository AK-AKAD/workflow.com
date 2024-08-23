
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

    console.log("1");
    msg();
    // Function to switch tabs
    tabButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            messageLists.forEach(list => list.classList.remove("active"));

            const tab = this.dataset.tab;
            this.classList.add("active");
            document.getElementById(tab).classList.add("active");
        });
    });

    // Search functionality
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

    // Reply functionality
    replyBtn.addEventListener("click", function() {
        emailReply.classList.toggle("hidden");
    });

    sendReplyBtn.addEventListener("click", function() {
        alert("Reply sent: " + replyText.value);
        replyText.value = "";
        emailReply.classList.add("hidden");
    });

    // Delete functionality
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


function msg(){
    console.log('function ran')
    try{
        $.ajax({
            type: "GET",
            url: "index.php",
            data: {
                info: 'messages'
            },
            dataType: "Json",
            success: function(response){
                console.log(response);
            }
        });
    }catch(Exception){
        console.log(Exception);
    }
}
