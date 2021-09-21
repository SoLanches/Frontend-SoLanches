import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import { Button } from '../Button'
import usePagesContext from '../../contexts/pages.context'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import style from './style.module.css'
import { LoginCard } from '../LoginCard'

const Header = () => {
  const { pathname, handlePathname } = usePagesContext()
  const [lastScrollTop, setScrollTop] = useState(window.pageYOffset)
  const [retracted, setRetract] = useState(false)
  // TODO: Mudar para quando tiver login adaptando código para o componente saber se o usuario está logado.
  // eslint-disable-next-line no-unused-vars
  const [logged, setLogged] = useState(false)

  const [activeLoginModal, setActiveLoginModal] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrolTop = window.pageYOffset
    setRetract(currentScrolTop > lastScrollTop ? true : false)
    setScrollTop(currentScrolTop)
  }, [setScrollTop, setRetract, lastScrollTop])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }, [setRetract, retracted, handleScroll])

  return (
    <div
      className={`${style.outContainer} ${retracted ? style.retracted : ''}`}
    >
      <div className={style.container}>
        <div onClick={handlePathname}>
          <Link to='/inicio'>
            <Logo onClick={handlePathname} className={style.logo} />
          </Link>
        </div>

        <div className={style.paginas}>
          <Link
            to={'/inicio'}
            className={pathname === '/inicio' ? style.active : ''}
          >
            {'Página inicial'}
          </Link>

          <Link
            to={'/categorias'}
            className={pathname === '/categorias' ? style.active : ''}
          >
            {'Categorias'}
          </Link>

          {logged ? (
            <Link
              to={'/categorias'}
              className={pathname === '/perfil' ? style.active : ''}
            >
              {'Meu perfil'}
            </Link>
          ) : (
            <Button
              title='Login'
              handleClick={() => setActiveLoginModal(true)}
            />
          )}
        </div>
      </div>
      {activeLoginModal && (
        <LoginCard handleClose={() => setActiveLoginModal(false)} />
      )}
    </div>
  )
}

export default withRouter(Header)
