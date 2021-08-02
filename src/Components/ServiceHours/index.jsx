import { useState, useCallback } from "react";

import { IoCloseOutline } from "react-icons/io5";

import style from './style.module.css'

export const ServiceHours = ({ hours }) => {
    const [active, setActive] = useState(false);

    const handleClick = useCallback(() => {
        console.log(active)
        setActive(!active)
    }, [setActive, active])

    return (
        <>
            <button onClick={handleClick}>Horarios</button>
            <div className={`${active ? style.active : ''} ${style.outContainer}`}>
                <div className={style.container}>
                    <IoCloseOutline
                        size='2.5rem'
                        className={style.close}
                        onClick={handleClick} />
                    <h3 className={style.title}>Nossos Horários</h3>

                    <div className={style.table}>
                        <ul className={style.tableHead}>
                            <li>Dia da semana</li>
                            <div>
                                <li>Abre</li>
                                <li>Fecha</li>
                            </div>
                        </ul>
                        <div className={style.tableBody}>
                            {hours.map((hour) => {
                                return (
                                    <ul className={style.tableHour}>
                                        <li>{hour.day}</li>
                                        <div>
                                            <li>{hour.opens}</li>
                                            <li>{hour.closes}</li>
                                        </div>
                                    </ul>
                                )
                            })}
                        </div>
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