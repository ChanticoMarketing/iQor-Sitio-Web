'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const copyColRef = useRef<HTMLDivElement>(null);
  const mediaColRef = useRef<HTMLDivElement>(null);
  const mediaImgRef = useRef<HTMLImageElement>(null);
  const statsBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 1. Staggered Hero Entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (copyColRef.current) {
        const elements = copyColRef.current.children;
        tl.fromTo(
          elements,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          0.1
        );
      }

      if (mediaColRef.current) {
        tl.fromTo(
          mediaColRef.current,
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9 },
          0.25
        );
      }

      if (statsBarRef.current) {
        const stats = statsBarRef.current.children;
        tl.fromTo(
          stats,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.08 },
          0.5
        );
      }

      // 2. Parallax depth on hero image during scroll
      if (mediaImgRef.current && heroRef.current) {
        gsap.to(mediaImgRef.current, {
          yPercent: 8,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero custom-gsap-handled" id="recuperacion" aria-labelledby="hero-titulo">
      <div className="wrap hero-wrap">
        {/* Top Split: Copy & Image */}
        <div className="hero-top-split">
          <div ref={copyColRef} className="hero-copy-col">
            <span className="section-kicker kicker-dark">Líder en Recuperación Institucional & BPO</span>
            <h1 id="hero-titulo">
              Recuperamos hasta el <span className="hl">85%</span> de tu <span className="hl">cartera vencida</span> con <span className="hl">respaldo legal</span> y escala global<span className="punto">.</span>
            </h1>
            <p className="hero-lead">
              Cobranza extrajudicial negociada, litigio mercantil y BPO administrativo para banca, fintechs y grandes corporativos en México.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contacto">
                Agendar diagnóstico sin costo <span className="arr" aria-hidden="true">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/servicios/cobranza-extrajudicial-legal">
                Conocer soluciones
              </Link>
            </div>
          </div>

          <div ref={mediaColRef} className="hero-media-col">
            <Image
              ref={mediaImgRef}
              src="/images/hero_executive_desk.jpg"
              alt="Mesa ejecutiva de negociación y acuerdos estratégicos de recuperación"
              width={800}
              height={500}
              priority
              className="hero-split-img"
            />
          </div>
        </div>

        {/* Full-width Unified Metrics Bar at the bottom */}
        <div ref={statsBarRef} className="hero-stats-bar">
          <div className="hero-stat-cell">
            <strong className="stat-giant">85%</strong>
            <span className="stat-giant-label">Recuperación máxima auditada</span>
          </div>
          <div className="hero-stat-cell">
            <strong className="stat-giant">$0</strong>
            <span className="stat-giant-label">Cero anticipos · Honorarios a éxito</span>
          </div>
          <div className="hero-stat-cell">
            <strong className="stat-giant">47 días</strong>
            <span className="stat-giant-label">Ciclo promedio de recuperación</span>
          </div>
        </div>
      </div>
    </section>
  );
}
