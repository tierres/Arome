import classes from './IsntThis.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import IsntThisImg from './vectors/monika-grabkowska-452370-unsplash.svg'

export const IsntThis = () => {
    return(
        <div className={classes.isntThisContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.paragraphContainer}>
                    <p>
                    NÃO ERA ESSE CHÁ QUE BUSCAVA? <br />EXPERIMENTE MONTAR O SEU
                    </p>
                </div>
                <div className={classes.imgAndButtonContainer}>
                    <img src={IsntThisImg} alt="Aromê" className={classes.imgStyle}/>
                    <button className={classes.buttonStyle}>Acesse &gt;</button>
                </div>
            </SectionContainer>
        </div>
    )
}