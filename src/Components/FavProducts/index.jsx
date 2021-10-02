import { StarFilled } from '@ant-design/icons'
import React from 'react'
import { ProductCard } from '../ProductCard'

import style from './styles.module.css'

export const FavProducts = ({ products = [], favedIds = [] }) => {
  console.log(products)
  return (
    <section className={style.FavSection}>
      <div className={style.sectionTitle}>
        <StarFilled style={{ fontSize: '2rem' }} />
        <h2>Destaques</h2>
      </div>
      <div>
        {favedIds.length > 0 ? (
          <div className={style.products}>
            {products.map((product, index) => {
              if (favedIds.includes(product._id)) {
                return <ProductCard key={index} {...product} />
              }
            })}
          </div>
        ) : (
          <p className={style.noItens}>Não há itens em destaque!</p>
        )}
      </div>
    </section>
  )
}
