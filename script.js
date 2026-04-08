// Theme Toggle
const html = document.documentElement;
const tBtn = document.getElementById('themeBtn');

tBtn.addEventListener('click', () => {
  const theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = theme;
});

// Hamburger Menu
const hbg = document.getElementById('hbg');
const nav = document.getElementById('navLinks');

hbg.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Contact Form
function sendMsg() {
  const n = document.getElementById('cN').value;
  const e = document.getElementById('cE').value;
  const m = document.getElementById('cM').value;
  const msg = document.getElementById('fmsg');

  if (!n || !e || !m) {
    msg.textContent = "Please fill all fields";
    return;
  }

  msg.textContent = "Message sent successfully!";
}
