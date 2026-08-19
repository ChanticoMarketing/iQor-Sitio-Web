'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CpResult {
  zone: string;
  sla: string;
  state: string;
  hub: string;
  protocol: string;
}

const SAMPLE_CPS = [
  { label: 'CDMX Centro', cp: '06700' },
  { label: 'Monterrey NL', cp: '64000' },
  { label: 'Guadalajara Jal', cp: '44100' },
  { label: 'Querétaro Qro', cp: '76000' },
  { label: 'Tijuana BC', cp: '22000' },
  { label: 'Mérida Yuc', cp: '97000' },
];

export default function CoverageDispatchTerminal() {
  const [cp, setCp] = useState('06700');
  const [result, setResult] = useState<CpResult | null>({
    zone: 'Valle de México & Área Metropolitana',
    sla: '24 Horas',
    state: 'Ciudad de México',
    hub: 'Sede Central (Durango 263, Roma Norte, CDMX)',
    protocol: 'Diligencia presencial prioritaria con acuse foliado y coordenadas GPS.',
  });
  const sectionRef = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const calculateCoverage = (cleanCp: string) => {
    const numPrefix = parseInt(cleanCp.substring(0, 2), 10);

    if (isNaN(numPrefix)) return null;

    if (numPrefix >= 0 && numPrefix <= 19) {
      return {
        zone: 'Valle de México & Área Metropolitana',
        sla: '24 Horas',
        state: numPrefix <= 16 ? 'Ciudad de México' : 'Estado de México',
        hub: 'Sede Central (Durango 263, Roma Norte, CDMX)',
        protocol: 'Diligencia presencial prioritaria con acuse foliado y coordenadas GPS.',
      };
    }

    if (
      (numPrefix >= 64 && numPrefix <= 67) ||
      (numPrefix >= 25 && numPrefix <= 27) ||
      (numPrefix >= 31 && numPrefix <= 33) ||
      (numPrefix >= 83 && numPrefix <= 85) ||
      (numPrefix >= 21 && numPrefix <= 22) ||
      (numPrefix >= 87 && numPrefix <= 89)
    ) {
      let stateName = 'Nuevo León';
      if (numPrefix >= 25 && numPrefix <= 27) stateName = 'Coahuila';
      if (numPrefix >= 31 && numPrefix <= 33) stateName = 'Chihuahua';
      if (numPrefix >= 83 && numPrefix <= 85) stateName = 'Sonora';
      if (numPrefix >= 21 && numPrefix <= 22) stateName = 'Baja California';
      if (numPrefix >= 87 && numPrefix <= 89) stateName = 'Tamaulipas';

      return {
        zone: 'Zona Norte & Frontera',
        sla: '48 Horas',
        state: stateName,
        hub: 'Hub Regional Monterrey (Edificio Centro)',
        protocol: `Despliegue operativo en ${stateName} con célula propia de notificadores.`,
      };
    }

    if (
      (numPrefix >= 44 && numPrefix <= 49) ||
      (numPrefix >= 76 && numPrefix <= 77) ||
      (numPrefix >= 36 && numPrefix <= 38) ||
      numPrefix === 20 ||
      (numPrefix >= 78 && numPrefix <= 79)
    ) {
      let stateName = 'Jalisco';
      if (numPrefix >= 76 && numPrefix <= 77) stateName = 'Querétaro';
      if (numPrefix >= 36 && numPrefix <= 38) stateName = 'Guanajuato';
      if (numPrefix === 20) stateName = 'Aguascalientes';
      if (numPrefix >= 78 && numPrefix <= 79) stateName = 'San Luis Potosí';

      return {
        zone: 'Bajío & Corredor Occidente',
        sla: '48 Horas',
        state: stateName,
        hub: 'Hub Regional Guadalajara (Verde Valle)',
        protocol: `Gestión activa en el corredor industrial y comercial de ${stateName}.`,
      };
    }

    return {
      zone: 'Zona Sureste, Golfo & Resto del País',
      sla: '72 Horas',
      state: 'Cobertura Nacional en las 32 Entidades',
      hub: 'Sede Central CDMX & Células Regionales',
      protocol: 'Gestión coordinada a través de la red de notificadores certificados.',
    };
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCp = cp.trim();
    if (!cleanCp || cleanCp.length < 2) return;

    const res = calculateCoverage(cleanCp);
    if (!res) return;

    if (resultRef.current) {
      gsap.fromTo(
        resultRef.current,
        { opacity: 0, y: 4 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
      );
    }
    setResult(res);
  };

  const handlePresetClick = (presetCp: string) => {
    setCp(presetCp);
    const res = calculateCoverage(presetCp);
    if (res) {
      if (resultRef.current) {
        gsap.fromTo(
          resultRef.current,
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
        );
      }
      setResult(res);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.dispatch-anim') || [],
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
    <section ref={sectionRef} className="coverage-dispatch-section" id="verificador-cp">
      <div className="wrap">
        <div className="dispatch-header dispatch-anim">
          <h2>
            Consulta de SLA por Código Postal<span className="punto">.</span>
          </h2>
          <p>
            Ingresa el código postal del deudor para verificar el tiempo de respuesta y la sede asignada:
          </p>
        </div>

        {/* Formulario de Consulta Limpio & Borderless */}
        <form onSubmit={handleSearch} className="dispatch-input-row dispatch-anim">
          <input
            type="text"
            maxLength={5}
            pattern="[0-9]*"
            value={cp}
            onChange={(e) => setCp(e.target.value.replace(/\D/g, ''))}
            placeholder="Código Postal (ej. 64000)"
            className="dispatch-field"
            aria-label="Código Postal del deudor"
          />
          <button type="submit" className="btn btn-primary">
            <span>Verificar SLA</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        {/* Accesos Rápidos de CP */}
        <div className="dispatch-presets-bar dispatch-anim">
          <span className="presets-label">Códigos frecuentes:</span>
          {SAMPLE_CPS.map((item) => (
            <button
              key={item.cp}
              type="button"
              className="preset-link-btn"
              onClick={() => handlePresetClick(item.cp)}
            >
              {item.label} ({item.cp})
            </button>
          ))}
        </div>

        {/* Fila de Resultados Tipográfica Pura — Cero Tarjetas */}
        {result && (
          <div ref={resultRef} className="dispatch-result-stream dispatch-anim">
            <div className="result-kpi-block">
              <span className="result-sla-number">{result.sla}</span>
              <span className="result-sla-label">SLA de primer contacto</span>
            </div>

            <div className="result-specs-block">
              <div className="res-spec-item">
                <span className="res-lbl">Región & Estado</span>
                <strong className="res-val">{result.zone} · {result.state}</strong>
              </div>

              <div className="res-spec-item">
                <span className="res-lbl">Sede de Despacho</span>
                <span className="res-val">{result.hub}</span>
              </div>

              <div className="res-spec-item">
                <span className="res-lbl">Protocolo de Entrega</span>
                <span className="res-val">{result.protocol}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
