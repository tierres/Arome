import classes from './SintaOPrazerDoAroma.module.css'
import sintaImg from './sinta-img.jpg'


export const SintaOPrazerDoAroma = () => {
  return(
    <div className={classes.container}>
      <img className={classes.img} src={sintaImg}/>
      <h1 className={classes.text}>
        SINTA O PRAZER DO AROMA
      </h1>
    </div>
  );
};

