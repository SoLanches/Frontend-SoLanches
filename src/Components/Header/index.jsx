import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import { Button } from '../Button'
import usePagesContext from '../../contexts/pages.context'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import { useHistory } from 'react-router-dom'

import style from './style.module.css'
import { LoginCard } from '../LoginCard'
import useLoginContext from '../../contexts/login.context'
import { formatRoute } from '../../util/format'

export const Header = () => {
  const { token, user } = useLoginContext()
  console.log(user)
  const history = useHistory()
  const { pathname, handlePathname } = usePagesContext()
  const [lastScrollTop, setScrollTop] = useState(window.pageYOffset)
  const [retracted, setRetract] = useState(false)
  const [logged, setLogged] = useState(token !== null)

  useEffect(() => {
    setLogged(token !== null)
  }, [token])

  const [activeLoginModal, setActiveLoginModal] = useState(false)

  const handleLogout = async () => {
    history.push('/inicio')
  }

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
            <>
              <Link
                to={`/${formatRoute(user)}`}
                params={{ commerceName: formatRoute(user) }}
                className={pathname === '/perfil' ? style.active : ''}
              >
                {'Meu perfil'}
              </Link>
              <Button title='Sair' handleClick={handleLogout} />
            </>
          ) : (
            <Button
              title='Entrar'
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
