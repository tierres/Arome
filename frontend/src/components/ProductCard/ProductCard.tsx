import classes from './ProductCard.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import CupOfTeaImage from './cup_of_tea.png'
import NutricionFacts from './nutricion_facts.png'

async function getProduct(slug:string){
    let response = await fetch(`http://localhost:3000/products/${slug}`) 
    let data = await response.json() 
    return data;
  }

interface ITea {
    name: string
    price: number
    image: string
    slug: string
}

export const ProductCard = () => {
    const { slug } = useParams()

    const [product, setProduct] = useState<ITea>()

    useEffect(() => {
        if (slug)
        getProduct(slug).then(data => {
            setProduct(data)
        })
    }, [slug])

    if (!product) {
        return <div>Carregando...</div>
    }

    return(
        <div className={classes.productCardContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1>{product.name}</h1>
                </div>
                <div>
                    <div className={classes.gallery}>
                        <div className={classes.twoLittleImages}>
                            <img className={classes.littleImage} src={CupOfTeaImage} alt="" />
                            <img className={classes.littleImage} src={NutricionFacts} alt="" />
                        </div>
                        <div className={classes.bigImage}>
                            <img className={classes.bigImage} src={product.image} alt="" />
                        </div>
                    </div>
                    <div className={classes.productInfos}>

                    </div>
                </div>
                <div>
                    <h1>PREPARO</h1>
                </div>
            </SectionContainer>
        </div>
    )
}