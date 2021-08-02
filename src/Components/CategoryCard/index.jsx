import React, { useState} from 'react';
import './style.css'
import Dropdown from './Dropdown'


function CategoryCard({title, imageUrl}) {
    const [setActive, setActiveState] = useState("");
    const [setRotate, setRotateState] = useState("dropdown__icon")
    const [setColorCard, setColorCardState] = useState("category-card")
    const [setColorFont, setColorFontState] = useState("#title")
    const [setColorIcon, setColorIconState] = useState("#title")

    function toggle(){
        setActiveState(setActive === "" ? "active" : "")
        setRotateState(setActive === "active" ? "dropdown__icon" : "dropdown__icon rotate" )
        setColorCardState(setActive === "active" ? "category-card" : "category-card-white" )
        setColorFontState(setActive === "active" ? "title" : "title-blue" )
        setColorIconState(setActive === "active" ? "#fff" : "#FF983B" )

    }

    return (
        <div className={`${setColorCard}`}>
            <button className={`button-container ${setActive}`} onClick={toggle}>
            <div className="image-container">
                <div className="circle">
                    <img src={imageUrl} alt=""/>
                </div>
            </div>
            </button>
            <p className={`${setColorFont}`}>{title}</p>
                <Dropdown className={`${setRotate}`} color={`${setColorIcon}`}/>
            </div>
    )
}


export default CategoryCard

