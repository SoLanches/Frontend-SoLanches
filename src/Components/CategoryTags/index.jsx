import React from 'react'
import style from './style.module.css'

export const CategoryTags= ({title}) => {

    return (
        <div className={style.categoryTag}>
            <p className={style.title}>{title}</p>
        </div>
    )
}
