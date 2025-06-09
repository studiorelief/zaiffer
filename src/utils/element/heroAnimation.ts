import 'swiper/css/bundle';

// import { gsap } from 'gsap';
import Swiper from 'swiper/bundle';

export function swiperCrossfade() {
  const swipers = document.querySelectorAll('.swiper.is-hero');
  swipers.forEach((swiperEl) => {
    new Swiper(swiperEl as HTMLElement, {
      direction: 'vertical',
      speed: 750,
      slidesPerView: 1,
      spaceBetween: 32,
      autoHeight: true,
      loop: true,
      // grabCursor: true,
      // keyboard: {
      //   enabled: true,
      //   onlyInViewport: true,
      // },
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
        reverseDirection: true,
      },
    });
  });
}

export function replaceHeroHeadings() {
  const heroHeadings = document.querySelectorAll('.hero_animation-container');
  const headingReplacers = document.querySelectorAll('.hero_animation-replacer');

  heroHeadings.forEach((heroHeading, index) => {
    const replacer = headingReplacers[index];
    if (replacer) {
      // Set the hero heading as relative container
      (heroHeading as HTMLElement).style.position = 'relative';

      // Set the replacer as absolute positioned inside
      (replacer as HTMLElement).style.position = 'absolute';
      (replacer as HTMLElement).style.top = '0';
      (replacer as HTMLElement).style.left = '0';
      (replacer as HTMLElement).style.height = '100%';

      // Insert the replacer inside the hero heading
      heroHeading.appendChild(replacer);
    }
  });
}
