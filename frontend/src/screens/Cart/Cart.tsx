import { Header } from "../../components/shared/Header/Header.tsx";

import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useEffect } from 'react'

import './Cart.css'

// Adiciona o efeito para rolar para o topo
useEffect(() => {
  window.scrollTo(0, 0); // Rola a página para o topo
}, []); // Executa apenas na montagem do componente

export const Cart = () => {
  return (
    <div className='cartScreen'>
        <Header />

        <Footer />
    </div>
  );
}