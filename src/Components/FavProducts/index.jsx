import { StarFilled } from '@ant-design/icons'
import React from 'react'
import { useHistory, useParams } from 'react-router'
import useLoginContext from '../../contexts/login.context'
import { formatRoute } from '../../util/format'
import { Button } from '../Button'
import { ProductCard } from '../ProductCard'

import style from './styles.module.css'

export const FavProducts = ({ products = [], favedIds = [] }) => {
  const { user } = useLoginContext()
  const { commerceName } = useParams()
  const history = useHistory()

  return (
    <section className={style.FavSection}>
      <div className={style.sectionTitle}>
        <StarFilled style={{ fontSize: '2rem' }} />
        <h2>Destaques</h2>
        {formatRoute(user) === commerceName ? (
          <Button
            title='editar cardápio'
            handleClick={() => history.push(`/${commerceName}/edit`)}
          />
        ) : (
          <></>
        )}
      </div>
      <div>
        {favedIds.length > 0 ? (
          <div className={style.products}>
            {products.map((product, index) => {
              if (favedIds.includes(product._id)) {
                return <ProductCard key={index} {...product} />
              }
            })}
          </div>
        ) : (
          <p className={style.noItens}>Não há itens em destaque!</p>
        )}
      </div>
    </section>
  )
}
