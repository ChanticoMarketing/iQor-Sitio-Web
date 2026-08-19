import React from 'react';

const SECTORS = [
  'Sofomes',
  'Fintech',
  'Arrendadoras',
  'Retail',
  'Telecomunicaciones',
  'Educación privada',
  'Seguros',
  'Cooperativas',
  'Autofinanciamiento',
  'Factoraje',
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <ul>
          {SECTORS.map((sector, idx) => (
            <li key={`sec-1-${idx}`}>{sector}</li>
          ))}
        </ul>
        <ul>
          {SECTORS.map((sector, idx) => (
            <li key={`sec-2-${idx}`}>{sector}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
