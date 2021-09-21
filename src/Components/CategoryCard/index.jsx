import React, { useState, useCallback } from 'react';
import style from'./style.module.css'
import { IoChevronDownOutline as Dropdown } from 'react-icons/io5'

export const CategoryCard = ({title, imageUrl}) => {
    const [active, setActive] = useState(false);

    const handleClick = useCallback(
        () => {
            setActive(!active)
        },
    )
    return (

        <div className={`${style.categoryCard} ${active ? `${style.active}`: ""}`} onClick={handleClick}>
            <div className={style.container}>
                <img className={style.icon} src={imageUrl} alt="Todas as categorias"/>
            </div>
            <p className={style.title}>{title}</p>
            <div className={style.dropdownIcon}>
                <Dropdown color={`${active ? "#FFFFFF": "#FF983B"}`} size='1.6rem'
                className={style.rotate}/>
            </div>
        </div>
    )
}
