import classes from './HighlightedProducts.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { LittleProductCard } from '../shared/LittleProductCard/LittleProductCard';
import LeftArrow from './vectors/left-arrow.svg'
import RightArrow from './vectors/right-arrow.svg'
import { IGenericProduct } from '@/types/generic_product';

import { useEffect } from 'react';
import { useState } from 'react';

import Slider from "react-slick";

async function getProducts(){
    let response = await fetch('http://localhost:3000/products') 
    let data = await response.json() 
    return data;
  }

export const HighlightedProducts = () => {
    const [products, setProducts] = useState<IGenericProduct[]>([])

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data)
        })
    }, [])

    var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: (
                    <img src={LeftArrow} alt="" />
            ),
            nextArrow: (
                    <img src={RightArrow} alt="" />
            ),
            dotsClass: 'slick-dots ' + classes.dots
      };

    return(
        <div className={classes.highlightedProductsContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1 className={classes.tittle}>Produtos em destaque</h1>
                </div>
                <div className={classes.arrowsPlusCards}>
                        <Slider {...settings} className={classes.slider}>
                                {products.map(product => (
                                        <LittleProductCard
                                            product={product}
                                        />
                                ))}
                        </Slider>
                </div>
            </SectionContainer>         
        </div>
    )
}