'use client';

import React, { useEffect } from 'react';

interface ModalsProps {
  activeModal: 'modal-aviso' | 'modal-terminos' | null;
  onClose: () => void;
}

export default function Modals({ activeModal, onClose }: ModalsProps) {
  useEffect(() => {
    if (!activeModal) return;

    document.body.classList.add('no-scroll');

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div className="modal is-open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      {activeModal === 'modal-aviso' && (
        <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="aviso-t">
          <button className="modal-close" onClick={onClose} aria-label="Cerrar aviso de privacidad">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
          <h3 id="aviso-t">Aviso de privacidad</h3>
          <p>
            RMS iQor México, con domicilio en Durango 263 Piso 3, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
          </p>
          <p>
            Los datos recabados a través de este sitio (nombre, empresa, correo y teléfono) se utilizan exclusivamente para: atender solicitudes de consultoría, elaborar cotizaciones y, en su caso, ejecutar la gestión de cobranza contratada.
          </p>
          <p>
            Puede ejercer sus derechos ARCO (acceso, rectificación, cancelación y oposición) escribiendo a <strong>privacidad@rmsiqor.mx</strong>. No compartimos datos con terceros sin consentimiento, salvo obligación legal.
          </p>
        </div>
      )}

      {activeModal === 'modal-terminos' && (
        <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="terminos-t">
          <button className="modal-close" onClick={onClose} aria-label="Cerrar términos de servicio">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
          <h3 id="terminos-t">Términos de servicio</h3>
          <p>
            Las tasas de recuperación mostradas corresponden a resultados históricos por tipo de cartera y no constituyen garantía de resultado: cada lote se comporta distinto según sector, antigüedad y perfil del deudor.
          </p>
          <p>
            Toda gestión de cobranza se conduce conforme a las prácticas ordenadas por CONDUSEF: sin acoso, sin contacto a terceros, sin horarios indebidos. El incumplimiento de estas prácticas por parte de nuestro personal es causal de rescisión inmediata y sanción interna.
          </p>
          <p>
            Los honorarios se pactan únicamente como porcentaje sobre recuperación efectiva; RMS iQor México no cobra anticipos por asignación de cartera.
          </p>
        </div>
      )}
    </div>
  );
}
