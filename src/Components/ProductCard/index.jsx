import style from './style.module.css'

import Coxinha from '../../assets/images/coxinha.png'

import {
  StarOutlined,
  StarFilled,
  DeleteOutlined,
  DeleteFilled,
  EditOutlined,
  EditFilled,
} from '@ant-design/icons'
import { useState } from 'react/cjs/react.development'
import { EditModal } from '../EditModal'
import { formatPrice } from '../../util/format'

export const ProductCard = ({
  image,
  alt,
  title,
  description,
  price,
  editable,
  category,
}) => {
  const [faved, setFav] = useState(false)
  const [activeModal, setActiveModal] = useState(false)

  const handleFavorite = () => {
    setFav(!faved)
    // TODO: Add integration to backend
  }

  const handleEdit = () => {
    setActiveModal(!activeModal)
    console.log(price)
    // TODO: Add integration to backend
  }

  const handleDelete = () => {
    // TODO: Add integration to backend
    console.log('DELETAANDOOO')
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img src={image} alt={alt} className={style.image} />
        </div>
        <h4 className={style.title}>{title}</h4>
        <p className={style.description}>{description}</p>
        <span className={style.price}>{formatPrice(price)}</span>

        <div className={`${editable ? '' : style.notEditable}`}>
          <div className={style.containerFooter}>
            {faved ? (
              <StarFilled
                onClick={handleFavorite}
                style={{ fontSize: '20px' }}
              />
            ) : (
              <StarOutlined
                onClick={handleFavorite}
                style={{ fontSize: '20px' }}
              />
            )}
            <EditModal
              buttonActive={false}
              active={activeModal}
              name={title}
              price={price}
              category={category}
              image={image}
              description={description}
              Icon={
                <EditOutlined
                  onClick={handleEdit}
                  style={{ fontSize: '20px' }}
                />
              }
            />
            <DeleteOutlined
              onClick={handleDelete}
              style={{ fontSize: '20px' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

ProductCard.defaultProps = {
  image: Coxinha,
  title: 'Coxinha de frango',
  alt: '8 coxinhas dentro laranja em cima de um prato',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  price: 8.5,
  editable: true,
  category: 'Salgado',
}
