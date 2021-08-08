import React from 'react'
import style from './style.module.css'

export const CardCommerce = (props) => {
    return (
        <div className={style.container}>
            <img src={props.icon} alt="Logo do comercio"/>
            <p className={style.title}>{props.title}</p>
            <span><hr className={style.linha}></hr></span>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>

        </div>
    )
}
