// ai.js - Simple rule-based AI assistant for Quick Lister

document.addEventListener('DOMContentLoaded', () => {
  const aiDiv = document.getElementById('aiAssistant');
  aiDiv.innerHTML = `
    <button id="aiOpenBtn" class="ai-fab" aria-label="Open AI Assistant"><i class="fa-solid fa-robot"></i></button>
    <div id="aiModal" class="ai-modal" style="display:none;">
      <div class="ai-modal-header">
        <span><i class="fa-solid fa-robot"></i> Quick Lister Assistant</span>
        <button id="aiCloseBtn" aria-label="Close">&times;</button>
      </div>
      <div class="ai-modal-body" id="aiChatBody"></div>
      <form id="aiChatForm" class="ai-chat-form">
        <input type="text" id="aiInput" placeholder="Ask me anything..." autocomplete="off" required />
        <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
      </form>
    </div>
  `;
  document.getElementById('aiOpenBtn').onclick = () => {
    document.getElementById('aiModal').style.display = 'block';
    document.getElementById('aiInput').focus();
  };
  document.getElementById('aiCloseBtn').onclick = () => {
    document.getElementById('aiModal').style.display = 'none';
  };
  document.getElementById('aiChatForm').onsubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('aiInput');
    const msg = input.value.trim();
    if (!msg) return;
    addChat('user', msg);
    aiRespond(msg);
    input.value = '';
  };
});

function addChat(sender, text) {
  const chatBody = document.getElementById('aiChatBody');
  const div = document.createElement('div');
  div.className = 'ai-msg ' + sender;
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function aiRespond(msg) {
  msg = msg.toLowerCase();
  let response = '';
  if (msg.includes('tip') || msg.includes('post')) {
    response = 'Tip: Use a clear title and detailed description to attract more applicants!';
  } else if (msg.includes('cleaning')) {
    response = 'Here are some cleaning jobs nearby.';
    // Could trigger a filter in future
  } else if (msg.includes('how') && msg.includes('apply')) {
    response = 'To apply for a job, click on it in the list and follow the instructions.';
  } else if (msg.includes('faq') || msg.includes('about')) {
    response = 'Quick Lister is a platform to find and post local micro jobs. Use the map or list to explore jobs.';
  } else if (msg.includes('show me') && msg.includes('nearby')) {
    response = 'Filtering jobs nearby... (feature coming soon)';
  } else {
    response = 'Sorry, I can help with job tips, searching, and FAQs. Try asking about posting, searching, or applying!';
  }
  setTimeout(() => addChat('ai', response), 500);
} 