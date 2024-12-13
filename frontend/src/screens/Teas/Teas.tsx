import { Header } from "../../components/shared/Header/Header.tsx";
import { InfusionsAndTeas } from "../../components/InfusionsAndTeas/InfusionsAndTeas.tsx"
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx";
import { ProductList } from "../../components/shared/ProductList/ProductList.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useEffect } from 'react'

import './Teas.css'

// Adiciona o efeito para rolar para o topo
useEffect(() => {
  window.scrollTo(0, 0); // Rola a página para o topo
}, []); // Executa apenas na montagem do componente

export const Teas = () => {
  return (
    <div className='teasScreen'>
        <Header />
        <InfusionsAndTeas />
        <Navigation typeLink="/teas/" typeLabel="Chás" />
        <ProductList productType="teas" />
        <Footer />
    </div>
  );
}