/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { useHistory, useParams } from 'react-router'
import { fetchProdutos, getCardapio } from '../services/api'

const CommerceContext = createContext()

export function CommerceProvider({ children }) {
  const { commerceName } = useParams()
  const [activeCategories, setActiveCategories] = useState([])
  const [favProductIds, setFavProductIds] = useState([])
  const [products, setProducts] = useState([])
  const history = useHistory()

  async function getDadosProdutos() {
    const response = await fetchProdutos(commerceName)
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

  useEffect(() => {

    getDadosProdutos()
    getDadosCardapio()
    
  }, [])

  const updateData = async () => {
    getDadosProdutos()
    getDadosCardapio()
  }

  const values = {
    commerceName,
    products,
    setProducts,
    favProductIds,
    setFavProductIds,
    activeCategories,
    setActiveCategories,
    updateData,
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
