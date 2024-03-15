import classes from './SejaUmSocio.module.css'
import socioImg from './vectors/work-in-progress-4.jpg'

export const SejaUmSocio = () => {
  return(
    <div className={classes.socioContainer}>
      <img className={classes.img} src={socioImg} alt="" />
    </div>
  );
};
