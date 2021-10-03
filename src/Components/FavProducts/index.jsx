import { StarFilled } from '@ant-design/icons'
import React from 'react'
import { useHistory, useParams } from 'react-router'
import useLoginContext from '../../contexts/login.context'
import { formatRoute } from '../../util/format'
import { Button } from '../Button'
import { ProductCard } from '../ProductCard'

import style from './styles.module.css'

export const FavProducts = ({
  products = [[]],
  favedIds = [],
  activeCategories = [],
}) => {
  const { user } = useLoginContext()
  const { commerceName } = useParams()
  const history = useHistory()
  const favedProducts = products.filter((product) => {
    // console.log(product)
    return (
      favedIds &&
      product &&
      favedIds.includes(product._id) &&
      activeCategories.includes(product.attributes.categoria)
    )
  })

  // console.log(favedProducts)
  console.log(products)
  // console.log(favedIds)

  return (
    <section className={style.FavSection}>
      <div className={style.sectionTitle}>
        <StarFilled style={{ fontSize: '2rem' }} />
        <h2>Destaques</h2>
        {user && formatRoute(user) === commerceName ? (
          <Button
            title='editar cardápio'
            handleClick={() => history.push(`/${commerceName}/edit`)}
          />
        ) : (
          <></>
        )}
      </div>
      <div>
        {favedProducts.length > 0 ? (
          <div className={style.products}>
            {favedProducts.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  title={product.nome}
                  category={product.attributes.categoria}
                  description={product.attributes.description}
                  price={product.attributes.price}
                  editable={false}
                />
              )
            })}
          </div>
        ) : (
          <p className={style.noItens}>Não há itens em destaque!</p>
        )}
      </div>
    </section>
  )
}
