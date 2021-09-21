import React from 'react'
import { useHistory } from 'react-router'
import style from './style.module.css'

export function Categories() {
  const history = useHistory()

  return (
    <div className={style.container} onClick={() => history.push('/inicio')}>
      <div className={style.title}>
        <h1>Página de categorias</h1>
      </div>
    </div>
  )
}
