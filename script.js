document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll('.animate-on-scroll');

  
    // Your existing code for section animations
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('animate')) {
            entry.target.classList.add('animate');
          }
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0 });
  
    sections.forEach(function(section) {
      observer.observe(section);
    });
  

  });