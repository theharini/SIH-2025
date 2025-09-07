const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name && email && message){
    formMsg.textContent = `Thank you, ${name}! We have received your message. 🌱`;
    contactForm.reset();
  } else {
    formMsg.textContent = "Please fill all fields!";
  }
});
