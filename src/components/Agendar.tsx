'use client';

import React, { useState } from 'react';

export default function Agendar() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    sector: 'Banca / Fintech',
    cartera: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedFolio, setSubmittedFolio] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Ingresa tu nombre completo.';
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = 'Ingresa el nombre de tu empresa o institución.';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'Ingresa un correo corporativo válido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.correo.trim())) {
      newErrors.correo = 'El formato de correo no es válido.';
    }

    if (!formData.cartera) {
      newErrors.cartera = 'Selecciona el rango de cartera a diagnosticar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success && data.lead) {
        setSubmittedFolio(data.lead.folio);
      } else {
        setServerError(data.error || 'Ocurrió un error al enviar tu solicitud.');
      }
    } catch (err) {
      setServerError('No se pudo conectar con el servidor. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
      sector: 'Banca / Fintech',
      cartera: '',
      mensaje: '',
    });
    setErrors({});
    setSubmittedFolio(null);
    setServerError(null);
  };

  return (
    <section className="agendar" id="agendar" aria-labelledby="ag-titulo">
      <div className="wrap">
        <div className="agendar-layout">
          {/* Left Column: Direct Info */}
          <div className="agendar-info" data-reveal>
            <h2 id="ag-titulo">
              Estamos a un <span className="hl">mensaje de distancia</span><span className="punto">.</span>
            </h2>
            <p className="agendar-lead">
              Cada día que transcurre sin gestión especializada es liquidez comprometida de servicios que ya prestaste o productos que ya entregaste. Solicita un diagnóstico formal de cartera o contáctanos de inmediato:
            </p>

            <div className="agendar-direct-list">
              <div className="direct-item">
                <strong>0 Anticipos · Honorarios a Éxito</strong>
                <span>Pactado por escrito; si no recuperamos, no pagas honorarios.</span>
              </div>
              <div className="direct-item">
                <strong>Firma de NDA Vinculante</strong>
                <span>Protección absoluta de secreto bancario y LFPDPPP previa a recibir datos.</span>
              </div>
              <div className="direct-item">
                <strong>Presencia Nacional</strong>
                <span>Salas de acuerdos en CDMX, Monterrey y Guadalajara + 32 estados.</span>
              </div>
            </div>

            <div className="agendar-contacts" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <a href="tel:+525552502520" className="contact-link">
                  ☏ CDMX: +52 55 5250 2520
                </a>
                <a href="tel:+528180476800" className="contact-link">
                  ☏ MTY / GDL: +52 81 8047 6800
                </a>
              </div>
              <div style={{ marginTop: '4px' }}>
                <a
                  href="https://wa.me/+528184683036?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20cobranza%20y%20BPO."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#25D366',
                    color: '#ffffff',
                    fontWeight: 700,
                    padding: '8px 16px',
                    borderRadius: 'var(--r-tech, 4px)',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                  }}
                >
                  <span>Escribir por WhatsApp (+52 81 8468 3036)</span> ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="agendar-form-container" data-reveal>
            {!submittedFolio ? (
              <form id="diag-form" onSubmit={handleSubmit} noValidate>
                {serverError && (
                  <div className="form-error-alert" role="alert">
                    {serverError}
                  </div>
                )}

                <div className="form-fields">
                  <div className="input-field">
                    <label htmlFor="f-nombre">
                      Nombre completo <b aria-hidden="true">*</b>
                    </label>
                    <input
                      id="f-nombre"
                      name="nombre"
                      type="text"
                      autoComplete="name"
                      placeholder="Roberto Morales"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={errors.nombre ? 'has-error' : ''}
                      required
                    />
                    {errors.nombre && <p className="field-error">{errors.nombre}</p>}
                  </div>

                  <div className="input-field">
                    <label htmlFor="f-empresa">
                      Empresa o Institución <b aria-hidden="true">*</b>
                    </label>
                    <input
                      id="f-empresa"
                      name="empresa"
                      type="text"
                      autoComplete="organization"
                      placeholder="Banco / Fintech S.A."
                      value={formData.empresa}
                      onChange={handleChange}
                      className={errors.empresa ? 'has-error' : ''}
                      required
                    />
                    {errors.empresa && <p className="field-error">{errors.empresa}</p>}
                  </div>

                  <div className="input-field">
                    <label htmlFor="f-correo">
                      Correo corporativo <b aria-hidden="true">*</b>
                    </label>
                    <input
                      id="f-correo"
                      name="correo"
                      type="email"
                      autoComplete="email"
                      placeholder="nombre@empresa.mx"
                      value={formData.correo}
                      onChange={handleChange}
                      className={errors.correo ? 'has-error' : ''}
                      required
                    />
                    {errors.correo && <p className="field-error">{errors.correo}</p>}
                  </div>

                  <div className="input-field">
                    <label htmlFor="f-tel">Teléfono</label>
                    <input
                      id="f-tel"
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+52 55 0000 0000"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="f-sector">Sector</label>
                    <select
                      id="f-sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                    >
                      <option value="Banca / Fintech">Banca / Fintech</option>
                      <option value="Retail">Retail</option>
                      <option value="Telecom">Telecom</option>
                      <option value="Seguros">Seguros</option>
                      <option value="Educación">Educación</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div className="input-field">
                    <label htmlFor="f-cartera">
                      Monto aproximado de cartera <b aria-hidden="true">*</b>
                    </label>
                    <select
                      id="f-cartera"
                      name="cartera"
                      value={formData.cartera}
                      onChange={handleChange}
                      className={errors.cartera ? 'has-error' : ''}
                      required
                    >
                      <option value="">Selecciona un rango…</option>
                      <option value="Menos de $500 mil MXN">Menos de $500 mil MXN</option>
                      <option value="$500 mil – $5 M MXN">$500 mil – $5 M MXN</option>
                      <option value="$5 M – $50 M MXN">$5 M – $50 M MXN</option>
                      <option value="Más de $50 M MXN">Más de $50 M MXN</option>
                    </select>
                    {errors.cartera && <p className="field-error">{errors.cartera}</p>}
                  </div>

                  <div className="input-field full">
                    <label htmlFor="f-mensaje">Detalles adicionales (opcional)</label>
                    <textarea
                      id="f-mensaje"
                      name="mensaje"
                      rows={3}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Mora promedio, cantidad de cuentas, estatus legal…"
                    ></textarea>
                  </div>
                </div>

                <div className="form-submit-row">
                  <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Solicitar diagnóstico'} <span className="arr" aria-hidden="true">→</span>
                  </button>
                  <span className="privacy-text">
                    Tus datos están protegidos bajo estricto acuerdo de confidencialidad (NDA).
                  </span>
                </div>
              </form>
            ) : (
              <div className="form-success-box" tabIndex={-1}>
                <h3>Solicitud registrada con éxito</h3>
                <p>
                  Tu folio oficial es <strong>{submittedFolio}</strong>. Un consultor senior de RMS iQor se pondrá en contacto contigo en menos de 24 horas hábiles.
                </p>
                <button className="btn btn-ghost" type="button" onClick={handleReset}>
                  Enviar otra solicitud
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
