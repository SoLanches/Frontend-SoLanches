import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://solanches.herokuapp.com'
})

export const getCategories = async () => {
    try {
      const response = await api.get(`/comercios?categories=`)
      return response
      
    } catch (e) {
        return null
    }
  }
