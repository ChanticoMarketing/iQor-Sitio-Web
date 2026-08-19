import type { Metadata } from 'next';
import Header from '@/components/Header';
import NosotrosHero from '@/components/NosotrosHero';
import NosotrosTimeline from '@/components/NosotrosTimeline';
import NosotrosGovernance from '@/components/NosotrosGovernance';
import NosotrosInfrastructure from '@/components/NosotrosInfrastructure';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Dos Décadas de Criterio Legal & Red Global | RMS iQor México',
  description:
    'Fundado en 2003 en la Roma Norte de la Ciudad de México y respaldado por la infraestructura de 45,000 colaboradores de la red internacional iQor en más de 30 países.',
  keywords: [
    'sobre rms iqor mexico',
    'despacho cobranza roma norte',
    'historia rms iqor',
    'durango 263 roma norte cdmx',
    'red global iqor',
    'cobranza judicial extrajudicial mexico',
    'bpo cobranza corporativa monterrey guadalajara',
  ],
  openGraph: {
    title: 'Sobre Nosotros | RMS iQor México: Solidez Local & Respaldo Global',
    description:
      'Criterio jurídico mercantil fundado en CDMX en 2003 y respaldado por 45,000 especialistas tecnológicos en más de 30 países.',
    type: 'website',
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        {/* 1. Hero con Dualidad Estratégica & Conmutador de Pilares */}
        <NosotrosHero />

        {/* 2. ScrollTelling Interactivo: 20 Años de Evolución (2003 – 2026+) */}
        <NosotrosTimeline />

        {/* 3. Manifiesto Operativo & 4 Pilares de Gobernanza Institucional */}
        <NosotrosGovernance />

        {/* 4. Visor Interactivo de Infraestructura: 3 Sedes México & Nodos Globales */}
        <NosotrosInfrastructure />

        {/* 5. CTA de Cierre & Agendamiento Ejecutivo */}
        <CtaBanner
          title="Conoce nuestras oficinas o agenda una sesión de diagnóstico"
          subtitle="Recibe atención personalizada por parte de un consultor senior en nuestra sede central de Durango 263 (Roma Norte, CDMX) o vía remota por videollamada."
          primaryButtonText="Agendar Sesión Ejecutiva"
          primaryButtonHref="/contacto"
        />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
