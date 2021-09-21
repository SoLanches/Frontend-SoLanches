import React from 'react'
import style from './style.module.css'

export const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={style.container}
      onClick={props.handleClick}
    >
      <img className={style.icon} src={props.icon} alt='' />
      <p className={style.title}>{props.title}</p>
    </button>
  )
}
