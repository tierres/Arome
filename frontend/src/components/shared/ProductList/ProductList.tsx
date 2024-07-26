import classes from './ProductList.module.css'
import { SectionContainer } from '../SectionContainer/SectionContainer'
import { useEffect, useState } from 'react';

import { IGenericProduct } from '@/types/generic_product'

async function getProducts(productType: string) {
  let response = await fetch(`http://localhost:3000/${productType}`) 
  let data: IGenericProduct[] = await response.json() 
  return data
}

interface IProductListProps {
  productType: string
  // subTypeOptions: string[]
}

export const ProductList = ({productType} : IProductListProps) => {
  const [subTypes, setSubTypes] = useState<string[]>([])

  useEffect(() => {
    // setSubTypes([...subTypes, '1'])
    // setSubTypes([...subTypes, '2'])
    // setSubTypes([...subTypes, '3'])
    
    // setSubTypes(prev1 => [...prev1, '1'])
    // setSubTypes(old2 => [...old2, '2'])
    // setSubTypes(oldAfter2 => [...oldAfter2, '3'])

    getProducts(productType).then(data => {
      // data.map(product => (
      //   setSubTypes([...subTypes, product.sub_type])
      // ))

      setSubTypes(
        [...new Set(data.map(product => product.sub_type))]
      )
    })
  }, [])

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
          <br />
          <br />
          <br />

          <p>produto</p>
          <p>produto</p>
          <p>produto</p>
          <p>produto</p>
        </div>
      </SectionContainer>
    </div>
  );
};
