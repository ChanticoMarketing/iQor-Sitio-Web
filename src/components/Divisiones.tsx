'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Divisiones() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { opacity: 0, y: 30, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="divisiones custom-gsap-handled"
      id="divisiones"
      aria-labelledby="div-titulo"
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="section-kicker">Divisiones Especializadas</span>
            <h2 id="div-titulo">
              Estructuras operativas de <span className="hl">recuperación</span><span className="punto">.</span>
            </h2>
          </div>
          <p className="sec-note">
            Estrategias diferenciadas según el tipo de producto, grado de mora y perfil del acreditado.
          </p>
        </div>

        {/* 3-Column Balanced Visual Grid */}
        <div ref={cardsGridRef} className="solutions-trio-grid">
          {/* Pillar 01 */}
          <div className="solution-card-column">
            <div className="solution-thumb">
              <Image
                src="/images/legal_contract_agreement.jpg"
                alt="Documentación legal de convenios y contratos mercantiles"
                width={600}
                height={380}
                className="solution-thumb-img"
              />
            </div>
            <div className="solution-card-body">
              <h3>Cobranza Extrajudicial y Litigio</h3>
              <p>
                Negociación persuasiva sustentada en títulos de crédito y juicio ejecutivo mercantil con medidas cautelares.
              </p>
              <div className="solution-card-stat">
                <strong>72% – 85%</strong>
                <span>Tasa histórica auditada &lt; 180 días</span>
              </div>
              <Link className="link-line" href="/servicios/cobranza-extrajudicial-legal">
                Ver protocolo legal <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="solution-card-column">
            <div className="solution-thumb">
              <Image
                src="/images/bpo_headset_workstation.jpg"
                alt="Estación de conectividad y gestión telefónica BPO"
                width={600}
                height={380}
                className="solution-thumb-img"
              />
            </div>
            <div className="solution-card-body">
              <h3>Cobranza Administrativa, BPO & CX</h3>
              <p>
                Contact center omnicanal, atención a clientes (CX), marcación inteligente e integración directa con tu ERP contable.
              </p>
              <div className="solution-card-stat">
                <strong>&lt; 24 horas</strong>
                <span>Inicio de gestión y primer contacto</span>
              </div>
              <Link className="link-line" href="/servicios/cobranza-administrativa-bpo">
                Conocer infraestructura <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="solution-card-column">
            <div className="solution-thumb">
              <Image
                src="/images/portfolio_audit_folders.jpg"
                alt="Expedientes de auditoría y análisis de cartera"
                width={600}
                height={380}
                className="solution-thumb-img"
              />
            </div>
            <div className="solution-card-body">
              <h3>Staffing REPSE, Nómina & Auditoría</h3>
              <p>
                Atracción de talento, administración de nómina sin pasivo patronal y dictamen formal de cartera en 5 días hábiles.
              </p>
              <div className="solution-card-stat">
                <strong>100% REPSE</strong>
                <span>Cumplimiento laboral y fiscal estricto</span>
              </div>
              <Link className="link-line" href="/servicios/subcontratacion-personal">
                Consultar staffing <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
