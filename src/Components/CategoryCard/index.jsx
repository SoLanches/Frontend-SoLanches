import React, { useState, useCallback} from 'react';
import './style.css'
import Dropdown from './dropdown'


function CategoryCard({title, imageUrl}) {
    const [active, setActive] = useState(false);


const handleClick = useCallback(
    () => {
        setActive(!active)
    },
)
    return (

        <div className={`${active ? "category-card" : "category-card-active"}`} onClick= {handleClick}>
            <div className="container">
                <img className= "icon" src={imageUrl} alt="Todas as categorias"/>
            </div>
            <p className={`${active ? "title": "title-active"}`}>{title}</p>
            <Dropdown className={`${active ? "dropdown-icon": "dropdown-icon-active rotate"}`} color={`${active ? "#FFF" : "#FF983B"}`}/>
        </div>

           
    )
}


export default CategoryCard