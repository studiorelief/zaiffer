import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollHiw() {
  const triggerSection = document.querySelector('.section_hiw');
  if (!triggerSection) return;

  const icons = document.querySelectorAll('.hiw_list_icon');
  icons.forEach((icon) => {
    gsap.to(icon, {
      scrollTrigger: {
        trigger: icon,
        start: 'top center',
        end: 'top center',
        scrub: 1,
        markers: false,
      },
      backgroundColor: 'var(--_brand---background--brand-yellow)',
      ease: 'none',
    });
  });

  // Animate the line when bullet is scrolled
  const bullets = document.querySelectorAll('.hiw_list-bullet');
  bullets.forEach((bullet) => {
    if (bullet) {
      gsap.fromTo(
        bullet,
        {
          top: '0%',
        },
        {
          top: '100%',
          scrollTrigger: {
            trigger: '.hiw_list-line',
            start: 'top center',
            end: 'bottom center',
            scrub: 0.5,
            markers: false,
          },
          //   ease: 'none',
        }
      );
    }
  });
}

export function initScrollFhe() {
  const triggerSection = document.querySelector('.section_fhe');
  if (!triggerSection) return;

  const icons = document.querySelectorAll('.fhe_list_icon');
  icons.forEach((icon) => {
    gsap.to(icon, {
      scrollTrigger: {
        trigger: icon,
        start: 'top center',
        end: 'top center',
        scrub: 1,
        markers: false,
      },
      rotate: 360,
      ease: 'none',
    });
  });
}
