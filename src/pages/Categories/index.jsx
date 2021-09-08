import React from 'react'
import { ProductCard } from '../../Components/ProductCard'

import style from './style.module.css'

export function Categories() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Página de categorias</h1>
        <ProductCard />
      </div>
    </div>
  )
}
