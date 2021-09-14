import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { useHistory, useParams } from 'react-router'
import { getProdutos, getCardapio } from '../services/api'

const CommerceContext = createContext()

export function CommerceProvider({ children }) {
  const { commerceName } = useParams()
  const [activeCategories, setActiveCategories] = useState([])
  const [favs, setFavs] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getDadosProdutos() {
      const response = await getProdutos(commerceName)
      setProducts(response) 
    }

    async function getDadosCardapio() {
      const response = await getCardapio(commerceName)
      setActiveCategories(response.categorias)
      setFavs(response.destaques)
    }

    getDadosProdutos()
    getDadosCardapio()
    
  }, [])

  const values = {
    commerceName,
    products,
    setProducts,
    favs,
    setFavs,
    activeCategories,
    setActiveCategories,
  }

  return (
    <>
      {products &&<CommerceContext.Provider value={values}>{children}</CommerceContext.Provider>}
    </>
  )
}

export default function useCommerceContext() {
  const context = useContext(CommerceContext)

  return { ...context }
}
