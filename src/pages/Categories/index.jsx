import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react/cjs/react.development'
import { CardCommerce } from '../../Components/CardCommerce'
import { CategoryCard } from '../../Components/CategoryCard'
import { getCategories } from '../../services/api'

import style from './style.module.css'

export const Categories = () => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    getCategories().then(({data}) => {
      setCategory(data)
    })
  }, [])

const handleCategory = async () => {

}
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Página de categorias</h1>
        <CategoryCard title="Todas" isActive={true} />
        {category?.map(catg =>
        <CategoryCard title={catg.attributes.categoria} /> 
        )}
        <CardCommerce />
      </div>
    </div>
  )
}
