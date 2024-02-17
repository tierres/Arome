import classes from './Header.module.css'
import Logo from './Vetores/logo.svg'
import Cart from './Vetores/cart.svg'
import Lupa from './Vetores/lupa.svg'
import User from './Vetores/user.svg'

export const Header = () => {
  return(
    <header className={classes.header}>

      <div className={classes.logo}>
        <img src={Logo} alt="Vector-Logo" />
      </div>
    
      <div className={classes.links}>
        <nav>
          <a href=''>SAIBA MAIS</a>
          <a>•</a>
          <a href=''>CHÁS</a>
          <a>•</a>
          <a href=''>UTENSÍLIOS</a>
          <a>•</a>
          <a href=''>MONTE O SEU</a>
          <a>•</a>
          <a href=''>AROME CLUB</a>
        </nav>
      </div>

      <div className={classes.iconsLinks}>
        <button className={classes.cart}></button>
        <button></button>
        <button></button>
      </div>
      
    </header>
  );
};