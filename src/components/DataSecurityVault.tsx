'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SECURITY_LAYERS = [
  {
    step: '01',
    name: 'Ingesta Cifrada & NDA Notariable',
    tech: 'Protocolo TLS 1.3 / SFTP',
    desc: 'La recepción de bases de cartera se realiza exclusivamente tras la firma del Acuerdo de Confidencialidad y a través de canales directos encriptados punto a punto.',
  },
  {
    step: '02',
    name: 'Bóveda Criptográfica en Reposo',
    tech: 'Algoritmo AES-256 GCM',
    desc: 'Los registros se almacenan con claves de cifrado rotativas y aislamiento físico/lógico en centros de datos con certificación bancaria de alta disponibilidad.',
  },
  {
    step: '03',
    name: 'Aislamiento Operativo Zero-Trust',
    tech: 'Control por Roles & 2FA Obligatorio',
    desc: 'Los agentes solo acceden al expediente asignado durante la llamada activa. Prohibición de exportación de datos, puertos USB bloqueados y sin dispositivos personales.',
  },
  {
    step: '04',
    name: 'Purga Forense & Finiquito Certificado',
    tech: 'Estándar DoD 5220.22-M',
    desc: 'Al concluir la gestión o liquidarse el crédito, los datos se eliminan con borrado seguro irreversible y se emite el certificado de finiquito y destrucción.',
  },
];

export default function DataSecurityVault() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.vault-anim') || [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
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
    <section ref={sectionRef} className="security-vault-section dark" id="seguridad-datos">
      <div className="wrap">
        {/* Cabecera de la Bóveda */}
        <div className="vault-head-block vault-anim">
          <div className="section-head-b2b">
            <span className="section-kicker" style={{ color: 'var(--color-accent-bright)' }}>
              CIBERSEGURIDAD BANCARIA & CADENA DE CUSTODIA LFPDPPP
            </span>
            <h2 style={{ color: '#ffffff' }}>
              Arquitectura Criptográfica y Secreto Fiduciario<span className="punto">.</span>
            </h2>
            <p style={{ color: 'var(--color-text-inverse-muted)' }}>
              Aplicamos el mismo rigor tecnológico exigido a la banca múltiple mexicana para proteger la información patrimonial de tu empresa y tus clientes.
            </p>
          </div>
        </div>

        {/* Diagrama de 4 Capas de Cadena de Custodia */}
        <div className="vault-layers-grid vault-anim">
          {SECURITY_LAYERS.map((layer) => (
            <div key={layer.step} className="vault-layer-card">
              <div className="layer-top-bar">
                <span className="layer-step-badge">CAPA {layer.step}</span>
                <span className="layer-tech-badge">{layer.tech}</span>
              </div>
              <h3 className="layer-name">{layer.name}</h3>
              <p className="layer-desc">{layer.desc}</p>
            </div>
          ))}
        </div>

        {/* Matriz de Garantías Contractuales */}
        <div className="vault-guarantees-bar vault-anim">
          <div className="guarantee-item">
            <div className="guarantee-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="guarantee-text">
              <strong>NDA Notariable Vinculante</strong>
              <span>Protección contractual previa a la recepción de la primera base.</span>
            </div>
          </div>

          <div className="guarantee-item">
            <div className="guarantee-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className="guarantee-text">
              <strong>Oficial de Privacidad Interno</strong>
              <span>Atención a solicitudes ARCO en menos de 48 horas hábiles.</span>
            </div>
          </div>

          <div className="guarantee-item">
            <div className="guarantee-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10M7 12h10M7 17h10" />
              </svg>
            </div>
            <div className="guarantee-text">
              <strong>100% Llamadas Indexadas</strong>
              <span>Audios grabados y disponibles en tu panel ejecutivo semanal.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
