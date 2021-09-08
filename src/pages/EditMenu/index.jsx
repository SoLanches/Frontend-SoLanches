import { Button } from '../../Components/Button'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react/cjs/react.development'
import { CategoryTags } from '../../Components/CategoryTags'
import { ProductCard } from '../../Components/ProductCard'

import style from './style.module.css'
import { Select } from '../../Components/Select'
import { EditModal } from '../../Components/EditModal'

export const EditMenu = () => {
  const { ProjectName } = useParams()

  const [projectInfo, useProjectInfo] = useState({
    attributes: {
      categories: ['sapato', 'bebida', 'vacas', 'joelho', 'caverna'],
      products: [
        {
          title: 'Coxinha de frango',
          alt: '8 coxinhas dentro laranja em cima de um prato',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
          price: '8,50',
          editable: true,
        },
        {
          title: 'Coxinha de frango',
          alt: '8 coxinhas dentro laranja em cima de um prato',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
          price: 8.5,
          editable: true,
        },
        {
          title: 'Coxinha de frango',
          alt: '8 coxinhas dentro laranja em cima de um prato',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
          price: 8.5,
          editable: true,
        },
        {
          title: 'Coxinha de frango',
          alt: '8 coxinhas dentro laranja em cima de um prato',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",

          price: 8.5,
          editable: true,
        },
        {
          title: 'Coxinha de frango',
          alt: '8 coxinhas dentro laranja em cima de um prato',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
          price: 8.5,
          editable: true,
        },
        {
          title: 'Coxinha',
          alt: '8 coxinhas dentro laranja em cima de um prato',
          description:
            "Lorem Ipsum is s printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
          price: 9.5,
          editable: true,
        },
      ],
    },
  })

  const [menu, setMenu] = useState({})

  useEffect(() => {
    const getMenu = async () => {
      // const response = await getMenu(ProjectName)
      // setMenu(response)
    }

    getMenu()
  }, [])

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

  useEffect(() => {})

  return (
    <div className={style.wrapper}>
      <section className={style.titleContainer}>
        <h1 className={style.title}>Editando o seu cardápio</h1>
        <span className={style.subTitle}>
          Olá! Aqui você pode fazer a edição do seu cardápio, fazendo operações
          diversas sobre as categorias e produtos do cardápio.
        </span>
      </section>

      <section className={style.categoriesContainer}>
        <h2 className={style.sectionTitle}>Categorias</h2>
        <div className={style.sectionBody}>
          <h3>Categorias existentes</h3>
          <div className={style.categories}>
            {projectInfo.attributes.categories.map((categorie, index) => {
              return <CategoryTags title={categorie} key={index} />
            })}
          </div>

          <h3>Adicionar categoria</h3>
          <div className={style.categoryAddContainer}>
            <input placeholder="Ex: Sobremesas" />
            <Button title="Adicionar" handleClick={handleAddCategory} />
          </div>

          <h3>Deletar categoria</h3>
          <div className={style.categoryDeleteContainer}>
            <Select options={projectInfo.attributes.categories} />
            <Button title="Deletar" handleClick={handleDeleteCategory} />
          </div>
        </div>
      </section>

      <section>
        <h2 className={style.sectionTitle}>Produtos</h2>
        <div className={style.sectionBody}>
          <h3>Categoria</h3>
          <div className={style.productController}>
            <Select
              defaultValue={'todos'}
              options={[...projectInfo.attributes.categories, 'todos']}
            />
            <EditModal
              buttonTitle="Adicionar produto"
              categoryList={projectInfo.attributes.categories}
            />
          </div>
          <div className={style.productsContainer}>
            {projectInfo.attributes.products.map((product, index) => {
              return <ProductCard {...product} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
