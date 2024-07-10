import classes from './Navigation.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'

export const Navigation = () => {
  return(
    <div className={classes.navigationContainer}>
        <SectionContainer className={classes.sectionContainer}>
            <a href="/" className={classes.firstsAnchors}>Página Inicial </a>
            <span>{'>'} </span>
            <a href="/teas" className={classes.lastAnchor}>Chás </a>
        </SectionContainer>
    </div>
  );
};
