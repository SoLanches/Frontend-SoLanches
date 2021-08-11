import React from 'react'
import { Hour } from '../../Components/Hour'

import style from './style.module.css'

export function Categories() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <Hour/>
        <h1>Página de categorias</h1>
      </div>
    </div>
  );
}
