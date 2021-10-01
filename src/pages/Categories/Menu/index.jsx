import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useParams } from 'react-router-dom';
import { getCommerce } from '../../../services/api';
import { Menu }  from '../../../Components/Menu'
import { CommerceInfo } from '../../../Components/CommerceInfo';


export function MenuPage() {
    const [commerce, setCommerce] = useState()
    const {commerceName} = useParams();
    console.log(commerceName)

    useEffect( () => { 
        
        async function fetchCommerce() {
            const commerceData = await getCommerce(commerceName)
            setCommerce(commerceData)
        }
        fetchCommerce()
    }, [commerceName])


    if (!commerce) {
        return "Carregando..."
    }


    return (
        <div className={style.menu}>
            <CommerceInfo></CommerceInfo>
            <Menu commerceName={commerceName}/>
        </div>

    )
}