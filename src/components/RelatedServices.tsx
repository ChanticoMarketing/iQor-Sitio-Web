import React from 'react';
import Link from 'next/link';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  href: string;
}

const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'extrajudicial',
    num: '01',
    title: 'Cobranza Extrajudicial y Legal',
    desc: 'Gestión negociada con expedientes sólidos y vía ejecutiva mercantil con convenios de garantía.',
    href: '/servicios/cobranza-extrajudicial-legal',
  },
  {
    id: 'bpo',
    num: '02',
    title: 'Cobranza Administrativa (BPO)',
    desc: 'Operación integral temprana de cobranza con SLA de 24h, conciliación diaria y conexión ERP.',
    href: '/servicios/cobranza-administrativa-bpo',
  },
  {
    id: 'staffing',
    num: '03',
    title: 'Subcontratación de Personal',
    desc: 'Ejecutivos certificados con 120h de capacitación y rotación anual de 4.2% para operar in-plant o remoto.',
    href: '/servicios/subcontratacion-personal',
  },
  {
    id: 'gestoria',
    num: '04',
    title: 'Gestoría Compartida y Dedicada',
    desc: 'Modelos flexibles por volumen: esquema compartido para < $5M o células dedicadas con supervisor.',
    href: '/servicios/gestoria-compartida-dedicada',
  },
  {
    id: 'analisis',
    num: '05',
    title: 'Análisis de Cartera',
    desc: 'Dictamen de recuperabilidad en 5 días hábiles, segmentado por capacidad de pago real y antigüedad.',
    href: '/servicios/analisis-de-cartera',
  },
];

interface RelatedServicesProps {
  currentServiceId: string;
}

export default function RelatedServices({ currentServiceId }: RelatedServicesProps) {
  const related = ALL_SERVICES.filter((s) => s.id !== currentServiceId).slice(0, 3);

  return (
    <section className="related-services" aria-labelledby="related-title">
      <div className="wrap">
        <div className="section-head-b2b" style={{ marginBottom: 'var(--sp-5)' }}>
          <h2 id="related-title">
            Otras divisiones de recuperación<span className="punto">.</span>
          </h2>
          <p>Cada tipo de cartera requiere una estrategia y un equipo a la medida.</p>
        </div>

        <div className="related-grid">
          {related.map((service) => (
            <article key={service.id} className="related-card">
              <span className="rel-num">{service.num}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link className="link-line" href={service.href}>
                Conocer división <span className="arr" aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
