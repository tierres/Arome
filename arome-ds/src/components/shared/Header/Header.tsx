import classes from './Header.module.css'
import Logo from './Vetores/vector-logo.svg'

export const Header = () => {
  return(
    <header className={classes.header}>
      <img src={Logo} alt="Vector-Logo" />
      <div className={classes.links}>
        <p>LINK LINK LINK LINK</p>
      </div>
      <div className={classes.iconsLinks}>
        <p>ICON ICON ICON</p>
      </div>
    </header>
  );
};