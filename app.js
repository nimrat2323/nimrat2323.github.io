document.getElementById('aboutBtn').addEventListener('click', function() {
  document.getElementById('main-home').style.display = 'none';
  document.getElementById('main-about').style.display = 'block';
  window.scrollTo(0, 0);
});
document.getElementById('backBtn').addEventListener('click', function() {
  document.getElementById('main-home').style.display = 'block';
  document.getElementById('main-about').style.display = 'none';
  window.scrollTo(0, 0);
});

document.querySelectorAll('.bot-card').forEach((card) => {
  card.addEventListener('click', function() {
    const botName = card.querySelector('.bot-title').textContent;
    document.getElementById('bot-chat-modal').style.display = 'block';
    document.getElementById('chatBotTitle').textContent = botName + " Chat";
    document.getElementById('chatMessages').innerHTML = 
      `<div class="chat-msg bot">Hi! I'm your ${botName}. How can I help you today?</div>`;
  });
});
document.getElementById('closeChatBtn').onclick = function() {
  document.getElementById('bot-chat-modal').style.display = 'none';
};

document.getElementById('sendChatBtn').onclick = sendMessage;
document.getElementById('chatInput').onkeydown = function(e){
  if(e.key==="Enter") sendMessage();
};

function sendMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if(!msg) return;
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML += `<div class="chat-msg user">${msg}</div>`;
  input.value = "";
  // --- Replace below with your AI backend API call ---
  setTimeout(()=> {
    chatMessages.innerHTML += `<div class="chat-msg bot">[AI Bot's response goes here]</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 600);
}
