import type { Metadata, Viewport } from 'next';
import './globals.css';
import GsapProvider from '@/components/GsapProvider';

export const metadata: Metadata = {
  title: 'RMS iQor México — Cobranza extrajudicial, legal y administrativa en CDMX',
  description:
    'RMS iQor México — Despacho de cobranza extrajudicial, legal y administrativa. Recuperamos hasta el 85% de tu cartera vencida. Durango 263 Piso 3, Col. Roma Norte, CDMX.',
  keywords: [
    'cobranza extrajudicial',
    'cobranza legal méxico',
    'recuperación de cartera vencida',
    'bpo cobranza cdmx',
    'rms iqor méxico',
    'gestoría de cobranza',
  ],
  authors: [{ name: 'RMS iQor México' }],
  openGraph: {
    title: 'RMS iQor México — Cobranza extrajudicial, legal y administrativa',
    description:
      'Recuperamos hasta el 85% de tu cartera vencida con el respaldo de iQor y su red de 45,000 agentes globales.',
    locale: 'es_MX',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/brand/iqor-app-icon-coral.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0e17',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'RMS iQor México',
              alternateName: 'iQor México',
              description:
                'Líder en CXBPO, gestión de capital humano, procesos logísticos y cobranza extrajudicial, legal y administrativa en México.',
              url: 'https://www.iqor.com.mx',
              logo: 'https://www.iqor.com.mx/brand/iqor-icon-circle-coral.png',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+52-81-8047-6800',
                  contactType: 'customer service',
                  areaServed: 'MX',
                  availableLanguage: ['Spanish', 'English'],
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+52-81-1690-5165',
                  contactType: 'sales',
                  email: 'sandramargarita.urdialesleal@iqor.com',
                  areaServed: 'MX',
                },
              ],
              sameAs: [
                'https://www.linkedin.com/company/iqor-rms-mexico',
                'https://www.facebook.com/iqor.mx',
                'https://www.instagram.com/iqor_mx/',
                'https://www.tiktok.com/@iqor_mx',
                'https://twitter.com/iqor',
              ],
              subOrganization: [
                {
                  '@type': 'LocalBusiness',
                  name: 'RMS iQor México - Sede CDMX',
                  telephone: '+52-55-5250-2520',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Durango 263, Piso 3, Col. Roma Norte',
                    addressLocality: 'Ciudad de México',
                    addressRegion: 'CDMX',
                    postalCode: '06700',
                    addressCountry: 'MX',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 19.4192082,
                    longitude: -99.1728554,
                  },
                },
                {
                  '@type': 'LocalBusiness',
                  name: 'RMS iQor México - Sede Monterrey',
                  telephone: '+52-81-8047-6800',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Constitución 1465-Pte., Col. Centro',
                    addressLocality: 'Monterrey',
                    addressRegion: 'Nuevo León',
                    postalCode: '64060',
                    addressCountry: 'MX',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 25.6683055,
                    longitude: -100.3356562,
                  },
                },
                {
                  '@type': 'LocalBusiness',
                  name: 'RMS iQor México - Sede Guadalajara',
                  telephone: '+52-81-8047-6800',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Av. Mariano Otero 3429, Piso 1, Despacho 1, Col. Verde Valle',
                    addressLocality: 'Guadalajara',
                    addressRegion: 'Jalisco',
                    postalCode: '44550',
                    addressCountry: 'MX',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 20.6511456,
                    longitude: -103.4000714,
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: '¿Tienen presencia en toda la república mexicana?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sí, contamos con sedes operativas físicas en Ciudad de México, Monterrey y Guadalajara, así como capacidad de despliegue y gestión domiciliaria en las 32 entidades federativas del país.',
                  },
                },
                {
                  '@type': 'Question',
                  name: '¿Otorgan créditos o préstamos?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No otorgamos créditos ni préstamos. En iQor nos especializamos en la optimización operativa, reclutamiento de personal, administración de nómina, gestión logística y recuperación de cartera vencida para empresas e instituciones.',
                  },
                },
                {
                  '@type': 'Question',
                  name: '¿Cobran algún anticipo por la gestión de cobranza?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No cobramos anticipos. Nuestro esquema es a éxito sobre montos efectivamente recuperados, pactado por escrito tras un diagnóstico inicial sin costo.',
                  },
                },
                {
                  '@type': 'Question',
                  name: '¿Con qué tipo de carteras y etapas de mora trabaja iQor?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gestionamos carteras en mora preventiva, administrativa, extrajudicial y legal en esquema de asignación directa por la entidad originadora. Para preservar la reputación de tu marca y asegurar el cumplimiento de estándares institucionales, no gestionamos carteras que hayan pasado previamente por otros despachos.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <a className="skip" href="#contenido">
          Saltar al contenido principal
        </a>
        <div className="progress" id="progress" aria-hidden="true"></div>
        <div className="grain" aria-hidden="true"></div>
        <GsapProvider />
        {children}
      </body>
    </html>
  );
}
