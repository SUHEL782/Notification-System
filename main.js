// Dark Mode Toggle Logic
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Store user's dark mode preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Check user's dark mode preference when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

// Event Filtering Functionality
function filterEvents() {
    const filterValue = document.getElementById("eventFilter").value;
    const notifications = document.querySelectorAll(".notification");

    notifications.forEach(notification => {
        // Add or remove the 'hidden' class based on filter selection
        if (filterValue === "all" || notification.classList.contains(filterValue)) {
            notification.classList.remove("hidden");
        } else {
            notification.classList.add("hidden");
        }
    });
}

// Redirect to specific event page (Example)
function redirectToEvent(eventId) {
    // You can replace this with an actual redirection to an event page
    alert("Redirecting to event: " + eventId);
    // Example: window.location.href = '/events/' + eventId;
}

// Chatbot functionality - Toggle visibility and send messages
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotBox = document.getElementById("chatbot-box");
const chatClose = document.getElementById("chat-close");
const sendBtn = document.getElementById("send-btn");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");

// Toggle chatbot visibility
chatbotToggle.addEventListener("click", () => {
    chatbotBox.style.display = chatbotBox.style.display === "block" ? "none" : "block";
});

// Close the chatbot box
chatClose.addEventListener("click", () => {
    chatbotBox.style.display = "none";
});

// Send message when "Send" button is clicked
sendBtn.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message) {
        // Show user's message in the chatbox
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.textContent = message;
        chatMessages.appendChild(userMessage);

        // Clear the input field
        chatInput.value = "";

        // AI chatbot response (simulated)
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.textContent = "AI Assistant: I'll get back to you with more details on this event!";
        chatMessages.appendChild(botMessage);

        // Auto-scroll to the latest message
        scrollChatToBottom();
    }
});

// Automatically scroll to the bottom of the chat window
function scrollChatToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initial scroll to bottom when page loads (in case there are pre-existing messages)
scrollChatToBottom();
