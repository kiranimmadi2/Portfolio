/**
 * Kiran Immadi - Portfolio Interactive Engine
 * Minimalist, fluid, and responsive interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Light / Dark)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  function updateFavicon(theme) {
    const isDark = theme === 'dark';
    const pngFavicon = document.getElementById('favicon-png');
    if (pngFavicon) {
      pngFavicon.href = isDark ? 'assets/favicon-white-32x32.png' : 'assets/favicon-32x32.png';
    }
  }

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('ki_theme', theme);
    updateFavicon(theme);
    if (themeToggleBtn) {
      const isDark = theme === 'dark';
      themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggleBtn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Initialize theme: check localStorage, otherwise default to dark mode
  const savedTheme = localStorage.getItem('ki_theme');
  const initialTheme = savedTheme || 'dark';
  setTheme(initialTheme);

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('ki_theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
      }
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }


  // 3. Category Filter Tabs
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const categoryBlocks = document.querySelectorAll('.category-block');
  const projectCountDisplay = document.getElementById('project-count-display');
  const searchInput = document.getElementById('project-search-input');

  function updateProjectCount(count) {
    if (projectCountDisplay) {
      projectCountDisplay.innerHTML = `${count} Project${count === 1 ? '' : 's'} <span class="arrow">→</span>`;
    }
  }

  function filterProjects() {
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const filter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    let visibleCount = 0;

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardTitle = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      const cardDesc = card.querySelector('.card-desc')?.textContent.toLowerCase() || '';
      const cardTags = card.getAttribute('data-keywords') || '';

      const matchesCategory = (filter === 'all') || (cardCategory === filter);
      const matchesQuery = !query || cardTitle.includes(query) || cardDesc.includes(query) || cardTags.includes(query);

      if (matchesCategory && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Handle visibility of category section blocks and quotes
    categoryBlocks.forEach(block => {
      const visibleCardsInBlock = block.querySelectorAll('.project-card:not([style*="display: none"])');
      const quoteFeature = block.querySelector('.card-quote-feature');
      const githubCta = block.querySelector('.github-profile-cta-card');

      if (visibleCardsInBlock.length > 0) {
        block.style.display = 'block';
        if (quoteFeature) quoteFeature.style.display = 'flex';
        if (githubCta) githubCta.style.display = 'flex';
      } else {
        block.style.display = 'none';
      }
    });

    updateProjectCount(visibleCount);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterProjects();
    });
  }

  // 4. Resume Modal Interaction
  const resumeBtn = document.getElementById('hero-download-resume');
  const resumeModal = document.getElementById('resume-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openModal() {
    if (resumeModal) {
      resumeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (resumeModal) {
      resumeModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal && resumeModal.classList.contains('open')) {
      closeModal();
    }
  });

  // 5. Copy Email Action
  const copyEmailBtn = document.getElementById('btn-copy-email');
  const copyEmailText = document.getElementById('copy-email-text');

  if (copyEmailBtn && copyEmailText) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'kiranimmadi2@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailText.textContent;
        copyEmailText.textContent = 'Copied! ✓';
        copyEmailBtn.style.borderColor = '#10b981';
        setTimeout(() => {
          copyEmailText.textContent = originalText;
          copyEmailBtn.style.borderColor = '';
        }, 2200);
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    });
  }

  // 6. Active Navigation Link Tracker
  const sections = document.querySelectorAll('section[id], main');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // 7. Micro-interactions on Project Cards
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s';
    });
  });

  console.log('Kiran Immadi Portfolio loaded successfully with 17 projects.');
});
