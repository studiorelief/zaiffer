export function initNavbar() {
  const navButton = document.querySelector('.navbar_button-mobile');
  const navMenu = document.querySelector('.navbar_menu-mobile') as HTMLElement;
  const closeButton = document.querySelector('.navbar_button-is-close') as HTMLElement;
  const openButton = document.querySelector('.navbar_button-is-open') as HTMLElement;
  // const navLinks = document.querySelectorAll('.navbar_link, .button, .navbar_logo-link');
  const linkWrapper = document.querySelector('.navbar_mobile-link-wrapper') as HTMLElement;

  if (!navButton || !navMenu || !closeButton || !openButton || !linkWrapper) return;

  // Reset initial state
  linkWrapper.style.transform = 'translateY(2.5rem)';
  linkWrapper.style.opacity = '0';
  navMenu.style.display = 'none';
  closeButton.style.display = 'none';
  openButton.style.display = 'flex';

  function openNav() {
    // First show menu and buttons
    navMenu.style.display = 'flex';
    closeButton.style.display = 'flex';
    openButton.style.display = 'none';

    // Force a reflow to ensure the display change takes effect
    void navMenu.offsetHeight;

    // Then animate link wrapper
    requestAnimationFrame(() => {
      linkWrapper.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      linkWrapper.style.transform = 'translateY(0)';
      linkWrapper.style.opacity = '1';
    });
  }

  function closeNav() {
    // Animate link wrapper back
    linkWrapper.style.transform = 'translateY(2.5rem)';
    linkWrapper.style.opacity = '0';

    // Wait for animation to complete before hiding menu
    setTimeout(() => {
      navMenu.style.display = 'none';
      closeButton.style.display = 'none';
      openButton.style.display = 'flex';
    }, 300);
  }

  navButton.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
      closeNav();
    } else {
      openNav();
    }
  });

  /* navLinks.forEach((link) => {
    link.addEventListener('click', closeNav);
  }); */

  const mobileClose = document.querySelector('.navbar_mobile-close');
  if (mobileClose) {
    mobileClose.addEventListener('click', closeNav);
  }
}

export function setActiveNavLink() {
  const currentUrl = window.location.pathname;

  // Supprimer toutes les classes w--current existantes des liens dropdown
  const dropdownLinks = document.querySelectorAll('.navbar_dropdown_link');
  // dropdownLinks.forEach((link) => link.classList.remove('w--current'));

  // Mapping URL -> texte du lien
  const urlMappings = [
    { path: '/articles/', text: 'Articles' },
    { path: '/case-studies/', text: 'Case studies' },
    { path: '/tutorials/', text: 'Tutorials' },
  ];

  // Trouver le mapping correspondant et ajouter la classe w--current
  for (const mapping of urlMappings) {
    if (currentUrl.includes(mapping.path)) {
      const targetLink = Array.from(dropdownLinks).find(
        (link) => link.textContent?.trim() === mapping.text
      );
      if (targetLink) {
        targetLink.classList.add('w--current');
        break; // Sortir après avoir trouvé le premier match
      }
    }
  }
}
