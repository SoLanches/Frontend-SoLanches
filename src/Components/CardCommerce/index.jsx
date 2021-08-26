import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { IoMdTime as Time } from "react-icons/io";
import { IoLocationOutline as Location } from "react-icons/io5";

export const CardCommerce = (props) => {
    return (
        <div className={style.container}>
            <Link to={props.router}>
                <img className={style.icon} src={props.icon} alt="Logo do comercio" />
                <p className={style.title}>{props.title}</p>
                <hr className={style.line}></hr>
                <div className={style.containerInfos}>
                    <span className={style.location}><Location size="1.2rem" color="#FF983B" /></span>
                    <p className={style.adress}>{props.adress}</p>
                </div>
                <div className={style.containerInfos}>
                    <span className={style.infos}><Time size="1.15rem" color="#FF983B" /></span>
                        <div>{props.times.map((hours) => {
                            return (
                                <p className={style.times} >
                                    {hours.days_hours}
                                </p>
                            )
                        }
                        )}
                        </div>

                </div>
            </Link>
        </div>
    )
}

CardCommerce.defaultProps = {
    times: [
        { days_hours: 'Seg, ter : 14h - 23h' },
        { days_hours: 'Qua : Fechado' },
        { days_hours: 'Qui : 16h - 23h' },
        { days_hours: 'Sáb: 15h - 23:30h' },
        { days_hours: 'Dom: 12h- 22h' },
        

    ]
}