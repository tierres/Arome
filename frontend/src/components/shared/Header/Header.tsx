import classes from './Header.module.css'

import Logo from './vectors/logo.svg'
import Cart from './vectors/cart.svg'
import Lupa from './vectors/lupa.svg'
import User from './vectors/user.svg'
import Menu from './vectors/menu.svg'

import { SectionContainer } from '../SectionContainer/SectionContainer'

import { Link, NavLink } from 'react-router-dom'

interface ICustomLink {
  to: string
  children: string
}

const CustomLink = (params: ICustomLink) => {
  return (
    <NavLink
      className={({ isActive }) => classes.linksContainerItem + ' ' + (isActive ? classes.activeLink : "")}
      // a linha 20 é igual a isso:

      // className={function (navLinksParams) {
      //   const isActive = navLinksParams.isActive
      //        ou
      //   const { isActive: possoEscolherONome } = navLinksParams

      //   if (isActive === true) return classes.activeLink
      //   else return ''
      // }}
      to={params.to}
    >
      {params.children}
    </NavLink>
  );
};

export const Header = () => {
  return(
    <header className={classes.headerContainer}> 
      <SectionContainer className={classes.sectionContainer}>  
        <div className={classes.logoContainer}>
          <Link to='/'>
            <img className={classes.logoImg} src={Logo} alt="Vector-Logo" />
          </Link>
        </div>
      
        <div className={classes.linksContainer}>
          <nav>
            <CustomLink to='/about'>SAIBA MAIS</CustomLink>
            <span className={classes.linksContainerItem}>•</span>
            <CustomLink to='/teas'>CHÁS</CustomLink>
            <span className={classes.linksContainerItem}>•</span>
            <CustomLink to='/utensils'>UTENSÍLIOS</CustomLink>
            <span className={classes.linksContainerItem}>•</span>
            <CustomLink to='/build-your'>MONTE O SEU</CustomLink>
            <span className={classes.linksContainerItem}>•</span>
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
          <button className={classes.menuButton}>
            <img src={Menu} alt="Botão Menu" />
          </button>
        </div>
      </SectionContainer>
    </header>
     
  );
};