import classes from './HighlightedProducts.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { LittleProductCard } from '../shared/LittleProductCard/LittleProductCard';


export const HighlightedProducts = () => {
    return(
        <div className={classes.whiteContainer}>
            <SectionContainer>
                <div className={classes.tittle}>
                    <h1>Produtos em destaque</h1>
                </div>
                <div>
                    <LittleProductCard>
                        children
                    </LittleProductCard>
                </div>
            </SectionContainer>
        </div>
    )
}