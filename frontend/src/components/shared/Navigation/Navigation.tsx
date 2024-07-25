import classes from './Navigation.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'
import { Link } from 'react-router-dom'

interface IGenericProduct {
  type: string
  id: string
  name: string
  short_name: string
  price: number
  image: string[]
  description: string
}

interface INavigationProps {
  typeLabel: string
  typeLink: string
  product?: IGenericProduct;
}


export const Navigation = ({typeLabel, typeLink, product} : INavigationProps) => {
  return(
    <div className={classes.navigationContainer}>
        <SectionContainer className={classes.sectionContainer}>
            <Link to="/" className={classes.firstsAnchors}>Página Inicial </Link>
            <span>{'>'} </span>
            <Link to={typeLink} className={product ? classes.firstsAnchors : classes.lastAnchor}>{typeLabel} </Link>
            {product ? (
            <>
              <span>{'>'} </span>
              <Link to="" className={classes.lastAnchor}>{product.short_name}</Link>
            </>
            ) : null}
            
        </SectionContainer>
    </div>
  );
};