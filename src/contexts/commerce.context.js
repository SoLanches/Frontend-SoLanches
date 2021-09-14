/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useState,
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
  const history = useHistory()

  useEffect(() => {
    async function getDadosProdutos() {
      const response = await getProdutos(commerceName)
      !response ? history.push('/categorias') : setProducts(response) 
    }

    async function getDadosCardapio() {
      const response = await getCardapio(commerceName)
      
      if (!response) {
        history.push('/categorias')
      } else {
        setActiveCategories(response.categorias)
        setFavProductIds(response.destaques)
      }
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
