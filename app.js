/**
 * Kiran Immadi - Portfolio Interactive & Micro-Animation Engine
 * Minimalist, fluid, high-performance smooth scroll reveals & interactive elements.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Light / Dark)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('ki_theme', theme);
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

  // 2. Top Reading Scroll Progress Bar & Header Elevation
  let progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);
  }

  const siteHeader = document.getElementById('site-header');

  function updateScrollProgressAndHeader() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';

    if (siteHeader) {
      if (scrollY > 20) {
        siteHeader.classList.add('header-scrolled');
      } else {
        siteHeader.classList.remove('header-scrolled');
      }
    }
  }

  window.addEventListener('scroll', updateScrollProgressAndHeader, { passive: true });
  updateScrollProgressAndHeader();

  // 3. Smooth IntersectionObserver Scroll Reveal Engine
  const revealSelectors = [
    '.section-title',
    '.section-tag',
    '.section-lead',
    '.projects-subtitle',
    '.marquee-header-inner',
    '.about-lead',
    '.about-body',
    '.about-quote-box',
    '.about-meta-inline',
    '.build-column',
    '.project-card',
    '.banner-headline',
    '.banner-subtext',
    '.banner-actions',
    '.editorial-manifesto',
    '.footer-brand',
    '.footer-nav',
    '.footer-socials'
  ];

  const elementsToReveal = document.querySelectorAll(revealSelectors.join(', '));
  elementsToReveal.forEach(el => {
    if (!el.classList.contains('scroll-reveal')) {
      el.classList.add('scroll-reveal');
    }
  });

  // Stagger grid elements automatically for cascading reveals
  function applyGridStagger(parentSelector, itemSelector) {
    const parents = document.querySelectorAll(parentSelector);
    parents.forEach(parent => {
      const items = parent.querySelectorAll(itemSelector);
      items.forEach((item, index) => {
        const delay = Math.min((index % 6) * 0.07, 0.35);
        item.style.transitionDelay = `${delay}s`;
      });
    });
  }

  applyGridStagger('.projects-unified-grid', '.project-card');
  applyGridStagger('.build-grid', '.build-column');
  applyGridStagger('.banner-actions', '.btn');

  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-zoom').forEach(el => {
    revealObserver.observe(el);
  });

  // 4. Smooth Stat Counter Animation on Scroll
  function animateStatNumbers() {
    const numberEls = document.querySelectorAll('.metric-number, .stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const rawText = el.textContent.trim();
          const match = rawText.match(/^([\d,]+)(\+?%?)$/);

          if (match) {
            const target = parseInt(match[1].replace(/,/g, ''), 10);
            const suffix = match[2];
            const duration = 1400;
            const startTime = performance.now();

            const updateCount = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-Out Quartic easing function for fluid decelerating counter
              const easedProgress = 1 - Math.pow(1 - progress, 4);
              const current = Math.floor(easedProgress * target);

              el.textContent = current.toLocaleString() + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                el.textContent = target.toLocaleString() + suffix;
              }
            };

            requestAnimationFrame(updateCount);
          }

          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    numberEls.forEach(el => counterObserver.observe(el));
  }

  animateStatNumbers();

  // 6. Resume Modal Interaction
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

  // 7. Copy Email Action
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

  // 8. Active Navigation Link Tracker
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

  console.log('Kiran Immadi Portfolio interactive & scroll-reveal engine loaded.');
});
