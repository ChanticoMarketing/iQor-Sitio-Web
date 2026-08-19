'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PILLARS = [
  {
    id: 'local',
    tag: 'Fuerza 01 · Linaje Local',
    title: 'Criterio Jurídico Mercantil',
    location: 'Durango 263, Roma Norte · Desde 2003',
    headline: 'Dos décadas de rigor procesal y acuerdos extrajudiciales de alta cuantía.',
    desc: 'Nacimos en la Ciudad de México como una firma boutique especializada en recuperación mercantil y formalización de títulos ejecutivos. Operamos con pleno conocimiento de los juzgados y usos procesales en las 32 entidades federativas de México.',
    metrics: [
      { num: '2003', label: 'Año de fundación en CDMX' },
      { num: '32', label: 'Estados con cobertura directa' },
      { num: '0', label: 'Quejas y sanciones CONDUSEF' },
    ],
    badge: 'Mesa Central CDMX',
    image: '/images/roma_norte_hq.jpg',
    imageAlt: 'Sede Central Durango 263, Roma Norte, Ciudad de México',
  },
  {
    id: 'global',
    tag: 'Fuerza 02 · Músculo Global',
    title: 'Capacidad BPO & Tecnología iQor',
    location: '45,000+ Agentes · Red en +30 Países',
    headline: 'Infraestructura tecnológica cloud, marcación predictiva y análisis de voz.',
    desc: 'Nuestra operación mexicana está enlazada directamente con la plataforma global de iQor, integrando capacidad de marcación omnicanal con inteligencia artificial, redundancia continua en servidores de alta seguridad y uptime del 99.98%.',
    metrics: [
      { num: '45,000+', label: 'Colaboradores en la red global' },
      { num: '99.98%', label: 'Disponibilidad de infraestructura' },
      { num: '100%', label: 'Llamadas grabadas para auditoría' },
    ],
    badge: 'Red Internacional iQor',
    image: '/images/bpo_operations_center.jpg',
    imageAlt: 'Centro de Operaciones y Tecnología BPO iQor',
  },
];

export default function NosotrosHero() {
  const [activePillar, setActivePillar] = useState<0 | 1>(0);
  const current = PILLARS[activePillar];

  return (
    <section className="nosotros-hero">
      <div className="wrap">
        {/* Breadcrumb minimalista */}
        <nav aria-label="Breadcrumb" className="nosotros-breadcrumb" data-reveal>
          <ol>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li aria-current="page" className="breadcrumb-current">Sobre Nosotros</li>
          </ol>
        </nav>

        {/* Encabezado Principal */}
        <div className="nosotros-hero-header" data-reveal>
          <div className="nosotros-hero-kicker-row">
            <span className="section-kicker kicker-dark">IDENTIDAD INSTITUCIONAL RMS iQOR MÉXICO</span>
            <span className="nosotros-status-pill">
              <span className="status-live-dot" /> OPERACIÓN ACTIVA 32 ESTADOS
            </span>
          </div>

          <h1 className="nosotros-hero-title">
            Dos Fuerzas Estratégicas<span className="hl">.</span>
            <br />
            Un Solo Criterio de Precisión<span className="hl">.</span>
          </h1>

          <p className="nosotros-hero-subtitle">
            Combinamos la solidez de una firma jurídica fundada en 2003 en la Roma Norte con el músculo tecnológico y operativo de <strong>45,000 agentes globales</strong> en más de 30 países.
          </p>
        </div>

        {/* Dual Pillar Switcher */}
        <div className="nosotros-pillar-switcher" data-reveal>
          <div className="pillar-tabs-nav" role="tablist" aria-label="Pilares Institucionales">
            {PILLARS.map((p, idx) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={activePillar === idx}
                aria-controls={`pillar-panel-${p.id}`}
                id={`pillar-tab-${p.id}`}
                className={`pillar-tab-btn ${activePillar === idx ? 'is-active' : ''}`}
                onClick={() => setActivePillar(idx as 0 | 1)}
              >
                <span className="tab-indicator-num">0{idx + 1}</span>
                <div className="tab-btn-text">
                  <strong>{p.title}</strong>
                  <small>{p.location}</small>
                </div>
              </button>
            ))}
          </div>

          {/* Active Pillar Card Panel */}
          <div
            id={`pillar-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`pillar-tab-${current.id}`}
            className="pillar-card-display"
          >
            <div className="pillar-display-copy">
              <div className="pillar-badge-row">
                <span className="pillar-tag-label">{current.tag}</span>
                <span className="pillar-loc-badge">{current.badge}</span>
              </div>

              <h2 className="pillar-headline">{current.headline}</h2>
              <p className="pillar-body-text">{current.desc}</p>

              <div className="pillar-metrics-grid">
                {current.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="pillar-metric-item">
                    <strong className="p-metric-val">{m.num}</strong>
                    <span className="p-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="pillar-cta-row">
                <Link href="/contacto" className="btn btn-primary">
                  Agendar Sesión Ejecutiva <span className="arr">→</span>
                </Link>
                <Link href="/metodo-y-cumplimiento" className="btn btn-ghost-light">
                  Conocer Metodología <span className="arr">→</span>
                </Link>
              </div>
            </div>

            <div className="pillar-display-media">
              <div className="pillar-img-frame">
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  width={900}
                  height={600}
                  priority
                  className="pillar-visual-img"
                />
                <div className="pillar-media-caption">
                  <div>
                    <strong>{current.badge}</strong>
                    <span>{current.location}</span>
                  </div>
                  <span className="media-verified-badge">✓ Verificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Key Stats Bar */}
        <div className="nosotros-stats-strip" data-reveal>
          <div className="stats-strip-cell">
            <span className="stats-strip-num" data-count="80" data-suffix="+">80+</span>
            <span className="stats-strip-lbl">Años de metodología y respaldo del grupo</span>
          </div>
          <div className="stats-strip-cell">
            <span className="stats-strip-num" data-count="20" data-suffix="+">20+</span>
            <span className="stats-strip-lbl">Años operando en México desde 2003</span>
          </div>
          <div className="stats-strip-cell">
            <span className="stats-strip-num" data-count="45000" data-suffix="+">45,000+</span>
            <span className="stats-strip-lbl">Especialistas en la red internacional</span>
          </div>
          <div className="stats-strip-cell">
            <span className="stats-strip-num">3 Sedes</span>
            <span className="stats-strip-lbl">CDMX · Monterrey · Guadalajara</span>
          </div>
        </div>
      </div>
    </section>
  );
}
