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
import { deleteProduct, getProdutos } from '../../services/api'
import useCommerceContext from '../../contexts/commerce.context'

export const ProductCard = ({
  id,
  image,
  alt,
  title,
  description,
  price,
  editable,
  favedProduct,
  categoria: category,
}) => {
  const [faved, setFav] = useState(favedProduct)
  const [activeModal, setActiveModal] = useState(false)
  const { commerceName, setProducts, products } = useCommerceContext()
  console.log(Object.keys(products))

  const handleFavorite = async () => {
    setFav(!faved)
  }

  const handleEdit = () => {
    setActiveModal(!activeModal)
    console.log(price)
    // TODO: Add integration to backend
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
            <EditModal
              buttonActive={false}
              active={activeModal}
              productId={id}
              title={title}
              price={price}
              category={category}
              categoryList={Object.keys(products)}
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
  favedProduct: false,
}
