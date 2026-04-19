// Portfolio script complet
document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle
  function toggleDarkMode() {
    const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
    const isDark = root.getAttribute('data-theme') === 'dark';

    if (isDark) {
      root.removeAttribute('data-theme');
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
    }
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
  }

  // Expose toggleDarkMode globally
  window.toggleDarkMode = toggleDarkMode;

  // Menu hamburger
  function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
  }

  // Modal Portfolio
  window.openPortfolioModal = function() {
    const modal = document.getElementById('portfolio-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      console.log('Modal ouverte');
    }
  };

  window.closePortfolioModal = function() {
    const modal = document.getElementById('portfolio-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      console.log('Modal fermée');
    }
  };

  // Modal Automates Finis
  window.openAutomatesModal = function() {
    const modal = document.getElementById('automates-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      console.log('Modal Automates ouverte');
    }
  };

  window.closeAutomatesModal = function() {
    console.log('Fermeture modal Automates appelée');
    const modal = document.getElementById('automates-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      console.log('Modal Automates fermée');
    } else {
      console.log('Modal Automates non trouvée');
    }
  };

  // Modal Diffusion d'Innovation
  window.openInnovationModal = function() {
    const modal = document.getElementById('innovation-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      console.log('Modal Innovation ouverte');
    }
  };

  window.closeInnovationModal = function() {
    console.log('Fermeture modal Innovation appelée');
    const modal = document.getElementById('innovation-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      console.log('Modal Innovation fermée');
    } else {
      console.log('Modal Innovation non trouvée');
    }
  };

  // Open modal from any trigger button
  document.querySelectorAll('.modal-trigger').forEach(button => {
    button.addEventListener('click', function() {
      // Chercher le titre du projet (h3) le plus proche
      const projectCard = this.closest('.project-card');
      const projectTitle = projectCard ? projectCard.querySelector('h3').textContent : '';
      console.log('Clic sur modal-trigger. Titre du projet:', projectTitle);
      
      if (projectTitle.includes('Automates')) {
        console.log('Ouverture modal Automates');
        openAutomatesModal();
      } else if (projectTitle.includes('Diffusion')) {
        console.log('Ouverture modal Diffusion');
        openInnovationModal();
      } else {
        console.log('Ouverture modal Portfolio');
        openPortfolioModal();
      }
    });
  });
  // Close menu on nav click
  document.querySelectorAll('.nav-menu a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', toggleMenu);
  });

  // Skill bars
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

  console.log('Portfolio complet chargé - testez \"Voir le détails\" ou console openPortfolioModal()');
  
  // Expose toggleMenu globalement
  window.toggleMenu = toggleMenu;
});
