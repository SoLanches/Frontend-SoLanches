import { Categories } from '../pages/Categories'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { EditMenu } from '../pages/EditMenu'

const PagesContext = createContext()


export function PagesProvider({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname)
  const pages = [
    {
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
      component: EditMenu,
      header: false,
      private: true
    },
  ]
}