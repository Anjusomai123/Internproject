function showSection(sectionId) {
  
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    
   
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
  }
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');
    
    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Thank you for your message!';
      formMessage.style.color = 'green';
      document.getElementById('contactForm').reset();
    }
  });
  