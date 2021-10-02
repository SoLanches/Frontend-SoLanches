import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

import { Categories } from '../pages/Categories'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { EditMenu } from '../pages/EditMenu'
import { RegisterMenu } from '../pages/Register/index'
import { useHistory } from 'react-router-dom'
import { MenuPage } from "../pages/Menu";

const PagesContext = createContext()

export function PagesProvider({ children }) {
  const history = useHistory()
  const [pathname, setPathname] = useState(window.location.pathname)
  const pages = [
    {
      name: "Home",
      text: "Página Inicial",
      path: "/inicio",
      component: Home,
      header: true,
      private: false,
    },
    {
      name: "Categories",
      text: "Categorias",
      path: "/categorias",
      component: Categories,
      header: true,
      private: false,
    },
    {
      name: 'Login',
      text: 'Fazer login',
      path: '/login',
      component: Login,
      logged: false,
      header: true,
      private: false,
    },
    {
      name: "editMenu",
      text: "Edit Menu",
      path: "/:commerceName/edit",
      component: EditMenu,
      header: false,
      private: true,
    },
    {
      name: "Register",
      text: "Registrar",
      path: "/registrar",
      component: RegisterMenu,
      header: false,
      private: false,
    },
    {
      name: 'cardapio',
      text: 'Cardápio',
      path: '/:commerceName',
      component: MenuPage,
      header: true,
      private: false
    },
  ];
  
  useEffect(() => {
    history.listen((location) => {
      setPathname(location.pathname)
    })
  }, [history, setPathname])

  const handlePathname = useCallback(() => {
    setPathname(window.location.pathname);
  }, [setPathname]);

  const values = {
    pathname,
    setPathname,
    pages,
    handlePathname,
  };

  return (
    <PagesContext.Provider value={values}>{children}</PagesContext.Provider>
  );
}

export default function usePagesContext() {
  const context = useContext(PagesContext);

  return { ...context };
}