'use client';

import React from 'react';
import Link from 'next/link';

const GOVERNANCE_PILLARS = [
  {
    num: '01',
    tag: 'Legal & Procesal',
    title: 'Rigor Jurídico Mercantil',
    desc: 'Cada negociación está respaldada por abogados mercantiles con cédula profesional. Estructuramos convenios de pago y reconocimientos de adeudo con plena validez procesal en los 32 estados.',
    highlight: 'Validez Procesal Plena',
  },
  {
    num: '02',
    tag: 'Custodia & Privacidad',
    title: 'Gobernanza LFPDPPP & NDA Notariable',
    desc: 'Tratamiento confidencial garantizado. Firmamos acuerdos de confidencialidad vinculantes previo a la entrega de cualquier base de datos, con cifrado TLS 1.3 y segregación de cuentas.',
    highlight: 'Cero Fugas de Datos',
  },
  {
    num: '03',
    tag: 'Ética & Control',
    title: 'Auditoría 100% & Cero Quejas CONDUSEF',
    desc: 'Grabamos y analizamos la totalidad de las interacciones telefónicas mediante algoritmos de control de calidad. Garantizamos respeto absoluto a los horarios normativos y dignidad del acreditado.',
    highlight: 'Récord 0 Sanciones',
  },
  {
    num: '04',
    tag: 'Financiero B2B',
    title: 'Honorarios 100% a Éxito & Conciliación Directa',
    desc: 'Tus deudores liquidan directamente en tu cuenta concentradora. Conciliamos diariamente contra tu ERP y nuestros honorarios se cobran únicamente sobre fondos recuperados.',
    highlight: 'Cero Riesgo Financiero',
  },
];

export default function NosotrosGovernance() {
  return (
    <section className="nosotros-governance-section" id="gobernanza">
      <div className="wrap">
        {/* Manifiesto Editorial de Dirección */}
        <div className="governance-manifesto-card" data-reveal>
          <div className="manifesto-inner-split">
            <div className="manifesto-quote-col">
              <span className="manifesto-kicker">MANIFIESTO OPERATIVO RMS iQOR</span>
              <blockquote className="manifesto-big-quote">
                “La cobranza corporativa jamás debe ser un proceso agresivo ni caótico. Es una disciplina financiera y legal basada en datos, negociación técnica y respeto irrestricto al marco normativo mexicano.”
              </blockquote>
              <div className="manifesto-sign-row">
                <div className="sign-author-info">
                  <strong>Dirección General & Comité Jurídico</strong>
                  <span>RMS iQor México · Durango 263, Roma Norte, CDMX</span>
                </div>
                <div className="manifesto-seal">
                  <span>SELLO INSTITUCIONAL</span>
                  <strong>DESDE 2003</strong>
                </div>
              </div>
            </div>

            <div className="manifesto-principles-col">
              <div className="principle-point-card">
                <strong className="point-title">Protección de Marca & Reputación</strong>
                <p className="point-desc">
                  Tu reputación corporativa es nuestro activo más protegido. Ninguna gestión pondrá en riesgo el valor de tu marca ante el mercado ni ante los reguladores.
                </p>
              </div>

              <div className="principle-point-card">
                <strong className="point-title">Ciencia Jurídica vs. Fricción Inútil</strong>
                <p className="point-desc">
                  La negociación técnica y el conocimiento de la solvencia real del deudor recuperan hasta 3 veces más rápido que la insistencia desmedida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pilares Grid */}
        <div className="governance-pillars-block" data-reveal>
          <div className="section-head-b2b">
            <span className="section-kicker">ESTÁNDARES INSTITUCIONALES</span>
            <h2>
              Cuatro Pilares de Seguridad para tu Empresa<span className="punto">.</span>
            </h2>
            <p>
              Diseñados para brindar certeza absoluta a comités de crédito, directores jurídicos y áreas de auditoría interna:
            </p>
          </div>

          <div className="gov-pillars-grid">
            {GOVERNANCE_PILLARS.map((p) => (
              <div key={p.num} className="gov-pillar-card">
                <div className="gov-card-top">
                  <span className="gov-pillar-num">{p.num}</span>
                  <span className="gov-pillar-tag">{p.tag}</span>
                </div>
                <h3 className="gov-pillar-title">{p.title}</h3>
                <p className="gov-pillar-desc">{p.desc}</p>
                <div className="gov-pillar-footer">
                  <span className="gov-kpi-badge">
                    <span className="kpi-dot" /> {p.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link Row */}
        <div className="governance-bottom-cta" data-reveal>
          <div>
            <strong>¿Requieres revisar nuestro contrato marco de confidencialidad o consultar referencias bancarias?</strong>
            <p>Ponemos a disposición de tu equipo legal toda la documentación de respaldo y cumplimiento normativo.</p>
          </div>
          <div className="gov-cta-buttons">
            <Link href="/contacto" className="btn btn-primary">
              Solicitar Documentación Legal <span className="arr">→</span>
            </Link>
            <Link href="/metodo-y-cumplimiento" className="btn btn-ghost">
              Ver Marco de Cumplimiento <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
