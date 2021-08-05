import { useState } from 'react'
import style from './style.module.css'

import Coxinha from '../../assets/images/coxinha.png'

export const ProductCard = ({ image, title, description, price }) => {
    const [removable, setRemovable] = useState(true)

    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={image} className={style.image} />
            </div>
            <h4 className={style.title}>{title}</h4>
            <p className={style.description}>{description}</p>
            <span className={style.price}>R$ {price}</span>
            <span
                className={`${removable ? style.deletable : ''} ${style.delete}`}>
                remover
            </span>
        </div>
    )
}

ProductCard.defaultProps = {
    image: Coxinha,
    title: 'Coxinha de frango',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    price: '8,50'

}