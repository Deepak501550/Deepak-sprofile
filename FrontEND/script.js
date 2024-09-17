let conversation = [];
const chatbox = document.getElementById('chatbox');

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value;
    if (!userMessage) return;

    // Add user message to the conversation
    conversation.push({ sender: 'user', text: userMessage });
    appendMessage('user', userMessage);

    // Send message to the backend (use fetch to send data to Python backend)
    fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        conversation.push({ sender: 'bot', text: data.reply });
        appendMessage('bot', data.reply);
    });

    inputField.value = '';
}

function appendMessage(sender, message) {
    const messageElem = document.createElement('p');
    messageElem.className = `${sender}-text`;
    messageElem.textContent = message;
    chatbox.appendChild(messageElem);
    chatbox.scrollTop = chatbox.scrollHeight;
}
