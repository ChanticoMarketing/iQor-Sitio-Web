'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function NdaAuditDossier() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.nda-anim') || [],
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
    <section ref={sectionRef} className="nda-dossier-section" id="acuerdo-nda">
      <div className="wrap">
        <div className="nda-editorial-block nda-anim">
          <h2 className="nda-main-title">
            Acuerdo de Confidencialidad Notariable (NDA)<span className="punto">.</span>
          </h2>
          <p className="nda-main-sub">
            Ninguna base de datos es recibida sin la previa suscripción de un NDA vinculante firmado por apoderado legal.
          </p>
        </div>

        <div className="nda-clauses-row nda-anim">
          <div className="clause-column">
            <h3 className="clause-name">Confidencialidad</h3>
            <p className="clause-text">
              Secreto perpetuo fiduciario y comercial aun después de liquidada la cartera.
            </p>
          </div>

          <div className="clause-column">
            <h3 className="clause-name">Sin Cesión</h3>
            <p className="clause-text">
              Prohibición expresa de subcontratación a despachos terceros no auditados.
            </p>
          </div>

          <div className="clause-column">
            <h3 className="clause-name">Acreditación Directa</h3>
            <p className="clause-text">
              100% de recuperaciones directo a la cuenta concentradora de tu empresa.
            </p>
          </div>

          <div className="clause-column">
            <h3 className="clause-name">Destrucción Forense</h3>
            <p className="clause-text">
              Certificado de borrado seguro irreversible de datos conforme a la LFPDPPP.
            </p>
          </div>
        </div>

        <div className="nda-action-strip nda-anim">
          <div className="nda-action-text">
            <strong>Formaliza la revisión de tu cartera</strong>
            <span>Solicita el Acuerdo de Confidencialidad para tu área jurídica antes de iniciar.</span>
          </div>

          <div className="nda-btn-wrapper">
            <Link href="/contacto" className="btn btn-primary">
              <span>Solicitar NDA Institucional</span>
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
