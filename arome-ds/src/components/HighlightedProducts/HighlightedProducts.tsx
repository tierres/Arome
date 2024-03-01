import classes from './HighlightedProducts.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { LittleProductCard } from '../shared/LittleProductCard/LittleProductCard';


export const HighlightedProducts = () => {
    // states -- use effect

    return(
        <div className={classes.whiteContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1 className={classes.tittle}>Produtos em destaque</h1>
                </div>
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
            </SectionContainer>
        </div>
    )
}