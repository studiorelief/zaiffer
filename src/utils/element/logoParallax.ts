import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initLogoParallax() {
  // Floating animation for all experience logos
  const logos = document.querySelectorAll('.experience_floating');
  logos.forEach((logo) => {
    gsap.to(logo, {
      y: '+=10',
      duration: 2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  });

  // Parallax effect for specific logos
  const triggerSection = document.querySelector('.section_experience');
  if (!triggerSection) return;

  // Logo 1 parallax
  gsap.to('.experience_logo.is-1', {
    scrollTrigger: {
      trigger: triggerSection,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
    y: 100,
    ease: 'none',
  });

  // Logo 2 parallax
  gsap.to('.experience_logo.is-2', {
    scrollTrigger: {
      trigger: triggerSection,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
    },
    y: -80,
    ease: 'none',
  });

  // Logo 3 parallax
  gsap.to('.experience_logo.is-3', {
    scrollTrigger: {
      trigger: triggerSection,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.4,
    },
    y: 120,
    ease: 'none',
  });

  // Logo 4 parallax
  gsap.to('.experience_logo.is-4', {
    scrollTrigger: {
      trigger: triggerSection,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.6,
    },
    y: -60,
    ease: 'none',
  });
}
