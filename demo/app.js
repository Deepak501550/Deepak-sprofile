// Smooth Scroll Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Function to show/hide project details
  function showDetails(id) {
    const details = document.getElementById(id);
    
    if (details.classList.contains('hidden')) {
      details.classList.remove('hidden');
    } else {
      details.classList.add('hidden');
    }
  }
  
  // Sticky Header when scrolling
  window.onscroll = function() {stickyHeader()};
  
  var header = document.querySelector("header");
  var sticky = header.offsetTop;
  
  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
// Function to toggle the visibility of project or experience details
function toggleDetails(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  }
  