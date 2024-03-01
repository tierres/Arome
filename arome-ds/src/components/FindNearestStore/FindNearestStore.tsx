import classes from './FindNearestStore.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import storeImg from './vectors/arome-store.png'
import locationIcon from './vectors/location-icon.svg'

export const FindNearestStore = () => {
    return(
        <div className={classes.redContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1 className={classes.text}>Encontre a Aromê mais perto<br/>de <strong>VOCÊ</strong></h1>
                    <img src={locationIcon} alt="" />
                </div>
                <div className={classes.storeImage}>
                    <img src={storeImg} alt="" />
                </div>
            </SectionContainer>
        </div>
    )
}