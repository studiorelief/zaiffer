import './index.css';

import { initAutoTabs } from '$utils/element/autoTabs';
import { replaceHeroHeadings, swiperCrossfade } from '$utils/element/heroAnimation';
import { initLogoParallax } from '$utils/element/logoParallax';
import { popupComingSoon } from '$utils/element/popupComingSoon';
import { initScrollFhe, initScrollHiw } from '$utils/element/scrollCards';
import { initMarker } from '$utils/global/marker';
import { initNavbar } from '$utils/global/navbar';
import { initScrollFooter } from '$utils/global/scrollFooter';
import { svgComponent } from '$utils/global/tricks';

window.Webflow ||= [];
window.Webflow.push(() => {
  /* Global */
  initMarker();
  svgComponent();
  initNavbar();
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
