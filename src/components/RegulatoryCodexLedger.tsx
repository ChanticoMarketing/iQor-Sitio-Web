'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface LegalCodexItem {
  id: string;
  source: string;
  article: string;
  subject: string;
  iqorComplianceMechanism: string;
}

const CODEX_ITEMS: LegalCodexItem[] = [
  {
    id: 'codex-01',
    source: 'Código Penal Federal',
    article: 'Art. 284 Bis',
    subject: 'Tipificación de Cobranza Ilegal',
    iqorComplianceMechanism:
      'Auditoría preventiva en vivo de comunicaciones. Prohibición total de lenguaje intimidatorio o documentos simulados.',
  },
  {
    id: 'codex-02',
    source: 'Disposiciones CONDUSEF',
    article: 'Disposición Tercera (REDECO)',
    subject: 'Reglas de Conducta y Horarios',
    iqorComplianceMechanism:
      'Bloqueo algorítmico fuera de la franja de 07:00 a 22:00 h y restricción estricta de contacto a terceros ajenos.',
  },
  {
    id: 'codex-03',
    source: 'Ley para la Transparencia Financiera',
    article: 'Art. 17 Bis 1',
    subject: 'Registro Público de Despachos',
    iqorComplianceMechanism:
      'Registro legal y poderes notariales activos en las 32 entidades para actuar como mandatario ante auditorías de CNBV.',
  },
  {
    id: 'codex-04',
    source: 'Ley de Protección de Datos (LFPDPPP)',
    article: 'Arts. 15, 16 y 19',
    subject: 'Seguridad Criptográfica & ARCO',
    iqorComplianceMechanism:
      'Cifrado AES-256 en reposo, canal TLS 1.3 y atención a Derechos ARCO en menos de 48 horas hábiles.',
  },
  {
    id: 'codex-05',
    source: 'Código de Comercio',
    article: 'Art. 1391',
    subject: 'Títulos de Crédito Ejecutivos',
    iqorComplianceMechanism:
      'Validación formal de pagarés y facturas para asegurar procedencia de embargo precautorio en juzgados mercantiles.',
  },
];

export default function RegulatoryCodexLedger() {
  const [expandedId, setExpandedId] = useState<string>('codex-01');
  const sectionRef = useRef<HTMLElement>(null);

  const toggleItem = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.codex-anim') || [],
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
    <section ref={sectionRef} className="regulatory-codex-section" id="codigo-regulatorio">
      <div className="wrap">
        <div className="codex-head-block codex-anim">
          <h2>
            Marco Legal Aplicable<span className="punto">.</span>
          </h2>
          <p>
            Mecanismos de control algorítmico y sustento normativo en cada gestión:
          </p>
        </div>

        <div className="codex-editorial-list codex-anim">
          {CODEX_ITEMS.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className={`codex-item-row ${isExpanded ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="codex-item-trigger"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`codex-content-${item.id}`}
                >
                  <div className="codex-meta-col">
                    <strong className="codex-subject">{item.subject}</strong>
                    <span className="codex-source-tag">{item.source} · {item.article}</span>
                  </div>

                  <span className="codex-indicator-arrow">{isExpanded ? '−' : '+'}</span>
                </button>

                {isExpanded && (
                  <div id={`codex-content-${item.id}`} className="codex-item-details">
                    <p className="detail-point-text">{item.iqorComplianceMechanism}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
