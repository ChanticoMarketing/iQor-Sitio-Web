'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Expediente() {
  const sectionRef = useRef<HTMLElement>(null);
  const folderRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);
  const tableRowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (stampRef.current) gsap.set(stampRef.current, { opacity: 1, scale: 1, rotate: 6 });
        if (folderRef.current) gsap.set(folderRef.current, { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: folderRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      // 1. Folder elevation entrance
      tl.fromTo(
        folderRef.current,
        { opacity: 0, y: 35, rotateX: 6 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.75, ease: 'power3.out' }
      );

      // 2. Red Stamp Impact Slam
      if (stampRef.current) {
        tl.fromTo(
          stampRef.current,
          {
            scale: 2.4,
            opacity: 0,
            rotate: -18,
            filter: 'blur(4px)',
          },
          {
            scale: 1,
            opacity: 0.95,
            rotate: 6,
            filter: 'blur(0px)',
            duration: 0.65,
            ease: 'elastic.out(1.1, 0.5)',
          },
          '-=0.25'
        );
      }

      // 3. Table rows horizontal reveal
      const rows = tableRowsRef.current.filter(Boolean) as HTMLDivElement[];
      if (rows.length > 0) {
        tl.fromTo(
          rows,
          { opacity: 0, x: -14 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power2.out',
          },
          '-=0.3'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="expediente custom-gsap-handled"
      id="expediente"
      aria-labelledby="exp-titulo"
    >
      <div className="wrap">
        <div ref={folderRef} className="folder">
          {/* Manila Folder Tab */}
          <span className="folder-tab-badge">EXP: 2024-BANC-048</span>

          {/* Sello de tinta roja con física de impacto */}
          <span ref={stampRef} className="stamp" aria-hidden="true">
            Dictamen Concluido
          </span>

          <div className="folder-grid">
            {/* Left Column: Case Story & Stats */}
            <div className="folder-narrative">
              <span className="section-kicker" style={{ color: '#7a6435' }}>
                Caso Real Auditado · Sector Financiero
              </span>
              <h2 id="exp-titulo">
                Recuperación acelerada de cartera en <span className="hl">asignación directa</span> institucional<span className="punto">.</span>
              </h2>
              <p className="folder-lead">
                Un portafolio bancario de $12.4 millones de pesos ingresó a RMS iQor como socio primario para reactivar el flujo de caja sin desgastar la relación comercial con los acreditados.
              </p>
              <p className="folder-body">
                Mediante segmentación econométrica por capacidad de pago real y formalización de convenios sostenibles, recuperamos el 74.2% del saldo total manteniendo 0 quejas ante la CONDUSEF.
              </p>

              <div className="folder-metrics-grid">
                <div className="folder-metric-box">
                  <strong>$12.4 M MXN</strong>
                  <span>Monto Asignado</span>
                </div>
                <div className="folder-metric-box">
                  <strong style={{ color: 'var(--color-accent)' }}>74.2%</strong>
                  <span>Recuperación</span>
                </div>
                <div className="folder-metric-box">
                  <strong style={{ color: '#15803d' }}>0 Quejas</strong>
                  <span>CONDUSEF</span>
                </div>
              </div>

              <div style={{ marginTop: '10px' }}>
                <Link className="link-line" href="/contacto" style={{ color: '#453928', fontWeight: 600 }}>
                  Solicitar auditoría de expediente <span className="arr" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Sheet Dossier Card */}
            <div className="folder-sheet-card">
              <div>
                <div className="folder-sheet-top">
                  <span className="folder-sheet-serial">EXP: 2024-BANC-048</span>
                  <span className="folder-sheet-status">Dictamen Concluido</span>
                </div>

                <div className="folder-sheet-table" style={{ marginTop: '12px' }}>
                  <div
                    ref={(el) => {
                      tableRowsRef.current[0] = el;
                    }}
                    className="folder-table-row"
                  >
                    <span className="d-prop">Tipo de Cartera</span>
                    <strong className="d-val">Crédito PyME & Títulos de Crédito</strong>
                  </div>
                  <div
                    ref={(el) => {
                      tableRowsRef.current[1] = el;
                    }}
                    className="folder-table-row"
                  >
                    <span className="d-prop">Modalidad de Asignación</span>
                    <strong className="d-val">Asignación Directa Institucional</strong>
                  </div>
                  <div
                    ref={(el) => {
                      tableRowsRef.current[2] = el;
                    }}
                    className="folder-table-row"
                  >
                    <span className="d-prop">Monto Total Gestionado</span>
                    <strong className="d-val">$12,400,000 MXN</strong>
                  </div>
                  <div
                    ref={(el) => {
                      tableRowsRef.current[3] = el;
                    }}
                    className="folder-table-row highlight"
                  >
                    <span className="d-prop">Recuperación Efectiva</span>
                    <strong className="d-val accent">$9,200,800 MXN (74.2%)</strong>
                  </div>
                  <div
                    ref={(el) => {
                      tableRowsRef.current[4] = el;
                    }}
                    className="folder-table-row"
                  >
                    <span className="d-prop">Resolución CONDUSEF</span>
                    <strong className="d-val clean">0 Quejas / 0 Sanciones</strong>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.78rem', color: '#7a6435', margin: 0, fontStyle: 'italic' }}>
                * Portafolio gestionado en primera asignación bajo estricto acuerdo de confidencialidad y secreto fiduciario.
              </p>
            </div>
          </div>

          <div className="folder-foot-note">
            <span>Datos anonimizados conforme a NDA vigente · Dirección de Operaciones, RMS iQor México.</span>
            <span>Auditoría de Recuperación B2B</span>
          </div>
        </div>
      </div>
    </section>
  );
}
