import React from 'react';
import { useCallback } from 'react'
import style from './style.module.css'
import { IoChevronDownOutline as Dropdown } from 'react-icons/io5'
import useCategoryContext from '../../contexts/categoryCommerce.context'

export const CategoryCard = ({ title, imageUrl, alt }) => {
    const { currentFilter, setCurrentFilter } = useCategoryContext()

    const handleClick = useCallback(
        () => {
            setCurrentFilter(title)
        },
        [title, setCurrentFilter]
    )

    return (

        <div className={`${style.categoryCard} ${currentFilter === title ? `${style.active}` : ""}`} onClick={handleClick}>
            <div className={style.container}>
                <img className={style.icon} src={imageUrl} alt={alt} />
            </div>
            <p className={style.title}>{title}</p>
            <div className={style.dropdownIcon}>
                <Dropdown color={`${currentFilter === title ? "#FFFFFF" : "#FF983B"}`} size='1.6rem'
                    className={style.rotate} />
            </div>
        </div>
    )
}
