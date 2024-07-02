import { Header } from "../../components/shared/Header/Header.tsx";
import { InfusionsAndTeas } from "../../components/InfusionsAndTeas/InfusionsAndTeas.tsx"
import { ProductList } from "../../components/ProductList/ProductList.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import './Teas.css'

export const Teas = () => {
  return (
    <div className='teasScreen'>
        <Header />
        <InfusionsAndTeas />
        <ProductList />
        <Footer />
    </div>
  );
}