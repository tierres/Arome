import classes from './Navigation.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'

export const Navigation = () => {
  const isTheTeasPage = location.pathname.startsWith('/teas')
  const isItATeaDetailsPage = location.pathname.startsWith('/teas/')
  const isItAUtensilDetailsPage = location.pathname.startsWith('/utensils/')

  let teaOrUtensil = ''
  let teaOrUtensilLink = ''
  if (isTheTeasPage) {
      teaOrUtensil = "Chás" 
      teaOrUtensilLink = '/teas'
  } else { 
      teaOrUtensil = "Utensílios"
      teaOrUtensilLink = '/utensils'
  }

  return(
    <div className={classes.navigationContainer}>
        <SectionContainer className={classes.sectionContainer}>
            <a href="/" className={classes.firstsAnchors}>Página Inicial </a>
            <span>{'>'} </span>
            <a href={teaOrUtensilLink} className={isItATeaDetailsPage ? classes.firstsAnchors : classes.lastAnchor}>{teaOrUtensil} </a>
            {(isItATeaDetailsPage || isItAUtensilDetailsPage) ? (
            <>
              <span>{'>'} </span>
              <a href="" className={classes.lastAnchor}>nome do produto</a>
            </>
            ) : null}
            
        </SectionContainer>
    </div>
  );
};

              //  <div className={classes.navigation}>
              //      <a href="/" className={classes.firstsAnchors}>Página Inicial </a>
              //      <span>{'>'} </span>
              //      <a href={isATeaDetailPage ? "/teas" : "/utensils"} className={classes.firstsAnchors}>{teaOrUtensil} </a>
              //      <span>{'>'} </span>
              //      <a href="" className={classes.lastAnchor}>{product.short_name}</a>
              //  </div>