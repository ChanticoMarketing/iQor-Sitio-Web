'use client';

import React, { useState } from 'react';

interface ModuleItem {
  id: string;
  num: string;
  hours: string;
  title: string;
  badge: string;
  description: string;
  topics: string[];
}

const MODULES: ModuleItem[] = [
  {
    id: 'mod-1',
    num: '01',
    hours: '40 Horas',
    title: 'Marco Regulatorio, CONDUSEF & Ley de Datos (LFPDPPP)',
    badge: 'Cumplimiento Legal Obligatorio',
    description: 'Capacitación exhaustiva sobre el catálogo de derechos del deudor, horarios normados y tipificación de prácticas prohibidas para blindar la reputación de tu institución.',
    topics: [
      'Límites y restricciones de contacto según lineamientos CONDUSEF 2026',
      'Protocolos de confidencialidad y ejercicio de derechos ARCO (LFPDPPP)',
      'Prevención de delitos de cobranza extrajudicial ilícita y sanciones penales',
      'Auditorías y tipificación legal de interacciones grabadas',
    ],
  },
  {
    id: 'mod-2',
    num: '02',
    hours: '48 Horas',
    title: 'Negociación Financiera, Indagación de Solvencia & Cierre',
    badge: 'Técnicas de Negociación B2B/B2C',
    description: 'Estrategias de comunicación asertiva para identificar capacidad real de pago, desmontar objeciones y estructurar convenios de pago formalizados.',
    topics: [
      'Psicología de la mora y lectura de comportamiento de pago',
      'Estructuración de convenios con reconocimiento de adeudo',
      'Técnicas de negociación por tramos de vencimiento (1 a 180+ días)',
      'Manejo de objeciones financieras complejas sin hostigamiento',
    ],
  },
  {
    id: 'mod-3',
    num: '03',
    hours: '32 Horas',
    title: 'Sistemas Cloud, Ruteo Predictivo & Seguridad de la Información',
    badge: 'Tecnología & Mesa de Control',
    description: 'Dominio de plataformas de marcación predictiva, tipificación de eventos en CRM, integración ERP y protocolos de ciberseguridad.',
    topics: [
      'Operación de telefonía cloud y marcación predictiva multicanal',
      'Tipificación de estatus y trazabilidad de evidencias en tiempo real',
      'Simulaciones en vivo de llamadas con calibración de calidad',
      'Examen final de certificación con puntaje mínimo aprobatorio del 90%',
    ],
  },
];

export default function TrainingSyllabusAccordion() {
  const [openId, setOpenId] = useState<string>('mod-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <div style={{ display: 'grid', gap: '8px' }}>
      {MODULES.map((m) => {
        const isOpen = openId === m.id;
        return (
          <div
            key={m.id}
            style={{
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: isOpen ? '16px' : '0',
              transition: 'border-color 0.25s',
            }}
          >
            <button
              type="button"
              onClick={() => toggle(m.id)}
              style={{
                width: '100%',
                padding: '16px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                background: 'transparent',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-accent)', fontSize: '1.2rem' }}>
                  {m.num}
                </span>
                <strong style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>
                  {m.title}
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  ({m.hours})
                </span>
              </div>
              <span style={{ fontSize: '1.1rem', color: 'var(--color-accent)', fontWeight: 700, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', paddingLeft: '8px' }}>
                ▾
              </span>
            </button>

            {isOpen && (
              <div style={{ padding: '4px 0 16px 36px', animation: 'fadeIn 0.25s var(--ease-out)' }}>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '14px' }}>
                  {m.description}
                </p>
                <div style={{ paddingTop: '10px', borderTop: '1px solid var(--color-border)' }}>
                  <strong style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.08em', marginBottom: '8px' }}>
                    Temario Específico del Módulo:
                  </strong>
                  <ul style={{ display: 'grid', gap: '6px', margin: 0, paddingLeft: '18px' }}>
                    {m.topics.map((t, idx) => (
                      <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
