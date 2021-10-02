import React, { Fragment } from 'react'
import { useHistory, useParams } from 'react-router'
import { MenuIcon } from '../../assets/icons/MenuIcon'
import useLoginContext from '../../contexts/login.context'
import { formatRoute } from '../../util/format'
import { Button } from '../Button'
import { ProductCard } from '../ProductCard'

import style from './style.module.css'

export const CategorySection = ({ productsData, category }) => {
  return (
    <div>
      <h3 className={style.sectionCategoryTitle}>{category}</h3>
      <div className={style.sectionProducts}>
        {productsData.map((produto) => (
          <ProductCard
            title={produto.nome}
            category={produto.attributes.categoria}
            editable={false}
          />
        ))}
      </div>
    </div>
  )
}

export const Menu = ({ menu = {}, activeCategories = [] }) => {
  const { user } = useLoginContext()
  const { commerceName } = useParams()
  const history = useHistory()
  return (
    <section className={style.sectionMenu}>
      <div className={style.sectionTitle}>
        <MenuIcon />
        <h2>Cardápio</h2>
        {formatRoute(user) === commerceName ? (
          <Button
            title='editar cardápio'
            handleClick={() => history.push(`/${commerceName}/edit`)}
          />
        ) : (
          <></>
        )}
      </div>
      {Object.keys(menu).length > 0 ? (
        activeCategories.map((category, index) => {
          if (menu[category]) {
            return (
              <CategorySection
                key={index}
                productsData={menu[category]}
                category={category}
              />
            )
          }
          return <Fragment key={index}></Fragment>
        })
      ) : (
        <p className={style.noItens}>Ainda não há itens no cardápio!</p>
      )}
    </section>
  )
}
