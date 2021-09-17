import React from 'react'
import { CardCommerce } from '../../../Components/CardCommerce'
import { CategoryCard } from '../../../Components/CategoryCard'
import useCategoryContext from '../../../contexts/categoryCommerce.context'
import categoriesData from '../categories.data'

import style from './style.module.css'

export const CommerceCategory = () => {
  const { commerces, setCommerces, currentFilter, setCurrentFilter } = useCategoryContext()

  return (
    <>
      <h1 className={style.title}>Categorias</h1>

      <div className={style.container}>
        <div className={style.category}>
          {categoriesData.map(category =>
            <CategoryCard title={category.title} imageUrl={category.image} />

          )}
        </div>
      </div>

      <h2 className={style.title}>{currentFilter}</h2>
      <div className={style.container}>
      <div className={style.card}>
        {currentFilter !== "Todas" ? (
          commerces.filter(item => item.attributes.categoria.includes(currentFilter)).map(commerce =>
            <CardCommerce
              route="About"
              title={commerce.nome}
              adress={commerce.attributes.endereco}
              time={commerce.attributes.horarios}
            />
          )
        ) : (commerces.map(commerce =>
          <CardCommerce
            route="About"
            title={commerce.nome}
            adress={commerce.attributes.endereco}
            time={commerce.attributes.horarios}
          />
        ))
        }
      </div>
      </div>

    </>

  )
}

