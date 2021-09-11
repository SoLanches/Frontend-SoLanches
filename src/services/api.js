import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://solanches.herokuapp.com/'
})

export const getProdutos = async (nomeComercio) => {
  try {
    const response = await api.get(`/comercio/${nomeComercio}/produtos?categories=true`)

    return response.data
  } catch (e) {
    return null
  }
}
