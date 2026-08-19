'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PHASES = [
  {
    index: '01',
    duration: 'Días 01 – 05',
    title: 'Auditoría & Scoring Predictivo',
    desc: 'Recepción segura de bases bajo estricto NDA notariable. Proyección econométrica y scoring de contactabilidad y solvencia real.',
    deliverable: 'Dictamen Técnico de Cartera',
    kpi: '100% Datos Validados',
  },
  {
    index: '02',
    duration: 'Días 06 – 10',
    title: 'Estrategia & Ruta Legal Personalizada',
    desc: 'Segmentación por mora: ruta extrajudicial negociada, formalización con títulos ejecutivos o preparación de demanda mercantil.',
    deliverable: 'Plan de Asignación & Convenios',
    kpi: 'Ruta 100% Trazada',
  },
  {
    index: '03',
    duration: 'Semana 2+',
    title: 'Gestión Inteligente & Negociación',
    desc: 'Marcación omnicanal con llamadas 100% grabadas para auditoría y visitas domiciliarias geocertificadas en las 32 entidades.',
    deliverable: 'Reporte en Tiempo Real & Evidencias',
    kpi: '0 Quejas CONDUSEF',
  },
  {
    index: '04',
    duration: 'Promedio 47 Días',
    title: 'Liquidación Directa & Conciliación',
    desc: 'Depósitos directos a tu cuenta concentradora. Conciliación diaria contra tu ERP contable y cobro de honorarios 100% a éxito.',
    deliverable: 'Conciliación ERP & Finiquito Legal',
    kpi: 'Hasta 85% Recuperado',
    isFinal: true,
  },
];

export default function Metodo() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const dayBadgeRef = useRef<HTMLSpanElement>(null);
  const phaseIndicatorRef = useRef<HTMLSpanElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mm = gsap.matchMedia();

    // Desktop / Tablet Pinned ScrollTelling (>= 768px)
    mm.add('(min-width: 768px)', () => {
      if (prefersReducedMotion) return;

      const section = sectionRef.current;
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      const progressBar = progressBarRef.current;
      const dayBadge = dayBadgeRef.current;
      const phaseIndicator = phaseIndicatorRef.current;

      if (!section || cards.length === 0) return;

      const dayLabels = [
        'DÍA 01 – 05 : AUDITORÍA & SCORING',
        'DÍA 06 – 10 : ESTRATEGIA & RUTA LEGAL',
        'SEMANA 2+ : GESTIÓN & NEGOCIACIÓN',
        'DÍA 47 : LIQUIDACIÓN & FINIQUITO',
      ];

      // Initial state: Card 0 active, others dimmed
      gsap.set(cards[0], { opacity: 1, scale: 1.02, y: 0 });
      gsap.set(cards.slice(1), { opacity: 0.28, scale: 0.97, y: 0 });

      // Create Pinned Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=1800',
          pin: true,
          pinSpacing: true,
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progressBar) {
              progressBar.style.width = `${progress * 100}%`;
            }

            const stepIndex = Math.min(Math.floor(progress * 4), 3);
            if (dayBadge) {
              dayBadge.textContent = dayLabels[stepIndex];
            }
            if (phaseIndicator) {
              phaseIndicator.textContent = `FASE 0${stepIndex + 1} / 04`;
            }

            // Update card active classes for CSS glows
            cards.forEach((card, idx) => {
              if (idx === stepIndex) {
                card.classList.add('is-active-step');
              } else {
                card.classList.remove('is-active-step');
              }
            });
          },
        },
      });

      // Phase 1 -> Phase 2
      tl.to(cards[0], { opacity: 0.45, scale: 0.97, duration: 1 }, 1);
      tl.to(cards[1], { opacity: 1, scale: 1.02, duration: 1 }, 1);

      // Phase 2 -> Phase 3
      tl.to(cards[1], { opacity: 0.45, scale: 0.97, duration: 1 }, 2.2);
      tl.to(cards[2], { opacity: 1, scale: 1.02, duration: 1 }, 2.2);

      // Phase 3 -> Phase 4
      tl.to(cards[2], { opacity: 0.45, scale: 0.97, duration: 1 }, 3.4);
      tl.to(cards[3], { opacity: 1, scale: 1.03, duration: 1 }, 3.4);

      // Grand Finale: All cards glow together before unlocking
      tl.to(cards, { opacity: 1, scale: 1, duration: 0.8 }, 4.6);
    });

    // Mobile (< 768px): Progressive in-view reveals without pin
    mm.add('(max-width: 767px)', () => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      cards.forEach((card) => {
        if (prefersReducedMotion) {
          gsap.set(card, { opacity: 1, y: 0 });
          return;
        }

        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="metodo custom-gsap-handled"
      id="metodo"
      aria-labelledby="met-titulo"
    >
      <div className="wrap metodo-wrap-inner">
        <div className="sec-head">
          <div>
            <span className="section-kicker">Protocolo Institucional de Recuperación</span>
            <h2 id="met-titulo">
              Cuatro fases estructuradas: del <span className="hl">diagnóstico</span> a la <span className="hl">liquidación</span><span className="punto">.</span>
            </h2>
          </div>
          <p className="sec-note">
            Metodología auditada perfeccionada a lo largo de 20+ años en México para maximizar la tasa de recupero protegiendo la reputación de tu marca.
          </p>
        </div>

        {/* ScrollTelling HUD Bar */}
        <div className="scrolltelling-hud">
          <div className="hud-meta">
            <span ref={phaseIndicatorRef} className="hud-phase-pill">
              FASE 01 / 04
            </span>
            <span ref={dayBadgeRef} className="hud-day-pill">
              DÍA 01 – 05 : AUDITORÍA & SCORING
            </span>
          </div>
          <div className="hud-track">
            <div ref={progressBarRef} className="hud-fill"></div>
          </div>
        </div>

        {/* 4 Phases Flow Track */}
        <div className="pipeline-flow-track">
          {PHASES.map((phase, idx) => (
            <div
              key={phase.index}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className={`pipeline-step-item ${idx === 0 ? 'is-active-step' : ''} ${
                phase.isFinal ? 'step-final' : ''
              }`}
            >
              <div className="pipeline-step-header">
                <span className={`pipeline-index ${phase.isFinal ? 'accent' : ''}`}>
                  {phase.index}
                </span>
                <span className={`pipeline-duration ${phase.isFinal ? 'accent' : ''}`}>
                  {phase.duration}
                </span>
              </div>

              <div className="pipeline-step-body">
                <h3>{phase.title}</h3>
                <p>{phase.desc}</p>

                <div className="pipeline-kpi-badge">
                  <span className="kpi-dot"></span>
                  <span>{phase.kpi}</span>
                </div>

                <div className="pipeline-deliverable">
                  <span className="deliv-label">Entregable Certificado:</span>
                  <strong>{phase.deliverable}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
