import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { CardCommerce } from '../../../Components/CardCommerce'
import { CategoryCard } from '../../../Components/CategoryCard'
import useCategoryContext from '../../../contexts/categoryCommerce.context'
import categoriesData from '../categories.data'

import style from './style.module.css'

export const CommerceCategory = () => {
  const { commerces, setCommerces, currentFilter, setCurrentFilter } = useCategoryContext()

  const filteredData = categoriesData.filter(item => item.title === currentFilter);

  console.log(commerces)
  return (
    <>
      <h1 className={style.title}>Categorias</h1>
      <div className={style.container}>
        <div className={style.category}>
          {categoriesData.map(category =>
            <CategoryCard title={category.title} />

          )}

        </div>
        <div className={style.card}>
          {currentFilter !== "Todas" ? (
            commerces.filter(item => item.attributes.categoria.includes(currentFilter)).map(commerce =>
              <CardCommerce
                icon=""
                route="About"
                title={commerce.nome}
                adress={commerce.attributes.endereco}
                time={commerce.attributes.horarios.dia}
              />
            )
          ) : (commerces.map(commerce =>
            <CardCommerce
              icon=""
              route="About"
              title={commerce.nome}
              adress={commerce.attributes.endereco}
              time={commerce.attributes.horarios.dia}
            />
          ))


          }
        </div>
      </div>
    </>
  )
}

