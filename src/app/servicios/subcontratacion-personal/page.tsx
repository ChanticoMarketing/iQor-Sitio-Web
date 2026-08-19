import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import TrainingSyllabusAccordion from '@/components/TrainingSyllabusAccordion';
import CtaBanner from '@/components/CtaBanner';
import RelatedServices from '@/components/RelatedServices';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Subcontratación y Staffing de Personal de Cobranza | RMS iQor',
  description:
    'Dotación de ejecutivos y gestores de cobranza certificados bajo la normativa laboral y mercantil mexicana. 120 horas de capacitación previa y cero pasivo laboral.',
  keywords: [
    'subcontratacion personal cobranza mexico',
    'staffing ejecutivos cobranza',
    'outsourcing gestores cobranza cdmx',
    'capacitacion cobranza condusef',
    'personal especializado cobranza',
    'headhunting cobranza corporativa',
  ],
  openGraph: {
    title: 'Subcontratación de Personal de Cobranza | RMS iQor México',
    description:
      'Gestores y negociadores certificados, capacitados bajo normativa CONDUSEF y listos para operar en tus instalaciones o desde nuestro centro de contacto.',
    type: 'website',
  },
};

export default function SubcontratacionPersonalPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHeader
          title="Quién Habla por tu Marca:"
          highlight="La Academia del Negociador Ético"
          subtitle="En cobranza, un ejecutivo no calificado puede costar millones en multas de CONDUSEF y destruir la reputación de tu institución en una sola llamada. Proveemos gestores con 120 horas de certificación previa, cero pasivo laboral y 4.2% de rotación anual."
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/#divisiones' },
            { label: 'Subcontratación de Personal' },
          ]}
          stats={[
            { value: '120 Horas', label: 'Formación rigurosa en marco legal y negociación' },
            { value: '0 Pasivo', label: 'Laboral para tu empresa (100% asumido por RMS)' },
            { value: '4.2%', label: 'Rotación anual de personal (vs 28% del sector)' },
          ]}
        />

        {/* 1. Plan de Estudios Interactivo de 120 Horas */}
        <section className="internal-content">
          <div className="wrap">
            <div className="section-head-b2b">
              <h2>Plan de Estudios de 120 Horas de Certificación RMS<span className="punto">.</span></h2>
              <p>
                Ningún gestor toma una llamada sin antes acreditar los 3 módulos formativos y el examen de cumplimiento con calificación mínima del 90%:
              </p>
            </div>

            <TrainingSyllabusAccordion />
          </div>
        </section>

        {/* 2. Modalidades de Despliegue con Fotografía */}
        <section className="internal-content" style={{ background: 'var(--color-surface-warm)' }}>
          <div className="wrap">
            <div className="editorial-split">
              <div className="editorial-media">
                <div className="editorial-img-wrap">
                  <Image
                    src="/images/corporate_staffing_team.jpg"
                    alt="Equipo de gestores certificados y personal de cobranza en RMS iQor México"
                    width={1200}
                    height={750}
                    priority
                  />
                </div>
                <div className="editorial-media-badge">
                  <div>
                    <p className="badge-title">Personal Calificado en Cobranza</p>
                    <p className="badge-sub">120 horas de formación · Cero pasivo laboral · Rotación de 4.2%</p>
                  </div>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.78rem' }}>Staffing B2B</span>
                </div>
              </div>

              <div className="editorial-content">
                <h2 style={{ fontSize: '1.65rem', marginTop: '6px', color: 'var(--color-primary)' }}>
                  Atracción de talento, nómina y staffing especializado<span className="punto">.</span>
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.96rem' }}>
                  Nos encargamos del ciclo completo de capital humano bajo registro REPSE vigente para que tú te enfoques en el crecimiento de tu negocio:
                </p>

                <div style={{ display: 'grid', gap: '14px', marginTop: '16px' }}>
                  <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1.05rem', marginBottom: '2px' }}>Reclutamiento y Selección de Personal</strong>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Búsqueda de perfiles especializados, evaluación psicométrica, verificación de antecedentes y 120 horas de capacitación previa en negociación y marco legal.
                    </p>
                  </div>

                  <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1.05rem', marginBottom: '2px' }}>Administración de Nómina & RH (Registro REPSE)</strong>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Absorbemos al 100% las obligaciones patronales, dispersión de nómina, IMSS, INFONAVIT y cumplimiento fiscal con estricto apego a la Ley Federal del Trabajo.
                    </p>
                  </div>

                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1.05rem', marginBottom: '2px' }}>Modalidad In-Plant o Centros Operativos (CDMX, MTY, GDL)</strong>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Despliegue de ejecutivos en tus instalaciones corporativas o desde nuestras estaciones con telefonía cloud, grabación total y supervisión dedicada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Escala tu equipo de cobranza con personal certificado y evaluado"
          subtitle="Configuramos plantillas a partir de 8 ejecutivos para picos estacionales, campañas especiales o externalización permanente."
          primaryButtonText="Solicitar plantilla de personal"
          primaryButtonHref="/contacto"
        />

        <RelatedServices currentServiceId="staffing" />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
