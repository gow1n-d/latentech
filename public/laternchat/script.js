document.addEventListener('DOMContentLoaded', () => {
    const modelSelect = document.getElementById('model-name');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const chatForm = document.getElementById('chat-form');
    const chatMessages = document.getElementById('chat-messages');
    const newChatBtn = document.getElementById('new-chat-btn');


    const systemPrompt = {
        role: "system",
        content: "You are LaternChat, the official AI assistant for Latern Tech. Latern Tech delivers premium enterprise technology solutions, AI-powered systems, automation, and digital transformation platforms. Our mission is to empower enterprises through intelligent innovation. We were founded by Gowind B M. We provide Custom Enterprise Software, AI-Powered Systems, Process Automation, Digital Transformation, Custom Digital Products, Productivity Ecosystems, Industry Solutions, and Scalable SaaS Platforms for industries like Healthcare, Finance, Manufacturing, Retail, Logistics, Education, Real Estate, and Energy. Core values: Innovation, Excellence, Integrity, Impact. Always be helpful, professional, and knowledgeable about Latern Tech."
    };
    let conversationHistory = [systemPrompt];


    // Load saved settings
    const savedModel = localStorage.getItem('latern_chat_model');
    if (savedModel) {
        modelSelect.value = savedModel;
    }

    modelSelect.addEventListener('change', (e) => {
        localStorage.setItem('latern_chat_model', e.target.value);
    });

    // Auto-resize textarea
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
        if (this.value.trim().length > 0) {
            sendBtn.removeAttribute('disabled');
        } else {
            sendBtn.setAttribute('disabled', 'true');
        }
    });

    // Handle Enter key to submit
    messageInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (this.value.trim().length > 0) {
                chatForm.dispatchEvent(new Event('submit'));
            }
        }
    });



    newChatBtn.addEventListener('click', () => {
        conversationHistory = [systemPrompt];
        chatMessages.innerHTML = `
            <div class="message assistant welcome-message">
                <div class="avatar assistant-avatar">AI</div>
                <div class="message-content">
                    Welcome to Latern Tech. Ask me anything!
                </div>
            </div>
        `;
    });

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const message = messageInput.value.trim();
        const model = modelSelect.value;

        if (!message) return;

        let fullMessage = message;
        let displayMessage = message;

        // Add user message to UI
        appendMessage('user', displayMessage);
        messageInput.value = '';
        messageInput.style.height = 'auto';
        sendBtn.setAttribute('disabled', 'true');

        // Add to history
        conversationHistory.push({ role: "user", content: fullMessage });

        // Add loading indicator
        const loadingId = appendLoading();

        try {
            const response = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: model,
                    messages: conversationHistory,
                    temperature: 0.7,
                    max_tokens: 1024,
                    stream: false
                })
            });

            removeLoading(loadingId);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || errorData.message || 'API request failed');
            }

            const data = await response.json();
            const assistantMessage = data.choices[0].message.content;

            // Add to history
            conversationHistory.push({ role: "assistant", content: assistantMessage });

            // Add assistant message to UI
            appendMessage('assistant', assistantMessage);

        } catch (error) {
            removeLoading(loadingId);
            appendMessage('assistant', `<span style="color: var(--error-color)">Error: ${error.message}</span>`, true);
            // Remove the last user message from history so they can try again
            conversationHistory.pop();
        }
    });

    function appendMessage(role, content, isHtml = false) {
        // Remove welcome message if it exists
        const welcomeMsg = document.querySelector('.welcome-message');
        if (welcomeMsg) welcomeMsg.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}`;

        const avatarDiv = document.createElement('div');
        avatarDiv.className = `avatar ${role}-avatar`;
        avatarDiv.textContent = role === 'user' ? 'U' : 'AI';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        if (isHtml) {
            contentDiv.innerHTML = content;
        } else {
            // Use marked.js if available for markdown parsing
            if (typeof marked !== 'undefined') {
                contentDiv.innerHTML = marked.parse(content);
            } else {
                contentDiv.textContent = content;
            }
        }

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);

        scrollToBottom();
    }

    function appendLoading() {
        const id = 'loading-' + Date.now();
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message assistant';
        messageDiv.id = id;

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar assistant-avatar';
        avatarDiv.textContent = 'AI';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        `;

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);

        scrollToBottom();
        return id;
    }

    function removeLoading(id) {
        const loadingEl = document.getElementById(id);
        if (loadingEl) {
            loadingEl.remove();
        }
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
