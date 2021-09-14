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
  const [favProductIds, setFavProductIds] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getDadosProdutos() {
      const response = await getProdutos(commerceName)
      setProducts(response) 
    }

    async function getDadosCardapio() {
      const response = await getCardapio(commerceName)
      setActiveCategories(response.categorias)
      setFavProductIds(response.destaques)
    }

    getDadosProdutos()
    getDadosCardapio()
    
  }, [])

  const values = {
    commerceName,
    products,
    setProducts,
    favProductIds,
    setFavProductIds,
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
