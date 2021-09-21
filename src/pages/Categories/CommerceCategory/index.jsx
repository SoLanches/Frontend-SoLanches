import React from 'react'
import { CardCommerce } from '../../../Components/CardCommerce'
import { CategoryCard } from '../../../Components/CategoryCard'
import useCategoryContext from '../../../contexts/categoryCommerce.context'
import categoriesData from '../categories.data'

import style from './style.module.css'

export const CommerceCategory = () => {
  const { commerces, currentFilter } = useCategoryContext()
  console.log(commerces);
  return (
    <>
      <h1 className={style.title}>Categorias</h1>
      <section className={style.container}>
        <div className={style.category}>
          {categoriesData.map(category =>
            <CategoryCard title={category.title} imageUrl={category.image} alt={category.de} />

          )}
        </div>
      </section>

      <h2 className={style.title}>{currentFilter}</h2>
      <section className={style.container}>
        <div className={style.card}>
          {currentFilter !== "Todas" ? (
            commerces.filter(item => item.attributes.categoria.includes(currentFilter)).map(commerce =>
              <CardCommerce
                key= {commerces._id}
                route="About"
                title={commerce.nome}
                adress={commerce.attributes.endereco}
                time={commerce.attributes.horarios}
              />
            )
          ) : (commerces.map(commerce =>
            <CardCommerce
              key= {commerces._id}
              route="About"
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
