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


    $(document).ready(function() {
      // Smooth scrolling when clicking on Navbar links
      $("a.nav-link").on("click", function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top
            },
            800 // Adjust the animation speed (in milliseconds) as needed
          );
        }
      });

      // Highlight active nav-link based on scroll position
      $(window).on("scroll", function() {
        const scrollPosition = $(window).scrollTop();

        $("div").each(function() {
          const target = $(this);
          const id = target.attr("id");
          const navLink = $('a[href="#' + id + '"]');
          const offset = target.offset().top;
          const height = target.outerHeight();

          if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLink.addClass("active");
          } else {
            navLink.removeClass("active");
          }
        });
      });
    });
  });
  