import { ReactNode } from 'react'
import classes from './LittleProductCard.module.css'
import PlusIcon from './vectors/plus-icon.svg'
import FavIcon from './vectors/fav-icon.svg'

interface ProductProps {
    tea: {
        id: number
        name: string
        price: number
        img: string
    }
   }
   
export const LittleProductCard = (params: ProductProps) => {
    return(
        <div className={classes.littleProductCardContainer}>
            <div className={classes.topside}>
                <img src="/api/imgs/infusao-gracia-blend.svg" alt="" />
                <h2 className={classes.teaName}>
                    Infusão Red Tea
                </h2>
                <br/>
            </div>
            <div className={classes.bottomside}>
                <div className={classes.buttonsContainer}>
                    <button className={classes.buttons}>
                        <img src={PlusIcon} />
                    </button>
                    <button className={classes.buttons}>
                        <img src={FavIcon} />
                    </button>
                </div>
                <div className={classes.priceContainer}>
                    <p className={classes.aPartirDe}>A partir de</p>
                    <p className={classes.price}>R$30,50</p>
                </div>            
            </div>
        </div>    
    )
}