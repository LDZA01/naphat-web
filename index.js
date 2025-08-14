(function () {
  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const yearEl = document.getElementById('year');

  // Set current year in footer
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // Toggle mobile navigation
  if (toggle && header) {
    toggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Close mobile nav when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (header && header.classList.contains('open')) {
        header.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Active link highlighting with IntersectionObserver
  const sections = Array.from(document.querySelectorAll('main.section, section.section'));
  const linkById = new Map(
    Array.from(navLinks).map((a) => [a.getAttribute('href')?.replace('#', ''), a])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = id ? linkById.get(id) : undefined;
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
          history.replaceState(null, '', `#${id}`);
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));
})();
