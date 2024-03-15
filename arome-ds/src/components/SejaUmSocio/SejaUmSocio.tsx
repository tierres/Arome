import classes from './SejaUmSocio.module.css'
import socioImg from './vectors/socio-grop.jpg'
//import socioImg from './vectors/'


export const SejaUmSocio = () => {
  return(
    <div className={classes.socioContainer}>
      <img src={socioImg} alt="" />
    </div>
  );
};
