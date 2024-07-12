import classes from './ProductList.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'

export const ProductList = () => {
  return(
    <div className={classes.productListContainer}>
        <SectionContainer className={classes.sectionContainer}>
            <div className={classes.filtersContainer}>
              Tipo Ordenar
            </div>
            <div>

            </div>
        </SectionContainer>
    </div>
  );
};
