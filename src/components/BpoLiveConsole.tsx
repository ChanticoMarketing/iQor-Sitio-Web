'use client';

import React, { useState, useEffect } from 'react';

export default function BpoLiveConsole() {
  const [activeCalls, setActiveCalls] = useState(142);
  const [connectRate, setConnectRate] = useState(84.6);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('es-MX', { timeZone: 'America/Mexico_City', hour12: false }) + ' CST (CDMX)'
      );
    };
    updateTime();
    const interval = setInterval(() => {
      updateTime();
      // Fluctuaciones sutiles para efecto consola en vivo
      setActiveCalls((prev) => Math.min(180, Math.max(120, prev + Math.floor(Math.random() * 5) - 2)));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bpo-console-shell">
      <div className="bpo-console-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="live-status-pill">
            <span className="pulse-dot" />
            TELEFONÍA CLOUD & MARCADOR PREDICTIVO EN LÍNEA
          </div>
          <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
            Nodo: CDMX-HQ-DURANGO263
          </span>
        </div>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'monospace' }}>
          {currentTime || '14:25:10 CST (CDMX)'}
        </div>
      </div>

      <div className="bpo-console-grid">
        <div className="bpo-metric-tile">
          <small>Llamadas Simultáneas</small>
          <strong>{activeCalls}</strong>
          <span style={{ display: 'block', fontSize: '0.72rem', color: '#4ade80', marginTop: '4px' }}>
            Capacidad: 2,500 líneas
          </span>
        </div>

        <div className="bpo-metric-tile">
          <small>Tasa de Contactabilidad</small>
          <strong>{connectRate}%</strong>
          <span style={{ display: 'block', fontSize: '0.72rem', color: '#4ade80', marginTop: '4px' }}>
            Filtro de buzones por IA
          </span>
        </div>

        <div className="bpo-metric-tile">
          <small>SLA Primer Contacto</small>
          <strong>&lt; 24h</strong>
          <span style={{ display: 'block', fontSize: '0.72rem', color: '#38bdf8', marginTop: '4px' }}>
            Compromiso contractual
          </span>
        </div>

        <div className="bpo-metric-tile">
          <small>Grabación y Cifrado</small>
          <strong>100%</strong>
          <span style={{ display: 'block', fontSize: '0.72rem', color: '#f59e0b', marginTop: '4px' }}>
            AES-256 / CONDUSEF
          </span>
        </div>
      </div>

      <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '0.76rem', color: '#94a3b8' }}>
        <span>Integración en tiempo real: SAP · Oracle · AS400 · Salesforce · Webhooks</span>
        <span style={{ color: '#4ade80' }}>● Uptime 99.98% Garantizado por SLA</span>
      </div>
    </div>
  );
}
