import classes from './ProductList.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'

export const ProductList = () => {
  return(
    <div className={classes.productListContainer}>
      <SectionContainer className={classes.sectionContainer}>
        <div className={classes.filtersContainer}>
            <div className={classes.typeFilter}>
              <label htmlFor="type" className={classes.labelStyle}>Tipo </label>
              <select id="type" className={classes.selectStyle}>
                <option value="">Chá Branco</option>
                <option value="">Chá Preto</option>
                <option value="">Chá Verde</option>
                <option value="">Rooibos</option>
              </select>
            </div>
            
            <div className={classes.orderFilter}>
              <label htmlFor="order" className={classes.labelStyle}>Ordenar </label>
              <select id="order" className={classes.selectStyle}>
                <option value="">nome A-Z</option>
                <option value="">nome Z-A</option>
                <option value="">menores preços</option>
                <option value="">maiores preços</option>
              </select>
            </div>
        </div>
      </SectionContainer>
    </div>
  );
};
