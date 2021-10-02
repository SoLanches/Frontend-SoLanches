import { StarFilled } from '@ant-design/icons'
import React from 'react'
import { ProductCard } from '../ProductCard'

import style from './styles.module.css'

export const FavProducts = ({ products }) => {
  console.log(products)
  return (
    <>
      <div className={style.sectionTitle}>
        <StarFilled style={{ fontSize: '2rem' }} />
        <h2>Destaques</h2>
        <div className={style.products}>
          {/* {products.map((product, index) => {
            return <ProductCard key={index} {...product} />
          })} */}
        </div>
      </div>
    </>
  )
}
