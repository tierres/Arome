import classes from './SintaOPrazerDoAroma.module.css'
import sintaImg from './sinta-img-hd.jpg'


export const SintaOPrazerDoAroma = () => {
  return(
    <div className={classes.sintaConteiner}>
      <img className={classes.img} src={sintaImg}/>
      <h1 className={classes.text}>
        SINTA O PRAZER DO AROMA
      </h1>
    </div>
  );
};

