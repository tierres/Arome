import classes from './FindNearestStore.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import storeImg from './arome-store.png'

export const FindNearestStore = () => {
    return(
        <div className={classes.redContainer}>
            <SectionContainer>
                <div className={classes.text}>

                </div>
                <div className={classes.storeImage}>
                    <img src={storeImg} alt="" />
                </div>
            </SectionContainer>
        </div>
    )
}