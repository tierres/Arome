import classes from './HighlightedProducts.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { LittleProductCard } from '../shared/LittleProductCard/LittleProductCard';
import LeftArrow from './vectors/left-arrow.svg'
import RightArrow from './vectors/right-arrow.svg'


export const HighlightedProducts = () => {
    // states -- use effect

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
                        <LittleProductCard>
                        </LittleProductCard>
                        <LittleProductCard >
                        </LittleProductCard>
                        <LittleProductCard>
                        </LittleProductCard>
                        <LittleProductCard >
                        </LittleProductCard>
                    </div>
                    <button className={classes.arrowsButtons}>
                        <img src={RightArrow} alt="" />
                    </button>
                </div>
            </SectionContainer>         
        </div>
    )
}