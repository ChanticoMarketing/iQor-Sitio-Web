import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import Agendar from '@/components/Agendar';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Contacto y Solicitud de Diagnóstico | RMS iQor Roma Norte CDMX',
  description:
    'Solicita un diagnóstico de cartera sin costo en 5 días hábiles. Consultoría de 30 minutos presencial en Durango 263, Roma Norte o por videollamada nacional. Bajo NDA.',
  keywords: [
    'contacto rms iqor mexico',
    'agendar diagnostico cobranza cdmx',
    'despacho cobranza durango 263 roma norte',
    'telefono rms cobranza',
    'correo atencion rms iqor',
    'consultoria cobranza sin costo',
  ],
  openGraph: {
    title: 'Contacto y Diagnóstico de Cartera | RMS iQor México',
    description:
      'Agenda una sesión de consultoría confidencial de 30 minutos y recibe tu mapa de recuperabilidad en 5 días hábiles.',
    type: 'website',
  },
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHeader
          title="Contacto y Solicitud de"
          highlight="Diagnóstico de Cartera"
          subtitle="30 minutos presenciales en nuestra sede de Durango 263, Roma Norte o por videollamada. Sales con una proyección de recuperación por escrito, sin costo ni compromiso."
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Contacto' },
          ]}
          stats={[
            { value: '< 24 h', label: 'Tiempo de respuesta a tu solicitud' },
            { value: '5 Días', label: 'Entrega de dictamen formal de cartera' },
            { value: '100% NDA', label: 'Protección legal previa a recibir datos' },
          ]}
        />

        <Agendar />

        {/* Sección Editorial: Sedes Físicas Nacionales */}
        <section className="internal-content">
          <div className="wrap">
            <div className="section-head-b2b">
              <h2>Sedes operativas y salas de acuerdos en México<span className="punto">.</span></h2>
              <p>
                Recibimos a comités de crédito, directores jurídicos y tesoreros corporativos en nuestras 3 sedes metropolitanas con protocolos de acceso seguro y confidencialidad:
              </p>
            </div>

            <div className="b2b-grid-3" style={{ marginTop: '24px' }}>
              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--r-tech, 4px)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sede Central CDMX</span>
                <h3 style={{ fontSize: '1.25rem', margin: '8px 0 10px', color: 'var(--color-primary)' }}>Ciudad de México</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.5, margin: 0 }}>
                  Durango 263, Piso 3, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, CDMX.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <p style={{ fontSize: '0.88rem', margin: '0 0 8px' }}>
                    <strong>Conmutador:</strong> <a href="tel:+525552502520" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>+52 55 5250 2520</a>
                  </p>
                  <a href="https://maps.google.com/?q=Durango+263+Roma+Norte+CDMX" target="_blank" rel="noopener noreferrer" className="link-line" style={{ fontSize: '0.86rem' }}>
                    Abrir en Google Maps <span className="arr" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--r-tech, 4px)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sede Norte</span>
                <h3 style={{ fontSize: '1.25rem', margin: '8px 0 10px', color: 'var(--color-primary)' }}>Monterrey</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.5, margin: 0 }}>
                  Constitución 1465-Pte., Col. Centro, C.P. 64060, Monterrey, Nuevo León.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <p style={{ fontSize: '0.88rem', margin: '0 0 8px' }}>
                    <strong>Conmutador:</strong> <a href="tel:+528180476800" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>+52 81 8047 6800</a>
                  </p>
                  <a href="https://maps.google.com/?q=Constitucion+1465+Pte+Centro+Monterrey" target="_blank" rel="noopener noreferrer" className="link-line" style={{ fontSize: '0.86rem' }}>
                    Abrir en Google Maps <span className="arr" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--r-tech, 4px)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sede Occidente</span>
                <h3 style={{ fontSize: '1.25rem', margin: '8px 0 10px', color: 'var(--color-primary)' }}>Guadalajara</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.5, margin: 0 }}>
                  Av. Mariano Otero 3429, Piso 1, Despacho 1, Col. Verde Valle, C.P. 44550, Guadalajara, Jal.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <p style={{ fontSize: '0.88rem', margin: '0 0 8px' }}>
                    <strong>Conmutador:</strong> <a href="tel:+528180476800" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>+52 81 8047 6800</a>
                  </p>
                  <a href="https://maps.google.com/?q=Av+Mariano+Otero+3429+Verde+Valle+Guadalajara" target="_blank" rel="noopener noreferrer" className="link-line" style={{ fontSize: '0.86rem' }}>
                    Abrir en Google Maps <span className="arr" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Canales Directos */}
        <section className="internal-content dark">
          <div className="wrap">
            <div className="section-head-b2b">
              <h2>Canales de contacto comercial y operaciones<span className="punto">.</span></h2>
              <p>
                Atención ejecutiva continua para cotizaciones de servicio, análisis de cartera y formalización bajo NDA:
              </p>
            </div>

            <div className="b2b-grid-3">
              <div className="feature-box-dark">
                <span style={{ fontSize: '0.74rem', color: 'var(--color-accent-bright)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Dirección Comercial</span>
                <h3 style={{ marginTop: '6px', fontSize: '1.2rem' }}>Sandra Urdiales</h3>
                <p style={{ fontSize: '0.9rem', margin: '8px 0 16px' }}>
                  Atención directa para cotizaciones corporativas, licitaciones y asignación de carteras.
                </p>
                <div style={{ marginTop: 'auto', display: 'grid', gap: '6px' }}>
                  <a href="tel:+528116905165" className="link-line" style={{ fontWeight: 700, color: 'var(--color-accent-bright)' }}>
                    +52 81 1690 5165 <span className="arr" aria-hidden="true">→</span>
                  </a>
                  <a href="mailto:sandramargarita.urdialesleal@iqor.com" style={{ fontSize: '0.82rem', color: 'var(--color-text-inverse-muted)', textDecoration: 'underline' }}>
                    sandramargarita.urdialesleal@iqor.com
                  </a>
                </div>
              </div>

              <div className="feature-box-dark">
                <span style={{ fontSize: '0.74rem', color: 'var(--color-accent-bright)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Mensajería Inmediata</span>
                <h3 style={{ marginTop: '6px', fontSize: '1.2rem' }}>WhatsApp Corporativo</h3>
                <p style={{ fontSize: '0.9rem', margin: '8px 0 16px' }}>
                  Canal ágil para recepción de solicitudes, envío de presentaciones y coordinación de videollamadas.
                </p>
                <a
                  href="https://wa.me/+528184683036?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20iQor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line"
                  style={{ marginTop: 'auto', fontWeight: 700, color: 'var(--color-accent-bright)' }}
                >
                  +52 81 8468 3036 <span className="arr" aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="feature-box-dark">
                <span style={{ fontSize: '0.74rem', color: 'var(--color-accent-bright)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Mesa de Control</span>
                <h3 style={{ marginTop: '6px', fontSize: '1.2rem' }}>Recepción bajo NDA</h3>
                <p style={{ fontSize: '0.9rem', margin: '8px 0 16px' }}>
                  Ingestión cifrada de layouts de cartera, requerimientos de auditoría y documentos legales.
                </p>
                <a
                  href="mailto:atencion@rmsiqor.mx"
                  className="link-line"
                  style={{ marginTop: 'auto', fontWeight: 700, color: 'var(--color-accent-bright)' }}
                >
                  atencion@rmsiqor.mx <span className="arr" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
