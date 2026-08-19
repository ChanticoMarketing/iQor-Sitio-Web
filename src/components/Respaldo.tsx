'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Respaldo() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyColRef = useRef<HTMLDivElement>(null);
  const mediaColRef = useRef<HTMLDivElement>(null);
  const mediaImgRef = useRef<HTMLImageElement>(null);

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

      if (copyColRef.current) {
        tl.fromTo(
          copyColRef.current.children,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out' },
          0.1
        );
      }

      if (mediaColRef.current) {
        tl.fromTo(
          mediaColRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
          0.2
        );
      }

      // Parallax scroll on boardroom visual
      if (mediaImgRef.current && sectionRef.current) {
        gsap.to(mediaImgRef.current, {
          yPercent: 6,
          scale: 1.04,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="respaldo-section custom-gsap-handled"
      id="respaldo"
      aria-labelledby="res-titulo"
    >
      <div className="wrap">
        <div className="respaldo-grid-split">
          {/* Left Column */}
          <div ref={copyColRef} className="respaldo-copy-col">
            <div className="respaldo-header-compact">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <Image
                  src="/brand/iqor-logo-white-coral.png"
                  alt="Logotipo iQor Global"
                  width={110}
                  height={32}
                  style={{ width: 'auto', height: '28px', objectFit: 'contain' }}
                />
                <span className="section-kicker kicker-dark" style={{ margin: 0 }}>Escala Internacional · Criterio Nacional</span>
              </div>
              <h2 id="res-titulo">
                Hacemos que tu empresa <span className="hl">avance</span>, mientras tú te enfocas en <span className="hl">crecer</span><span className="punto">.</span>
              </h2>
              <p className="respaldo-lead">
                Más de 80 años de metodología internacional y 20+ años de liderazgo en México. Un socio estratégico integral para capital humano, logística y recuperación de cartera.
              </p>
            </div>

            {/* 4 Metrics */}
            <div className="respaldo-metrics-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
              <div className="r-metric-block">
                <strong className="r-metric-num">80+ Años</strong>
                <span className="r-metric-desc">Trayectoria del grupo</span>
              </div>
              <div className="r-metric-block">
                <strong className="r-metric-num">45,000+</strong>
                <span className="r-metric-desc">Colaboradores globales</span>
              </div>
              <div className="r-metric-block">
                <strong className="r-metric-num">30+</strong>
                <span className="r-metric-desc">Países conectados</span>
              </div>
              <div className="r-metric-block">
                <strong className="r-metric-num">3 Sedes MX</strong>
                <span className="r-metric-desc">CDMX · MTY · GDL</span>
              </div>
            </div>

            <div className="respaldo-cta-row">
              <Link href="/nosotros" className="btn btn-ghost-light">
                Conocer historia y estructura <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Boardroom Scale */}
          <div ref={mediaColRef} className="respaldo-media-col">
            <Image
              ref={mediaImgRef}
              src="/images/corporate_boardroom_view.jpg"
              alt="Instalaciones ejecutivas y alcance global de RMS iQor"
              width={800}
              height={550}
              className="respaldo-split-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
