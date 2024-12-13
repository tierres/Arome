import { Header } from "../../components/shared/Header/Header.tsx";
import { SejaUmSocio } from "../../components/SejaUmSocio/SejaUmSocio.tsx";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks.tsx";
import { ClubForm } from "../../components/ClubForm/ClubForm.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useEffect } from 'react'

import './BecomeAMember.css'

// Adiciona o efeito para rolar para o topo
useEffect(() => {
  window.scrollTo(0, 0); // Rola a página para o topo
}, []); // Executa apenas na montagem do componente

export const BecomeAMember = () => {
  return (
    <div className='becomeAMemberScreen'>
        <Header />
        <SejaUmSocio />
        <HowItWorks />
        <ClubForm />
        <Footer />
    </div>
  );
}