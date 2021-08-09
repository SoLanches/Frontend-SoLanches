import React from 'react'
import style from './style.module.css'
import {IoMdTime as Time} from "react-icons/io";
import {IoLocationOutline as Location} from "react-icons/io5";


export const CardCommerce = (props) => {
    return (
        <div className={style.container}>
            <img src={props.icon} alt="Logo do comercio"/>
            <p id={style.title}>{props.title}</p>
            <span><hr className={style.linha}></hr></span>
            <div className={style.containerAdress}>
                <span><Location className={style.bell} size="1.1rem"color="#FF983B"/></span>
                <p className={style.adress}>is </p>
            </div>
            <div className={style.containerAdress}>
                <span><Time className={style.bell} size="1.2rem"color="#FF983B"/></span>
                <div>
                <p className={style.adress}>eh menina só as fofoca online viu</p>
                </div>
            </div>
            <button className={style.containerButton}>Conhecer</button>
            </div>

    )
}
