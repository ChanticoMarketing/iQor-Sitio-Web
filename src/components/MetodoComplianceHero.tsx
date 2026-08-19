'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MetodoComplianceHero() {
  const heroRef = useRef<HTMLElement>(null);
  const slaGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        heroRef.current?.querySelectorAll('.compliance-hero-animate') || [],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }
      );

      if (slaGridRef.current) {
        tl.fromTo(
          slaGridRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          '-=0.4'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="compliance-hero-section" aria-labelledby="compliance-hero-title">
      <div className="wrap">
        {/* Breadcrumb de Navegación Técnica */}
        <nav className="compliance-breadcrumb compliance-hero-animate" aria-label="Ruta de navegación">
          <Link href="/" className="crumb-link">Inicio</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">Método de Recuperación & Firewall Regulatorio</span>
        </nav>

        {/* Encabezado Asimétrico de Alto Impacto */}
        <div className="compliance-hero-grid">
          <div className="compliance-hero-copy">
            <div className="compliance-tag-badge compliance-hero-animate">
              <span className="live-shield-dot" />
              <span>PROTOCOLO FORENSE & GOBERNANZA CONDUSEF</span>
            </div>

            <h1 id="compliance-hero-title" className="compliance-hero-title compliance-hero-animate">
              Anatomía de la Cobranza Forense<span className="punto">.</span>
            </h1>

            <p className="compliance-hero-lead compliance-hero-animate">
              Un método científico de cuatro vectores diseñado para erradicar la contingencia jurídica, preservar la reputación corporativa de tu marca y acelerar la recuperación líquida en un plazo medio de 47 días.
            </p>

            <div className="compliance-hero-actions compliance-hero-animate">
              <Link href="/contacto" className="btn btn-primary">
                <span>Agendar Diagnóstico con NDA Previo</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="#workflow-reactor" className="btn btn-secondary">
                <span>Explorar los 4 Vectores</span>
              </a>
            </div>
          </div>

          {/* Barómetro de Certificación y SLA en Tiempo Real */}
          <div className="compliance-sla-cockpit compliance-hero-animate">
            <div className="cockpit-header">
              <div className="cockpit-status-wrap">
                <span className="cockpit-pulse" />
                <span className="cockpit-status-text">AUDITORÍA ACTIVA 2026</span>
              </div>
              <span className="cockpit-folio">ESTÁNDAR LFPDPPP / CONDUSEF</span>
            </div>

            <div ref={slaGridRef} className="cockpit-metrics-grid">
              <div className="cockpit-metric-card">
                <div className="metric-header-row">
                  <span className="metric-tag">Sanciones Regulatorias</span>
                  <span className="metric-indicator safe">0.00%</span>
                </div>
                <strong className="metric-number">0 Quejas</strong>
                <p className="metric-desc">Récord limpio ante CONDUSEF y PROFECO en 20+ años de operación ininterrumpida.</p>
              </div>

              <div className="cockpit-metric-card">
                <div className="metric-header-row">
                  <span className="metric-tag">Indexación Forense</span>
                  <span className="metric-indicator active">SHA-256</span>
                </div>
                <strong className="metric-number">100%</strong>
                <p className="metric-desc">Llamadas e interacciones grabadas, transcritas y auditables bajo hash criptográfico.</p>
              </div>

              <div className="cockpit-metric-card">
                <div className="metric-header-row">
                  <span className="metric-tag">Ventana Normada</span>
                  <span className="metric-indicator active">Apego 100%</span>
                </div>
                <strong className="metric-number">07:00 – 22:00 h</strong>
                <p className="metric-desc">Bloqueo algorítmico estricto de contactación fuera del horario autorizado por la ley.</p>
              </div>

              <div className="cockpit-metric-card">
                <div className="metric-header-row">
                  <span className="metric-tag">Ciclo Promedio</span>
                  <span className="metric-indicator active">KPI Clave</span>
                </div>
                <strong className="metric-number">47 Días</strong>
                <p className="metric-desc">Tiempo promedio desde la formalización del NDA hasta la liquidación bancaria.</p>
              </div>
            </div>

            <div className="cockpit-footer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cockpit-shield-icon">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Protección contractual previa con Acuerdo de Confidencialidad Notariable.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
