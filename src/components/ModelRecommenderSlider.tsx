'use client';

import React, { useState } from 'react';

export default function ModelRecommenderSlider() {
  const [volume, setVolume] = useState(6); // Millones MXN

  const isDedicated = volume >= 5;

  return (
    <div className="volume-recommender-card">
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.45rem', color: 'var(--color-primary)' }}>
          Calcula el Régimen Operativo Óptimo para tu Cartera<span className="punto">.</span>
        </h3>
        <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', margin: '6px auto 0', maxWidth: '560px', lineHeight: 1.6 }}>
          Desliza para seleccionar el monto total de cartera asignable y obtén la recomendación técnica y económica de nuestro comité.
        </p>
      </div>

      <div style={{ marginBlock: '28px', textAlign: 'center' }}>
        <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 700, letterSpacing: '0.08em' }}>
          Volumen Asignable Estimado
        </span>
        <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-accent)', marginBlock: '6px' }}>
          ${volume.toLocaleString('es-MX')} Millones MXN
        </div>

        <input
          type="range"
          min={1}
          max={50}
          step={1}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="volume-slider"
          aria-label="Volumen de cartera en millones de pesos"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
          <span>$1M (Piloto)</span>
          <span>$5M (Punto de inflexión)</span>
          <span>$25M</span>
          <span>$50M+ (Gran Corporativo)</span>
        </div>
      </div>

      <div style={{ padding: '24px 0', borderTop: '2px solid var(--color-primary)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
          <strong style={{ fontSize: '1.25rem', color: 'var(--color-primary)' }}>
            Régimen Recomendado: {isDedicated ? 'Célula Dedicada Exclusiva' : 'Gestoría Compartida de Rápida Activación'}
          </strong>
          <span style={{ color: isDedicated ? 'var(--color-primary)' : 'var(--color-accent)', fontSize: '0.84rem', fontWeight: 700 }}>
            {isDedicated ? 'Máximo Control y Retorno' : 'Arranque Ágil en 72h'}
          </span>
        </div>

        <p style={{ fontSize: '0.94rem', color: 'var(--color-text)', marginTop: '12px', lineHeight: '1.65' }}>
          {isDedicated
            ? `Con un volumen de $${volume}M MXN, tu cartera justifica económicamente una célula exclusiva con supervisor dedicado, guiones a la medida bajo tu marca, tableros ERP en tiempo real y calibraciones quincenales.`
            : `Para un saldo de $${volume}M MXN, la gestoría compartida optimiza tu costo por peso recuperado al compartir la base fija entre carteras afines, activándose en menos de 72 horas con honorarios a éxito.`}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--color-border)' }}>
          <div>
            <small style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tiempo de Activación</small>
            <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{isDedicated ? '5 a 10 días hábiles' : '72 horas hábiles'}</strong>
          </div>
          <div>
            <small style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Estructura de Honorarios</small>
            <strong style={{ fontSize: '0.95rem', color: 'var(--color-accent)' }}>{isDedicated ? 'Célula base + bono de éxito' : '100% Variable a éxito'}</strong>
          </div>
          <div>
            <small style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Reportería</small>
            <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{isDedicated ? 'Tablero en tiempo real + ERP' : 'Reporte semanal ejecutivo'}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
