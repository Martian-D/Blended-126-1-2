(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menuLinks: document.querySelectorAll('.mobile-menu-link'),
  };

  if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu) {
    console.error('Menu elements not found');
    return;
  }

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && refs.menu.classList.contains('is-open')) {
      toggleMenu();
    }
  });

  refs.menu.addEventListener('click', (e) => {
    if (e.target === refs.menu) {
      toggleMenu();
    }
  });
})();