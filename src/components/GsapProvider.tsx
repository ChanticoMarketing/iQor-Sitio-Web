'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function GsapProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initialize Lenis for buttery smooth inertial scrolling (if motion allowed)
    let lenis: Lenis | null = null;
    let tickerCallback: ((time: number) => void) | null = null;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      });

      // Synchronize Lenis scroll with GSAP ScrollTrigger
      lenis.on('scroll', () => {
        ScrollTrigger.update();
      });

      // Drive Lenis via GSAP Ticker for perfect zero-lag sync
      tickerCallback = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    }

    // 2. Setup GSAP context for automatic cleanup on route change
    const ctx = gsap.context(() => {
      // 2.1 Header scrolled state & Scroll progress bar
      const header = document.getElementById('site-header');
      const progressEl = document.getElementById('progress');

      ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        onUpdate: (self) => {
          if (header) {
            header.classList.toggle('is-scrolled', self.scroll() > 15);
          }
          if (progressEl) {
            progressEl.style.width = `${self.progress * 100}%`;
          }
        },
      });

      // 2.2 Global Reveals for standard content [data-reveal]
      // Exclude elements inside custom components that manage their own internal timeline
      const revealElements = document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not(.custom-gsap-handled)'
      );

      revealElements.forEach((el) => {
        if (prefersReducedMotion) {
          gsap.set(el, { opacity: 1, y: 0 });
          return;
        }

        gsap.fromTo(
          el,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      // 2.3 Global Stagger groups [data-stagger]
      const staggerGroups = document.querySelectorAll<HTMLElement>(
        '[data-stagger]:not(.custom-gsap-handled)'
      );

      staggerGroups.forEach((group) => {
        const children = group.querySelectorAll<HTMLElement>('[data-reveal]:not(.custom-gsap-handled)');
        if (children.length === 0) return;

        if (prefersReducedMotion) {
          gsap.set(children, { opacity: 1, y: 0 });
          return;
        }

        gsap.fromTo(
          children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // 2.4 Animated Data Counters [data-count]
      function formatNum(n: number, dec: number) {
        return n.toLocaleString('es-MX', {
          minimumFractionDigits: dec,
          maximumFractionDigits: dec,
        });
      }

      const counterElements = document.querySelectorAll<HTMLElement>(
        '[data-count]:not(.custom-gsap-handled)'
      );

      counterElements.forEach((el) => {
        const targetVal = parseFloat(el.getAttribute('data-count') || '0');
        const dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
        const suffix = el.getAttribute('data-suffix') || '';

        if (prefersReducedMotion) {
          el.textContent = formatNum(targetVal, dec) + suffix;
          return;
        }

        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetVal,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = formatNum(dec === 0 ? Math.round(obj.val) : obj.val, dec) + suffix;
          },
        });
      });
    });

    // 3. Scroll to top on navigation if no hash
    if (!window.location.hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    // Refresh triggers after DOM stabilizes
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    // 4. Teardown on unmount or pathname change
    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [pathname]);

  return null;
}
