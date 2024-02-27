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
                <div className={classes.bottomsideButtonsContainer}>
                    <button className={classes.buttons}>
                        <img src={PlusIcon} />
                    </button>
                    <button className={classes.buttons}>
                        <img src={FavIcon} />
                    </button>
                </div>
                <div className={classes.bottomsidePrice}>
                    <p>A partir de</p>
                    <p>R$ 30,50</p>
                </div>
                
            </div>
        </div>    
    )
}