import style from './style.module.css'

import Coxinha from '../../assets/images/coxinha.png'

import {
  StarOutlined,
  StarFilled,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { EditModal } from '../EditModal'
import { formatPrice } from '../../util/format'
import {
  addFavorite,
  deleteProduct,
  fetchProdutos,
  removeFavorite,
} from '../../services/api'
import useCommerceContext from '../../contexts/commerce.context'
import useLoginContext from '../../contexts/login.context'

export const ProductCard = ({
  id,
  image,
  alt,
  title,
  description,
  price,
  editable,
  categoria: category,
}) => {
  const { updateInfo } = useLoginContext()
  const [activeModal, setActiveModal] = useState(false)
  const {
    commerceName,
    setProducts,
    activeCategories,
    setFavProductIds,
    favProductIds,
  } = useCommerceContext()
  const [faved, setFav] = useState(favProductIds && favProductIds.includes(id))

  const handleFavorite = async () => {
    let response

    if (faved) {
      response = await removeFavorite(commerceName, id)
    } else {
      response = await addFavorite(commerceName, id)
    }
    console.log(response)
    if (response) {
      setFavProductIds(response.destaques)
      setFav(response.destaques.includes(id))
    }

    updateInfo()
  }

  const handleEdit = () => {
    setActiveModal(true)
  }

  const handleDelete = async () => {
    await deleteProduct(commerceName, id)

    const products = await fetchProdutos(commerceName)
    setProducts(products)
    updateInfo()
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
            <EditOutlined onClick={handleEdit} style={{ fontSize: '20px' }} />
            <DeleteOutlined
              onClick={handleDelete}
              style={{ fontSize: '20px' }}
            />
          </div>
        </div>
      </div>
      {activeModal && (
        <EditModal
          buttonActive={false}
          active={true}
          setActive={setActiveModal}
          productId={id}
          title={title}
          price={price}
          category={category}
          categoryList={activeCategories}
          image={image}
          description={description}
        />
      )}
    </>
  )
}

ProductCard.defaultProps = {
  image: Coxinha,
}
