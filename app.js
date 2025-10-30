// Global utility to format date and time
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    // 24-hour format
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');

    // Example format: 2025-10-30 15:38:00
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// Function to update the date and time timer
function updateTimer() {
    const timerElement = document.getElementById('date-timer');
    if (timerElement) {
        const now = new Date();
        timerElement.textContent = formatDateTime(now);
    }
}

// Initial call and set interval for continuous update
updateTimer();
setInterval(updateTimer, 1000);


// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const targetId = a.getAttribute('href');
    if (targetId.length > 1){
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth'});
      
      // Close mobile menu after clicking a link
      const navLinks = document.getElementById('navLinks');
      if (navLinks) {
          navLinks.classList.remove('open');
      }
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle){
  navToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
}

// Contact form fake submit (no backend)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

function isEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message){
      statusEl.textContent = '모든 필드를 입력해주세요.';
      statusEl.className = 'status err';
      return;
    }
    if (!isEmail(email)){
      statusEl.textContent = '이메일 형식이 올바르지 않습니다.';
      statusEl.className = 'status err';
      return;
    }

    // Simulate successful form submission
    statusEl.textContent = '🎉 감사합니다! 메시지를 잘 받았습니다.';
    statusEl.className = 'status ok';
    form.reset();
    setTimeout(()=> statusEl.textContent = '', 4000);
  });
}
