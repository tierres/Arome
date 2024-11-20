import classes from './InfusionsAndTeas.module.css'
import infusionsAndTeasImgDesktop from './images/infusions-and-teas_small.jpg'
import infusionsAndTeasImgMobile from './images/chas_e_infusoes_image.png'

export const InfusionsAndTeas = () => {
  return(
    <div className={classes.imageContainer}>
      <picture>
              <source srcSet={infusionsAndTeasImgMobile} media='(max-width: 768px)' />
              <img 
                className={classes.img} 
                src={infusionsAndTeasImgDesktop} 
                alt="Imagem - Chás"/>
      </picture>
    </div>
  );
};
