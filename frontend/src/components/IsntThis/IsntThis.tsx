import classes from './IsntThis.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'

export const IsntThis = () => {
    return(
        <div className={classes.isntThisContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    Is'nt This ?
                </div>
            </SectionContainer>
        </div>
    )
}