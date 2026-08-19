'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Cumplimiento() {
  const sectionRef = useRef<HTMLElement>(null);
  const sealsRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      if (sealsRef.current) {
        tl.fromTo(
          sealsRef.current.children,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
          0.1
        );
      }

      if (pillarsRef.current) {
        tl.fromTo(
          pillarsRef.current.children,
          { opacity: 0, y: 22, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.09, ease: 'power3.out' },
          0.2
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cumplimiento custom-gsap-handled"
      id="cumplimiento"
      aria-labelledby="cumpl-titulo"
    >
      <div className="wrap">
        <div className="cumplimiento-split-layout">
          {/* Left Column: Institutional Trust Overview */}
          <div className="cumpl-overview-col">
            <span className="section-kicker">Gobernanza & Cumplimiento Normativo</span>
            <h2 id="cumpl-titulo">
              Blindaje normativo y protección total a tu <span className="hl">reputación corporativa</span><span className="punto">.</span>
            </h2>
            <p className="cumpl-overview-text">
              La recuperación de cartera no debe poner en riesgo el prestigio de tu institución. Cada llamada, visita y negociación se ejecuta bajo los más estrictos marcos legales de México.
            </p>

            <div ref={sealsRef} style={{ display: 'grid', gap: '12px' }}>
              <div className="cumpl-trust-seal">
                <div className="seal-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <div className="seal-info">
                  <strong>0 Quejas ante CONDUSEF</strong>
                  <span>Auditoría de cumplimiento regulatorio y normativo 2026</span>
                </div>
              </div>

              <div className="cumpl-trust-seal" style={{ borderLeftColor: 'var(--color-accent)' }}>
                <div className="seal-icon" style={{ background: 'rgba(200,16,46,0.08)', color: 'var(--color-accent)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="seal-info">
                  <strong>Registro REPSE Vigente</strong>
                  <span>Servicios especializados y staffing con cero riesgo patronal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Regulatory Pillars */}
          <div ref={pillarsRef} className="cumpl-matrix-grid">
            <div className="cumpl-pillar-item">
              <div className="pillar-top-row">
                <span className="pillar-num">01</span>
                <span className="pillar-tag">Regulatorio</span>
              </div>
              <h3>Marco CONDUSEF</h3>
              <p>
                Gestión en horarios permitidos, sin hostigamiento y con estricta prohibición de contacto a terceros no autorizados.
              </p>
            </div>

            <div className="cumpl-pillar-item">
              <div className="pillar-top-row">
                <span className="pillar-num">02</span>
                <span className="pillar-tag">Privacidad</span>
              </div>
              <h3>Protección de Datos LFPDPPP</h3>
              <p>
                Bases de datos protegidas bajo estrictos protocolos de cifrado y secreto bancario.
              </p>
            </div>

            <div className="cumpl-pillar-item">
              <div className="pillar-top-row">
                <span className="pillar-num">03</span>
                <span className="pillar-tag">Auditoría</span>
              </div>
              <h3>Llamadas 100% Grabadas</h3>
              <p>
                Trazabilidad total de cada contacto telefónico con almacenamiento seguro para auditorías internas.
              </p>
            </div>

            <div className="cumpl-pillar-item">
              <div className="pillar-top-row">
                <span className="pillar-num">04</span>
                <span className="pillar-tag">Seguridad Legal</span>
              </div>
              <h3>NDA Notariable Previo</h3>
              <p>
                Acuerdo de confidencialidad legal firmado antes de recibir cualquier estado de cuenta o información de cartera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
