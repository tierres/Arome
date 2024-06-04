import { Header } from "../../components/shared/Header/Header.tsx";
import { ProductCard } from "../../components/ProductCard/ProductCard.tsx";
import { IsntThis } from "../../components/IsntThis/IsntThis.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import './ProductDetails.css'

export const ProductDetails = () => {
  return (
    <div className='productDetailsScreen'>
        <Header />
        <ProductCard />
        <IsntThis />
        <Footer />
    </div>
  );
}