import { useState, useCallback, useRef } from 'react'
import { Button } from '../Button'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUpload } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'

import Logo from '../../assets/icons/logo.svg'

import styles from './styles.module.css'

export const EditModal = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState()
  const [description, setDescription] = useState('')

  const handleClick = useCallback(() => {
    setIsActive(!isActive)
  }, [setIsActive, isActive])

  const handleSubmit = () => {
    // Quando houver a integração com o back melhorar isso aqui
    console.log(name, price, description, image, category)
    handleClick()
  }

  const handleUploadFile = (event) => {
    setImage(event.target.files[0])
  }

  return (
    <>
      <Button title={props.buttonTitle} handleClick={handleClick} />

      <div
        className={`${isActive ? '' : styles.inactive} ${styles.outContainer}`}
      >
        <div className={styles.container}>
          <header className={styles.itemHeader}>
            <img src={Logo} alt="SoLanches" />
            <IoCloseOutline
              size="2.5rem"
              className={styles.close}
              onClick={handleClick}
            />
          </header>
          <div className={styles.field_group}>
            <div className={styles.name}>
              <label htmlFor="edit-name">Nome</label>
              <input
                type="text"
                id="edit-name"
                placeholder="Ex: Coxinha"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>

            <div className={styles.price}>
              <label htmlFor="edit-price"> Preço </label>
              <input
                type="number"
                id="edit-price"
                min={0}
                step={0.25}
                placeholder="Ex: 8,50"
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
              />
            </div>

            <div className={styles.category}>
              <label htmlFor="edit-category">Categoria</label>
              <div>
                <select
                  id="edit-category"
                  defaultValue="none"
                  onChange={(e) => {
                    setCategory(e.target.value)
                  }}
                >
                  <option value="none" disabled>
                    Selecione
                  </option>
                  {/* {props.categoryList.map((category) => {
                    return (
                      <option
                        value={category}
                        key={category}
                      >
                        {category}
                      </option>
                    )
                  })} */}
                </select>
                <i></i>
              </div>
            </div>

            <div className={styles.image}>
              <label htmlFor="edit-image">Imagem</label>
              <label htmlFor="edit-image" id={styles.fakeInput}>
                {image ? (
                  <>
                    <BiCheck size="1.3rem" />
                    <span>Imagem Carregada</span>
                  </>
                ) : (
                  <>
                    <AiOutlineUpload size="1.3rem" />
                    <span>Enviar</span>
                  </>
                )}
              </label>
              <input type="file" id="edit-image" onChange={handleUploadFile} />
            </div>

            <div className={styles.description}>
              <label htmlFor="edit-description">Descrição</label>
              <textarea
                name="descricao"
                id="edit-description"
                placeholder="Digite as observações"
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              />
            </div>
          </div>
          <Button title="Salvar alterações" handleClick={handleSubmit} />
        </div>
      </div>
    </>
  )
}

// TODO: Tirar isso dps
EditModal.defaultProps = {
  categoryList: [
    { name: 'Hamburguer' },
    { name: 'Tapioca' },
    { name: 'Pizza' },
    { name: 'Salgado' },
    { name: 'Cachorro Quente' },
  ],
  buttonTitle: 'Vacas',
}
