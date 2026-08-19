'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Cobertura() {
  const sectionRef = useRef<HTMLElement>(null);
  const hqBoardRef = useRef<HTMLDivElement>(null);
  const regionsStackRef = useRef<HTMLDivElement>(null);

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

      if (hqBoardRef.current) {
        tl.fromTo(
          hqBoardRef.current,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
          0.1
        );
      }

      if (regionsStackRef.current) {
        tl.fromTo(
          regionsStackRef.current.children,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.55, stagger: 0.08, ease: 'power2.out' },
          0.2
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cobertura custom-gsap-handled"
      id="cobertura"
      aria-labelledby="cob-titulo"
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="section-kicker">Despliegue Territorial & SLAs</span>
            <h2 id="cob-titulo">
              Presencia donde radica tu <span className="hl">deudor</span>, no solo donde está tu oficina<span className="punto">.</span>
            </h2>
          </div>
          <p className="sec-note">
            Gestión domiciliaria presencial con geocertificación satelital y cobertura en las 32 entidades del país.
          </p>
        </div>

        <div className="cobertura-visual-grid">
          {/* Left Column: Authentic HQ Direct Information Panel */}
          <div ref={hqBoardRef} className="hq-spec-board">
            <div className="hq-spec-head">
              <span className="hq-spec-title">Mesa Central de Operaciones</span>
              <span className="hq-spec-badge">Sede Nacional</span>
            </div>

            <div className="hq-spec-body">
              <h3>Durango 263, Piso 3</h3>
              <p className="hq-spec-address">
                Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México.
              </p>

              <div className="hq-spec-meta-list">
                <div className="hq-meta-item">
                  <span className="hq-meta-label">Coordenadas de Operación</span>
                  <strong className="hq-meta-val">19.4194° N, 99.1678° W</strong>
                </div>
                <div className="hq-meta-item">
                  <span className="hq-meta-label">Horario de Atención Corporativa</span>
                  <strong className="hq-meta-val">Lunes a Viernes: 08:00 – 19:00 hrs</strong>
                </div>
                <div className="hq-meta-item">
                  <span className="hq-meta-label">Protocolo de Asignación</span>
                  <strong className="hq-meta-val">Firma de NDA previo & Recepción Segura</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Territorial SLAs */}
          <div ref={regionsStackRef} className="cobertura-regions-stack">
            <div className="region-block">
              <div className="region-title-row">
                <h3>Valle de México</h3>
                <span className="region-time">Respuesta en 24 h</span>
              </div>
              <p>CDMX, Naucalpan, Tlalnepantla, Ecatepec, Nezahualcóyotl, Toluca y área conurbada.</p>
            </div>

            <div className="region-block">
              <div className="region-title-row">
                <h3>Norte & Frontera</h3>
                <span className="region-time">Respuesta en 48 h</span>
              </div>
              <p>Monterrey, Saltillo, Torreón, Chihuahua, Ciudad Juárez, Tijuana, Hermosillo y Reynosa.</p>
            </div>

            <div className="region-block">
              <div className="region-title-row">
                <h3>Bajío & Occidente</h3>
                <span className="region-time">Respuesta en 48 h</span>
              </div>
              <p>Guadalajara, Querétaro, León, Aguascalientes, San Luis Potosí, Morelia y Celaya.</p>
            </div>

            <div className="region-block">
              <div className="region-title-row">
                <h3>Sur & Península</h3>
                <span className="region-time">Respuesta en 72 h</span>
              </div>
              <p>Mérida, Cancún, Tuxtla Gutiérrez, Villahermosa, Veracruz, Puebla y Oaxaca.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
