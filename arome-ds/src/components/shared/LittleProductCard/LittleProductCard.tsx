import { ReactNode } from 'react'
import classes from './LittleProductCard.module.css'
import PlusIcon from './Vectors/plus-icon.svg'
import FavIcon from './Vectors/fav-icon.svg'

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
                <h4>
                    Infusão Chá do Jane
                </h4>
            </div>
            <div className={classes.bottomside}>
                <div className={classes.bottomsideFirtLine}>
                    <button className={classes.buttons}>
                        <img src={PlusIcon} />
                    </button>
                    <p className={classes.aPartirDe}>A partir de</p>
                </div>
                <div className={classes.bottomsideSecondLine}>
                    <button className={classes.buttons}>
                        <img src={FavIcon} />
                    </button>
                    <p className={classes.price}>R$ 30,50</p>
                </div>                
            </div>
        </div>    
    )
}