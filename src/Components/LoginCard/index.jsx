import { useRef } from 'react'
import { Button } from '../Button'
import Logo from '../../assets/icons/logo.svg'
import { IoCloseOutline } from 'react-icons/io5'

import styles from './styles.module.css'
import { useHistory } from 'react-router'
import { formatRoute, normalize } from '../../util/format'
import { login } from '../../services/api'
import useLoginContext from '../../contexts/login.context'

export const LoginCard = ({ handleClose }) => {
  const { updateInfo } = useLoginContext()
  const history = useHistory()
  const userRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = async () => {
    const response = await login(
      normalize(userRef.current.value),
      passwordRef.current.value
    )

    if (response) {
      history.push(`/${formatRoute(userRef.current.value)}`)
      localStorage.setItem('@solanches/loginToken', response.data.token)
      localStorage.setItem('@solanches/user', normalize(userRef.current.value))
      handleClose()
      updateInfo()
    }
  }

  return (
    <div className={`${styles.outContainer}`}>
      <div className={styles.container}>
        <header className={styles.itemHeader}>
          <img src={Logo} alt='SoLanches' />
          <IoCloseOutline
            size='2.5rem'
            className={styles.close}
            onClick={handleClose}
          />
        </header>
        <div className={styles.input_field}>
          <div id={styles.email}>
            <label for='loginUser'>Usuário</label>
            <input
              type='text'
              id='loginUser'
              placeholder='Digite seu usuário'
              ref={userRef}
            />
          </div>
          <div id={styles.password}>
            <label for='loginPassword'>Senha</label>
            <input
              type='password'
              id='loginPassword'
              placeholder='Digite sua senha'
              ref={passwordRef}
            />
          </div>
        </div>
        <Button title='Entrar' handleClick={handleLogin} />
        <div className={styles.registerNow}>
          <span>Novo(a) no SoLanches?</span>
          <a href='/registrar'>Cadastre-se</a>
        </div>
      </div>
    </div>
  )
}
