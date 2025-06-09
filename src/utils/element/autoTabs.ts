/**
 * Auto Tabs - Gestion automatique des tabs
 * Change automatiquement les tabs product_tab-link toutes les X secondes
 */

interface AutoTabsOptions {
  interval?: number; // Intervalle en millisecondes (défaut: 5000)
  pauseOnHover?: boolean; // Pause au survol (défaut: true)
  selector?: string; // Sélecteur des tabs (défaut: '.product_tab-link')
  activeClass?: string; // Classe active (défaut: 'w--current')
}

export function initAutoTabs(options: AutoTabsOptions = {}) {
  const config = {
    interval: 5000,
    pauseOnHover: false,
    selector: '.product_tab-link',
    activeClass: 'w--current',
    ...options,
  };

  const tabs = document.querySelectorAll<HTMLElement>(config.selector);

  if (tabs.length <= 1) {
    console.error('AutoTabs: Moins de 2 tabs trouvées, auto-tabs désactivé');
    return;
  }

  let currentIndex = 0;
  let intervalId: number | null = null;
  let isPaused = false;

  // Trouver l'index de la tab active actuelle
  const activeTab = document.querySelector(`${config.selector}.${config.activeClass}`);
  if (activeTab) {
    currentIndex = Array.from(tabs).indexOf(activeTab as HTMLElement);
  }

  function switchToNextTab() {
    if (isPaused) return;

    // Supprimer la classe active de la tab actuelle
    tabs.forEach((tab) => tab.classList.remove(config.activeClass));

    // Passer à la tab suivante (avec boucle)
    currentIndex = (currentIndex + 1) % tabs.length;

    // Ajouter la classe active à la nouvelle tab
    tabs[currentIndex].classList.add(config.activeClass);

    // Déclencher un clic sur la tab pour activer Webflow
    tabs[currentIndex].click();
  }

  function startAutoTabs() {
    if (intervalId) return; // Déjà démarré

    intervalId = setInterval(switchToNextTab, config.interval);
  }

  function stopAutoTabs() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function pauseAutoTabs() {
    isPaused = true;
  }

  function resumeAutoTabs() {
    isPaused = false;
  }

  // Gestion des événements de pause au survol
  if (config.pauseOnHover) {
    const tabsContainer =
      document.querySelector('.product_tabs') ||
      tabs[0].closest('[class*="tab"]') ||
      tabs[0].parentElement;

    if (tabsContainer) {
      tabsContainer.addEventListener('mouseenter', pauseAutoTabs);
      tabsContainer.addEventListener('mouseleave', resumeAutoTabs);
    }
  }

  // Gestion des clics manuels sur les tabs
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      currentIndex = index;
      stopAutoTabs();

      // Redémarrer après un délai
      setTimeout(() => {
        if (!isPaused) {
          startAutoTabs();
        }
      }, config.interval);
    });
  });

  // Démarrer l'auto-tabs
  startAutoTabs();

  // Retourner les méthodes de contrôle
  return {
    start: startAutoTabs,
    stop: stopAutoTabs,
    pause: pauseAutoTabs,
    resume: resumeAutoTabs,
    destroy: () => {
      stopAutoTabs();
      tabs.forEach((tab) => {
        tab.removeEventListener('click', () => {});
      });
    },
  };
}

// Version simplifiée pour une utilisation directe
export function autoTabs(interval: number = 5000) {
  return initAutoTabs({ interval });
}
