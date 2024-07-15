import { Header } from "../../components/shared/Header/Header.tsx";
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx"
import { ProductCard } from "../../components/ProductCard/ProductCard.tsx";
import { Prepare } from "../../components/Prepare/Prepare.tsx";
import { IsntThis } from "../../components/IsntThis/IsntThis.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './ProductPage.css'

async function getProduct(slug:string, productType: string){
  let response = await fetch(`http://localhost:3000/products/${productType}/${slug}`) 
  let data = await response.json() 
  return data
}

interface IGenericProduct {
  type: string
  id: string
  name: string
  short_name: string
  price: number
  image: string
}

export const ProductPage = () => {
  const currentUrl = window.location.pathname
  const { slug } = useParams()
  const [product, setProduct] = useState<IGenericProduct>()
  const [productType, setProductType] = useState<string>('')

  useEffect(() => {
    switch (true) {
      case currentUrl.includes('/teas/'):
        setProductType('teas')
        break;
      case currentUrl.includes('/utensils/'):
        setProductType('utensils')
        break;
    }

    if (slug && productType)
    getProduct(slug, productType).then(data => {
        setProduct(data)
    })
}, [slug, productType])

  return (
    <div className='productDetailsScreen'>
        <Header />
        <Navigation product={product}/>
        <ProductCard product={product}/>
        {productType === 'teas' ? <Prepare /> : null}
        <IsntThis />
        <Footer />
    </div>
  );
}