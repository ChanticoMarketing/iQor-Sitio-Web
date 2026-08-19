'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CorridorItem {
  id: string;
  region: string;
  hub: string;
  sla: string;
  coverageAreas: string;
  infrastructure: string;
}

const CORRIDORS: CorridorItem[] = [
  {
    id: 'valle-mexico',
    region: 'Valle de México & Área Metropolitana',
    hub: 'Sede Central CDMX (Durango 263, Roma Norte)',
    sla: '24 Horas',
    coverageAreas: '16 alcaldías de la CDMX, Naucalpan, Tlalnepantla, Ecatepec, Toluca y Cuautitlán.',
    infrastructure: 'Célula fija de notificadores con motocicleta, ruteo por GPS y entrega prioritaria.',
  },
  {
    id: 'norte-frontera',
    region: 'Norte & Corredores Fronterizos',
    hub: 'Hub Monterrey (Edificio Centro)',
    sla: '48 Horas',
    coverageAreas: 'Monterrey, San Pedro, Saltillo, Torreón, Chihuahua, Cd. Juárez, Hermosillo, Tijuana y Reynosa.',
    infrastructure: 'Gestores especializados en parques industriales, maquilas y cobranza corporativa.',
  },
  {
    id: 'bajio-occidente',
    region: 'Bajío & Corredor Occidente',
    hub: 'Hub Guadalajara (Verde Valle)',
    sla: '48 Horas',
    coverageAreas: 'Guadalajara, Zapopan, Querétaro, San Juan del Río, León, Celaya, Aguascalientes y San Luis Potosí.',
    infrastructure: 'Presencia continua en el clúster automotriz, aeroespacial y de manufactura ligera.',
  },
  {
    id: 'peninsula-sur',
    region: 'Península, Golfo & Eje Sur',
    hub: 'Células Regionales (Mérida / Veracruz)',
    sla: '72 Horas',
    coverageAreas: 'Mérida, Cancún, Playa del Carmen, Puebla, Veracruz, Boca del Río, Villahermosa y Tuxtla Gutiérrez.',
    infrastructure: 'Red de abogados y notificadores certificados con facultades de mediación mercantil.',
  },
];

export default function RegionalCorridorsMatrix() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.corridor-anim') || [],
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
    <section ref={sectionRef} className="regional-corridors-section" id="matriz-regiones">
      <div className="wrap">
        <div className="corridors-header corridor-anim">
          <h2>
            Matriz de Despliegue por Corredor Industrial<span className="punto">.</span>
          </h2>
          <p>
            Capacidad operativa y tiempos de respuesta garantizados por zona geográfica:
          </p>
        </div>

        {/* Lista Editorial Horizontal — 100% Cardless */}
        <div className="corridors-editorial-ledger corridor-anim">
          {CORRIDORS.map((corridor) => (
            <div key={corridor.id} className="corridor-row">
              <div className="corridor-main-col">
                <h3 className="corridor-title">{corridor.region}</h3>
                <span className="corridor-hub">{corridor.hub}</span>
              </div>

              <div className="corridor-detail-col">
                <div className="detail-entry">
                  <span className="detail-tag">Zonas Clave</span>
                  <p className="detail-text">{corridor.coverageAreas}</p>
                </div>
                <div className="detail-entry">
                  <span className="detail-tag">Infraestructura</span>
                  <p className="detail-text">{corridor.infrastructure}</p>
                </div>
              </div>

              <div className="corridor-sla-col">
                <span className="sla-badge-num">{corridor.sla}</span>
                <span className="sla-badge-sub">Tiempo máximo de entrega</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
