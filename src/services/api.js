import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://solanches.herokuapp.com'
})
