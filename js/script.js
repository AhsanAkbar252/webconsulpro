// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const formData = new FormData(form);
      form.reset();
      const url = 'https://formspree.io/f/mbjvjeql';
  
      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(response => {
          if (response.ok) {
            // Form submitted successfully
            console.log('Success');
          } else {
            console.error('Form submission failed.');
          }
        })
        .catch(error => {
          // Error handling for network errors
          console.error('Network error:', error);
        });
    });
  });
  