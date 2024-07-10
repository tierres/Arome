import classes from './ProductList.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'

export const ProductList = () => {
  return(
    <div className={classes.productListContainer}>
        <SectionContainer className={classes.sectionContainer}>
            <p>
                ProductList vai fazer uma verificação através do link se está em um página de chás ou utensílios, se for de chá é só chamar vários LittleProductCard, se for de utensílios é preciso estudar a possibilidade de utilizar o LittleProductCard.
            </p>
        </SectionContainer>
    </div>
  );
};
