import classes from './Header.module.css'

import Logo from './vectors/logo.svg'
import Cart from './vectors/cart.svg'
import Lupa from './vectors/lupa.svg'
import User from './vectors/user.svg'

import { SectionContainer } from '../SectionContainer/SectionContainer'

import { Link, NavLink } from 'react-router-dom'

interface ICustomLinks {
  to: string
  children: string
}

const CustomLink = (params: ICustomLinks) => {
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
            <img src={Logo} alt="Vector-Logo" />
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
            <CustomLink to='/buildyour'>MONTE O SEU</CustomLink>
            <span className={classes.linksContainerItem}>•</span>
            <CustomLink to='/becomeamember'>AROME CLUB</CustomLink>
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