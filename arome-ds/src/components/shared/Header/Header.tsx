import classes from './Header.module.css'
import Logo from './Vetores/logo.svg'
import Cart from './Vetores/cart.svg'
import Lupa from './Vetores/lupa.svg'
import User from './Vetores/user.svg'
import { SectionContainer } from '../SectionContainer/SectionContainer'

export const Header = () => {
  return(
    <header className={classes.headerContainer}> 
      <SectionContainer className={classes.sectionContainer}>  
        <div className={classes.logoConteiner}>
          <img src={Logo} alt="Vector-Logo" />
        </div>
      
        <div className={classes.linksContainer}>
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

        <div className={classes.iconsLinksContainer}>
          <button className={classes.buttons}>
            <img src={Cart} alt="Botão Carrinho" />
          </button>
          <button className={classes.buttons}>
            <img src={Lupa} alt="Botão Pesquisar" />
          </button>
          <button className={classes.buttons}>
            <img src={User} alt="Botão Painel de Usuário" />
          </button>
        </div>
      </SectionContainer>
    </header>
     
  );
};