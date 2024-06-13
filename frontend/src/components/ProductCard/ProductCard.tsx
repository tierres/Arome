import classes from './ProductCard.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import CupOfTeaImage from './cup_of_tea.png'
import NutricionFacts from './nutricion_facts.png'
import PlusIcon from './plus_icon.png'

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
                
                <div className={classes.mediaAndInfosContainer}>
                    <div className={classes.gallery}>
                        <div className={classes.littleMedias}>
                            <img className={classes.littleImage} src={CupOfTeaImage} alt="" />
                            <img className={classes.littleImage} src={NutricionFacts} alt="" />
                            <img className={classes.littleImage} src={PlusIcon} alt="" />
                        </div>
                        <div className={classes.bigMedia}>
                            <img className={classes.bigImage} src={product.image} alt="" />
                        </div>
                    </div>
                    <div className={classes.productInfos}>     
                        <h1 className={classes.tittle}>{product.name}</h1>
                        <p className={classes.priceAndQuantity}>PREÇO R$66,50</p>
                        <p className={classes.priceAndQuantity}>QUANTIDADE 100g</p>
                        <button className={classes.buttons}>
                            <img src='' />
                        </button>
                        <button className={classes.buttons}>
                            <img src='' />
                        </button>
                    </div>
                </div>
                <div className={classes.prepareContainer}>
                    <h1 className={classes.prepareTittle}>PREPARO</h1>
                </div>
            </SectionContainer>
        </div>
    )
}