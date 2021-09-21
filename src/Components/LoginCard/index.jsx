import { useRef } from 'react'
import { Button } from '../Button'
import Logo from '../../assets/icons/logo.svg'
import { IoCloseOutline } from 'react-icons/io5'

import styles from './styles.module.css'

export const LoginCard = ({ handleClose }) => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = () => {
    alert(
      `${emailRef.current.value} - Esse é meu email - ${passwordRef.current.value} - Essa é minha senha`
    )
    emailRef.current.value = ''
    passwordRef.current.value = ''
    handleClose()
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
            <label for='loginEmail'>Endereço de Email</label>
            <input
              type='text'
              id='loginEmail'
              placeholder='Digite seu email'
              ref={emailRef}
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
          <a href='/inicio'>Cadastre-se</a>
        </div>
      </div>
    </div>
  )
}
