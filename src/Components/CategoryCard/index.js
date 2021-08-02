import React from 'react'
import './style.css'
import dropdown from'../../Assets/dropdown.svg'

function CategoryCard({title, imageUrl}) {
    return (
        <div className="category-card-container">
            <div className="image-container">
                <div className="circle">
                    <img src={imageUrl} alt=""/>
                </div>
            </div>
            <p className="title">{title}</p>
            <div className="dropdown">
                <img src={dropdown} alt=""/>
            </div>
        </div>
    )
}


export default CategoryCard

