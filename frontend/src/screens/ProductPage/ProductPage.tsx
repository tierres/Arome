import { Header } from "../../components/shared/Header/Header.tsx";
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx"
import { ProductCard } from "../../components/ProductCard/ProductCard.tsx";
import { Prepare } from "../../components/Prepare/Prepare.tsx";
import { IsntThis } from "../../components/IsntThis/IsntThis.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { IGenericProduct } from '@/types/generic_product'

import './ProductPage.css'

async function getProduct(slug: string, productType: string){
  let response = await fetch(`http://localhost:3000/api/products/${productType}/${slug}`, {method: "get"}) 
  console.log(response)
  if(response.ok) {
    let data = await response.json() 
    return data
  }
  return null
}

interface IProductPageProps {
  productType: string
  typeLabel: string
  typeLink: string
}

export const ProductPage = ({productType, typeLabel, typeLink}:IProductPageProps) => {
  const { slug } = useParams()
  const [product, setProduct] = useState<IGenericProduct>()
  console.log(product)
  useEffect(() => {
    if (slug && productType)
    getProduct(slug, productType).then(data => {
        setProduct(data)
    })
}, [slug, productType])

  return (
    <div className='productDetailsScreen'>
        <Header />
        <Navigation product={product} typeLabel={typeLabel} typeLink={typeLink} />
        <ProductCard product={product} />
        {productType === 'teas' ? <Prepare /> : null}
        <IsntThis productType={productType} />
        <Footer />
    </div>
  );
}