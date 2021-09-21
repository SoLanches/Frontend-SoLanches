import React from 'react'
import { useHistory } from 'react-router'
import { Shopping } from '../../assets/icons/Shopping'
import { Smile } from '../../assets/icons/Smile'
import { Button } from '../../Components/Button'

// import { ReactComponent as Shopping } from '../../assets/icons/shopping.svg'

import style from './style.module.css'

export function Home() {
  const history = useHistory()

  return (
    <div className={style.wrapper}>
      <div className={style.infoContainer}>
        <div className={style.titleContainer}>
          <h1 className={style.title}>
            Bateu a fome? <br /> Podemos ajudar!
          </h1>
          <Smile />
        </div>
        <p className={style.text}>
          Reunimos em um só lugar os mais diversos estabelecimentos alimentícios
          para você escolher onde e o que deseja.
        </p>
        <div
          className={style.buttonContainer}
          onClick={() => history.push('/registrar')}
        >
          <span>Cadastre-se</span>
        </div>
      </div>
      <div className={style.shoppingImage}>
        <Shopping width='100%' />
      </div>
    </div>
  )
}
