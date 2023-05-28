window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logo = document.querySelector('.logo');
    var navigationLinks = document.querySelectorAll('nav ul li a');
  
    if (window.scrollY > 0) {
      // Add class when scrolling
      header.classList.add('scrolled');
      logo.classList.add('scrolled');
      navigationLinks.forEach(function(link) {
        link.classList.add('scrolled');
      });
    } else {
      // Delete class when is on top
      header.classList.remove('scrolled');
      logo.classList.remove('scrolled');
      navigationLinks.forEach(function(link) {
        link.classList.remove('scrolled');
      });
    }
  });
  