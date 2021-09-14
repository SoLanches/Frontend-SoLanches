import { useState, useCallback } from 'react'
import { Button } from '../Button'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUpload } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'

import Logo from '../../assets/icons/logo.svg'

import styles from './styles.module.css'
import { editProduct, getProdutos, addProduct } from '../../services/api'
import useCommerceContext from '../../contexts/commerce.context'

export const EditModal = (props) => {
  const { commerceName, setProducts } = useCommerceContext()
  const [isActive, setIsActive] = useState(props.active)
  const [title, setName] = useState(props.title)
  const [price, setPrice] = useState(props.price)
  const [category, setCategory] = useState(props.category)
  const [image, setImage] = useState('')
  const [description, setDescription] = useState(props.description)

  const handleClick = useCallback(() => {
    setIsActive(!isActive)

    if (props.setActive) {
      props.setActive(false)
    }
  }, [setIsActive, isActive, props])

  const clearProperties = () => {
    setName('')
    setPrice('')
    setImage('')
    setDescription('')
  }

  const handleSubmit = async () => {
    props.productId
      ? await editProduct(commerceName, props.productId, {
          title,
          price,
          description,
          categoria: category,
        })
      : await addProduct(commerceName, {
          title,
          price,
          description,
          categoria: category,
        })

    const products = await getProdutos(commerceName)
    setProducts(products)
    clearProperties()
    handleClick()
  }

  const handleUploadFile = (event) => {
    setImage(event.target.files[0])
  }

  return (
    <div>
      {props.buttonActive ? (
        <Button title={props.buttonTitle} handleClick={handleClick} />
      ) : props.icon ? (
        <div onClick={handleClick}>{props.icon}</div>
      ) : null}

      <div
        className={`${isActive ? '' : styles.inactive} ${styles.outContainer}`}
      >
        <div className={styles.container}>
          <header className={styles.itemHeader}>
            <img src={Logo} alt='SoLanches' />
            <IoCloseOutline
              size='2.5rem'
              className={styles.close}
              onClick={handleClick}
            />
          </header>
          <div className={styles.field_group}>
            <div className={styles.name}>
              <label htmlFor='edit-name'>Nome</label>
              <input
                type='text'
                id='edit-name'
                placeholder='Ex: Coxinha'
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={title}
              />
            </div>

            <div className={styles.price}>
              <label htmlFor='edit-price'> Preço </label>
              <input
                type='number'
                id='edit-price'
                min={0}
                step={0.25}
                placeholder='Ex: 8,50'
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
                value={price}
              />
            </div>

            <div className={styles.category}>
              <label htmlFor='edit-category'>Categoria</label>
              <div>
                <select
                  id='edit-category'
                  defaultValue={category || 'none'}
                  onChange={(e) => {
                    setCategory(e.target.value)
                  }}
                >
                  <option value='none' disabled>
                    Selecione
                  </option>
                  {props.categoryList.map((category) => {
                    return (
                      <option
                        value={category.toLowerCase()}
                        key={category.toLowerCase()}
                      >
                        {category}
                      </option>
                    )
                  })}
                </select>
                <i></i>
              </div>
            </div>

            <div className={styles.image}>
              <label htmlFor='edit-image'>Imagem</label>
              <label htmlFor='edit-image' id={styles.fakeInput}>
                {image ? (
                  <>
                    <BiCheck size='1.3rem' />
                    <span>Imagem Carregada</span>
                  </>
                ) : (
                  <>
                    <AiOutlineUpload size='1.3rem' />
                    <span>Enviar</span>
                  </>
                )}
              </label>
              <input type='file' id='edit-image' onChange={handleUploadFile} />
            </div>

            <div className={styles.description}>
              <label htmlFor='edit-description'>Descrição</label>
              <textarea
                name='descricao'
                id='edit-description'
                placeholder='Digite as observações'
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                value={description}
              />
            </div>
          </div>
          <Button title='Salvar alterações' handleClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

// TODO: Tirar isso dps
EditModal.defaultProps = {
  categoryList: [
    'Hamburguer',
    'Tapioca',
    'Pizza',
    'Salgado',
    'Cachorro Quente',
  ],
  buttonTitle: 'Vacas',
  buttonActive: true,
  active: false,
}
