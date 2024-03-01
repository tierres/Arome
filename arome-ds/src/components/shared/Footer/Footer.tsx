import { SectionContainer } from "../SectionContainer/SectionContainer"
import classes from './Footer.module.css'

export const Footer = () => {
    return(
        <footer className={classes.blackContainer}>
            <SectionContainer>
                <div className={classes.editarIssoAqui}>
                    Design By Carina Fonseca<br/>
                    Programmer By Tierres Griep
                </div>
            </SectionContainer>
        </footer>
    )
}