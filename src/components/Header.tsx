'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close nav on pathname change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith('/servicios');

  return (
    <header id="site-header" className={scrolled ? 'is-scrolled' : ''}>
      <div className="wrap header-in">
        <Link className="brand" href="/" aria-label="iQor México">
          <Image
            className="brand-logo-img"
            src="/brand/iqor-logo-white-coral.png"
            alt="iQor"
            width={120}
            height={34}
            style={{ width: 'auto', height: '28px', objectFit: 'contain' }}
            priority
          />
        </Link>

        <button
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          id="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`main-nav ${isOpen ? 'is-open' : ''}`}
          id="main-nav"
          aria-label="Navegación principal"
        >
          <ul>
            <li
              ref={dropdownRef}
              className={`has-dropdown ${servicesOpen ? 'dropdown-open' : ''} ${
                isServicesActive ? 'active-parent' : ''
              }`}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Servicios <span className="dropdown-arrow" aria-hidden="true">▾</span>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-menu-inner">
                  <span className="dropdown-header">Divisiones Especializadas</span>
                  <Link
                    href="/servicios/cobranza-extrajudicial-legal"
                    onClick={closeNav}
                    className={pathname === '/servicios/cobranza-extrajudicial-legal' ? 'active' : ''}
                  >
                    <strong>01. Extrajudicial y Legal</strong>
                    <small>Negociación estructurada y vía ejecutiva mercantil</small>
                  </Link>
                  <Link
                    href="/servicios/cobranza-administrativa-bpo"
                    onClick={closeNav}
                    className={pathname === '/servicios/cobranza-administrativa-bpo' ? 'active' : ''}
                  >
                    <strong>02. Cobranza Administrativa (BPO)</strong>
                    <small>Operación integral temprana con SLA 24h</small>
                  </Link>
                  <Link
                    href="/servicios/subcontratacion-personal"
                    onClick={closeNav}
                    className={pathname === '/servicios/subcontratacion-personal' ? 'active' : ''}
                  >
                    <strong>03. Subcontratación de Personal</strong>
                    <small>Staffing certificado, 120h capacitación, 4.2% rotación</small>
                  </Link>
                  <Link
                    href="/servicios/gestoria-compartida-dedicada"
                    onClick={closeNav}
                    className={pathname === '/servicios/gestoria-compartida-dedicada' ? 'active' : ''}
                  >
                    <strong>04. Gestoría Compartida y Dedicada</strong>
                    <small>Modelos flexibles según volumen de cartera</small>
                  </Link>
                  <Link
                    href="/servicios/analisis-de-cartera"
                    onClick={closeNav}
                    className={pathname === '/servicios/analisis-de-cartera' ? 'active' : ''}
                  >
                    <strong>05. Análisis y Diagnóstico de Cartera</strong>
                    <small>Dictamen de recuperabilidad en 5 días hábiles</small>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/nosotros"
                onClick={closeNav}
                className={pathname === '/nosotros' ? 'active' : ''}
              >
                Nosotros
              </Link>
            </li>

            <li>
              <Link
                href="/metodo-y-cumplimiento"
                onClick={closeNav}
                className={pathname === '/metodo-y-cumplimiento' ? 'active' : ''}
              >
                Método & Compliance
              </Link>
            </li>

            <li>
              <Link
                href="/cobertura-nacional"
                onClick={closeNav}
                className={pathname === '/cobertura-nacional' ? 'active' : ''}
              >
                Cobertura
              </Link>
            </li>


            <li>
              <Link className="nav-cta btn-nav-cta" href="/contacto" onClick={closeNav}>
                Agendar diagnóstico <span className="arr" aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
