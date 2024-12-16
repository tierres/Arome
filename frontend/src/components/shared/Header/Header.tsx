import classes from './Header.module.css'

import LogoDesktop from './vectors/logo_desktop.svg'
import LogoMobile from './vectors/logo_mobile.svg'
import Cart from './vectors/cart.svg'
import Lupa from './vectors/lupa.svg'
import User from './vectors/user.svg'

import { SectionContainer } from '../SectionContainer/SectionContainer'

import { Link } from 'react-router-dom'
import { CustomLink } from '../CustomLink/CustomLink'

import { Menu } from '../../Menu/Menu'


export const Header = () => {
  return(
    <header className={classes.headerContainer}> 
      <SectionContainer className={classes.sectionContainer}>  
        <div className={classes.logoContainer}>
          <Link to='/'>
            <picture>
              <source srcSet={LogoMobile} media='(max-width: 768px)' />
              <img 
                className={classes.logoImg} 
                src={LogoDesktop} 
                alt="Logo do site"/>
            </picture>
          </Link>
        </div>
      
        <div className={classes.linksContainer}>
          <nav>
            <CustomLink to='/about'>SAIBA MAIS</CustomLink>
            <span className={classes.spanStyle}>•</span>
            <CustomLink to='/teas'>CHÁS</CustomLink>
            <span className={classes.spanStyle}>•</span>
            <CustomLink to='/utensils'>UTENSÍLIOS</CustomLink>
            <span className={classes.spanStyle}>•</span>
            <CustomLink to='/build-your'>MONTE O SEU</CustomLink>
            <span className={classes.spanStyle}>•</span>
            <CustomLink to='/become-a-member'>AROME CLUB</CustomLink>
          </nav>
        </div>

        <div className={classes.iconsLinksContainer}>
          <button className={classes.cartButton}>
            <img src={Cart} alt="Botão Carrinho" />
          </button>
          <button className={classes.searchButton}>
            <img src={Lupa} alt="Botão Pesquisar" />
          </button>
          <button className={classes.userButton}>
            <img src={User} alt="Botão Painel de Usuário" />
          </button>
          <Menu />
        </div>
      </SectionContainer>
    </header>
     
  );
};