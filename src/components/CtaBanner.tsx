import React from 'react';
import Link from 'next/link';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CtaBanner({
  title = '¿Listo para recuperar lo que tu empresa ya generó?',
  subtitle = 'Solicita un diagnóstico de cartera sin costo. En 5 días hábiles recibes un mapa de recuperabilidad por escrito, bajo estricto acuerdo de confidencialidad (NDA).',
  primaryButtonText = 'Solicitar diagnóstico sin costo',
  primaryButtonHref = '/contacto',
  secondaryButtonText = 'Conocer nuestro método',
  secondaryButtonHref = '/metodo-y-cumplimiento',
}: CtaBannerProps) {
  return (
    <section className="cta-banner dark" aria-labelledby="cta-banner-title">
      <div className="wrap">
        <div className="cta-banner-inner">
          <div className="cta-banner-copy">
            <h2 id="cta-banner-title">
              {title}
              <span className="punto">.</span>
            </h2>
            <p>{subtitle}</p>
            <div className="cta-banner-actions">
              <Link className="btn btn-primary" href={primaryButtonHref}>
                {primaryButtonText} <span className="arr" aria-hidden="true">→</span>
              </Link>
              <Link className="link-line" href={secondaryButtonHref}>
                {secondaryButtonText} <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="cta-banner-specs">
            <div className="banner-spec-row">
              <span className="spec-dot" aria-hidden="true"></span>
              <div>
                <strong>Apego CONDUSEF</strong>
                <small>Gestión sin acoso ni horarios indebidos</small>
              </div>
            </div>

            <div className="banner-spec-row">
              <span className="spec-dot" aria-hidden="true"></span>
              <div>
                <strong>NDA & LFPDPPP</strong>
                <small>Confidencialidad y datos protegidos</small>
              </div>
            </div>

            <div className="banner-spec-row">
              <span className="spec-dot" aria-hidden="true"></span>
              <div>
                <strong>Registro REPSE</strong>
                <small>Cero riesgo patronal en staffing BPO</small>
              </div>
            </div>

            <div className="banner-spec-row">
              <span className="spec-dot" aria-hidden="true"></span>
              <div>
                <strong>3 Sedes en México</strong>
                <small>CDMX · Monterrey · Guadalajara (32 Estados)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
