import classes from './Menu.module.css'
import MenuIcon from './vectors/menu_icon.svg'
import { CustomLink } from '../shared/CustomLink/CustomLink'
import { useState } from "react"

export const Menu = () => {
    const [isOpen, setOpen] = useState(false)

    return(
        <>
            <button className={classes.menuButton} onClick={() => setOpen(true)} ><img src={MenuIcon} alt="Icone do Menu" /></button>

            {isOpen && (
                <div className={classes.menuStyle}>
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