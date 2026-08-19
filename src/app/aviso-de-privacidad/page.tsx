import type { Metadata } from 'next';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad Integral | RMS iQor México',
  description:
    'Aviso de privacidad integral de RMS iQor México conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Ejercicio de derechos ARCO.',
  keywords: [
    'aviso de privacidad rms iqor',
    'proteccion de datos personales lfpdppp',
    'derechos arco cobranza mexico',
    'privacidad rmsiqor mx',
  ],
};

export default function AvisoDePrivacidadPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHeader
          badge="Marco Legal & Transparencia"
          title="Aviso de Privacidad"
          highlight="Integral"
          subtitle="Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento."
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Aviso de Privacidad' },
          ]}
          stats={[
            { value: 'LFPDPPP', label: 'Marco regulatorio mexicano vigente' },
            { value: 'ARCO', label: 'Derechos de acceso, rectificación, cancelación y oposición' },
            { value: 'NDA', label: 'Acuerdo de confidencialidad vinculante' },
          ]}
        />

        <div className="legal-page-wrap">
          <div className="wrap">
            <div className="folder" style={{ maxWidth: '920px', margin: '0 auto' }}>
              <p className="folder-tab">Documento Legal Oficial · Expediente Jurídico RMS-PRIV-2026</p>
              <span className="stamp" aria-hidden="true">
                Certificado LFPDPPP
              </span>

              <article className="legal-article" style={{ marginTop: '20px' }}>
                <h2>1. Identidad y Domicilio del Responsable</h2>
                <p>
                  <strong>RMS iQor México</strong>, con domicilio corporativo en <strong>Durango 263, Piso 3, Colonia Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México</strong>, es responsable del uso y protección de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </p>

                <h2>2. Datos Personales Recabados</h2>
                <p>
                  Para las finalidades señaladas en el presente aviso, podemos recabar los siguientes datos personales:
                </p>
                <ul>
                  <li><strong>Datos de identificación y contacto:</strong> Nombre completo, cargo, empresa o institución representada, correo electrónico corporativo, teléfono fijo o celular.</li>
                  <li><strong>Datos de gestión de cartera (para clientes corporativos):</strong> Información de saldos, tramos de mora, antigüedad y perfiles anonimizados para la emisión de dictámenes de recuperabilidad bajo estricto acuerdo de confidencialidad (NDA).</li>
                </ul>

                <h2>3. Finalidades del Tratamiento</h2>
                <p>
                  Los datos personales que recabamos son utilizados para las siguientes finalidades primarias y necesarias:
                </p>
                <ul>
                  <li>Atender solicitudes de consultoría y emisión de dictámenes de cartera vencida.</li>
                  <li>Elaborar propuestas técnico-comerciales a la medida del cliente.</li>
                  <li>Formalizar la relación jurídica y celebrar contratos de prestación de servicios de cobranza extrajudicial, legal o BPO.</li>
                  <li>Coordinar reuniones ejecutivas en nuestra sede corporativa o por canales digitales.</li>
                </ul>

                <h2>4. Ejercicio de Derechos ARCO</h2>
                <p>
                  Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios y deberes aplicables (Cancelación); así como oponerse al uso de sus datos para fines específicos (Oposición).
                </p>
                <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--r-tech)', padding: '16px', marginBlock: '16px' }}>
                  <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '6px' }}>Procedimiento de Atención ARCO:</strong>
                  <p style={{ fontSize: '0.88rem', margin: 0 }}>
                    Para ejercer sus derechos ARCO, envíe un correo formal a <strong>privacidad@rmsiqor.mx</strong> indicando nombre del titular, documento que acredite personalidad y descripción clara del derecho a ejercer. Respuesta en un plazo máximo de 20 días hábiles.
                  </p>
                </div>

                <h2>5. Transferencia de Datos</h2>
                <p>
                  RMS iQor México no transfiere, vende ni comparte datos personales con terceros ajenos a la relación contractual, salvo aquellas transferencias expresamente autorizadas por el titular o que resulten estrictamente necesarias por mandato legal o requerimiento fundado y motivado de autoridad competente.
                </p>

                <h2>6. Modificaciones al Aviso de Privacidad</h2>
                <p>
                  El presente aviso de privacidad puede sufrir modificaciones derivadas de nuevos requerimientos legales o de nuestras propias prácticas de gobernanza. Cualquier cambio será publicado a través de este portal web oficial.
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
