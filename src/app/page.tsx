'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Cumplimiento from '@/components/Cumplimiento';
import Divisiones from '@/components/Divisiones';
import Metodo from '@/components/Metodo';
import Respaldo from '@/components/Respaldo';
import Expediente from '@/components/Expediente';
import Cobertura from '@/components/Cobertura';
import FAQ from '@/components/FAQ';
import Agendar from '@/components/Agendar';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import ToTop from '@/components/ToTop';

export default function Home() {
  const [activeModal, setActiveModal] = useState<'modal-aviso' | 'modal-terminos' | null>(null);

  const handleOpenModal = (modalId: 'modal-aviso' | 'modal-terminos') => {
    setActiveModal(modalId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Cumplimiento />
        <Divisiones />
        <Metodo />
        <Respaldo />
        <Expediente />
        <Cobertura />
        <FAQ />
        <Agendar />
      </main>
      <Footer onOpenModal={handleOpenModal} />
      <Modals activeModal={activeModal} onClose={handleCloseModal} />
      <ToTop />
    </>
  );
}
