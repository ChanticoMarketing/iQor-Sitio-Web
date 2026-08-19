import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import CtaBanner from '@/components/CtaBanner';
import RelatedServices from '@/components/RelatedServices';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Análisis de Cartera y Dictamen de Recuperabilidad en 5 Días | RMS iQor',
  description:
    'Evaluación econométrica y legal de carteras vencidas en 5 días hábiles bajo NDA. Scoring predictivo, curvas de vintage y escenarios de recuperación.',
  keywords: [
    'analisis de cartera vencida mexico',
    'scoring predictivo cobranza',
    'curvas de vintage cartera',
    'dictamen recuperabilidad cartera cdmx',
    'evaluacion cartera crediticia',
    'auditoria cartera cobranza',
  ],
  openGraph: {
    title: 'Análisis de Cartera y Scoring Predictivo | RMS iQor México',
    description:
      'Dictamen técnico de recuperabilidad en 5 días hábiles bajo estricto acuerdo de confidencialidad.',
    type: 'website',
  },
};

export default function AnalisisDeCarteraPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHeader
          title="El Error de Disparar a Ciegas:"
          highlight="La Radiografía de 5 Días"
          subtitle="Antes de quemar tu base de deudores con marcaciones desesperadas o gastar en demandas inviables, analizamos la masa recuperable real. Un dictamen econométrico y legal en 5 días hábiles bajo estricto acuerdo de confidencialidad."
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/#divisiones' },
            { label: 'Análisis de Cartera' },
          ]}
          stats={[
            { value: '5 Días', label: 'Entrega formal del dictamen ejecutivo por escrito' },
            { value: '100% NDA', label: 'Blindaje de secreto bancario y datos personales' },
            { value: '3 Niveles', label: 'Segmentación clara: Inmediata, Negociada y Legal' },
          ]}
        />

        {/* 1. Stepper del Diagnóstico en 5 Días Hábiles */}
        <section className="internal-content">
          <div className="wrap">
            <div className="section-head-b2b">
              <h2>Cronograma del Diagnóstico Ejecutivo de Cartera<span className="punto">.</span></h2>
              <p>
                Un flujo estructurado paso a paso que analiza a profundidad la salud jurídica y financiera de tus cuentas:
              </p>
            </div>

            <div className="diagnostic-5days-grid">
              <div className="diag-day-step">
                <span className="diag-day-lead">Día 01</span>
                <h4>Recepción Segura bajo NDA</h4>
                <p>Firma de acuerdo de confidencialidad e ingestión cifrada de tu layout de cartera en servidor seguro.</p>
              </div>

              <div className="diag-day-step">
                <span className="diag-day-lead">Día 02</span>
                <h4>Curvas de Vintage & Antigüedad</h4>
                <p>Modelado econométrico de degradación de saldo y comportamiento histórico de tramos de mora.</p>
              </div>

              <div className="diag-day-step">
                <span className="diag-day-lead">Día 03</span>
                <h4>Cruce de Solvencia & Contacto</h4>
                <p>Verificación de vigencia telefónica, capacidad de pago estimada y validación de RFC/CURP.</p>
              </div>

              <div className="diag-day-step">
                <span className="diag-day-lead">Día 04</span>
                <h4>Revisión de Títulos de Crédito</h4>
                <p>Auditoría jurídica de pagarés, contratos y facturas para determinar viabilidad de litigio mercantil.</p>
              </div>

              <div className="diag-day-step">
                <span className="diag-day-lead">Día 05</span>
                <h4>Entrega del Dictamen</h4>
                <p>Sesión ejecutiva con informe por escrito, escenarios conservador/óptimo y recomendación de asignación.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Split Visual Analítico con Fotografía */}
        <section className="internal-content" style={{ background: 'var(--color-surface-warm)' }}>
          <div className="wrap">
            <div className="editorial-split">
              <div className="editorial-media">
                <div className="editorial-img-wrap">
                  <Image
                    src="/images/portfolio_analytics_dashboard.jpg"
                    alt="Analista senior evaluando curvas de vintage y scoring de cartera en RMS iQor"
                    width={1200}
                    height={750}
                    priority
                  />
                </div>
                <div className="editorial-media-badge">
                  <div>
                    <p className="badge-title">Scoring Econométrico</p>
                    <p className="badge-sub">Probabilidad de recuperación · Solvencia real · Validación jurídica</p>
                  </div>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.78rem' }}>Auditoría 5 Días</span>
                </div>
              </div>

              <div className="editorial-content">
                <h2 style={{ fontSize: '1.65rem', marginTop: '6px', color: 'var(--color-primary)' }}>
                  Las 3 secciones del dictamen ejecutivo<span className="punto">.</span>
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.96rem' }}>
                  El documento entregado a tu comité de crédito incluye:
                </p>

                <div style={{ display: 'grid', gap: '14px', marginTop: '16px' }}>
                  <div style={{ paddingBottom: '14px', borderBottom: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1.05rem', marginBottom: '2px' }}>1. Matriz de Segmentación ABC</strong>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>Clasificación por masa recuperable, capacidad de pago real y probabilidad de contacto.</span>
                  </div>
                  <div style={{ paddingBottom: '14px', borderBottom: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1.05rem', marginBottom: '2px' }}>2. Proyección Financiera a 30, 60 y 90 Días</strong>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>Flujos de recuperación esperados bajo diferentes intensidades y canales operativos.</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1.05rem', marginBottom: '2px' }}>3. Dictamen de Viabilidad Mercantil</strong>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>Opinión legal sobre cuentas aptas para juicio ejecutivo con embargo o convenio notarial.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Solicita el análisis preliminar de tu cartera sin costo"
          subtitle="Firmamos acuerdo de confidencialidad y en 5 días hábiles te entregamos el mapa de recuperabilidad con escenarios de retorno."
          primaryButtonText="Solicitar dictamen bajo NDA"
          primaryButtonHref="/contacto"
        />

        <RelatedServices currentServiceId="analisis" />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
