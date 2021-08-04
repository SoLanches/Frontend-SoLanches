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

        <div className={`${active ? style.categoryCard : style.categoryCardActive}`} onClick={handleClick}>
            <div className={style.container}>
                <img className={style.icon} src={imageUrl} alt="Todas as categorias" />
            </div>
            <p className={`${active ? style.title : style.titleActive}`}>{title}</p>
            <div className={style.dropdownIcon}>
                <Dropdown color={`${active ? "#FFF": "#FF983B"}`} size='1.6rem'
                className={`${active ? style.rotateActive: style.rotate}`}/>
            </div>
        </div>
    )
}
