import { Header } from "../../components/shared/Header/Header.tsx";
import { InfusionsAndTeas } from "../../components/InfusionsAndTeas/InfusionsAndTeas.tsx"
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx";
import { ProductList } from "../../components/shared/ProductList/ProductList.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import './Teas.css'

export const Teas = () => {
  return (
    <div className='teasScreen'>
        <Header />
        <InfusionsAndTeas />
        <Navigation />
        <ProductList />
        <Footer />
    </div>
  );
}