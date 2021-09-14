import style from './style.module.css'

import Coxinha from '../../assets/images/coxinha.png'

import {
  StarOutlined,
  StarFilled,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons'
import { useState } from 'react/cjs/react.development'
import { EditModal } from '../EditModal'
import { formatPrice } from '../../util/format'
import {
  addFavorite,
  deleteProduct,
  getProdutos,
  removeFavorite,
} from '../../services/api'
import useCommerceContext from '../../contexts/commerce.context'

export const ProductCard = ({
  id,
  image,
  alt,
  title,
  description,
  price,
  editable,
  favorited,
  categoria: category,
}) => {
  const [faved, setFav] = useState(favorited)
  const [activeModal, setActiveModal] = useState(false)
  const { commerceName, setProducts, activeCategories, setFavProductIds } =
    useCommerceContext()

  const handleFavorite = async () => {
    let response

    if (favorited) {
      response = await removeFavorite(commerceName, id)
    } else {
      response = await addFavorite(commerceName, id)
    }

    if (response) {
      setFavProductIds(response.destaques)
      setFav(!faved)
    }
  }

  const handleEdit = () => {
    setActiveModal(true)
  }

  const handleDelete = async () => {
    await deleteProduct(commerceName, id)

    const products = await getProdutos(commerceName)
    setProducts(products)
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
            {activeModal ? (
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
                icon={false}
              />
            ) : null}
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
  favedProduct: false,
}
