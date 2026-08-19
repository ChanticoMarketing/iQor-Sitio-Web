'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ComplianceLabHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.querySelectorAll('.lab-hero-anim') || [],
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="compliance-lab-hero" aria-labelledby="lab-hero-heading">
      <div className="wrap">
        <div className="lab-hero-main-title lab-hero-anim">
          <h1 id="lab-hero-heading" className="lab-title">
            Manual de Compliance y Aseguramiento Forense<span className="punto">.</span>
          </h1>
          <p className="lab-lead">
            Protocolo de recuperación con cero contingencias ante CONDUSEF, trazabilidad mercantil y custodia probatoria de cada contacto.
          </p>
        </div>

        <nav className="lab-editorial-nav lab-hero-anim" aria-label="Secciones">
          <a href="#simulador-auditoria" className="nav-text-anchor">Simulador de Cartera</a>
          <span className="nav-bullet">/</span>
          <a href="#codigo-regulatorio" className="nav-text-anchor">Marco Legal</a>
          <span className="nav-bullet">/</span>
          <a href="#acuerdo-nda" className="nav-text-anchor">Protocolo NDA</a>
        </nav>
      </div>
    </section>
  );
}
