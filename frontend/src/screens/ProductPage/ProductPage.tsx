import { Header } from "../../components/shared/Header/Header.tsx";
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx"
import { ProductCard } from "../../components/ProductCard/ProductCard.tsx";
import { Prepare } from "../../components/Prepare/Prepare.tsx";
import { IsntThis } from "../../components/IsntThis/IsntThis.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import './ProductPage.css'

export const ProductPage = () => {
  const isATeaDetailPage = location.pathname.startsWith('/teas/')

  return (
    <div className='productDetailsScreen'>
        <Header />
        <Navigation />
        <ProductCard />
        {isATeaDetailPage && <Prepare />}
        <IsntThis />
        <Footer />
    </div>
  );
}