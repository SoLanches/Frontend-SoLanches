import { Button } from '../../Components/Button'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react/cjs/react.development'
import { CategoryTags } from '../../Components/CategoryTags'
import { ProductCard } from '../../Components/ProductCard'

import style from './style.module.css'
import { Select } from '../../Components/Select'
import { EditModal } from '../../Components/EditModal'
import { getproducts } from '../../services/api'
import useCommerceContext from '../../contexts/commerce.context'

export const EditMenu = () => {
  const { projectName } = useParams()

  const { setProjectName, products, setProducts, sapato } = useCommerceContext()
  const [filterCategorie, setFilterCategorie] = useState('todos')

  console.log(sapato)

  const handleUpdateMenu = () => {
    // IMPLEMENT
    console.log('UPDATED MENU')
  }

  const handleDeleteCategory = () => {
    // IMPLEMENT
    console.log('DELETING CATEGORY')
  }

  const handleAddCategory = () => {
    // IMPLEMENT
    console.log('ADDING CATEGORY')
  }

  const handleAddProduct = () => {
    // IMPLEMENT
    console.log('ADDING PRODUCT')
  }

  return (
    products && (
      <div className={style.wrapper}>
        <section className={style.titleContainer}>
          <h1 className={style.title}>Editando o seu cardápio</h1>
          <span className={style.subTitle}>
            Olá! Aqui você pode fazer a edição do seu cardápio, fazendo
            operações diversas sobre as categorias e products do cardápio.
          </span>
        </section>

        <section className={style.categoriesContainer}>
          <h2 className={style.sectionTitle}>Categorias</h2>
          <div className={style.sectionBody}>
            <h3>Categorias existentes</h3>
            <div className={style.categories}>
              {Object.keys(products).map((categorie, index) => {
                return <CategoryTags title={categorie} key={index} />
              })}
            </div>

            <h3>Adicionar categoria</h3>
            <div className={style.categoryAddContainer}>
              <input placeholder='Ex: Sobremesas' />
              <Button title='Adicionar' handleClick={handleAddCategory} />
            </div>

            <h3>Deletar categoria</h3>
            <div className={style.categoryDeleteContainer}>
              <Select options={Object.keys(products)} />
              <Button title='Deletar' handleClick={handleDeleteCategory} />
            </div>
          </div>
        </section>

        <section>
          <h2 className={style.sectionTitle}>produtos</h2>
          <div className={style.sectionBody}>
            <h3>Categoria</h3>
            <div className={style.productController}>
              <Select
                options={['todos', ...Object.keys(products)]}
                defaultValue='todos'
                setValue={setFilterCategorie}
              />
              <EditModal
                buttonTitle='Adicionar produto'
                categoryList={Object.keys(products)}
              />
            </div>
            <div className={style.productsContainer}>
              {products
                ? filterCategorie === 'todos'
                  ? [].concat
                      .apply([], Object.values(products))
                      .map((product, index) => {
                        console.log(product._id)
                        return (
                          <ProductCard
                            id={product._id}
                            {...product.attributes}
                            key={index}
                          />
                        )
                      })
                  : products[filterCategorie].map((product, index) => {
                      return (
                        <ProductCard
                          id={product._id}
                          {...product.attributes}
                          key={index}
                        />
                      )
                    })
                : null}
            </div>
          </div>
        </section>
      </div>
    )
  )
}
