'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  onOpenModal?: (modalId: 'modal-aviso' | 'modal-terminos') => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Link className="brand" href="/" aria-label="iQor México — volver arriba">
            <Image
              className="brand-logo-img"
              src="/brand/iqor-logo-white-coral.png"
              alt="iQor"
              width={120}
              height={34}
              style={{ width: 'auto', height: '28px', objectFit: 'contain' }}
            />
          </Link>
          <p>
            Despacho de cobranza extrajudicial, legal y administrativa. Parte de la red global iQor (45,000+ agentes en más de 30 países). Operando desde la Roma Norte desde 2003.
          </p>
        </div>

        <nav aria-label="Divisiones Especializadas">
          <h4>Divisiones</h4>
          <ul className="foot-links">
            <li>
              <Link href="/servicios/cobranza-extrajudicial-legal">Extrajudicial y Legal</Link>
            </li>
            <li>
              <Link href="/servicios/cobranza-administrativa-bpo">Administrativa (BPO & CX)</Link>
            </li>
            <li>
              <Link href="/servicios/subcontratacion-personal">Reclutamiento, RH & Staffing REPSE</Link>
            </li>
            <li>
              <Link href="/servicios/gestoria-compartida-dedicada">Gestoría Compartida y Dedicada</Link>
            </li>
            <li>
              <Link href="/servicios/analisis-de-cartera">Análisis y Diagnóstico de Cartera</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Institucional">
          <h4>Empresa</h4>
          <ul className="foot-links">
            <li>
              <Link href="/nosotros">Sobre iQor México</Link>
            </li>
            <li>
              <Link href="/metodo-y-cumplimiento">Método & Compliance</Link>
            </li>
            <li>
              <Link href="/cobertura-nacional">Cobertura Nacional (32 Estados)</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto & Diagnóstico</Link>
            </li>
          </ul>
        </nav>

        <div className="foot-contact">
          <h4>Sedes Nacionales</h4>
          <address style={{ fontStyle: 'normal', fontSize: '0.86rem', lineHeight: '1.5', display: 'grid', gap: '10px' }}>
            <div>
              <strong style={{ color: 'var(--color-primary-text, #fff)' }}>CDMX (Mesa Central):</strong><br />
              Durango 263, Piso 3, Col. Roma Norte, C.P. 06700<br />
              <a href="tel:+525552502520">☏ +52 55 5250 2520</a>
            </div>
            <div>
              <strong style={{ color: 'var(--color-primary-text, #fff)' }}>Monterrey:</strong><br />
              Constitución 1465-Pte., Col. Centro, C.P. 64060<br />
              <a href="tel:+528180476800">☏ +52 81 8047 6800</a>
            </div>
            <div>
              <strong style={{ color: 'var(--color-primary-text, #fff)' }}>Guadalajara:</strong><br />
              Av. Mariano Otero 3429, Piso 1, Col. Verde Valle, C.P. 44550<br />
              <a href="tel:+528180476800">☏ +52 81 8047 6800</a>
            </div>
          </address>

          <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent-bright)', fontWeight: 700 }}>Atención Comercial & Ventas</span>
            <p style={{ margin: '4px 0 2px', fontSize: '0.86rem' }}>
              <strong>Sandra Urdiales</strong> · <a href="tel:+528116905165">+52 81 1690 5165</a>
            </p>
            <p style={{ margin: 0, fontSize: '0.82rem' }}>
              <a href="mailto:sandramargarita.urdialesleal@iqor.com" style={{ textDecoration: 'underline' }}>sandramargarita.urdialesleal@iqor.com</a>
            </p>
            <div style={{ marginTop: '10px' }}>
              <a
                href="https://wa.me/+528184683036?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20iQor."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#25D366',
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}
              >
                <span>WhatsApp Oficial</span> ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap foot-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <p>© {currentYear} RMS iQor México · Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: '0.82rem' }}>
            <a href="https://www.linkedin.com/company/iqor-rms-mexico" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.85 }}>LinkedIn</a>
            <span>·</span>
            <a href="https://www.facebook.com/iqor.mx" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.85 }}>Facebook</a>
            <span>·</span>
            <a href="https://www.instagram.com/iqor_mx/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.85 }}>Instagram</a>
            <span>·</span>
            <a href="https://www.tiktok.com/@iqor_mx" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.85 }}>TikTok</a>
          </div>
        </div>
        <div className="foot-legal">
          <Link href="/aviso-de-privacidad">Aviso de privacidad</Link>
          <Link href="/terminos-de-servicio">Términos de servicio</Link>
        </div>
      </div>
    </footer>
  );
}
