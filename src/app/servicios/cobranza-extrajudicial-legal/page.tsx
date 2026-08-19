import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import DualRouteSwitcher from '@/components/DualRouteSwitcher';
import CtaBanner from '@/components/CtaBanner';
import RelatedServices from '@/components/RelatedServices';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Cobranza Extrajudicial y Recuperación Legal Mercantil | RMS iQor',
  description:
    'Ruta dual: negociación extrajudicial técnica y litigio mercantil con providencias precautorias y embargo en las 32 entidades federativas de México.',
  keywords: [
    'cobranza extrajudicial mexico',
    'recuperacion legal mercantil cdmx',
    'juicio ejecutivo mercantil embargo',
    'cobranza judicial pagarés contratos',
    'abogados cobranza mercantil mexico',
    'condusef cobranza extrajudicial legal',
  ],
  openGraph: {
    title: 'Cobranza Extrajudicial y Legal Mercantil | RMS iQor México',
    description:
      'Estrategia de dos vías: negociación persuasiva de alto nivel o acción procesal en juzgados mercantiles.',
    type: 'website',
  },
};

export default function CobranzaExtrajudicialLegalPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHeader
          title="Cuando la Persuasión Termina,"
          highlight="Comienza la Fuerza de la Ley"
          subtitle="La mayoría de los despachos cometen uno de dos errores: negocian eternamente sin consecuencias o demandan a ciegas sin evaluar solvencia. Nosotros ejecutamos una estrategia de ruta dual: negociación asertiva o juicio mercantil con aseguramiento de bienes."
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/#divisiones' },
            { label: 'Cobranza Extrajudicial y Legal' },
          ]}
          stats={[
            { value: 'Ruta Dual', label: 'Negociación técnica o juicio ejecutivo mercantil' },
            { value: '32 Estados', label: 'Red de abogados procesalistas mercantiles' },
            { value: '0 Quejas', label: 'Gestión con apego a CONDUSEF y Código de Comercio' },
          ]}
        />

        {/* 1. Conmutador Interactivo de Ruta Dual */}
        <section className="internal-content">
          <div className="wrap">
            <div className="section-head-b2b">
              <h2>Estrategia de dos vías: Negociación vs Acción Procesal<span className="punto">.</span></h2>
              <p>
                Alterna entre ambas rutas para conocer los plazos de resolución, herramientas y alcance procesal de cada vía:
              </p>
            </div>

            <DualRouteSwitcher />
          </div>
        </section>

        {/* 2. Split Visual con Fotografía de Sala de Negociación */}
        <section className="internal-content" style={{ background: 'var(--color-surface-warm)' }}>
          <div className="wrap">
            <div className="editorial-split">
              <div className="editorial-media">
                <div className="editorial-img-wrap">
                  <Image
                    src="/images/legal_negotiation_room.jpg"
                    alt="Abogado mercantilista liderando sesión de mediación y firma de convenio en RMS iQor"
                    width={1200}
                    height={750}
                    priority
                  />
                </div>
              </div>

              <div className="editorial-content">
                <h2 style={{ fontSize: '1.65rem', marginTop: '6px', color: 'var(--color-primary)' }}>
                  Títulos de crédito y documentos ejecutables que recuperamos<span className="punto">.</span>
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.96rem' }}>
                  Nuestro equipo de litigio mercantil cuenta con más de dos décadas de experiencia ejecutando instrumentos comerciales ante tribunales federales y locales:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1rem', marginBottom: '2px' }}>Pagarés & Letras de Cambio</strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>Ejecución directa mediante juicio ejecutivo mercantil con auto de exequendo.</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1rem', marginBottom: '2px' }}>Contratos de Crédito & Mutuo</strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>Cobro de saldos insolutos, intereses ordinarios y moratorios pactados.</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1rem', marginBottom: '2px' }}>Facturas Comerciales Aceptadas</strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>Recuperación entre empresas con validación fiscal de CFDI y remisiones.</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', fontSize: '1rem', marginBottom: '2px' }}>Convenios de Reconocimiento</strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>Formalización notarial con cláusula de allanamiento y garantía prendaria.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Matriz de Recuperabilidad por Tramo */}
        <section className="internal-content">
          <div className="wrap">
            <div className="section-head-b2b">
              <h2>Tiempos y tasas esperadas por tramo de vencimiento<span className="punto">.</span></h2>
              <p>
                Comportamiento histórico de carteras gestionadas por RMS iQor México, corte auditado 2025:
              </p>
            </div>

            <div className="table-responsive">
              <table className="b2b-table">
                <thead>
                  <tr>
                    <th>Antigüedad de Cartera</th>
                    <th>Ruta Operativa Principal</th>
                    <th>Tasa Histórica Promedio</th>
                    <th>Plazo Típico de Recuperación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1 a 30 días</strong></td>
                    <td>Cobranza preventiva y recordatorio negociado</td>
                    <td><strong style={{ color: 'var(--color-accent)' }}>74% – 85%</strong></td>
                    <td>15 a 30 días</td>
                  </tr>
                  <tr>
                    <td><strong>31 a 60 días</strong></td>
                    <td>Negociación estructurada y convenio formal</td>
                    <td><strong style={{ color: 'var(--color-accent)' }}>62% – 74%</strong></td>
                    <td>30 a 45 días</td>
                  </tr>
                  <tr>
                    <td><strong>61 a 90 días</strong></td>
                    <td>Negociación intensiva + Preparación de expediente legal</td>
                    <td><strong style={{ color: 'var(--color-accent)' }}>48% – 60%</strong></td>
                    <td>45 a 60 días</td>
                  </tr>
                  <tr>
                    <td><strong>91 a 180 días</strong></td>
                    <td>Vía ejecutiva mercantil + Diligencias judiciales</td>
                    <td><strong style={{ color: 'var(--color-accent)' }}>34% – 46%</strong></td>
                    <td>60 a 90 días</td>
                  </tr>
                  <tr>
                    <td><strong>Más de 180 días</strong></td>
                    <td>Análisis de solvencia real + Estrategia legal focalizada</td>
                    <td><strong style={{ color: 'var(--color-accent)' }}>18% – 30%</strong></td>
                    <td>90 a 120 días</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Inicia la recuperación de tu cartera con dictamen sin costo"
          subtitle="En 5 días hábiles evaluamos tu base de deudores y emitimos una proyección formal de recuperación por tramo, bajo acuerdo de confidencialidad."
          primaryButtonText="Solicitar diagnóstico de cartera"
          primaryButtonHref="/contacto"
        />

        <RelatedServices currentServiceId="extrajudicial" />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
