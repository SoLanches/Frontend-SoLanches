import { useState, useCallback, Fragment } from 'react'

import { IoCloseOutline } from 'react-icons/io5'
import Clock from '../../assets/icons/clock.svg'
import { Button } from '../Button'

import style from './style.module.css'

export const ServiceHours = ({ hours }) => {
  const [active, setActive] = useState(true)

  const handleClick = useCallback(() => {
    setActive(!active)
  }, [setActive, active])

  return (
    <>
      {/* TODO: Atualizar para componente de botão quando esse componente for criado*/}
      <Button title='Nossos Horários' icon={Clock} handleClick={handleClick} />
      <div className={`${active ? style.active : ''} ${style.outContainer}`}>
        <div className={style.container}>
          <IoCloseOutline
            size='2.5rem'
            className={style.close}
            onClick={handleClick}
          />
          <h3 className={style.title}>Nossos Horários</h3>

          <div className={style.table}>
            <li className={style.day}>Dia da semana</li>
            <li className={style.opens}>Abre</li>
            <li className={style.closes}>Fecha</li>
            {hours.map((hour, index) => {
              return (
                <Fragment key={index}>
                  <li className={style.day}>{hour.week_day}</li>
                  <li className={style.opens}>{hour.opens}</li>
                  <li className={style.closes}>{hour.closes}</li>
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
