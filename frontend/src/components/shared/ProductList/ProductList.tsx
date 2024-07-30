import classes from './ProductList.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'
import { LittleProductCard } from '../LittleProductCard/LittleProductCard'
import { useEffect, useState } from 'react';

import { IGenericProduct } from '@/types/generic_product'

async function getProducts(productType: string) {
  let response = await fetch(`http://localhost:3000/${productType}`) 
  let data: IGenericProduct[] = await response.json() 
  return data
}

interface IProductListProps {
  productType: string
}

export const ProductList = ({productType} : IProductListProps) => {
  const [subTypes, setSubTypes] = useState<string[]>([])
  const [products, setProducts] = useState<IGenericProduct[]>([])
  const [typeFilterState, setTypeFilterState] = useState<string>('')
  const [orderFilterState, setTypeOrderFilterState]

  useEffect(() => {
    getProducts(productType).then(data => {
      setSubTypes(
        [...new Set(data.map(product => product.sub_type))]
      )
      setProducts(data)
    })
  }, [])

  const handleTypeFilterChange = (event) => 

  return(
    <div className={classes.productListContainer}>
      <SectionContainer className={classes.sectionContainer}>
        <div className={classes.filtersContainer}>
            <span className={classes.spanStyle}>57 PRODOTUS ENCONTRADOS</span>
            <div className={classes.typeFilter}>
              <label htmlFor="type" className={classes.labelStyle}>Tipo </label>
              <select id="type" className={classes.selectStyle}>
                {subTypes.map(subType => (
                  <option value={subType} key={subType}>{subType}</option>
                ))}
              </select>
            </div>
            <div className={classes.orderFilter}>
              <label htmlFor="order" className={classes.labelStyle}>Ordenar </label>
              <select id="order" className={classes.selectStyle}>
                <option value="">Destaques</option>
                <option value="">nome A-Z</option>
                <option value="">nome Z-A</option>
                <option value="">menores preços</option>
                <option value="">maiores preços</option>
              </select>
            </div>
        </div>
        <hr />
        <div className={classes.listContainer}>
          {products.filter(product => product.sub_type === ).map(product => (
              <LittleProductCard
                  product={product}
              />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};
