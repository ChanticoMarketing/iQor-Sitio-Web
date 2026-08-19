'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ComplianceRule {
  id: string;
  category: 'condusef' | 'lfpdppp' | 'comercio';
  code: string;
  title: string;
  legalArticle: string;
  prohibitedPractice: string;
  iqorStandard: string;
  forensicEvidence: string;
}

const RULES: ComplianceRule[] = [
  {
    id: 'rule-01',
    category: 'condusef',
    code: 'CONDUSEF-HOR-01',
    title: 'Restricción Horaria Estricta (07:00 a 22:00 h)',
    legalArticle: 'Disposición Tercera, Fracción I de las Disposiciones de Carácter General CONDUSEF (DOF 2024).',
    prohibitedPractice: 'Llamadas en fines de semana a horas intempestivas, de madrugada o días festivos no autorizados.',
    iqorStandard: 'Bloqueo algorítmico automatizado en el dialer cloud que impide emitir llamadas fuera del huso horario local de la entidad del deudor.',
    forensicEvidence: 'Timestamp con marca de tiempo UTC/CST y logs inmutables del conmutador telefónico.',
  },
  {
    id: 'rule-02',
    category: 'condusef',
    code: 'CONDUSEF-TER-02',
    title: 'Prohibición Absoluta de Contacto a Terceros Ajenos',
    legalArticle: 'Disposición Tercera, Fracción V de CONDUSEF y Art. 17 Bis 1 de la Ley para la Transparencia Financiera.',
    prohibitedPractice: 'Acoso o amenazas a familiares, vecinos, avalistas no registrados o recepción del centro de trabajo.',
    iqorStandard: 'Gestión exclusiva con el titular del crédito o apoderado legal acreditado con documento notarial.',
    forensicEvidence: 'Verificación de identidad en dos pasos antes de mencionar cualquier dato financiero o saldo exigible.',
  },
  {
    id: 'rule-03',
    category: 'condusef',
    code: 'CONDUSEF-INT-03',
    title: 'Cero Simulación Judicial ni Lenguaje Coercitivo',
    legalArticle: 'Art. 284 Bis del Código Penal Federal y Disposiciones Regulatorias CONDUSEF.',
    prohibitedPractice: 'Envío de documentos apócrifos simulando órdenes de embargo inmediatas o sellos falsos de juzgados.',
    iqorStandard: 'Comunicaciones formales por escrito con membrete institucional claro y propuesta de reestructuración conciliatoria.',
    forensicEvidence: 'Plantillas de cartas y notificaciones avaladas previamente por el Comité Jurídico y disponibles en tu portal.',
  },
  {
    id: 'rule-04',
    category: 'lfpdppp',
    code: 'LFPDPPP-DAT-01',
    title: 'Custodia Criptográfica & Secreto Fiduciario',
    legalArticle: 'Artículos 15, 16 y 19 de la Ley Federal de Protección de Datos Personales (LFPDPPP).',
    prohibitedPractice: 'Venta, filtración, duplicado de bases o almacenamiento en dispositivos móviles no autorizados.',
    iqorStandard: 'Bóveda central con cifrado AES-256 en reposo y TLS 1.3 en tránsito, con aislamiento de red por célula operativa.',
    forensicEvidence: 'Trazabilidad forense de cada acceso a la base de datos y auditoría de ciberseguridad continua.',
  },
  {
    id: 'rule-05',
    category: 'lfpdppp',
    code: 'LFPDPPP-ARC-02',
    title: 'Gestión Inmediata de Derechos ARCO',
    legalArticle: 'Artículos 22 al 35 de la Ley Federal de Protección de Datos Personales (LFPDPPP).',
    prohibitedPractice: 'Ignorar solicitudes de cancelación u oposición de datos o continuar la gestión sobre homónimos.',
    iqorStandard: 'Oficial de Privacidad interno y canal dedicado para resolución de solicitudes ARCO en menos de 48 horas hábiles.',
    forensicEvidence: 'Acuse formal de baja en sistema y registro de no contactación en la lista negra institucional.',
  },
  {
    id: 'rule-06',
    category: 'comercio',
    code: 'CCOM-TIT-01',
    title: 'Exigibilidad Mercantil sobre Títulos de Crédito',
    legalArticle: 'Art. 1391 del Código de Comercio y Art. 170 de la Ley General de Títulos y Operaciones de Crédito.',
    prohibitedPractice: 'Intentar juicios mercantiles sin el título original, pagaré prescrito o con endosos defectuosos.',
    iqorStandard: 'Dictamen previo de formalidad jurídica sobre pagarés, contratos de crédito y estados de cuenta certificados.',
    forensicEvidence: 'Bóveda física de resguardo en sede central CDMX y cadena de custodia documental notarial.',
  },
];

export default function ComplianceFirewallMatrix() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'condusef' | 'lfpdppp' | 'comercio'>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const matrixGridRef = useRef<HTMLDivElement>(null);

  const filteredRules =
    activeFilter === 'all'
      ? RULES
      : RULES.filter((r) => r.category === activeFilter);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.compliance-matrix-anim') || [],
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleFilterChange = (filter: 'all' | 'condusef' | 'lfpdppp' | 'comercio') => {
    setActiveFilter(filter);
    if (matrixGridRef.current) {
      gsap.fromTo(
        matrixGridRef.current.children,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }
      );
    }
  };

  return (
    <section ref={sectionRef} className="compliance-firewall-section" id="compliance-matrix">
      <div className="wrap">
        {/* Cabecera de Sección */}
        <div className="firewall-head-block compliance-matrix-anim">
          <div className="section-head-b2b">
            <span className="section-kicker">BLINDAJE REGULATORIO · REGLAMENTO CONDUSEF & LFPDPPP</span>
            <h2>
              El Firewall Regulatorio en Acción<span className="punto">.</span>
            </h2>
            <p>
              Conoce cómo nuestro sistema algorítmico y comité jurídico bloquean de forma ineludible las prácticas ilegales de la industria, garantizando cero quejas y cero multas para tu institución.
            </p>
          </div>
        </div>

        {/* Filtros de Categoría Normativa */}
        <div className="firewall-filters-bar compliance-matrix-anim" role="tablist" aria-label="Filtros regulatorios">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            className={`firewall-filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            <span>Todas las Normas ({RULES.length})</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'condusef'}
            className={`firewall-filter-btn ${activeFilter === 'condusef' ? 'is-active' : ''}`}
            onClick={() => handleFilterChange('condusef')}
          >
            <span>CONDUSEF / REDECO</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'lfpdppp'}
            className={`firewall-filter-btn ${activeFilter === 'lfpdppp' ? 'is-active' : ''}`}
            onClick={() => handleFilterChange('lfpdppp')}
          >
            <span>LFPDPPP / Privacidad</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'comercio'}
            className={`firewall-filter-btn ${activeFilter === 'comercio' ? 'is-active' : ''}`}
            onClick={() => handleFilterChange('comercio')}
          >
            <span>Código de Comercio</span>
          </button>
        </div>

        {/* Matriz de Reglas y Evidencias Forenses */}
        <div ref={matrixGridRef} className="firewall-matrix-grid compliance-matrix-anim">
          {filteredRules.map((rule) => (
            <div key={rule.id} className="firewall-card-node">
              <div className="node-head-row">
                <div className="node-code-badge">
                  <span className="code-dot" />
                  <span className="code-text">{rule.code}</span>
                </div>
                <span className="node-category-tag">
                  {rule.category === 'condusef' && 'Regulatorio Financiero'}
                  {rule.category === 'lfpdppp' && 'Privacidad & Criptografía'}
                  {rule.category === 'comercio' && 'Sustento Procesal'}
                </span>
              </div>

              <h3 className="node-rule-title">{rule.title}</h3>
              <span className="node-legal-article">{rule.legalArticle}</span>

              <div className="node-comparison-box">
                <div className="comparison-row danger">
                  <span className="comp-tag">Riesgo en Despachos Convencionales:</span>
                  <p className="comp-text">{rule.prohibitedPractice}</p>
                </div>

                <div className="comparison-row success">
                  <span className="comp-tag">Control Forense RMS iQor:</span>
                  <p className="comp-text">{rule.iqorStandard}</p>
                </div>
              </div>

              <div className="node-evidence-footer">
                <span className="evidence-lbl">Evidencia Forense Emitida:</span>
                <strong className="evidence-val">{rule.forensicEvidence}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
