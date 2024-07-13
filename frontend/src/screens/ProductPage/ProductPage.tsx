import { Header } from "../../components/shared/Header/Header.tsx";
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx"
import { ProductCard } from "../../components/ProductCard/ProductCard.tsx";
import { Prepare } from "../../components/Prepare/Prepare.tsx";
import { IsntThis } from "../../components/IsntThis/IsntThis.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './ProductPage.css'

async function getProduct(slug:string){
  let response = await fetch(`http://localhost:3000/products/${slug}`) 
  let data = await response.json() 
  return data
}

interface ITea {
  type: string
  id: string
  name: string
  short_name: string
  price: number
  image: string
}

interface IGenericProduct {
  
}

export const ProductPage = () => {
  const { slug } = useParams()

  const [product, setProduct] = useState<ITea>()

  useEffect(() => {
    if (slug)
    getProduct(slug).then(data => {
        setProduct(data)
    })
}, [slug])
  
  const isATeaDetailPage = location.pathname.startsWith('/teas/')

  return (
    <div className='productDetailsScreen'>
        <Header />
        <Navigation product={product}/>
        <ProductCard product={product}/>
        {isATeaDetailPage && <Prepare />}
        <IsntThis />
        <Footer />
    </div>
  );
}