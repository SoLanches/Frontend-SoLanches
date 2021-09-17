import React, { useState, useCallback } from 'react';
import style from'./style.module.css'
import { IoChevronDownOutline as Dropdown } from 'react-icons/io5'
import useCategoryContext from '../../contexts/categoryCommerce.context'

export const CategoryCard = ({title, imageUrl}) => {
    const {currentFilter, setCurrentFilter} = useCategoryContext()

    const handleClick = useCallback(
        () => {
            setCurrentFilter(title)
        },
    )

    return (

        <div className={`${style.categoryCard} ${currentFilter === title ? `${style.active}`: ""}`} onClick={handleClick}>
            <div className={style.container}>
                <img className={style.icon} src={imageUrl} alt="Todas as categorias"/>
            </div>
            <p className={style.title}>{title}</p>
            <div className={style.dropdownIcon}>
                <Dropdown color={`${currentFilter === title ? "#FFFFFF": "#FF983B"}`} size='1.6rem'
                className={style.rotate}/>
            </div>
        </div>
    )
}
