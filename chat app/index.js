const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');

        function addMessage(content, type) {
            const message = document.createElement('div');
            message.classList.add('message', type);
            message.textContent = content;
            chatMessages.appendChild(message);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        sendButton.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message) {
                addMessage(message, 'sent');
                // Simulate received message
                setTimeout(() => addMessage('BOT: ' + message, 'received'), 3000);
                messageInput.value = '';
            }
        });

        messageInput.addEventListener('keypress', (a) => {
            if (a.key === 'Enter') {
                sendButton.click();
            }
        });