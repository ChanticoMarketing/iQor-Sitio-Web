'use client';

import React, { useState } from 'react';

interface CaseItem {
  id: string;
  sector: 'fintech' | 'banca' | 'telecom' | 'b2b';
  sectorLabel: string;
  code: string;
  title: string;
  assigned: string;
  recoveredRate: string;
  accounts: string;
  resolutionTime: string;
  challenge: string;
  solution: string;
}

const CASES_DATA: CaseItem[] = [
  {
    id: 'case-1',
    sector: 'fintech',
    sectorLabel: 'Fintech & Crédito Digital',
    code: 'EXP-RM-1147',
    title: 'Recuperación de Cartera en Asignación Directa de Crédito al Consumo (CDMX)',
    assigned: '$12.4 M MXN',
    recoveredRate: '74.2%',
    accounts: '6,120 cuentas',
    resolutionTime: '12 meses',
    challenge: 'Lote masivo de 6,120 cuentas con dispersión de mora. Exigencia de alta contactación multicanal sin vulnerar normativas CONDUSEF.',
    solution: 'Segmentación econométrica por capacidad de pago real y convenios escalonados con incentivos de finiquito mercantil.',
  },
  {
    id: 'case-2',
    sector: 'banca',
    sectorLabel: 'Banca & Instituciones Financieras',
    code: 'EXP-BN-4402',
    title: 'Reactivación de Tarjetas de Crédito y Préstamos Personales',
    assigned: '$45.8 M MXN',
    recoveredRate: '68.5%',
    accounts: '14,350 cuentas',
    resolutionTime: '9 meses',
    challenge: 'Cartera en tramo 90 a 180 días próxima a castigo contable. Alto volumen de números telefónicos desactualizados.',
    solution: 'Enriquecimiento de base de datos, ruteo predictivo inteligente y contactación omnicanal con 0 quejas CONDUSEF.',
  },
  {
    id: 'case-3',
    sector: 'telecom',
    sectorLabel: 'Telecomunicaciones & Servicios',
    code: 'EXP-TC-8891',
    title: 'Recuperación Masiva de Ticket Medio en Servicios Móviles y Fibra',
    assigned: '$28.1 M MXN',
    recoveredRate: '79.1%',
    accounts: '32,400 cuentas',
    resolutionTime: '6 meses',
    challenge: 'Adeudos de ticket bajo a medio con dispersión geográfica en 22 entidades de la República.',
    solution: 'Célula BPO automatizada con WhatsApp corporativo verificado, recordatorios transaccionales y convenios en línea.',
  },
  {
    id: 'case-4',
    sector: 'b2b',
    sectorLabel: 'Corporativo & Arrendamiento B2B',
    code: 'EXP-CP-3310',
    title: 'Cobranza Judicial y Extrajudicial de Arrendamiento de Maquinaria',
    assigned: '$18.6 M MXN',
    recoveredRate: '91.4%',
    accounts: '48 cuentas corporativas',
    resolutionTime: '8 meses',
    challenge: 'Grandes cuentas corporativas en incumplimiento contractual con contratos y pagarés mercantiles.',
    solution: 'Negociación de director a director respaldada por preparación de demandas ejecutivas mercantiles y dación en pago.',
  },
];

export default function CaseSectorFilter() {
  const [activeSector, setActiveSector] = useState<string>('all');

  const filteredCases = activeSector === 'all'
    ? CASES_DATA
    : CASES_DATA.filter((c) => c.sector === activeSector);

  return (
    <div>
      <div className="sector-filter-bar">
        <button
          type="button"
          onClick={() => setActiveSector('all')}
          className={`sector-filter-btn ${activeSector === 'all' ? 'active' : ''}`}
        >
          Todos los Sectores ({CASES_DATA.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveSector('fintech')}
          className={`sector-filter-btn ${activeSector === 'fintech' ? 'active' : ''}`}
        >
          Fintech & Digital
        </button>
        <button
          type="button"
          onClick={() => setActiveSector('banca')}
          className={`sector-filter-btn ${activeSector === 'banca' ? 'active' : ''}`}
        >
          Banca & Finanzas
        </button>
        <button
          type="button"
          onClick={() => setActiveSector('telecom')}
          className={`sector-filter-btn ${activeSector === 'telecom' ? 'active' : ''}`}
        >
          Telecom & Retail
        </button>
        <button
          type="button"
          onClick={() => setActiveSector('b2b')}
          className={`sector-filter-btn ${activeSector === 'b2b' ? 'active' : ''}`}
        >
          Corporativo B2B
        </button>
      </div>

      <div style={{ display: 'grid', gap: 'var(--sp-5)' }}>
        {filteredCases.map((item) => (
          <div key={item.id} className="dossier-card">
            <div className="dossier-header-bar">
              <span className="dossier-meta">{item.code} · {item.sectorLabel} · RESULTADOS AUDITADOS</span>
              <span className="dossier-stamp-tag">{item.recoveredRate} Recuperado</span>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', margin: 0 }}>
                {item.title}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', paddingTop: '10px', borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <small style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Cartera Asignada</small>
                  <strong style={{ color: 'var(--color-accent)', fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>{item.assigned}</strong>
                </div>
                <div>
                  <small style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Cuentas</small>
                  <strong style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>{item.accounts}</strong>
                </div>
                <div>
                  <small style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tasa Recuperada</small>
                  <strong style={{ color: 'var(--color-success)', fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>{item.recoveredRate}</strong>
                </div>
                <div>
                  <small style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Plazo Total</small>
                  <strong style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>{item.resolutionTime}</strong>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', fontSize: '0.9rem', paddingTop: '10px', borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '4px', fontSize: '0.92rem' }}>Reto Inicial:</strong>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.55' }}>{item.challenge}</p>
                </div>
                <div>
                  <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '4px', fontSize: '0.92rem' }}>Estrategia RMS:</strong>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.55' }}>{item.solution}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
