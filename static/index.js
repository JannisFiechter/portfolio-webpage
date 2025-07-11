const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav a');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => {
          l.classList.toggle(
            'active',
            l.getAttribute('href').slice(1) === entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: '-50% 0px -40% 0px' } // triggers near section middle
);

sections.forEach(sec => observer.observe(sec));
