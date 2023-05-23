document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Form submission handling
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Perform form validation and submission logic here
    // Example code to display a success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Message sent successfully!';
    successMessage.style.color = 'green';
    form.appendChild(successMessage);
    
    // Clear form inputs after submission
    form.reset();
  });
});
