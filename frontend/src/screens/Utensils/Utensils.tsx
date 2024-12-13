import { Header } from "../../components/shared/Header/Header.tsx";
import { UtensilsBanner } from "../../components/UtensilsBanner/UtensilsBanner.tsx";
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx";
import { ProductList } from "../../components/shared/ProductList/ProductList.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useEffect } from 'react'

import './Utensils.css'

// Adiciona o efeito para rolar para o topo
useEffect(() => {
  window.scrollTo(0, 0); // Rola a página para o topo
}, []); // Executa apenas na montagem do componente

export const Utensils = () => {
  return (
    <div className='utensilsScreen'>
        <Header />
        <UtensilsBanner />
        <Navigation typeLink="/utensils/" typeLabel="Utensílios" />
        <ProductList productType="utensils" />
        <Footer />
    </div>
  );
}