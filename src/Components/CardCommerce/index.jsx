import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { IoMdTime as Time } from "react-icons/io";
import { IoLocationOutline as Location } from "react-icons/io5";

export const CardCommerce = (props) => {
    return (
        <div className={style.container}>
            <Link to={props.router}></Link>
            <img className={style.icon} src={props.icon} alt="Logo do comercio" />
            <p className={style.title}>{props.title}</p>
            <hr className={style.line}></hr>
            <div className={style.containerInfos}>
                <span className={style.location}><Location size="1.2rem" color="#FF983B" /></span>
                <p>{props.adress}</p>
            </div>
            <div className={style.containerInfos}>
                <span className={style.infos}><Time  size="1.2rem" color="#FF983B" /></span>
                <div>
                    <p>{props.info}</p>
                    <p>{props.infoTwo}</p>
                    <p>{props.infoThree}</p>
                </div>
            </div>
        </div>

    )
}
