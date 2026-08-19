'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface OfficeLocation {
  city: string;
  role: string;
  address: string;
  details: string;
  phone: string;
  badge: string;
  image: string;
  features: string[];
}

const MEXICO_OFFICES: OfficeLocation[] = [
  {
    city: 'Ciudad de México',
    role: 'Mesa Central de Operaciones & Sala de Acuerdos',
    address: 'Durango 263, Piso 3, Col. Roma Norte, C.P. 06700, Cuauhtémoc, CDMX',
    details: 'Sede matriz fundacional. Alberga la Dirección General, el Comité Jurídico, el Centro de Grabación y Auditoría, y 2 salas de conciliación presencial para acreedores y deudores.',
    phone: '+52 55 5250 2520',
    badge: 'Sede Matriz CDMX',
    image: '/images/legal_negotiation_room.jpg',
    features: [
      'Salas Ejecutivas para Comités de Crédito',
      'Mesa de Litigio y Notificaciones Judiciales',
      'Bóveda de Resguardo Físico de Títulos de Crédito',
    ],
  },
  {
    city: 'Monterrey',
    role: 'Sede Regional Norte & Cartera Industrial',
    address: 'Constitución 1465-Pte., Col. Centro, C.P. 64060, Monterrey, N.L.',
    details: 'Coordinación estratégica para carteras industriales, comercio mayorista, logística y banca corporativa de Nuevo León, Coahuila, Chihuahua y Tamaulipas.',
    phone: '+52 81 8047 6800',
    badge: 'Hub Norte',
    image: '/images/corporate_boardroom_view.jpg',
    features: [
      'Célula de Cobranza B2B Industrial',
      'Gestores Domiciliarios Certificados',
      'Enlace Directo con Tribunales del Norte',
    ],
  },
  {
    city: 'Guadalajara',
    role: 'Sede Regional Occidente & Sector Agro / Retail',
    address: 'Av. Mariano Otero 3429, Piso 1, Desp. 1, Col. Verde Valle, C.P. 44550, Guadalajara, Jal.',
    details: 'Atención a corporativos del Bajío y Occidente, especialización en cadenas de suministro agroalimentario, distribución y carteras de retail.',
    phone: '+52 81 8047 6800',
    badge: 'Hub Occidente',
    image: '/images/hero_executive_desk.jpg',
    features: [
      'Negociación de Convenios Regionales',
      'Cobertura Jalisco, Guanajuato y Michoacán',
      'Sala Privada para Firmas de Finiquito',
    ],
  },
];

const GLOBAL_REGIONS = [
  {
    region: 'América del Norte',
    hubs: ['Dallas (Global HQ)', 'Denver', 'Ciudad de México', 'Monterrey'],
    desc: 'Dirección corporativa mundial, gobernanza algorítmica, ciberseguridad y centros de soporte a instituciones financieras multinacionales.',
    kpi: 'Centro de Comando Principal',
    badge: 'Norteamérica',
  },
  {
    region: 'América Latina',
    hubs: ['Bogotá', 'Buenos Aires', 'Ciudad de Panamá', 'Lima'],
    desc: 'Células operativas de soporte BPO, estandarización de procesos de cobranza compartida y escalamiento regional multimoneda.',
    kpi: 'Gestión Multirregional',
    badge: 'Latinoamérica',
  },
  {
    region: 'Asia & Europa',
    hubs: ['Manila', 'Kuala Lumpur', 'Nueva Delhi', 'Dublín'],
    desc: 'Soporte analítico continuo, minería de datos predictiva, testing de ciberseguridad 24/7 y redundancia de servidores con 99.98% de disponibilidad.',
    kpi: 'Uptime 99.98% 24/7/365',
    badge: 'Nodos Globales',
  },
];

export default function NosotrosInfrastructure() {
  const [tab, setTab] = useState<'mexico' | 'global'>('mexico');
  const [selectedOffice, setSelectedOffice] = useState<number>(0);

  const activeOffice = MEXICO_OFFICES[selectedOffice];

  return (
    <section className="nosotros-infra-section" id="sedes">
      <div className="wrap">
        <div className="infra-header-split" data-reveal>
          <div>
            <span className="section-kicker">INFRAESTRUCTURA & PRESENCIA FÍSICA</span>
            <h2>
              Presencia Ejecutiva en México y Alcance Mundial<span className="punto">.</span>
            </h2>
          </div>
          <p className="infra-lead-text">
            Recibimos a directores jurídicos y tesoreros en nuestras salas ejecutivas de CDMX, Monterrey y Guadalajara, respaldados por la red operativa de iQor en 3 continentes.
          </p>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="infra-switch-bar" data-reveal>
          <button
            type="button"
            className={`infra-mode-btn ${tab === 'mexico' ? 'is-active' : ''}`}
            onClick={() => setTab('mexico')}
          >
            <span className="mode-flag">🇲🇽</span>
            <span>3 Sedes Corporativas en México</span>
            <span className="mode-count">CDMX · MTY · GDL</span>
          </button>

          <button
            type="button"
            className={`infra-mode-btn ${tab === 'global' ? 'is-active' : ''}`}
            onClick={() => setTab('global')}
          >
            <span className="mode-flag">🌐</span>
            <span>Red Internacional iQor</span>
            <span className="mode-count">+30 Países · 45,000 Agentes</span>
          </button>
        </div>

        {/* Panel 1: México Offices */}
        {tab === 'mexico' && (
          <div className="mexico-offices-board" data-reveal>
            {/* Left Col: Office Selector */}
            <div className="office-selector-col">
              <div className="office-pills-list">
                {MEXICO_OFFICES.map((off, idx) => (
                  <button
                    key={off.city}
                    type="button"
                    className={`office-pill-card ${selectedOffice === idx ? 'is-active' : ''}`}
                    onClick={() => setSelectedOffice(idx)}
                  >
                    <div className="pill-top-row">
                      <strong className="pill-city-name">{off.city}</strong>
                      <span className="pill-status-tag">{off.badge}</span>
                    </div>
                    <span className="pill-role-text">{off.role}</span>
                    <span className="pill-phone-text">📞 {off.phone}</span>
                  </button>
                ))}
              </div>

              <div className="office-quick-action-box">
                <div>
                  <strong>¿Deseas una reunión presencial en Durango 263?</strong>
                  <p>Coordinamos agenda con nuestros directores jurídicos y consultores senior.</p>
                </div>
                <Link href="/contacto" className="btn btn-primary">
                  Agendar Cita Presencial <span className="arr">→</span>
                </Link>
              </div>
            </div>

            {/* Right Col: Active Office Detailed Showcase */}
            <div className="office-detail-display">
              <div className="office-detail-media">
                <Image
                  src={activeOffice.image}
                  alt={`Instalaciones de RMS iQor en ${activeOffice.city}`}
                  width={800}
                  height={500}
                  className="office-showcase-img"
                />
                <div className="office-badge-overlay">
                  <div>
                    <strong>{activeOffice.city}</strong>
                    <span>{activeOffice.badge}</span>
                  </div>
                  <span className="office-open-status">● Abierto para Sesiones Ejecutivas</span>
                </div>
              </div>

              <div className="office-detail-info">
                <h3 className="office-info-title">{activeOffice.role}</h3>
                <p className="office-info-address">
                  <strong>Dirección:</strong> {activeOffice.address}
                </p>
                <p className="office-info-desc">{activeOffice.details}</p>

                <div className="office-features-list">
                  <strong>Capacidades Instaladas:</strong>
                  <ul>
                    {activeOffice.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span className="feature-check">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Panel 2: Global Infrastructure Nodes */}
        {tab === 'global' && (
          <div className="global-nodes-grid" data-reveal>
            {GLOBAL_REGIONS.map((reg) => (
              <div key={reg.region} className="global-region-card">
                <div className="region-card-top">
                  <span className="region-badge-pill">{reg.badge}</span>
                  <strong className="region-kpi-highlight">{reg.kpi}</strong>
                </div>

                <h3 className="region-title">{reg.region}</h3>
                <p className="region-desc">{reg.desc}</p>

                <div className="region-hubs-container">
                  <span className="hubs-label">Nodos Principales:</span>
                  <div className="hubs-pill-wrap">
                    {reg.hubs.map((h) => (
                      <span key={h} className="hub-city-pill">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
