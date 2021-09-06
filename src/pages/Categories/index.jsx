import React from 'react'
import { RegisterHour } from '../../Components/RegisterHour'
import { ProductCard } from '../../Components/ProductCard'

import style from './style.module.css'

export function Categories() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <RegisterHour />
        <h1>Página de categorias</h1>
        <ProductCard />
      </div>
    </div>
  )
}
