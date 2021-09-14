import axios from 'axios';
import { useHistory } from 'react-router'
import { openNotification } from '../util/notification'

export const api = axios.create({
  baseURL: 'http://solanches.herokuapp.com/'
})

export const getCardapio = async (commerceName) => {
  try {
    const response = await api.get(`/comercio/${commerceName}/cardapio`)
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
    await api.patch(`/comercio/${commerceName}/produto/${idProduct}`, { attributes: newProduct})
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

export const addProduct = async (commerceName, newProduct) => {
  try {
    await api.post(`/comercio/${commerceName}/produto`, { nome: newProduct.title, attributes: newProduct})
    openNotification(
      commerceName, 
      'Produto cadastrado com sucesso', 
    )
  } catch (e) {
    console.log(e)
    openNotification(
      commerceName, 
      `Ouve um problema ao alterar o novo produto com nome: ${newProduct.title}`, 
    )
  }
}

export const addCategory = async (commerceName, category) => {
  try {
    const response = await api.post(`/comercio/${commerceName}/categoria`, { categoria: category })
    openNotification(
      commerceName, 
      'Categoria cadastrada com sucesso', 
      )
    return response.data
  } catch (e) {
    openNotification(
      commerceName, 
      `Ouve um problema ao cadastrar uma nova categoria com nome: ${category}`, 
    )
    return null
  }
}

export const deleteCategory = async (commerceName, category) => {
  try {
    const response = await api.delete(`/comercio/${commerceName}/categoria`, { data: {categoria: category}})
    openNotification(
      commerceName, 
      'Categoria removida com sucesso', 
      )
    return response.data
  } catch (e) {
    console.log(e)
    openNotification(
      commerceName, 
      `Ouve um problema ao remover a categoria com nome: ${category}`, 
    )
    return null
  }
}

