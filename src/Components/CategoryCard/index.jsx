import React, { useState} from 'react';
import style from './style.css'
import Dropdown from './Dropdown'


function CategoryCard({title, imageUrl}) {
    const [active, setActive] = useState(false);


    function toggle(){
        setActive(!active)

    }

    return (
        <div className={`${active ? "category-card" : "category-card-white"}`}>
            <button className={`button-container ${active}`} onClick={toggle}>
            <div className="image-container">
                <div className="circle">
                    <img src={imageUrl} alt=""/>
                </div>
            </div>
            </button>
            <p className={`${active ? "title" : "title-blue"}`}>{title}</p>
                <Dropdown className={`${active ? "dropdown__icon" : "dropdown__icon rotate"}`} 
                color={`${active ? "#FFF" : "#FF983B" }`}/>
            </div>
    )
}


export default CategoryCard

