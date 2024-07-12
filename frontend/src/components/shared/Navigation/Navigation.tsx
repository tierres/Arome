import classes from './Navigation.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

interface ITea {
  type: string
  id: string
  name: string
  short_name: string
  price: number
  image: string
}

interface INavigationProps {
  product?: ITea;
}


export const Navigation = ({product} : INavigationProps) => {
  const location = useLocation()
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
            <Link to="/" className={classes.firstsAnchors}>Página Inicial </Link>
            <span>{'>'} </span>
            <Link to={teaOrUtensilLink} className={isItATeaDetailsPage ? classes.firstsAnchors : classes.lastAnchor}>{teaOrUtensil} </Link>
            {(isItATeaDetailsPage || isItAUtensilDetailsPage) && product ? (
            <>
              <span>{'>'} </span>
              <Link to="" className={classes.lastAnchor}>{product.short_name}</Link>
            </>
            ) : null}
            
        </SectionContainer>
    </div>
  );
};