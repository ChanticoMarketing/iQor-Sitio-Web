'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface MilestoneData {
  id: string;
  year: string;
  period: string;
  phase: string;
  title: string;
  location: string;
  coords: string;
  folio: string;
  lead: string;
  desc: string;
  badge: string;
  kpiNumber: string;
  kpiLabel: string;
  pillars: {
    label: string;
    value: string;
  }[];
  spec: string;
}

const MILESTONES: MilestoneData[] = [
  {
    id: 'origen-2003',
    year: '2003',
    period: '2003 — 2010',
    phase: 'Época 01 · El Origen',
    title: 'Fundación en Roma Norte & Criterio Litigioso',
    location: 'Durango 263, Roma Norte, CDMX',
    coords: '19.4192° N, 99.1728° W',
    folio: 'EXP-HIST-01/2003-DF',
    lead: 'Nace la mesa central con especialidad en litigio mercantil y títulos de crédito.',
    desc: 'RMS surge en la Ciudad de México como una firma boutique especializada en la formalización, resguardo y cobro judicial de pagarés y contratos corporativos. Desde el primer día, la regla fue innegociable: rigor procesal estricto y total protección a la reputación de la entidad acreedora.',
    badge: 'Mesa Central Fundacional',
    kpiNumber: '100%',
    kpiLabel: 'Casos con Sustento Mercantil Notariable',
    pillars: [
      { label: 'Marco Jurídico', value: 'Código de Comercio & LGTOC' },
      { label: 'Sede Operativa', value: 'Durango 263, Roma Norte' },
      { label: 'Instrumentos Clave', value: 'Pagarés, Contratos & Títulos Ejecutivos' },
    ],
    spec: 'Litigio Mercantil · Pagarés & Títulos',
  },
  {
    id: 'expansion-2011',
    year: '2011',
    period: '2011 — 2017',
    phase: 'Época 02 · Escala Nacional',
    title: 'Expansión Bancaria & Cobertura en 32 Estados',
    location: 'CDMX · Monterrey · Guadalajara',
    coords: 'Cobertura Nacional 32 Entidades',
    folio: 'EXP-HIST-02/2011-NAC',
    lead: 'Asignación masiva de carteras institucionales de banca múltiple, consumo y retail.',
    desc: 'Desplegamos células especializadas de cobranza administrativa, extrajudicial y visitas domiciliarias en toda la República Mexicana. Se consolidan las sedes regionales en Monterrey y Guadalajara para atender con inmediatez el corredor industrial norte y occidente.',
    badge: 'Red Nacional en 32 Estados',
    kpiNumber: '3 Sedes',
    kpiLabel: 'Oficinas Corporativas Propias en México',
    pillars: [
      { label: 'Despliegue Físico', value: 'CDMX, Monterrey y Guadalajara' },
      { label: 'Segmentos Atendidos', value: 'Banca Múltiple, Retail & Crédito Corporativo' },
      { label: 'Gestión en Campo', value: 'Rutas Domiciliarias Geocertificadas' },
    ],
    spec: 'Banca Múltiple · Crédito Corporativo',
  },
  {
    id: 'global-2018',
    year: '2018',
    period: '2018 — 2025',
    phase: 'Época 03 · Salto Tecnológico',
    title: 'Alianza Estratégica con la Red Global iQor',
    location: 'Integración Internacional · +30 Países',
    coords: 'Nodo Global Cloud Redundante',
    folio: 'EXP-HIST-03/2018-INT',
    lead: 'Fusión de solvencia procesal con potencia analítica y plataformas cloud de clase mundial.',
    desc: 'RMS México se integra a la infraestructura multinacional de iQor. Incorporamos sistemas de marcación predictiva cloud, análisis de voz por inteligencia artificial, scoring econométrico de contactabilidad y centros de datos certificados con disponibilidad continua del 99.98%.',
    badge: 'Alianza Global iQor',
    kpiNumber: '45,000+',
    kpiLabel: 'Especialistas en la Red Global de Soporte',
    pillars: [
      { label: 'Infraestructura', value: 'Uptime 99.98% con Servidores Redundantes' },
      { label: 'Inteligencia de Datos', value: 'Scoring Predictivo & Análisis de Voz' },
      { label: 'Alcance Global', value: 'Operación enlazada a +30 países' },
    ],
    spec: 'Marcación Cloud · Análisis de Voz IA',
  },
  {
    id: 'presente-2026',
    year: '2026+',
    period: '2026 en adelante',
    phase: 'Época 04 · Gobernanza & Presente',
    title: 'Liderazgo en Gobernanza & Cero Quejas CONDUSEF',
    location: 'Estándar CONDUSEF / PROFECO / LFPDPPP',
    coords: 'Auditabilidad & Seguridad Notarial 24/7',
    folio: 'EXP-HIST-04/2026-GOV',
    lead: 'Modelo de recuperación técnica con 47 días de ciclo promedio y récord intachable.',
    desc: 'Consolidados como el socio estratégico de fintechs, fondos de deuda y corporativos multinacionales. 100% de llamadas grabadas y auditadas, custodia de datos bajo estricto NDA notariable y cobro de honorarios condicionado al éxito real de la cartera recuperada.',
    badge: 'Récord Intachable',
    kpiNumber: '0 Quejas',
    kpiLabel: 'Sanciones CONDUSEF y PROFECO en 20+ Años',
    pillars: [
      { label: 'Auditoría Total', value: '100% de Llamadas e Interacciones Grabadas' },
      { label: 'Ciclo de Cobro', value: '47 Días Promedio de Recuperación Efectiva' },
      { label: 'Esquema Comercial', value: 'Honorarios 100% Condicionados al Éxito' },
    ],
    spec: '0 Quejas CONDUSEF · Custodia LFPDPPP',
  },
];

export default function NosotrosTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const monolithRef = useRef<HTMLDivElement>(null);
  const dossierCardRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const current = MILESTONES[activeIndex];

  // GSAP animation on tab change
  const handleSelectMilestone = (index: number) => {
    if (index === activeIndex) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setActiveIndex(index);
      return;
    }

    // Animate transition out
    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(index);
      },
    });

    if (dossierCardRef.current && monolithRef.current) {
      tl.to(dossierCardRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.16,
        ease: 'power2.in',
      }).to(
        monolithRef.current,
        {
          opacity: 0,
          scale: 0.98,
          duration: 0.16,
          ease: 'power2.in',
        },
        0
      );
    } else {
      setActiveIndex(index);
    }
  };

  // Animate in when activeIndex changes
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    if (dossierCardRef.current && monolithRef.current) {
      gsap.fromTo(
        monolithRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.35, ease: 'power3.out' }
      );

      gsap.fromTo(
        dossierCardRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', delay: 0.04 }
      );
    }
  }, [activeIndex]);

  // Initial ScrollTrigger Entrance
  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    const prev = activeIndex === 0 ? MILESTONES.length - 1 : activeIndex - 1;
    handleSelectMilestone(prev);
  };

  const handleNext = () => {
    const next = activeIndex === MILESTONES.length - 1 ? 0 : activeIndex + 1;
    handleSelectMilestone(next);
  };

  return (
    <section ref={sectionRef} className="timeline-master-console" id="historia">
      <div className="wrap console-inner-wrap">
        {/* Encabezado Editorial */}
        <div className="timeline-console-head">
          <div className="section-head-b2b">
            <span className="section-kicker">CONSOLA HISTÓRICA · 2003 – 2026+</span>
            <h2>
              Dos Décadas de Criterio Procesal e Innovación<span className="punto">.</span>
            </h2>
            <p>
              Explora las cuatro eras que transformaron un despacho boutique en la Roma Norte en la plataforma de cobranza y BPO con mayor solidez institucional de México.
            </p>
          </div>
        </div>

        {/* 1. RIEL HORIZONTAL DE ÉPOCAS (EPOCH SCRUBBER) */}
        <div className="epoch-nav-rail" role="tablist" aria-label="Línea de tiempo histórica">
          <div className="epoch-rail-track">
            {/* Barra de progreso conectora */}
            <div
              ref={progressLineRef}
              className="epoch-rail-fill"
              style={{
                width: `${(activeIndex / (MILESTONES.length - 1)) * 100}%`,
              }}
              aria-hidden="true"
            />

            {/* Hitos clicables */}
            <div className="epoch-rail-nodes">
              {MILESTONES.map((m, idx) => {
                const isActive = idx === activeIndex;
                const isPassed = idx <= activeIndex;

                return (
                  <button
                    key={m.id}
                    type="button"
                    role="tab"
                    id={`tab-${m.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${m.id}`}
                    className={`epoch-node-btn ${isActive ? 'is-active' : ''} ${
                      isPassed ? 'is-passed' : ''
                    }`}
                    onClick={() => handleSelectMilestone(idx)}
                  >
                    <span className="node-marker-ring">
                      <span className="node-marker-core" />
                    </span>
                    <span className="node-info-stack">
                      <span className="node-year-label">{m.year}</span>
                      <span className="node-subtitle">{m.phase.split('·')[1]?.trim() || m.title}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botones de navegación paso a paso */}
          <div className="epoch-quick-stepper" aria-label="Controles de navegación">
            <button
              type="button"
              className="stepper-btn"
              onClick={handlePrev}
              aria-label="Época anterior"
              title="Época anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="stepper-counter">
              <strong>0{activeIndex + 1}</strong> / 0{MILESTONES.length}
            </span>
            <button
              type="button"
              className="stepper-btn"
              onClick={handleNext}
              aria-label="Época siguiente"
              title="Época siguiente"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 2. ESCENARIO CENTRAL HOLOGRÁFICO & DOSSIER */}
        <div
          className="epoch-stage-grid"
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
        >
          {/* Columna Izquierda: Monolito Tipográfico & Medidor de Impacto */}
          <div ref={monolithRef} className="epoch-monolith-card">
            <div className="monolith-watermark" aria-hidden="true">
              {current.year}
            </div>

            <div className="monolith-content">
              <div className="monolith-badge-row">
                <span className="monolith-tag">{current.phase}</span>
                <span className="monolith-folio">{current.folio}</span>
              </div>

              <div className="monolith-year-display">
                <span className="year-number">{current.year}</span>
                <span className="year-period">{current.period}</span>
              </div>

              <div className="monolith-location-box">
                <div className="location-pin-dot" />
                <div className="location-text-wrap">
                  <strong className="location-name">{current.location}</strong>
                  <span className="location-coords">{current.coords}</span>
                </div>
              </div>

              {/* Tarjeta de Métrica Clave de la Época */}
              <div className="monolith-kpi-card">
                <span className="kpi-kicker">MÉTRICA DE IMPACTO HISTÓRICO</span>
                <div className="kpi-display-row">
                  <span className="kpi-value">{current.kpiNumber}</span>
                  <span className="kpi-desc">{current.kpiLabel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Dossier Operativo & Matriz de Evidencias */}
          <div ref={dossierCardRef} className="epoch-dossier-card">
            <div className="dossier-header">
              <div className="dossier-status-pill">
                <span className="status-live-dot" />
                <span>{current.badge}</span>
              </div>
              <span className="dossier-spec-tag">{current.spec}</span>
            </div>

            <div className="dossier-body">
              <h3 className="dossier-title">{current.title}</h3>
              <p className="dossier-lead">{current.lead}</p>
              <p className="dossier-desc">{current.desc}</p>
            </div>

            {/* Matriz de 3 Pilares Verificables de la Época */}
            <div className="dossier-pillars-matrix">
              <span className="matrix-title">Fundamentos Operativos de esta Época</span>
              <div className="matrix-grid">
                {current.pillars.map((p) => (
                  <div key={p.label} className="matrix-item">
                    <span className="matrix-label">{p.label}</span>
                    <strong className="matrix-value">{p.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie de Dossier con Certificación Institucional */}
            <div className="dossier-footer">
              <div className="dossier-seal-block">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="seal-icon">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div className="seal-text">
                  <strong>Registro RMS iQor México</strong>
                  <span>Custodia de Expedientes & Trazabilidad Notarial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
