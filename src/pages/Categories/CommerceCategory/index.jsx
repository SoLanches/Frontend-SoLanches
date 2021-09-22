import Item from 'antd/lib/list/Item'
import React from 'react'
import { CardCommerce } from '../../../Components/CardCommerce'
import { CategoryCard } from '../../../Components/CategoryCard'
import useCategoryContext from '../../../contexts/categoryCommerce.context'
import categoriesData from '../categories.data'

import style from './style.module.css'

export const CommerceCategory = () => {
  const { commerces, currentFilter } = useCategoryContext()

  return (
    <>
      <h1 className={style.title}>Categorias</h1>
      <section className={style.container}>
        <div className={style.category}>
          {categoriesData.map(category =>
            <CategoryCard key={category.id} title={category.title} imageUrl={category.image} alt={category.descricao} />

          )}
        </div>
      </section>

      <h2 className={style.title}>{currentFilter}</h2>
      <section className={style.container}>
        <div className={style.card}>
          {currentFilter !== "Todas" ? (
            commerces.filter(item => item.attributes.categoria.includes(currentFilter)).map(commerce =>
                <CardCommerce
                  key={commerce._id}
                  title={commerce.nome}
                  adress={commerce.attributes.endereco}
                  hours={commerce.attributes.horarios}
                />
      
            )) : (commerces.map(commerce =>
                <CardCommerce
                  key={commerce._id}
                  title={commerce.nome}
                  adress={commerce.attributes.endereco}
                  hours={commerce.attributes.horarios}
                />
            ))
          }
        </div>
      </section>
    </>
  )
}
