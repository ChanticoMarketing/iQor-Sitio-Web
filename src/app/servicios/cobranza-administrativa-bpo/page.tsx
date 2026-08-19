import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import BpoLiveConsole from '@/components/BpoLiveConsole';
import CtaBanner from '@/components/CtaBanner';
import RelatedServices from '@/components/RelatedServices';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Cobranza Administrativa y BPO de Contact Center | RMS iQor',
  description:
    'Gestión preventiva y administrativa temprana con tecnología de centros de contacto globales iQor. Marcación predictiva, análisis de voz y SLA garantizado.',
  keywords: [
    'cobranza administrativa mexico',
    'bpo cobranza contact center',
    'marcacion predictiva cobranza',
    'gestion temprana cartera vencida',
    'sla contact center cobranza',
    'call center cobranza cdmx',
  ],
  openGraph: {
    title: 'Cobranza Administrativa y BPO | RMS iQor México',
    description:
      'Gestión temprana y masiva con tecnología cloud de contact center respaldada por la red global de 45,000 agentes iQor.',
    type: 'website',
  },
};

export default function CobranzaAdministrativaBpoPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHeader
          title="Miles de Cuentas, Segundos de Reacción:"
          highlight="La Sinfonía del BPO Inteligente"
          subtitle="La cobranza preventiva temprana define el flujo de caja del mes. Operamos con marcadores predictivos que eliminan tiempos muertos y enlazamos nuestras llamadas directamente con tu ERP (SAP, Oracle, AS400) para conciliar pagos en tiempo real."
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/#divisiones' },
            { label: 'Cobranza Administrativa y BPO' },
          ]}
          stats={[
            { value: '< 24 h', label: 'Primer contacto tras la asignación de base' },
            { value: '45,000+', label: 'Agentes respaldando la infraestructura iQor' },
            { value: '100% Cloud', label: 'Telefonía con análisis de voz y grabación' },
          ]}
        />

        {/* 1. Consola de Operaciones BPO en Vivo */}
        <section className="internal-content">
          <div className="wrap">
            <div className="section-head-b2b">
              <h2>Consola de Operaciones & Telefonía Cloud iQor<span className="punto">.</span></h2>
              <p>
                Nuestra plataforma de contact center administra campañas de alta intensidad con ruteo algorítmico y cumplimiento normativo en tiempo real:
              </p>
            </div>

            <BpoLiveConsole />
          </div>
        </section>

        {/* 2. Centro de Control con Imagen */}
        <section className="internal-content" style={{ background: 'var(--color-surface-warm)' }}>
          <div className="wrap">
            <div className="editorial-split">
              <div className="editorial-media">
                <div className="editorial-img-wrap">
                  <Image
                    src="/images/bpo_operations_center.jpg"
                    alt="Centro de control y operaciones BPO de RMS iQor México"
                    width={1200}
                    height={750}
                    priority
                  />
                </div>
                <div className="editorial-media-badge">
                  <div>
                    <p className="badge-title">Centro de Control BPO</p>
                    <p className="badge-sub">Capacidad de escala · Marcación predictiva · Omnicanalidad</p>
                  </div>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.78rem' }}>Operaciones CDMX</span>
                </div>
              </div>

              <div className="editorial-content">
                <h2 style={{ fontSize: '1.65rem', marginTop: '6px', color: 'var(--color-primary)' }}>
                  Integración directa con tu ERP y sistemas de crédito<span className="punto">.</span>
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.96rem' }}>
                  Nos sincronizamos de forma segura con tu infraestructura tecnológica mediante APIs REST, webhooks o carga directa SFTP:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
                  <div style={{ paddingBottom: '14px', borderBottom: '1px solid var(--color-border)' }}>
                    <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '2px' }}>SAP & NetSuite</strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>Conciliación automática de partidas abiertas y depósitos bancarios.</span>
                  </div>
                  <div style={{ paddingBottom: '14px', borderBottom: '1px solid var(--color-border)' }}>
                    <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '2px' }}>AS400 & Cores Bancarios</strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>Manejo seguro de archivos planos con cifrado bancario AES-256.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Tabla de SLAs Contractuales */}
        <section className="internal-content dark">
          <div className="wrap">
            <div className="section-head-b2b">
              <h2>SLAs auditables y métricas de desempeño BPO<span className="punto">.</span></h2>
              <p>
                Cada contrato de cobranza BPO incluye acuerdos de nivel de servicio vinculantes y penalizaciones por incumplimiento:
              </p>
            </div>

            <div className="table-responsive">
              <table className="b2b-table">
                <thead>
                  <tr>
                    <th>Indicador / SLA</th>
                    <th>Estándar Garantizado</th>
                    <th>Frecuencia de Medición</th>
                    <th>Reporte al Cliente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Primer Contacto con el Deudor</strong></td>
                    <td><strong style={{ color: 'var(--color-accent-bright)' }}>&lt; 24 horas hábiles</strong> tras asignación</td>
                    <td>Diaria</td>
                    <td>Dashboard en tiempo real</td>
                  </tr>
                  <tr>
                    <td><strong>Tasa de Contactabilidad Efectiva</strong></td>
                    <td><strong style={{ color: 'var(--color-accent-bright)' }}>&gt; 78%</strong> sobre base telefónica activa</td>
                    <td>Semanal</td>
                    <td>Reporte de penetración</td>
                  </tr>
                  <tr>
                    <td><strong>Cumplimiento de Grabación</strong></td>
                    <td><strong style={{ color: 'var(--color-accent-bright)' }}>100% de llamadas</strong> almacenadas y cifradas</td>
                    <td>Continua</td>
                    <td>Acceso bajo demanda</td>
                  </tr>
                  <tr>
                    <td><strong>Conciliación de Pagos</strong></td>
                    <td><strong style={{ color: 'var(--color-accent-bright)' }}>Diaria al corte contable</strong></td>
                    <td>Diaria</td>
                    <td>Reporte de saldos aplicados</td>
                  </tr>
                  <tr>
                    <td><strong>Continuidad Operativa</strong></td>
                    <td><strong style={{ color: 'var(--color-accent-bright)' }}>24/7 Redundancia de infraestructura</strong></td>
                    <td>Continua</td>
                    <td>99.9% Uptime garantizado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Optimiza tu cobranza temprana con un esquema BPO a la medida"
          subtitle="Diseñamos un plan de externalización adaptado a tu volumen y sistemas. Consulta sin costo con la Dirección de Operaciones."
          primaryButtonText="Cotizar esquema BPO"
          primaryButtonHref="/contacto"
        />

        <RelatedServices currentServiceId="bpo" />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
