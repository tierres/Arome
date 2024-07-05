import classes from './InfusionsAndTeas.module.css'
import infusionsAndTeasImg from './images/infusions-and-teas_small.jpg'

export const InfusionsAndTeas = () => {
  return(
    <div className={classes.imageContainer}>
        <img className={classes.img} src={infusionsAndTeasImg} alt="Chás" />
    </div>
  );
};
