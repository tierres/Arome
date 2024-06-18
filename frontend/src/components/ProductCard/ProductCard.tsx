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
                <div className={classes.navigation}>
                    <p>Home{'>'}Chás{'>'}Valeriana Garden</p>
                </div>
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
                        <hr />
                        <br />
                        <p className={classes.price}>R$ {product.price.toFixed(2)}</p>
                        <div className={classes.buttonsContainer}>
                            <button className={classes.buttons}>
                                <img src='' />
                            </button>
                            <button className={classes.buttons}>
                                <img src='' />
                            </button>
                        </div>
                        <div className={classes.aboutContainer}>
                            <h2 className={classes.aboutH2}>Sobre o chá {product.name}</h2>
                            <br />
                            <p className={classes.aboutParagraph}>
                                Uma mescla redonda que combina o 
                                sabor frutado do Rooibos africano, uma 
                                infusão altamente mineralizante, que não 
                                contém teína, com a carícia da baunilha, 
                                casca de laranja, pétalas de rosa, de 
                                marianinha e de girassol. Ideal para toda 
                                a família a qualquer hora do dia. 
                                Também disponível na base de Chá Preto, 
                                Verde, Vermelho e Branco.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.prepareContainer}>
                    <h1 className={classes.prepareTittle}>PREPARO</h1>
                </div>
            </SectionContainer>
        </div>
    )
}