'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface PortfolioScenario {
  id: string;
  name: string;
  recovery: string;
  cycle: string;
  channels: string;
  schedule: string;
  instruments: string;
  mitigation: string;
}

const SCENARIOS: PortfolioScenario[] = [
  {
    id: 'bancario',
    name: 'Bancario & Consumo',
    recovery: '68% – 82%',
    cycle: '30 a 45 días promedio',
    channels: 'Llamadas grabadas 100% + SMS transaccional',
    schedule: '07:00 a 22:00 h (Apego estricto CONDUSEF)',
    instruments: 'Contratos de crédito y pagarés',
    mitigation: 'Cero contacto a terceros y validación previa',
  },
  {
    id: 'corporativo-b2b',
    name: 'Corporativo B2B',
    recovery: '75% – 90%',
    cycle: '21 a 40 días promedio',
    channels: 'Videollamadas ejecutivas y notificación formal',
    schedule: 'Horario hábil de Tesorería y Dirección',
    instruments: 'Facturas CFDI y pagarés mercantiles',
    mitigation: 'Secreto industrial y mediación notarial',
  },
  {
    id: 'fintech-digital',
    name: 'Fintech & Digital',
    recovery: '60% – 78%',
    cycle: '15 a 35 días promedio',
    channels: 'WhatsApp verificado y conciliación API',
    schedule: 'Optimizado por scoring de contactabilidad',
    instruments: 'Contratos electrónicos NOM-151',
    mitigation: 'Atención REDECO y purga en usurpación',
  },
];

export default function InteractiveAuditSimulator() {
  const [selectedId, setSelectedId] = useState<string>('bancario');
  const sectionRef = useRef<HTMLElement>(null);
  const dataDisplayRef = useRef<HTMLDivElement>(null);

  const current = SCENARIOS.find((s) => s.id === selectedId) || SCENARIOS[0];

  const handleSelect = (id: string) => {
    if (id === selectedId) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setSelectedId(id);
      return;
    }

    if (dataDisplayRef.current) {
      gsap.to(dataDisplayRef.current, {
        opacity: 0,
        y: 4,
        duration: 0.1,
        ease: 'power2.in',
        onComplete: () => {
          setSelectedId(id);
          gsap.fromTo(
            dataDisplayRef.current,
            { opacity: 0, y: -4 },
            { opacity: 1, y: 0, duration: 0.22, ease: 'power3.out' }
          );
        },
      });
    } else {
      setSelectedId(id);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.sim-anim') || [],
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="interactive-sim-section" id="simulador-auditoria">
      <div className="wrap">
        <div className="sim-head-block sim-anim">
          <h2>
            Simulador de Recuperación por Cartera<span className="punto">.</span>
          </h2>
        </div>

        {/* Selector de Pestañas Limpio y Minimalista */}
        <div className="sim-pill-nav sim-anim" role="tablist">
          {SCENARIOS.map((scen) => {
            const isSelected = scen.id === selectedId;
            return (
              <button
                key={scen.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`sim-pill-btn ${isSelected ? 'is-active' : ''}`}
                onClick={() => handleSelect(scen.id)}
              >
                {scen.name}
              </button>
            );
          })}
        </div>

        {/* Display de Datos Conciso y Aireado */}
        <div ref={dataDisplayRef} className="sim-clean-display sim-anim">
          <div className="sim-kpi-col">
            <span className="kpi-rate">{current.recovery}</span>
            <span className="kpi-meta">Recuperación proyectada · {current.cycle}</span>
          </div>

          <div className="sim-specs-col">
            <div className="spec-row">
              <span className="spec-name">Canales</span>
              <span className="spec-detail">{current.channels}</span>
            </div>

            <div className="spec-row">
              <span className="spec-name">Horario</span>
              <span className="spec-detail">{current.schedule}</span>
            </div>

            <div className="spec-row">
              <span className="spec-name">Sustento Legal</span>
              <span className="spec-detail">{current.instruments}</span>
            </div>

            <div className="spec-row">
              <span className="spec-name">Mitigación</span>
              <span className="spec-detail">{current.mitigation}</span>
            </div>
          </div>
        </div>

        <div className="sim-footer-cta sim-anim">
          <a href="/contacto" className="btn btn-primary">
            <span>Auditar este Segmento con NDA</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
