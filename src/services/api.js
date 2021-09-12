import axios from 'axios';
import { openNotification } from '../util/notification'

export const api = axios.create({
  baseURL: 'http://solanches.herokuapp.com/'
})

export const getProdutos = async (commerceName) => {
  try {
    const response = await api.get(`/comercio/${commerceName}/produtos?categories=true`)
    return response.data
  } catch (e) {
    openNotification(
      commerceName, 
      `Ouve um problema ao retornar os produtos do comércio ${commerceName}`, 
      `os produtos do comércio ${commerceName}`
    )
    return null
  }
}

export const deleteProduct = async (commerceName, idProduct) => {
  try {
    await api.delete(`/comercio/${commerceName}/produto/${idProduct}`)
    openNotification(
      commerceName, 
      'Produto removido com sucesso', 
    )
  } catch (e) {
    openNotification(
      commerceName, 
      `Ouve um problema remover o produto com id: ${idProduct}`, 
      e.data
    )
  }
}

export const editProduct = async (commerceName, idProduct, newProduct) => {
  try {
    await api.patch(`/comercio/${commerceName}/produto/${idProduct}`, newProduct)
    openNotification(
      commerceName, 
      'Produto alterado com sucesso', 
    )
  } catch (e) {
    openNotification(
      commerceName, 
      `Ouve um problema ao alterar o produto com id: ${idProduct}`, 
    )
  }
}

