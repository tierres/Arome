import classes from './ProductList.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'
import { LittleProductCard } from '../LittleProductCard/LittleProductCard'
import { useEffect, useState } from 'react';

import { IGenericProduct } from '@/types/generic_product'

async function getProducts(productType: string) {
  let response = await fetch(`https://arome.onrender.com/products/${productType}`, {method: "get"}) 
  let data: IGenericProduct[] = await response.json() 
  return data
}

interface IProductListProps {
  productType: string
}

export const ProductList = ({productType} : IProductListProps) => {
  const [subTypes, setSubTypes] = useState<string[]>(['Todos'])
  const [products, setProducts] = useState<IGenericProduct[]>([])
  const [typeFilterState, setTypeFilterState] = useState<string>('Todos')
  const [orderFilterState, setOrderFilterState] = useState<string>('Destaques')

  useEffect(() => {
    getProducts(productType).then(data => {
      setSubTypes(
        [...new Set(data.map(product => product.sub_type))]
      )
      setProducts(data)
    })
  }, [productType])

  const handleTypeFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilterState(event.target.value)
  }

  const handleOrderFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderFilterState(event.target.value)
  }

  const getSortedProducts = () => {
    let filteredProducts = typeFilterState === 'Todos' ? products : products.filter(product => product.sub_type === typeFilterState)

    switch(orderFilterState) {
      case 'nome A-Z':
        return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      case 'nome Z-A':
        return filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      case 'menores preços':
        return filteredProducts.sort((a, b) => a.price - b.price);
      case 'maiores preços':
        return filteredProducts.sort((a, b) => b.price - a.price);
      default:
        return filteredProducts.sort((a, b) => b.relevance - a.relevance);
    }
  }

  const sortedProducts = getSortedProducts()

  return(
    <div className={classes.productListContainer}>
      <SectionContainer className={classes.sectionContainer}>
        <div className={classes.filtersContainer}>
            <span className={classes.spanStyle}>
            {sortedProducts.length === 0
              ? 'NENHUM PRODUTO ENCONTRADO'
              : `${sortedProducts.length} PRODUTO${
                  sortedProducts.length > 1 ? 'S' : ''
                } ENCONTRADO${sortedProducts.length > 1 ? 'S' : ''}`}
            </span>
            <div className={classes.typeFilter}>
              <label htmlFor="type" className={classes.labelStyle}>Tipo </label>
              <select onChange={handleTypeFilterChange} id="type" className={classes.selectStyle}>
                <option value='Todos'>Todos</option>
                {subTypes.map(subType => (
                  <option value={subType} key={subType}>{subType}</option>
                ))}
                <option value='Meus Favoritos'>Meus Favoritos</option>
              </select>
            </div>
            <div className={classes.orderFilter}>
              <label htmlFor="order" className={classes.labelStyle}>Ordenar </label>
              <select onChange={handleOrderFilterChange} id="order" className={classes.selectStyle}>
                <option value="Destaques" key="Destaques">Destaques</option>
                <option value="nome A-Z" key="nome A-Z">nome A-Z</option>
                <option value="nome Z-A" key="nome Z-A">nome Z-A</option>
                <option value="menores preços" key="menores preços">menores preços</option>
                <option value="maiores preços" key="maiores preços">maiores preços</option>
              </select>
            </div>
        </div>
        <hr />
        <div className={classes.listContainer}>
          {
          sortedProducts.map(product => (
            <LittleProductCard
              product={product}
              key={product.id}
            />
            ))
          }
        </div>
      </SectionContainer>
    </div>
  );
};
