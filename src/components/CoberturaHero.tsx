'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CoberturaHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.querySelectorAll('.cobertura-hero-anim') || [],
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="cobertura-hero-section" aria-labelledby="cobertura-hero-title">
      <div className="wrap">
        <div className="cobertura-hero-main cobertura-hero-anim">
          <h1 id="cobertura-hero-title" className="cobertura-title">
            Cobertura Territorial en 32 Entidades Federativas<span className="punto">.</span>
          </h1>
          <p className="cobertura-lead">
            Notificadores presenciales propios con geolocalización satelital GPS y tiempos de respuesta de 24 a 72 horas en todos los corredores industriales y comerciales de México.
          </p>
        </div>

        {/* 3 Métricas Clave Directas sobre el Canvas */}
        <div className="cobertura-metrics-row cobertura-hero-anim">
          <div className="metric-unit">
            <span className="metric-number">32 Estados</span>
            <span className="metric-caption">Presencia física activa de campo</span>
          </div>

          <div className="metric-unit">
            <span className="metric-number">24 a 72 h</span>
            <span className="metric-caption">SLA garantizado de notificación</span>
          </div>

          <div className="metric-unit">
            <span className="metric-number">GPS & Hash</span>
            <span className="metric-caption">Acuse digital inalterable con foto</span>
          </div>
        </div>
      </div>
    </section>
  );
}
