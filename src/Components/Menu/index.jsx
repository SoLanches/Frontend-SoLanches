import React from 'react'
import { MenuIcon } from '../../assets/icons/MenuIcon'
import { ProductCard } from '../ProductCard'

import style from './style.module.css'

export const CategorySection = ({ productsData, category }) => {
  return (
    <div>
      <h3 className={style.sectionCategoryTitle}>{category}</h3>
      <div className={style.sectionProducts}>
        {productsData.map((produto) => (
          <ProductCard
            title={produto.nome}
            category={produto.attributes.categoria}
            editable={false}
          />
        ))}
      </div>
    </div>
  )
}

export const Menu = ({ menu = {}, activeCategories = [] }) => {
  console.log(menu, activeCategories)
  return (
    <section className={style.sectionMenu}>
      <div className={style.sectionTitle}>
        <MenuIcon />
        <h2>Cardápio</h2>
      </div>
      {menu === {} ? (
        activeCategories.map((category, index) => {
          if (menu[category]) {
            return (
              <CategorySection
                key={index}
                productsData={menu[category]}
                category={category}
              />
            )
          }
          return <></>
        })
      ) : (
        <p>Não há itens no cardápio</p>
      )}
    </section>
  )
}
