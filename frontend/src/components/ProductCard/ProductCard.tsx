import classes from './ProductCard.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { useState } from 'react'

// import PlusIcon from './images/plus_icon.png'

interface IGenericProduct {
    type: string
    id: string
    name: string
    short_name: string
    price: number
    image: string[]
    description: string
}

interface IProductCardProps {
    product?: IGenericProduct;
  }

interface IProductGalleryProps {
    product: IGenericProduct
}

const ProductGallery = ({product} : IProductGalleryProps) => {
    const [bigImage, setBigImage] = useState<string>(product.image[0])

    return (
        <div className={classes.gallery}>
            <div className={classes.littleMedias}>
                {product.image.map((image, index) => (
                    <img key={index} className={classes.littleImage} src={image} onClick={() => setBigImage(image)}/>
                ))}
            </div>
            <div className={classes.bigMedia}>
                <img className={classes.bigImage} src={bigImage} alt="" />
            </div>
        </div>
    )
}

const CardButtons = () => {
    const [quantity, setQuantity] = useState<number>(1)

    const quantityDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const quantityIncrement = () => {
        setQuantity(quantity + 1)
    }

    return(
        <div className={classes.buttonsContainer}>
            <div className={classes.quantityButton}>
                <button className={classes.plusAndMinusButtons} onClick={quantityDecrement}>
                    <strong>-</strong>
                </button>
                <p className={classes.quantityNumber}><strong>{quantity}</strong></p>
                <button className={classes.plusAndMinusButtons} onClick={quantityIncrement}>
                    <strong>+</strong>
                </button>
            </div>
            <button className={classes.addCartButton}>
                Adicionar ao carrinho
                <img src='' />
            </button>
        </div>
    )
}

export const ProductCard = ({product} : IProductCardProps) => {
    if (!product) {
        return( //skeleton:
            <div className={classes.productCardContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.navigation}>
                    <p className={classes.navSkeleton}></p>
                </div>
                <div className={classes.mediaAndInfosContainer}>
                    <div className={classes.gallery}>
                        <div className={classes.littleMedias}>
                            <div className={classes.littleImageSkeleton} />
                            <div className={classes.littleImageSkeleton} />
                            <div className={classes.littleImageSkeleton} />
                        </div>
                        <div className={classes.bigMedia}>
                            <div className={classes.bigImageSkeleton} />
                        </div>
                    </div>
                    <div className={classes.productInfos}>     
                        <div className={classes.tittleSkeleton}></div>
                        <hr />
                        <br />
                        <div className={classes.priceContainerSkeleton}>
                            <p className={classes.price}>R$</p>
                            <div className={classes.priceSkeleton}></div>
                        </div>
                        parei de fazer o skeleton aqui
                        <br />
                        <br />
                        <div className={classes.buttonsContainer}>
                            <button className={classes.buttons}>
                                Quantidade
                                <img src='' />
                            </button>
                            <button className={classes.buttons}>
                                Adicionar ao carrinho
                                <img src='' />
                            </button>
                        </div>
                        <div className={classes.aboutContainer}>
                            <hr />
                            <br />
                            <h2 className={classes.aboutH2}>Sobre o chá </h2>
                            <br />
                            <p className={classes.aboutParagraph}>
                                Uma mescla redonda que combina o 
                                sabor frutado do Rooibos africano, uma 
                                infusão altamente mineralizante, que não 
                                contém teína, com a carícia da baunilha, 
                                casca de laranja, pétalas de rosa, de 
                                marianinha e de girassol. Ideal para toda 
                                a família a qualquer hora do dia. 
                                Também disponível na base de Chá Preto, 
                                Verde, Vermelho e Branco.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
        )
    }

    return(
        <div className={classes.productCardContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.mediaAndInfosContainer}>
                    <div>
                        <ProductGallery product={product} />
                    </div>
                    <div className={classes.productInfos}>     
                        <h1 className={classes.tittle}>{product.name}</h1>
                        <hr />
                        <br />
                        <p className={classes.price}>R$ {product.price.toFixed(2)}</p>
                        <br />
                        <br />
                        <CardButtons />
                        <div className={classes.aboutContainer}>
                            <hr />
                            <br />
                            <h2 className={classes.aboutH2}>Sobre a {product.type === 'tea' ? product.name.slice(0, -3) : product.name}</h2>
                            <br />
                            <p className={classes.aboutParagraph}>
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}