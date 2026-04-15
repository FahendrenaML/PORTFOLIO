// Portfolio script - Pure CSS hamburger + auto-close on nav click
document.addEventListener('DOMContentLoaded', () => {
  // Close menu on nav link click
  document.querySelectorAll('.nav-menu a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });

  // Smooth scroll for non-nav anchor links
  document.querySelectorAll('a[href^=\"#\"]:not(.nav-menu a)').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Skill bars animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progress = entry.target.querySelector('.skill-progress');
        if (progress) {
          progress.style.width = progress.dataset.level + '%';
        }
      }
    });
  });
  
  document.querySelectorAll('.skill-card').forEach((card) => {
    observer.observe(card);
  });
  
  console.log('Script loaded - menu auto-close + scroll & skills');
});

function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("active");
}
