import './index.css';

import { initAutoTabs } from '$utils/element/autoTabs';
import { replaceHeroHeadings, swiperCrossfade } from '$utils/element/heroAnimation';
import { initLogoParallax } from '$utils/element/logoParallax';
import { popupComingSoon } from '$utils/element/popupComingSoon';
import { initScrollFhe, initScrollHiw } from '$utils/element/scrollCards';
import { loadScript } from '$utils/global/loadScript';
import { initMarker } from '$utils/global/marker';
import { initNavbar, setActiveNavLink } from '$utils/global/navbar';
import { initScrollFooter } from '$utils/global/scrollFooter';
import { copyUrlToClipboard, hideEmpty, svgComponent } from '$utils/global/tricks';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Attributes V2
  loadScript({
    src: 'https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/attributes.js',
    type: 'module',
    fsAttribute: 'fs-socialshare',
  });
  /* Global */
  initMarker();
  svgComponent();
  copyUrlToClipboard();
  hideEmpty();
  initNavbar();
  setActiveNavLink();
  popupComingSoon();

  /* element */
  swiperCrossfade();
  replaceHeroHeadings();
  initAutoTabs({
    interval: 5000,
    pauseOnHover: false,
  });
  initLogoParallax();
  initScrollHiw();
  initScrollFhe();
  initScrollFooter();
});
