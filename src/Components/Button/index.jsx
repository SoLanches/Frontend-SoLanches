import React from 'react'
import style from './style.module.css'

export const Button = (props) => {
    return (
        <button className={style.container} onClick={props.handleClick}>
            <p className={style.title}>{props.title}</p>
            <img className={style.icon} src={props.icon}/>
        </button>
    )
}
