import type { Metadata } from 'next';
import Header from '@/components/Header';
import CoberturaHero from '@/components/CoberturaHero';
import CoverageDispatchTerminal from '@/components/CoverageDispatchTerminal';
import RegionalCorridorsMatrix from '@/components/RegionalCorridorsMatrix';
import GeocertifiedFieldProtocol from '@/components/GeocertifiedFieldProtocol';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Cobertura Territorial en 32 Estados | RMS iQor México',
  description:
    'Despliegue de notificadores presenciales georreferenciados en las 32 entidades de México. Tiempos de respuesta garantizados de 24 a 72 horas por código postal.',
  keywords: [
    'cobertura nacional cobranza mexico',
    'notificadores de campo georreferenciados gps',
    'despacho cobranza monterrey guadalajara cdmx',
    'sla cobranza por codigo postal mexico',
    'visitas domiciliarias con acuse mercantil',
  ],
  openGraph: {
    title: 'Cobertura Territorial en 32 Estados | RMS iQor México',
    description:
      'Presencia activa en campo con geocertificación satelital GPS y respuesta de 24h a 72h.',
    type: 'website',
  },
};

export default function CoberturaNacionalPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        {/* 1. Hero Territorial & Métricas de Despliegue */}
        <CoberturaHero />

        {/* 2. Terminal de Despacho & Verificador de SLA por CP */}
        <CoverageDispatchTerminal />

        {/* 3. Matriz Editorial de Corredores Industriales */}
        <RegionalCorridorsMatrix />

        {/* 4. Protocolo de Campo Geocertificado */}
        <GeocertifiedFieldProtocol />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
