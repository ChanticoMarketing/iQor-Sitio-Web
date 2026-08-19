import type { Metadata } from 'next';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Términos de Servicio y Condiciones de Contratación | RMS iQor',
  description:
    'Términos de servicio y condiciones generales de contratación de RMS iQor México. Esquemas de honorarios a éxito, apego CONDUSEF y alcance de gestión.',
  keywords: [
    'terminos de servicio rms iqor',
    'condiciones contratacion cobranza mexico',
    'honorarios a exito cobranza',
    'normativa condusef despacho cobranza',
  ],
};

export default function TerminosDeServicioPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHeader
          badge="Marco Contractual"
          title="Términos de Servicio y"
          highlight="Condiciones de Contratación"
          subtitle="Condiciones generales aplicables a la prestación de servicios de cobranza extrajudicial, legal, BPO y consultoría de cartera."
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Términos de Servicio' },
          ]}
          stats={[
            { value: '0 Anticipos', label: 'Honorarios exclusivamente a éxito' },
            { value: 'CONDUSEF', label: 'Apego estricto a sanas prácticas' },
            { value: 'CDMX', label: 'Jurisdicción legal y mercantil competente' },
          ]}
        />

        <div className="legal-page-wrap">
          <div className="wrap">
            <div className="folder" style={{ maxWidth: '920px', margin: '0 auto' }}>
              <p className="folder-tab">Contrato Marco de Servicios · Cláusulas de Operación RMS-TERM-2026</p>
              <span className="stamp" aria-hidden="true">
                Validez Legal
              </span>

              <article className="legal-article" style={{ marginTop: '20px' }}>
                <h2>1. Naturaleza de las Estimaciones y Resultados Históricos</h2>
                <p>
                  Las tasas de recuperación de cartera mostradas en este portal (incluyendo referencias históricas de hasta el 85% en tramos de 1 a 30 días o promedios por antigüedad) corresponden a resultados empíricos agregados de gestiones anteriores y <strong>no constituyen garantía de resultado futuro</strong>. Cada lote de cartera posee características particulares de riesgo, dispersión geográfica, capacidad patrimonial y antigüedad que determinan su recuperabilidad real.
                </p>

                <h2>2. Esquema de Honorarios a Éxito (Sin Anticipos)</h2>
                <p>
                  Salvo pacto en contrario debidamente formalizado en contrato de prestación de servicios, <strong>RMS iQor México no cobra anticipos</strong> por concepto de alta o asignación inicial de cartera. Los honorarios profesionales se pactan como un porcentaje acordado por escrito sobre el monto efectivamente recuperado y acreditado en las cuentas del cliente.
                </p>

                <h2>3. Código de Conducta y Apego Regulatorio CONDUSEF</h2>
                <p>
                  Toda gestión de cobranza telefónica, digital o domiciliaria conducida por el personal de RMS iQor México se realiza en estricto apego a las disposiciones de la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF) y la Procuraduría Federal del Consumidor (PROFECO):
                </p>
                <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--r-tech)', padding: '16px', marginBlock: '16px' }}>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    <li>Queda estrictamente prohibido cualquier acto de intimidación, acoso, uso de lenguaje soez o engaño procesal.</li>
                    <li>Las gestiones de contacto se efectúan únicamente en los días y horarios legalmente autorizados.</li>
                    <li>No se realizan contactos de cobro a personas ajenas al adeudo, familiares o empleadores que no figuren como obligados solidarios o avales.</li>
                    <li>El quebrantamiento de estas políticas por parte de cualquier colaborador es motivo de rescisión laboral inmediata y sanción interna.</li>
                  </ul>
                </div>

                <h2>4. Confidencialidad y Custodia de la Información</h2>
                <p>
                  Toda información, base de datos o expediente deudor entregado a RMS iQor México es tratado con el más alto estándar de seguridad informática y protegido por un Acuerdo de Confidencialidad (NDA) vinculante, garantizando el secreto profesional y bancario correspondiente.
                </p>

                <h2>5. Jurisdicción y Legislación Aplicable</h2>
                <p>
                  Para la interpretación y cumplimiento de los presentes términos, así como de los contratos que deriven de los mismos, las partes se someten a la legislación mercantil y civil aplicable en la Ciudad de México y a la jurisdicción de sus tribunales competentes, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
                </p>
                <p style={{ marginTop: '24px', fontSize: '0.84rem', color: 'var(--color-text-muted)', borderTop: '1px dashed rgba(125, 107, 83, 0.4)', paddingTop: '12px' }}>
                  <em>Última actualización: Primer trimestre de 2026. Dirección Jurídica y de Cumplimiento, RMS iQor México.</em>
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
