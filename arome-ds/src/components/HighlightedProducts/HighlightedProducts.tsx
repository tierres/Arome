import classes from './HighlightedProducts.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'


export const HighlightedProducts = () => {
    return(
        <div className={classes.whiteContainer}>
            <SectionContainer>
                <div className={classes.tittle}>
                    <h1>Produtos em destaque</h1>
                </div>
                <div>
                    
                </div>
            </SectionContainer>
        </div>
    )
}