import { useState, useCallback } from "react";

import { IoCloseOutline } from "react-icons/io5";
import Clock from "../../assets/icons/clock.svg";
import { Button } from "../Button";

import style from './style.module.css'

export const ServiceHours = ({ hours }) => {
    const [active, setActive] = useState(true);

    const handleClick = useCallback(() => {
        setActive(!active)
    }, [setActive, active])

    return (
        <>
            {/* TODO: Atualizar para componente de botão quando esse componente for criado*/}
            <Button title="Horários" icon={Clock} handleClick={handleClick} />
            <div className={`${active ? style.active : ''} ${style.outContainer}`}>
                <div className={style.container}>
                    <IoCloseOutline
                        size='2.5rem'
                        className={style.close}
                        onClick={handleClick} />
                    <h3 className={style.title}>Nossos Horários</h3>

                    <div className={style.table}>
                        <li className={style.day}>Dia da semana</li>
                        <li className={style.opens}>Abre</li>
                        <li className={style.closes}>Fecha</li>
                        {hours.map((hour, index) => {
                            return (
                                <>
                                    <li className={style.day}>
                                        {hour.day}
                                    </li><li className={style.opens}>
                                        {hour.opens}
                                    </li><li className={style.closes}>
                                        {hour.closes}
                                    </li>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

ServiceHours.defaultProps = {
    hours: [
        { day: 'Segunda-feira', opens: '08:00', closes: '18:00' },
        { day: 'Terça-feira', opens: '18:00', closes: '18:00' },
        { day: 'Quarta-feira', opens: '12:00', closes: '18:00' },
        { day: 'Quinta-feira', opens: '11:00', closes: '18:00' },
        { day: 'Sexta-feira', opens: '08:00', closes: '18:00' },
    ]
}