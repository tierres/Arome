import classes from './LittleProductCard.module.css'
import PlusIcon from './vectors/plus-icon.svg'
import FavIcon from './vectors/fav-icon.svg'

interface IProductProps {
    tea: {
        name: string
        price: number
        image: string
        id: string
    }
}
   
export const LittleProductCard = (params: IProductProps) => {
    return(
        <div className={classes.littleProductCardContainer}>
            <div className={classes.topside}>
                <img className={classes.teaImage} src={params.tea.image} alt="" />
                <h2 className={classes.teaName}>
                    {params.tea.name}
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
                    <p className={classes.price}>R${params.tea.price.toFixed(2)}</p>
                </div>            
            </div>
        </div>    
    )
}