import { Button } from '../../../Components/Button'
import { useState } from 'react/cjs/react.development'
import { CategoryTags } from '../../../Components/CategoryTags'
import { ProductCard } from '../../../Components/ProductCard'

import style from './style.module.css'
import { Select } from '../../../Components/Select'
import { EditModal } from '../../../Components/EditModal'
import { addCategory, deleteCategory } from '../../../services/api'
import useCommerceContext from '../../../contexts/commerce.context'

export const EditMenu = () => {
  const {
    commerceName,
    products,
    activeCategories,
    setActiveCategories,
    favProductIds,
  } = useCommerceContext()

  const [filterCategorie, setFilterCategorie] = useState('todos')

  const [currentAddCategory, setCurrentAddCategory] = useState('')
  const [currentDeleteCategory, setCurrentDeleteCategory] = useState('')

  const handleDeleteCategory = async () => {
    if (currentDeleteCategory) {
      const response = await deleteCategory(commerceName, currentDeleteCategory)

      if (response) {
        setActiveCategories(response.categorias)
      }
    }
  }

  const handleAddCategory = async () => {
    if (currentAddCategory) {
      const response = await addCategory(commerceName, currentAddCategory)

      if (response) {
        setActiveCategories(response.categorias)
      }
    }
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
            <h3>Categorias ativas</h3>
            <div className={style.categories}>
              {activeCategories.map((categorie, index) => {
                return <CategoryTags title={categorie} key={index} />
              })}
            </div>

            <h3>Adicionar categoria</h3>
            <div className={style.categoryAddContainer}>
              <input
                placeholder='Ex: Sobremesas'
                onChange={(event) => setCurrentAddCategory(event.target.value)}
              />
              <Button title='Adicionar' handleClick={handleAddCategory} />
            </div>

            <h3>Deletar categoria</h3>
            <div className={style.categoryDeleteContainer}>
              <Select
                options={activeCategories}
                setValue={setCurrentDeleteCategory}
              />
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
                categoryList={activeCategories}
              />
            </div>
            <div className={style.productsContainer}>
              {filterCategorie === 'todos'
                ? [].concat
                    .apply([], Object.values(products))
                    .map((product, index) => {
                      console.log(product._id)
                      return (
                        <ProductCard
                          id={product._id}
                          {...product.attributes}
                          favorited={favProductIds.includes(product._id)}
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
                        favorited={favProductIds.includes(product._id)}
                      />
                    )
                  })}
            </div>
          </div>
        </section>
      </div>
    )
  )
}