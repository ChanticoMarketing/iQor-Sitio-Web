'use client';

import React, { useState } from 'react';

export default function DualRouteSwitcher() {
  const [activeRoute, setActiveRoute] = useState<'extrajudicial' | 'legal'>('extrajudicial');

  return (
    <div>
      <div className="route-tabs-container">
        <button
          type="button"
          onClick={() => setActiveRoute('extrajudicial')}
          className={`route-tab-btn ${activeRoute === 'extrajudicial' ? 'active' : ''}`}
        >
          01. Ruta Extrajudicial (Negociada)
        </button>
        <button
          type="button"
          onClick={() => setActiveRoute('legal')}
          className={`route-tab-btn ${activeRoute === 'legal' ? 'active' : ''}`}
        >
          02. Ruta Legal (Litigio Mercantil)
        </button>
      </div>

      <div className="route-content-card">
        {activeRoute === 'extrajudicial' ? (
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--color-primary)', margin: 0 }}>
                Gestión Extrajudicial Basada en Solvencia Real<span className="punto">.</span>
              </h3>
              <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.88rem' }}>
                Resolución Promedio: 15 a 45 Días
              </span>
            </div>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.68', margin: 0, fontSize: '0.98rem' }}>
              Negociación directa y respetuosa fundamentada en el análisis económico actual del deudor. Localizamos al titular, evaluamos su capacidad real de pago y estructuramos planes de liquidación formalizados con reconocimiento de adeudo ante fedatario público o convenio privado vinculante.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '8px' }}>
              <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '4px' }}>Localización en &lt; 24 Horas</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>Omnicanalidad telefónica, digital y visitas presenciales.</p>
              </div>

              <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '4px' }}>Convenios con Finiquito</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>Esquemas escalonados con incentivos por pronto pago.</p>
              </div>

              <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '4px' }}>Protección de Reputación</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>Cero quejas CONDUSEF y apego estricto a la LFPDPPP.</p>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--color-primary)', margin: 0 }}>
                Juicio Ejecutivo Mercantil & Providencias Precautorias<span className="punto">.</span>
              </h3>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem' }}>
                Cobertura: 32 Entidades Federativas
              </span>
            </div>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.68', margin: 0, fontSize: '0.98rem' }}>
              Cuando la vía negociada se agota o existe dolo evidente, nuestro equipo de abogados mercantilistas interpone demanda ejecutiva mercantil con solicitud inmediata de auto de exequendo, embargo de cuentas bancarias y bienes inmuebles para asegurar la masa recuperable.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '8px' }}>
              <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '4px' }}>Títulos Ejecutables</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>Ejecución de pagarés, contratos de crédito y facturas aceptadas.</p>
              </div>

              <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '4px' }}>Embargo Precautorio</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>Bloqueo judicial de cuentas CNBV y bienes registrados.</p>
              </div>

              <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '4px' }}>Dación en Pago</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>Liquidación judicial mediante adjudicación de activos.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
