import React from 'react'
import { ProductCard } from '../../Components/ProductCard'
import { RegisterSchedules } from '../../Components/RegisterSchedules'

import style from './style.module.css'

export function Categories() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <RegisterSchedules />
        <h1>Página de categorias</h1>
      </div>
    </div>
  )
}
