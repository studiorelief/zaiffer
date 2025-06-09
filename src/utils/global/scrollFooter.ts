import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollFooter() {
  const triggerSection = document.querySelector('.section_cta');
  if (!triggerSection) return;

  const decoratives = document.querySelectorAll('.cta_background-decorative');

  decoratives.forEach((decorative, index) => {
    gsap.fromTo(
      decorative,
      {
        y: '3.5rem',
        // opacity: 0,
      },
      {
        y: '0rem',
        // opacity: 1,
        scrollTrigger: {
          trigger: '.section_cta',
          start: '25% center',
          end: 'top center',
          markers: false,
          toggleActions: 'play none none reset',
        },
        duration: 0.6,
        delay: index * 0.25, // Add delay for each element to create sequence
      }
    );
  });
}
