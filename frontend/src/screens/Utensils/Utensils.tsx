import { Header } from "../../components/shared/Header/Header.tsx";

import { ProductList } from "../../components/shared/ProductList/ProductList.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import './Utensils.css'

export const Utensils = () => {
  return (
    <div className='utensilsScreen'>
        <Header />

        <ProductList />
        <Footer />
    </div>
  );
}