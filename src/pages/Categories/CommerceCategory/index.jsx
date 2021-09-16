import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import { CardCommerce } from '../../../Components/CardCommerce'
import { CategoryCard } from '../../../Components/CategoryCard'
import useCategoryContext from '../../../contexts/categoryCommerce.context'

import style from './style.module.css'

export const CommerceCategory = () => {
  const {category, setCategory, currentFilter, setCurrentFilter} = useCategoryContext()
  const [filterCategorie, setFilterCategorie] = useState('Todas')

  const filteredData = category.filter(item => item.attributes.categoria ===  currentFilter);

  const todasCategorias = category.map(tudo => tudo.attributes.categoria)

  return (
    <>
      <h1 className={style.title}>Categorias</h1>
      <div className={style.container}>
        <div className={style.category}>
          <CategoryCard title={filterCategorie} isActive={true} />
          {todasCategorias.map(catg =>
            <CategoryCard title={catg} />
          )}
        </div>
        <div className={style.card}>
        {filteredData.map(cat =>
            <CardCommerce title={cat.attributes.categoria} />
          )}
            
        </div>
      </div>
    </>
  )
}

