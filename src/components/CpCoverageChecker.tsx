'use client';

import React, { useState } from 'react';

interface CpResult {
  zone: string;
  sla: string;
  state: string;
  status: string;
  note: string;
}

export default function CpCoverageChecker() {
  const [cp, setCp] = useState('');
  const [result, setResult] = useState<CpResult | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCp = cp.trim();
    if (!cleanCp || cleanCp.length < 2) return;

    setSearched(true);
    const prefix = cleanCp.substring(0, 2);
    const numPrefix = parseInt(prefix, 10);

    // Mapeo por prefijos de CP de México
    if (numPrefix >= 0 && numPrefix <= 19) {
      // CDMX y Edomex
      setResult({
        zone: 'Valle de México & Área Metropolitana',
        sla: '24 Horas',
        state: numPrefix <= 16 ? 'Ciudad de México' : 'Estado de México',
        status: 'Cobertura Prioritaria Inmediata',
        note: 'Notificación presencial con acuse y evidencia GPS georreferenciada en menos de 24h hábiles.',
      });
    } else if (
      (numPrefix >= 64 && numPrefix <= 67) ||
      (numPrefix >= 25 && numPrefix <= 27) ||
      (numPrefix >= 31 && numPrefix <= 33) ||
      (numPrefix >= 83 && numPrefix <= 85) ||
      (numPrefix >= 21 && numPrefix <= 22) ||
      (numPrefix >= 87 && numPrefix <= 89)
    ) {
      // Norte: NL, Coahuila, Chihuahua, Sonora, BC, Tamaulipas
      let stateName = 'Nuevo León';
      if (numPrefix >= 25 && numPrefix <= 27) stateName = 'Coahuila';
      if (numPrefix >= 31 && numPrefix <= 33) stateName = 'Chihuahua';
      if (numPrefix >= 83 && numPrefix <= 85) stateName = 'Sonora';
      if (numPrefix >= 21 && numPrefix <= 22) stateName = 'Baja California';
      if (numPrefix >= 87 && numPrefix <= 89) stateName = 'Tamaulipas';

      setResult({
        zone: 'Zona Norte & Corredores Industriales',
        sla: '48 Horas',
        state: stateName,
        status: 'Cobertura Activa Regular',
        note: `Célula operativa regional desplegada en ${stateName}. Diligencia y acuse en 48 horas.`,
      });
    } else if (
      (numPrefix >= 44 && numPrefix <= 49) ||
      (numPrefix >= 76 && numPrefix <= 77) ||
      (numPrefix >= 36 && numPrefix <= 38) ||
      numPrefix === 20 ||
      (numPrefix >= 78 && numPrefix <= 79)
    ) {
      // Bajío / Occidente: Jalisco, Querétaro, Guanajuato, Aguascalientes, SLP
      let stateName = 'Jalisco';
      if (numPrefix >= 76 && numPrefix <= 77) stateName = 'Querétaro';
      if (numPrefix >= 36 && numPrefix <= 38) stateName = 'Guanajuato';
      if (numPrefix === 20) stateName = 'Aguascalientes';
      if (numPrefix >= 78 && numPrefix <= 79) stateName = 'San Luis Potosí';

      setResult({
        zone: 'Bajío & Occidente',
        sla: '48 Horas',
        state: stateName,
        status: 'Cobertura Activa Regular',
        note: `Presencia directa en el corredor comercial de ${stateName}. Despliegue en 48 horas.`,
      });
    } else {
      // Sureste / Golfo / Resto de la República
      setResult({
        zone: 'Zona Sureste, Golfo & Resto de la República',
        sla: '72 Horas',
        state: 'Cobertura Nacional en las 32 Entidades',
        status: 'Cobertura Nacional Verificada',
        note: 'Gestión coordinada a través de nuestra red de notificadores certificados en las 32 entidades.',
      });
    }
  };

  return (
    <div className="cp-checker-card">
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.45rem', color: 'var(--color-primary)' }}>
          Verificador Instantáneo de Cobertura y SLA por Código Postal<span className="punto">.</span>
        </h3>
        <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', maxWidth: '580px', margin: '8px auto 0', lineHeight: 1.6 }}>
          Ingresa los 5 dígitos del Código Postal de tu deudor para conocer la zona operativa y el tiempo garantizado de primer contacto.
        </p>
      </div>

      <form onSubmit={handleSearch} className="cp-input-group">
        <input
          type="text"
          maxLength={5}
          pattern="[0-9]*"
          value={cp}
          onChange={(e) => setCp(e.target.value.replace(/\D/g, ''))}
          placeholder="Ej: 06700, 64000, 44100..."
          className="cp-input"
          aria-label="Código Postal"
        />
        <button type="submit" className="btn btn-primary" style={{ paddingInline: '28px' }}>
          Verificar SLA <span className="arr" aria-hidden="true">→</span>
        </button>
      </form>

      {searched && result && (
        <div className="cp-result-box">
          <div style={{ display: 'grid', gap: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent)', fontWeight: 700 }}>
              {result.zone} · {result.state}
            </span>
            <strong style={{ fontSize: '1.15rem', color: 'var(--color-primary)' }}>
              SLA Garantizado de Contacto: <span style={{ color: 'var(--color-accent)' }}>{result.sla}</span>
            </strong>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
              {result.note}
            </p>
          </div>
          <div>
            <span style={{ display: 'inline-block', color: 'var(--color-success)', fontSize: '0.84rem', fontWeight: 700 }}>
              ✓ {result.status}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
