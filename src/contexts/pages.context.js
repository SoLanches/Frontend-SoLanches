import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'

import { Categories } from '../pages/Categories'
import { EditMenu } from '../pages/EditMenu'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { CommerceProvider } from './commerce.context'

const PagesContext = createContext()

const EditPage = () => {
  return(<CommerceProvider><EditMenu/></CommerceProvider>)
}

export function PagesProvider({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname)
  const pages = [
    {
      name: 'Home',
      text: 'Página Inicial',
      path: '/inicio',
      component: Home,
      header: true,
      private: false
    },
    {
      name: 'Categories',
      text: 'Categorias',
      path: '/categorias',
      component: Categories,
      header: true,
      private: false
    },
    {
      name: 'Login',
      text: 'Login',
      path: '/login',
      component: Login,
      logged: false,
      header: true,
      private: false
    },
    {
      name: 'editMenu',
      text: 'Edit Menu',
      path: '/:commerceName/edit',
      component: EditPage,
      header: false,
      private: true
    },
  ]

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [setPathname, pathname])

  const handlePathname = useCallback(() => {
    setPathname(window.location.pathname)
  }, [setPathname])

  const values = {
    pathname,
    setPathname,
    pages,
    handlePathname,
  }

  return (
    <PagesContext.Provider value={values}>{children}</PagesContext.Provider>
  )
}

export default function usePagesContext() {
  const context = useContext(PagesContext)

  return { ...context }
}
