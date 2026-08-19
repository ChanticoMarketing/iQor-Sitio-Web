'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GeocertifiedFieldProtocol() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.protocol-anim') || [],
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
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
    <section ref={sectionRef} className="geocertified-protocol-section dark" id="protocolo-campo">
      <div className="wrap">
        <div className="protocol-head-block protocol-anim">
          <h2 style={{ color: '#ffffff' }}>
            Protocolo de Notificación Geocertificada en Campo<span className="punto">.</span>
          </h2>
          <p style={{ color: 'var(--color-text-inverse-muted)' }}>
            Cada diligencia presencial genera un informe digital inalterable con plena validez probatoria:
          </p>
        </div>

        {/* 3 Columnas Tipográficas Puras — Cero Tarjetas */}
        <div className="protocol-columns-row protocol-anim">
          <div className="protocol-pillar">
            <h3 className="pillar-name">1. Geolocalización Satelital GPS</h3>
            <p className="pillar-text">
              Coordenadas de latitud y longitud registradas en tiempo real en el momento exacto del contacto presencial.
            </p>
          </div>

          <div className="protocol-pillar">
            <h3 className="pillar-name">2. Evidencia Fotográfica Segura</h3>
            <p className="pillar-text">
              Registro del inmueble y fachada con protección estricta de datos personales conforme a la LFPDPPP.
            </p>
          </div>

          <div className="protocol-pillar">
            <h3 className="pillar-name">3. Acuse Foliado con Validez</h3>
            <p className="pillar-text">
              Citatorio formal foliado con firma digital o física de recibido para sustento procesal en juicio mercantil.
            </p>
          </div>
        </div>

        {/* Barra de Cierre Integrada */}
        <div className="protocol-cta-strip protocol-anim">
          <div className="protocol-cta-copy">
            <strong>¿Tienes una cartera con dispersión nacional?</strong>
            <span>Envíanos tu listado de códigos postales y te entregamos un dictamen de cobertura en menos de 24 horas.</span>
          </div>

          <div className="protocol-cta-action">
            <Link href="/contacto" className="btn btn-primary">
              <span>Validar Cobertura de Cartera</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
