'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface VectorPhase {
  id: string;
  index: string;
  timeframe: string;
  title: string;
  subtitle: string;
  summary: string;
  deliverables: {
    item: string;
    spec: string;
  }[];
  legalBasis: string;
  auditProtocol: string;
  kpiMetric: string;
  kpiLabel: string;
}

const VECTORS: VectorPhase[] = [
  {
    id: 'vector-01',
    index: '01',
    timeframe: 'Días 01 – 05',
    title: 'Auditoría Econométrica & Scoring Predictivo',
    subtitle: 'Triage Forense de Cartera & Formalización NDA',
    summary:
      'Recepción de bases bajo estricto Acuerdo de Confidencialidad (NDA) notariable. Ejecutamos un modelado econométrico de contactabilidad, validación de solvencia crediticia y detección de títulos de crédito exigibles.',
    deliverables: [
      { item: 'Dictamen Técnico de Recuperabilidad', spec: 'Proyección matemática de recuperación por tramo de mora.' },
      { item: 'Matriz de Scoring & Segmentación', spec: 'Categorización por perfil socioeconómico y solvencia real.' },
      { item: 'Validación de Títulos de Crédito', spec: 'Revisión formal de pagarés, facturas y contratos mercantiles.' },
    ],
    legalBasis: 'Código de Comercio Art. 1391 y Ley General de Títulos y Operaciones de Crédito (LGTOC).',
    auditProtocol: 'Cifrado de datos en tránsito (TLS 1.3) y firma electrónica avanzada de cadena de custodia.',
    kpiMetric: '100%',
    kpiLabel: 'Bases de Datos Auditadas bajo NDA Notariable',
  },
  {
    id: 'vector-02',
    index: '02',
    timeframe: 'Días 06 – 10',
    title: 'Ingeniería Procesal & Estrategia Jurídica',
    subtitle: 'Diseño de la Ruta Extrajudicial y Litigiosa',
    summary:
      'Determinamos la estrategia de cobro óptima para cada deudor: negociación extrajudicial amigable, reestructuración con reconocimiento de adeudo o preparación de demanda en vía ejecutiva mercantil.',
    deliverables: [
      { item: 'Plan de Asignación & Contactación', spec: 'Curvas de intensidad telefónica y frecuencia autorizada.' },
      { item: 'Formatos de Convenio Notariables', spec: 'Plantillas con cláusula ejecutiva y reconocimiento formal.' },
      { item: 'Expediente Único Digital (EUD)', spec: 'Centralización de evidencias, estados de cuenta y antecedentes.' },
    ],
    legalBasis: 'Disposiciones de Carácter General CONDUSEF en Materia de Cobranza (DOF 2024).',
    auditProtocol: 'Validación de scripts telefónicos y mensajes por el Comité Jurídico de RMS iQor.',
    kpiMetric: '0 Fricción',
    kpiLabel: 'Ruta Jurídica Personalizada por Expediente',
  },
  {
    id: 'vector-03',
    index: '03',
    timeframe: 'Semana 2 en adelante',
    title: 'Despliegue Omnicanal & Geocertificación',
    subtitle: 'Gestión Telefónica Grabada y Visitas Domiciliarias con GPS',
    summary:
      'Operamos mediante marcación predictiva cloud con análisis de voz e inteligencia artificial, complementada con células de notificadores presenciales en las 32 entidades de la República Mexicana.',
    deliverables: [
      { item: 'Audios Indexados con Hash SHA-256', spec: '100% de llamadas grabadas y disponibles para el acreedor.' },
      { item: 'Georreferenciación Notificada en Campo', spec: 'Reporte fotográfico, coordenadas GPS y fe de visita domiciliaria.' },
      { item: 'Bitácora Transaccional en Tiempo Real', spec: 'Registro inmutable de cada intento y contacto con el deudor.' },
    ],
    legalBasis: 'Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP).',
    auditProtocol: 'Supervisión en vivo con análisis de tono de voz para evitar cualquier interacción agresiva.',
    kpiMetric: '100%',
    kpiLabel: 'Interacciones Auditables y Geocertificadas',
  },
  {
    id: 'vector-04',
    index: '04',
    timeframe: 'Promedio 47 Días',
    title: 'Liquidación Directa & Conciliación ERP',
    subtitle: 'Depósito a Cuenta Concentradora y Finiquito Legal',
    summary:
      'El deudor liquida directamente en la cuenta bancaria del cliente acreedor. Realizamos conciliación diaria contra tu ERP contable y emitimos el finiquito legal correspondiente con cobro de honorarios condicionado al éxito.',
    deliverables: [
      { item: 'Acreditación Bancaria Inmediata', spec: 'Depósitos directos sin intermediación de fondos por terceros.' },
      { item: 'Conciliación ERP Diaria / Semanal', spec: 'Reportes integrados compatibles con SAP, Oracle y Aspel.' },
      { item: 'Finiquito Legal & Carta de No Adeudo', spec: 'Cierre formal y liberación de títulos de crédito originales.' },
    ],
    legalBasis: 'Código Civil Federal y Ley de Instituciones de Crédito.',
    auditProtocol: 'Doble validación de dispersión bancaria y timbrado de comprobantes fiscales a éxito.',
    kpiMetric: '85%',
    kpiLabel: 'Tasa Máxima de Recuperación Alcanzada',
  },
];

export default function MetodoWorkflowReactor() {
  const [activeVector, setActiveVector] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reactorDisplayRef = useRef<HTMLDivElement>(null);

  const current = VECTORS[activeVector];

  const handleSelectVector = (index: number) => {
    if (index === activeVector) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setActiveVector(index);
      return;
    }

    if (reactorDisplayRef.current) {
      gsap.to(reactorDisplayRef.current, {
        opacity: 0,
        y: 8,
        duration: 0.15,
        ease: 'power2.in',
        onComplete: () => {
          setActiveVector(index);
          gsap.fromTo(
            reactorDisplayRef.current,
            { opacity: 0, y: -8 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
          );
        },
      });
    } else {
      setActiveVector(index);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.reactor-anim') || [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
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

  return (
    <section ref={sectionRef} className="workflow-reactor-section" id="workflow-reactor">
      <div className="wrap">
        {/* Cabecera Técnica */}
        <div className="reactor-head-block reactor-anim">
          <div className="section-head-b2b">
            <span className="section-kicker">INGENIERÍA OPERATIVA · 4 FASES VINCULANTES</span>
            <h2>
              El Reactor Operativo de 4 Vectores<span className="punto">.</span>
            </h2>
            <p>
              Cada cartera asignada se somete a un flujo inmutable donde los plazos, entregables y fundamentos normativos están pactados por escrito antes del inicio de gestión.
            </p>
          </div>
        </div>

        {/* 1. Selector de Vectores */}
        <div className="vector-selector-strip reactor-anim" role="tablist" aria-label="Fases del Método">
          {VECTORS.map((vec, idx) => {
            const isActive = idx === activeVector;
            return (
              <button
                key={vec.id}
                type="button"
                role="tab"
                id={`tab-${vec.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${vec.id}`}
                className={`vector-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => handleSelectVector(idx)}
              >
                <div className="vector-tab-top">
                  <span className="vector-tab-num">V.{vec.index}</span>
                  <span className="vector-tab-time">{vec.timeframe}</span>
                </div>
                <span className="vector-tab-title">{vec.title}</span>
                <span className="vector-tab-sub">{vec.subtitle}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Pantalla de Inspección del Vector Activo */}
        <div
          ref={reactorDisplayRef}
          className="reactor-stage-display"
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
        >
          {/* Columna Principal: Información & Entregables */}
          <div className="reactor-main-dossier">
            <div className="dossier-top-meta">
              <div className="dossier-phase-tag">
                <span className="phase-dot" />
                <span>VECTOR {current.index} · {current.timeframe}</span>
              </div>
              <span className="dossier-badge-kpi">{current.kpiLabel}</span>
            </div>

            <h3 className="dossier-headline">{current.title}</h3>
            <p className="dossier-abstract">{current.summary}</p>

            {/* Matriz de Entregables Técnicos */}
            <div className="deliverables-box">
              <h4 className="deliverables-title">Entregables Formales Obligatorios de esta Fase</h4>
              <div className="deliverables-grid">
                {current.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="deliverable-card">
                    <div className="del-icon-col">
                      <span className="del-num">0{dIdx + 1}</span>
                    </div>
                    <div className="del-text-col">
                      <strong className="del-name">{del.item}</strong>
                      <p className="del-spec">{del.spec}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Lateral: Blindaje Normativo & Protocolo */}
          <div className="reactor-side-assurance">
            <div className="assurance-card-block">
              <span className="assurance-kicker">FUNDAMENTO JURÍDICO APLICABLE</span>
              <p className="assurance-text">{current.legalBasis}</p>
            </div>

            <div className="assurance-card-block">
              <span className="assurance-kicker">PROTOCOLO DE AUDITORÍA & FORENSE</span>
              <p className="assurance-text">{current.auditProtocol}</p>
            </div>

            <div className="assurance-kpi-highlight">
              <span className="kpi-mini-label">MÉTRICA OBJETIVO DE LA FASE</span>
              <div className="kpi-score-row">
                <span className="kpi-score-val">{current.kpiMetric}</span>
                <span className="kpi-score-text">{current.kpiLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
