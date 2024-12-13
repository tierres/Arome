import { Header } from "../../components/shared/Header/Header.tsx";

import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useEffect } from 'react'

import './BuildYour.css'

// Adiciona o efeito para rolar para o topo
useEffect(() => {
  window.scrollTo(0, 0); // Rola a página para o topo
}, []); // Executa apenas na montagem do componente

export const BuildYour = () => {
  return (
    <div className='buildYourScreen'>
        <Header />

        <Footer />
    </div>
  );
}