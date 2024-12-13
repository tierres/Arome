import { Header } from "../../components/shared/Header/Header.tsx";
import { SintaOPrazerDoAroma } from "../../components/SintaOPrazerDoAroma/SintaOPrazerDoAroma.tsx";
import { LearnHowTo } from "../../components/LearnHowTo/LearnHowTo.tsx";
import { HighlightedProducts } from "../../components/HighlightedProducts/HighlightedProducts.tsx";
import { FindNearestStore } from "../../components/FindNearestStore/FindNearestStore.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useEffect } from 'react'

import './Home.css'

// Adiciona o efeito para rolar para o topo
useEffect(() => {
  window.scrollTo(0, 0); // Rola a página para o topo
}, []); // Executa apenas na montagem do componente

export const Home = () => {
  return (
    <div className='homeScreen'>
      <Header/>
      <SintaOPrazerDoAroma/>
      <HighlightedProducts/>
      <LearnHowTo/>
      <FindNearestStore/>
      <Footer/>
    </div>
  );
}