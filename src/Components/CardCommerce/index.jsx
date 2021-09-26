import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { IoMdTime as Time } from "react-icons/io";
import { IoLocationOutline as Location } from "react-icons/io5";
import user from '../../assets/images/user.svg'
import { formatRoute } from '../../util/format';

export const CardCommerce = (props) => {
    return (
        <Link to={`/${formatRoute(props.title)}`}>
            <div className={style.container}>
                <img className={style.icon} src={user} alt="Logo do comercio" />
                <p className={style.title}>{props.title}</p>
                <hr className={style.line}></hr>
                <div className={style.containerInfos}>
                    <span className={style.location}><Location size="1.2rem" color="#FF983B" /></span>
                    <p className={style.adress}>{props.adress}</p>
                </div>
                <div className={style.containerInfos}>
                    <span className={style.infos}><Time size="1.15rem" color="#FF983B" /></span>
                    <div>{props.hours.map((hours, index) => {
                        return (
                            <p key={index} className={style.times}>
                                {hours.week_day}
                            </p>
                        )}
                    )}
                    </div>
                        </div>
            </div>
        </Link>
    )
}
CardCommerce.defaultProps = {
    hours: [
        { week_day: 'Segunda-feira', opens: '08:00', closes: '18:00' },
        { week_day: 'Terça-feira', opens: '18:00', closes: '18:00' },
        { week_day: 'Quarta-feira', opens: '12:00', closes: '18:00' },
        { week_day: 'Quinta-feira', opens: '11:00', closes: '18:00' },
        { week_day: 'Sexta-feira', opens: '08:00', closes: '18:00' },
    ]
}

