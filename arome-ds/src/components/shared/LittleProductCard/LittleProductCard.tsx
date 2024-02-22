import { ReactNode } from 'react'
import classes from './LittleProductCard.module.css'

interface ProductProps {
    children: ReactNode
    className?: string

   }
   
export const LittleProductCard = (params: ProductProps) => {
    return(
        <div className={classes.littleProductCardContainer}>
            <div>
                <img src="../../../public/api/imgs/infusao-gracia-blend.svg" alt="" />
                <h4>
                    Infusão Chá do Jane
                </h4>
            </div>
            <div>
                <button>+</button>
                <button>S2</button>
                <p>A partir de</p>
                <p>R$ 30,50</p>
            </div>
        </div>    
    )
}