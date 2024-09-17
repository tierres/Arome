import classes from './IsntThis.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import IsntThisImgTea from './vectors/monika-grabkowska-452370-unsplash.svg'
import IsntThisImgUtensil from './vectors/conj-cha-utensils.png'

interface IIsntThisProps {
    productType: string
}



export const IsntThis = ({ productType }: IIsntThisProps) => {
    return(
        <div className={classes.isntThisContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.paragraphContainer}>
                    <p>
                    NÃO ERA ESSE {productType === 'teas' ? 'CHÁ' : 'PRODUTO'} QUE BUSCAVA? <br />EXPERIMENTE MONTAR O SEU
                    </p>
                </div>
                <div className={classes.imgAndButtonContainer}>
                    <img src={productType === 'teas' ? IsntThisImgTea : IsntThisImgUtensil} alt="Aromê" className={classes.imgStyle}/>
                    <button className={classes.buttonStyle}>Acesse &gt;</button>
                </div>
            </SectionContainer>
        </div>
    )
}