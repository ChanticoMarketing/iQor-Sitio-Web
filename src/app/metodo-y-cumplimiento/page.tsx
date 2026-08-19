import type { Metadata } from 'next';
import Header from '@/components/Header';
import ComplianceLabHero from '@/components/ComplianceLabHero';
import InteractiveAuditSimulator from '@/components/InteractiveAuditSimulator';
import RegulatoryCodexLedger from '@/components/RegulatoryCodexLedger';
import NdaAuditDossier from '@/components/NdaAuditDossier';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
  title: 'Manual de Compliance & Gobernanza Legal | RMS iQor México',
  description:
    'Documento técnico y aseguramiento legal: simulador de auditoría por tipo de cartera, códice de marco regulatorio mexicano y protocolo NDA vinculante.',
  keywords: [
    'compliance legal cobranza mexico',
    'auditoria condusef redeco cobranza',
    'codigo penal articulo 284 bis cobranza',
    'disposicion tercera condusef cobranza',
    'lfpdppp derechos arco cobranza',
    'nda cobranza notariado cdmx',
    'recuperacion mercantil con apego legal',
  ],
  openGraph: {
    title: 'Manual de Compliance & Gobernanza Legal | RMS iQor México',
    description:
      'Gobernanza jurídica, aseguramiento normativo y protocolo notariable sin contingencias.',
    type: 'website',
  },
};

export default function MetodoYCumplimientoPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        {/* Portada del Manual */}
        <ComplianceLabHero />

        {/* Simulador de Cartera por Escenario */}
        <InteractiveAuditSimulator />

        {/* Marco Legal y Códice Regulatorio */}
        <RegulatoryCodexLedger />

        {/* Formalización Contractual & Protocolo NDA */}
        <NdaAuditDossier />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
