import classes from './ProductCard.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import 'react-loading-skeleton/dist/skeleton.css'

import CupOfTeaImage from './images/cup_of_tea.png'
import NutricionFacts from './images/nutricion_facts.png'
import PlusIcon from './images/plus_icon.png'

import Spoon from './vectors/spoon.svg'
import Cup from './vectors/cup.svg'
import Thermometer from './vectors/thermometer.svg'
import Clock from './vectors/clock.svg'
import SunAndIce from './vectors/sun-ice.svg'
 
async function getProduct(slug:string){
    let response = await fetch(`http://localhost:3000/products/${slug}`) 
    let data = await response.json() 
    return data
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
    const [quantity, setQuantity] = useState<number>(1)

    const quantityDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const quantityIncrement = () => {
        setQuantity(quantity + 1)
    }

    useEffect(() => {
        if (slug)
        getProduct(slug).then(data => {
            setProduct(data)
        })
    }, [slug])

    if (!product) {
        return(
            <div className={classes.productCardContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.navigation}>
                    <p className={classes.navSkeleton}></p>
                </div>
                <div className={classes.mediaAndInfosContainer}>
                    <div className={classes.gallery}>
                        <div className={classes.littleMedias}>
                            <div className={classes.littleImageSkeleton} />
                            <div className={classes.littleImageSkeleton} />
                            <div className={classes.littleImageSkeleton} />
                        </div>
                        <div className={classes.bigMedia}>
                            <div className={classes.bigImageSkeleton} />
                        </div>
                    </div>
                    <div className={classes.productInfos}>     
                        <div className={classes.tittleSkeleton}></div>
                        <hr />
                        <br />
                        <div className={classes.priceContainerSkeleton}>
                            <p className={classes.price}>R$</p>
                            <div className={classes.priceSkeleton}></div>
                        </div>
                        parei de fazer o skeleton aqui
                        <br />
                        <br />
                        <div className={classes.buttonsContainer}>
                            <button className={classes.buttons}>
                                Quantidade
                                <img src='' />
                            </button>
                            <button className={classes.buttons}>
                                Adicionar ao carrinho
                                <img src='' />
                            </button>
                        </div>
                        <div className={classes.aboutContainer}>
                            <hr />
                            <br />
                            <h2 className={classes.aboutH2}>Sobre o chá </h2>
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
                        <br />
                        <br />
                        <div className={classes.buttonsContainer}>
                            <div className={classes.quantityButton}>
                                <button className={classes.plusAndMinusButtons} onClick={quantityDecrement}>
                                    <strong>-</strong>
                                </button>
                                <p className={classes.quantityNumber}><strong>{quantity}</strong></p>
                                <button className={classes.plusAndMinusButtons} onClick={quantityIncrement}>
                                    <strong>+</strong>
                                </button>
                            </div>
                            <button className={classes.addCartButton}>
                                Adicionar ao carrinho
                                <img src='' />
                            </button>
                        </div>
                        <div className={classes.aboutContainer}>
                            <hr />
                            <br />
                            <h2 className={classes.aboutH2}>Sobre a {product.name}</h2>
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
                    <div className={classes.prepareSteps}>
                        <div className={classes.step}>
                            <img src={Spoon} className={classes.stepImage} />
                            <br />
                            <p>2 Medidas<br /> de chá</p>
                        </div>
                        <div className={classes.step}>
                            <img src={Cup} className={classes.stepImage} />
                            <br />
                            <p>200 ML de água</p>
                        </div>
                        <div className={classes.step}>
                            <img src={Thermometer} className={classes.stepImage} />
                            <br />
                            <p>Temperatura de<br /> infusão: 100ºC</p>
                        </div>
                        <div className={classes.step}>
                            <img src={Clock} className={classes.stepImage} />
                            <br />
                            <p>Tempo de infusão<br /> 6 a 10 minutos</p>
                        </div>
                        <div className={classes.step}>
                            <img src={SunAndIce} className={classes.stepImage} />
                            <br />
                            <p>Beba quente ou<br /> gelado</p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}