import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'

import { Categories } from '../pages/Categories'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import {Register } from '../pages/Register'
import { RegisterSchedule } from '../pages/RegisterSchedule'

const PagesContext = createContext()

export function PagesProvider({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname)
  const pages = [
    {
      name: 'Home',
      text: 'Página Inicial',
      path: '/inicio',
      component: Home,
    },
    {
      name: 'Categories',
      text: 'Categorias',
      path: '/categorias',
      component: Categories,
    },
    {
      name: 'Login',
      text: 'Login',
      path: '/login',
      component: Login,
      logged: false,
    },
    {
      name: 'Meu Perfil',
      text: 'Meu Perfil',
      path: '/:nomeComercio',
      component: Categories,
      logged: true,
    },
    {
      name: 'Registrar',
      text: 'Registrar',
      path: '/registrar',
      component: Register,
      logged: false,
    },
    {
      name: 'Cadastrar horários',
      text: 'Cadastrar horários',
      path: '/horarios',
      component: RegisterSchedule,
      logged: false,
    }
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
