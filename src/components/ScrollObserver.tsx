'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealedElements = new WeakSet<Element>();

    // 1. Reveal on scroll observer
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            entry.target.setAttribute('data-revealed', 'true');
            revealedElements.add(entry.target);
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px 0px 50px 0px' }
    );

    const initReveal = () => {
      const revealNodes = document.querySelectorAll('[data-reveal]');
      revealNodes.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If in viewport or near top or prefers reduced motion, show immediately
        if (rect.top < window.innerHeight * 1.1 || prefersReduced) {
          el.classList.add('in-view');
          el.setAttribute('data-revealed', 'true');
          revealedElements.add(el);
        } else {
          revealIO.observe(el);
        }
      });
    };

    // Run immediately and after a short tick
    initReveal();
    const timer = setTimeout(initReveal, 100);

    // 2. Mutation Observer to keep class 'in-view' on re-renders
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          (mutation.attributeName === 'class' || mutation.attributeName === 'data-revealed')
        ) {
          const target = mutation.target as HTMLElement;
          if (revealedElements.has(target)) {
            if (!target.classList.contains('in-view')) {
              target.classList.add('in-view');
            }
            if (target.getAttribute('data-revealed') !== 'true') {
              target.setAttribute('data-revealed', 'true');
            }
          }
        }
      });
    });

    mutationObserver.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class', 'data-revealed'],
    });

    // 3. Stagger delays
    document.querySelectorAll('[data-stagger]').forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        if (child.hasAttribute('data-reveal')) {
          (child as HTMLElement).style.setProperty('--d', `${i * 60}ms`);
        }
      });
    });

    // 4. Line triggers for steps and charts
    const lineIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('go');
            lineIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const stepsEl = document.getElementById('steps');
    const chartCard = document.getElementById('card-analisis');
    const donutEl = document.getElementById('donut');
    if (stepsEl) lineIO.observe(stepsEl);
    if (chartCard) lineIO.observe(chartCard);
    if (donutEl) lineIO.observe(donutEl);

    // 5. Animated counters
    function formatNum(n: number, dec: number) {
      return n.toLocaleString('es-MX', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    }

    function runCounter(el: HTMLElement) {
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';

      if (prefersReduced) {
        el.textContent = formatNum(target, dec) + suffix;
        return;
      }

      let startTs: number | null = null;
      const dur = 1400;

      function frame(ts: number) {
        if (!startTs) startTs = ts;
        const p = Math.min((ts - startTs) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = formatNum(Math.round(target * eased), dec) + suffix;
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = formatNum(target, dec) + suffix;
      }
      requestAnimationFrame(frame);
    }

    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter(entry.target as HTMLElement);
            countIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

    // 6. Scroll progress bar & header scroll class
    const header = document.getElementById('site-header');
    const progressEl = document.getElementById('progress');

    function onScroll() {
      if (header) {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
      }
      if (progressEl) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        progressEl.style.width = `${pct}%`;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    return () => {
      clearTimeout(timer);
      revealIO.disconnect();
      mutationObserver.disconnect();
      lineIO.disconnect();
      countIO.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  return null;
}
