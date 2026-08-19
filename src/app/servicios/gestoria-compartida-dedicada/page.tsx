import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import ModelRecommenderSlider from '@/components/ModelRecommenderSlider';
import CtaBanner from '@/components/CtaBanner';
import RelatedServices from '@/components/RelatedServices';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Gestoría Compartida vs Célula Dedicada de Cobranza | RMS iQor',
  description:
    'Elige el modelo operativo que mejor balancea costo, control y volumen: gestoría compartida multicliente o célula 100% dedicada con supervisor exclusivo.',
  keywords: [
    'gestoria compartida cobranza',
    'celula dedicada de cobranza',
    'modelos operativos cobranza mexico',
    'subcontratacion de celula cobranza',
    'despacho cobranza asignacion dedicada',
    'kpis cobranza celula compartida',
  ],
  openGraph: {
    title: 'Gestoría Compartida y Célula Dedicada | RMS iQor México',
    description:
      'Flexibilidad operativa para cada volumen de cartera: desde esquemas ágiles compartidos hasta células exclusivas con supervisor dedicado.',
    type: 'website',
  },
};

export default function GestoriaCompartidaDedicadaPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHeader
          title="¿Compartida o Dedicada?"
          highlight="La Estructura Operativa Perfecta"
          subtitle="No todas las carteras justifican una célula con supervisor y analista exclusivo, pero tampoco todas pueden tratarse con una cola de agentes compartidos. Te ayudamos a calibrar el modelo operativo exacto para maximizar el retorno neto por peso gestionado."
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/#divisiones' },
            { label: 'Gestoría Compartida y Dedicada' },
          ]}
          stats={[
            { value: '72 Horas', label: 'Arranque ágil en esquema compartido' },
            { value: '100% Exclusivo', label: 'Células dedicadas calibradas a tu marca' },
            { value: 'A Éxito', label: 'Honorarios alineados al rendimiento real' },
          ]}
        />

        {/* 1. Recomendador Interactivo por Volumen */}
        <section className="internal-content">
          <div className="wrap">
            <ModelRecommenderSlider />
          </div>
        </section>

        {/* 2. Anatomía de Células con Imagen */}
        <section className="internal-content" style={{ background: 'var(--color-surface-warm)' }}>
          <div className="wrap">
            <div className="editorial-split">
              <div className="editorial-media">
                <div className="editorial-img-wrap">
                  <Image
                    src="/images/corporate_staffing_team.jpg"
                    alt="Equipo corporativo de ejecutivos y células de cobranza en RMS iQor"
                    width={1200}
                    height={750}
                    priority
                  />
                </div>
                <div className="editorial-media-badge">
                  <div>
                    <p className="badge-title">Células Especializadas</p>
                    <p className="badge-sub">Ejecutivos certificados · Supervisión dedicada · Calibraciones</p>
                  </div>
                  <span className="badge-tag">Staffing CDMX</span>
                </div>
              </div>

              <div className="editorial-content">
                <h2 style={{ fontSize: '1.6rem', marginTop: '6px', color: 'var(--color-primary)' }}>
                  ¿Cómo se conforma un equipo exclusivo para tu empresa?<span className="punto">.</span>
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
                  Cada célula dedicada se estructura con roles y perfiles especializados para asegurar máxima recuperación y control de calidad:
                </p>

                <div style={{ display: 'grid', gap: '12px', marginTop: '12px' }}>
                  <div style={{ padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '0.94rem', marginBottom: '2px' }}>1 Líder Supervisor de Operaciones</strong>
                    <span style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Responsable del cumplimiento de metas, SLAs y calibración de guiones.</span>
                  </div>
                  <div style={{ padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '0.94rem', marginBottom: '2px' }}>4 a 12 Gestores Negociadores Senior</strong>
                    <span style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Capacitados exclusivamente en tus políticas de crédito y finiquitos.</span>
                  </div>
                  <div style={{ padding: '12px 0' }}>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '0.94rem', marginBottom: '2px' }}>1 Auditor de Calidad & Cumplimiento CONDUSEF</strong>
                    <span style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Monitoreo del 100% de llamadas y apego a la LFPDPPP.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Criterios de Selección */}
        <section className="internal-content dark">
          <div className="wrap">
            <div className="section-head-b2b">
              <h2>Escalabilidad fluida sin fricción operativa<span className="punto">.</span></h2>
              <p>
                A medida que colocas más crédito o recibes lotes de mayor cuantía, tu cuenta transita de un esquema a otro sin pérdida de historial ni fricción con tus deudores:
              </p>
            </div>

            <div className="b2b-grid-2">
              <div className="feature-box-dark">
                <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-bright)', fontWeight: 700, textTransform: 'uppercase' }}>Régimen Compartido</span>
                <h3 style={{ marginTop: '4px' }}>Cuándo elegir Gestoría Compartida</h3>
                <p>
                  Ideal para empresas medianas, startups fintech en validación de cartera o corporativos que desean probar la efectividad de RMS iQor con un lote piloto antes de comprometer una célula completa.
                </p>
                <ul>
                  <li>Bajo compromiso de volumen inicial</li>
                  <li>Sin costo fijo de infraestructura ni setup</li>
                  <li>Activación inmediata en menos de 72 horas</li>
                </ul>
              </div>

              <div className="feature-box-dark">
                <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-bright)', fontWeight: 700, textTransform: 'uppercase' }}>Régimen Dedicado</span>
                <h3 style={{ marginTop: '4px' }}>Cuándo elegir Gestoría Dedicada</h3>
                <p>
                  Indispensable para bancos, financieras reguladas y grandes cadenas comerciales que exigen guiones estrictamente personalizados, calibración de calidad quincenal y auditorías directas en piso.
                </p>
                <ul>
                  <li>Control absoluto de marca y experiencia del cliente</li>
                  <li>Capacitación continua en tus productos crediticios</li>
                  <li>Integración de tableros directos en tiempo real con tu ERP</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Analiza con un consultor senior qué esquema te conviene más"
          subtitle="En una sesión de 30 minutos revisamos tu saldo asignable, número de cuentas y proyectamos el retorno neto bajo ambos modelos."
          primaryButtonText="Agendar sesión de evaluación"
          primaryButtonHref="/contacto"
        />

        <RelatedServices currentServiceId="gestoria" />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
