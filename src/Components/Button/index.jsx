import React from 'react'
import style from './style.module.css'

export const Button= ({title}) => {
    return (
        <button className={style.container} onClick= "">
            <p className={style.title}>{title}</p>
        </button>
    )
}


