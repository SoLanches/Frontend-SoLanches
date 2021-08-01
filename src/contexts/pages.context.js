import React, { createContext, useContext, useState, useCallback } from 'react'

import { Categories } from '../pages/Categories'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

const PagesContext = createContext()

export function PagesProvider({ children }) {
    const [pathname, setPathname] = useState(window.location.pathname)
    const pages = [
        { name: 'Home', text: 'Página Inicial', path: '/inicio', component: Home, header: true },
        { name: 'Categories', text: 'Categorias', path: '/categorias', component: Categories, header: true },
        { name: 'Login', text: 'Login', path: '/login', component: Login, header: true },
    ]

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
        <PagesContext.Provider value={values}>
            {children}
        </PagesContext.Provider>
    )
}

export default function usePagesContext() {
    const context = useContext(PagesContext)

    return { ...context }
}

