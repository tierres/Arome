import classes from './Menu.module.css'
import MenuIcon from './vectors/menu_icon.svg'
import Logo from './vectors/logo_full.svg'
import closeIcon from './vectors/close.svg'
import { CustomLink } from '../shared/CustomLink/CustomLink'
import { useState } from "react"

import { Link } from 'react-router-dom'

export const Menu = () => {
    const [isOpen, setOpen] = useState(false)

    return(
        <>
            <button className={classes.menuButton} onClick={() => setOpen(true)} ><img src={MenuIcon} alt="Icone do Menu" /></button>

            {isOpen && (
                <div className={classes.menuStyle}>
                    <div className={classes.upSideContainer}>
                        <div className={classes.logoContainer}>
                            <Link to='/'>
                                <picture>
                                    <img 
                                        className={classes.logoImg} 
                                        src={Logo} 
                                        alt="Logo do site"/>
                                </picture>
                            </Link>
                        </div>
                        <div className={classes.closeContainer}>
                            <button className={classes.closeButton}>
                                <img className={classes.closeImage} src={closeIcon} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className={classes.hrStyle}></div>

                    <nav className={classes.navStyle}>
                        <CustomLink to='/about'>SAIBA MAIS</CustomLink>        
                        <CustomLink to='/teas'>CHÁS</CustomLink>            
                        <CustomLink to='/utensils'>UTENSÍLIOS</CustomLink>  
                        <CustomLink to='/build-your'>MONTE O SEU</CustomLink>         
                        <CustomLink to='/become-a-member'>AROME CLUB</CustomLink>
                    </nav>
                </div>
                )}
            
        </>
    )
}