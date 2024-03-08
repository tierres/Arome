import classes from './HighlightedProducts.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { LittleProductCard } from '../shared/LittleProductCard/LittleProductCard';
import LeftArrow from './vectors/left-arrow.svg'
import RightArrow from './vectors/right-arrow.svg'

import { useEffect } from 'react';
import { useState } from 'react';

async function getProducts(){
    let response = await fetch('/api/products.json') 
    let data = await response.json() 
    return data;
  }

export const HighlightedProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data['products'])
        })
    }, [])

    return(
        <div className={classes.highlightedProductsContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1 className={classes.tittle}>Produtos em destaque</h1>
                </div>
                <div className={classes.arrowsPlusCards}>
                    <button className={classes.arrowsButtons}>
                        <img src={LeftArrow} alt="" />
                    </button>
                    <div className={classes.cards}>
                        {/* utilizar um .map no LittleProductCard */}
                        {products.map(tea => (
                            <LittleProductCard
                                key={tea.id}
                                tea={tea}
                            />
                        ))}
                    </div>
                    <button className={classes.arrowsButtons}>
                        <img src={RightArrow} alt="" />
                    </button>
                </div>
            </SectionContainer>         
        </div>
    )
}