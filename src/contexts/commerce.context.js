import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { useHistory, useParams } from 'react-router'
import { getProdutos } from '../services/api'

const CommerceContext = createContext()

export function CommerceProvider({ children }) {
  const { commerceName } = useParams()

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getDados() {
      const response = await getProdutos(commerceName)

      setProducts(response) 
    }
    getDados()
  }, [])

  const values = {
    commerceName,
    products,
    setProducts,
    sapato: 'vacas'
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
