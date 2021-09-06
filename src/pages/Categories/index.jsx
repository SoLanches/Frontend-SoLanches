import React from 'react'
import { RegisterHour } from '../../Components/RegisterHour';

import style from './style.module.css'

export function Categories() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <RegisterHour />
        <h1>Página de categorias</h1>
      </div>
    </div>
  );
}
