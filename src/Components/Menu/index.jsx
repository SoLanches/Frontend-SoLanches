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
        {productsData.map((produto, index) => (
          <ProductCard
            title={produto.nome}
            category={produto.attributes.categoria}
            description={produto.attributes.description}
            price={produto.attributes.price}
            editable={false}
            key={index}
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
  const filteredCategories = activeCategories.filter((category) =>
    Object.keys(menu).includes(category)
  )

  return (
    <section className={style.sectionMenu}>
      <div className={style.sectionTitle}>
        <MenuIcon />
        <h2>Cardápio</h2>
        {user && formatRoute(user) === commerceName ? (
          <Button
            title='editar cardápio'
            handleClick={() => history.push(`/${commerceName}/edit`)}
          />
        ) : (
          <></>
        )}
      </div>
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => {
          return (
            <CategorySection
              key={index}
              productsData={menu[category]}
              category={category}
            />
          )
        })
      ) : (
        <p className={style.noItens}>Ainda não há itens no cardápio!</p>
      )}
    </section>
  )
}
