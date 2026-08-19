'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  q: string;
  a: React.ReactNode;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-creditos',
    q: '¿Otorgan créditos o préstamos?',
    a: (
      <>
        <strong>No, en iQor no otorgamos créditos ni préstamos directos.</strong> Nuestra labor estratégica es brindar soluciones BPO para optimizar tu operación: gestión de capital humano, administración de nómina, procesos logísticos y recuperación integral de cartera vencida para empresas, instituciones financieras y comercios.
      </>
    ),
  },
  {
    id: 'faq-1',
    q: '¿Cobran algún anticipo o el costo es solo por recuperación?',
    a: (
      <>
        <strong>No cobramos anticipos.</strong> Nuestro honorario es un porcentaje sobre lo que efectivamente recuperas, pactado por escrito antes de asignar la cartera. Si no recuperamos, no pagas gestión. El esquema exacto se define en el diagnóstico inicial sin costo.
      </>
    ),
  },
  {
    id: 'faq-6',
    q: '¿Tienen presencia física y cobertura en toda la república?',
    a: (
      <>
        <strong>Sí.</strong> Contamos con sedes operativas y salas de acuerdos presenciales en <strong>Ciudad de México, Monterrey y Guadalajara</strong>, además de capacidad de despliegue territorial y diligencias domiciliarias georreferenciadas con GPS en las <strong>32 entidades federativas</strong> del país con respuesta de 24 a 72 horas.
      </>
    ),
  },
  {
    id: 'faq-pymes-corp',
    q: '¿Trabajan únicamente con grandes corporativos o también con PyMEs?',
    a: (
      <>
        <strong>Diseñamos soluciones a la medida de cada industria.</strong> Atendemos a corporativos con decenas de miles de cuentas y también a pequeñas y medianas empresas (PyMEs) mediante esquemas de gestoría compartida y lotes piloto sin costos fijos iniciales de setup.
      </>
    ),
  },
  {
    id: 'faq-2',
    q: '¿Con qué tipo de carteras y etapas de mora trabaja iQor?',
    a: (
      <>
        Gestionamos carteras en mora preventiva, administrativa, extrajudicial y legal en esquema de <strong>asignación directa</strong> por la entidad originadora. Para preservar la reputación de tu marca y asegurar el cumplimiento de estándares institucionales, <strong>no gestionamos carteras que hayan pasado previamente por otros despachos</strong>. Iniciamos siempre con un <strong>Análisis de Cartera</strong> para proyectar la tasa de recuperabilidad real.
      </>
    ),
  },
  {
    id: 'faq-3',
    q: '¿La gestión cumple con CONDUSEF? ¿Pueden llegar a la vía judicial?',
    a: (
      <>
        Toda gestión se conduce bajo prácticas ordenadas por <strong>CONDUSEF</strong>: sin acoso, sin contacto a terceros y en horarios permitidos. Cuando la vía judicial procede, la ejecutamos por separado con expediente sólido. La demanda es el último recurso, no la primera acción.
      </>
    ),
  },
  {
    id: 'faq-4',
    q: '¿Cómo protegen los datos de mi cartera?',
    a: (
      <>
        Firmamos <strong>NDA antes del diagnóstico</strong>. Los datos se tratan conforme a la LFPDPPP, con acceso restringido, grabación y trazabilidad de cada gestión. Nunca compartimos tu cartera con terceros.
      </>
    ),
  },
  {
    id: 'faq-5',
    q: '¿En cuánto tiempo veo la primera recuperación?',
    a: (
      <>
        El promedio de recuperación por lote es de <strong>47 días</strong>, pero los primeros convenios suelen cerrarse dentro de las primeras 2–3 semanas de gestión, una vez completado el diagnóstico (5 días hábiles).
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq" id="faq" aria-labelledby="faq-titulo">
      <span className="sec-index" aria-hidden="true">
        06
      </span>
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <h2 id="faq-titulo">
            Lo que nos preguntan antes de asignar cartera<span className="punto">.</span>
          </h2>
          <p className="sec-note">Respuestas directas. Si tu duda no está aquí, la resolvemos en la consultoría.</p>
        </div>

        <div className="faq-list" data-stagger>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`} data-reveal>
                <button
                  className="faq-q"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={faq.id}
                  onClick={() => toggleItem(idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-ico" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </button>
                <div className="faq-a" id={faq.id} role="region">
                  <div className="faq-a-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
