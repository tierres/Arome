import classes from './ProductCard.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'

export const ProductCard = () => {
    return(
        <div className={classes.productCardContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1>Infusão Gracia Blend</h1>
                </div>
                <div>
                    <div className={classes.gallery}>

                    </div>
                    <div className={classes.productInfos}>

                    </div>
                </div>
                <div>

                </div>
            </SectionContainer>
        </div>
    )
}