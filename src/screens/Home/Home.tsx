import { Header } from "../../components/shared/Header/Header.tsx";
import { SintaOPrazerDoAroma } from "../../components/SintaOPrazerDoAroma/SintaOPrazerDoAroma.tsx";
import { LearnHowTo } from "../../components/LearnHowTo/LearnHowTo.tsx";
import { HighlightedProducts } from "../../components/HighlightedProducts/HighlightedProducts.tsx";
import { FindNearestStore } from "../../components/FindNearestStore/FindNearestStore.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import './Home.css'

export const Home = () => {
  return (
    <div className='homeScreen'>
      <Header/>
      <SintaOPrazerDoAroma/>
      <LearnHowTo/>
      <HighlightedProducts/>
      <FindNearestStore/>
      <Footer/>
    </div>
  );
}