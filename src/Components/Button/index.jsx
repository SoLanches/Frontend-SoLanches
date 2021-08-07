import React from 'react'
import style from './style.module.css'

export const Button = ({title, handleClick, icon}) => {
    return (
        <button className={style.container} onClick={handleClick}>
            <p className={style.title}>{title}</p>
            <img className={style.icon} src={icon}/>
        </button>
    )
}
