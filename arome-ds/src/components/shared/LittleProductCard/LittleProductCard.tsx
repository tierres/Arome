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
                <img src="" alt="" />
                <h4>
                    Infusão Chá do Jane
                </h4>
            </div>
            <div>
                Botão de +, botão de favoritar, texto 'A partir de' e preço
            </div>


        </div>    
    )
}