import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import usePagesContext from '../../contexts/pages.context'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'


import style from './style.module.css'

export const Header = () => {
    const { pathname, handlePathname, pages } = usePagesContext()
    const [lastScrollTop, setScrollTop] = useState(window.pageYOffset)
    const [retracted, setRetract] = useState(false)

    const handleScroll = useCallback(() => {
        const currentScrolTop = window.pageYOffset
        setRetract(currentScrolTop > lastScrollTop ? true : false)
        setScrollTop(currentScrolTop)

    }, [setScrollTop, setRetract, lastScrollTop])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    }, [setRetract, retracted, handleScroll])


    return (
        <div className={`${style.outContainer} ${retracted ? style.retracted : ''}`}>
            <div className={style.container}>
                <div onClick={handlePathname}>
                    <Link to='/inicio' >
                        <Logo onClick={handlePathname} className={style.logo}/>
                    </Link>
                </div>
                <ul className={style.paginas}>
                    {pages.map((page, index) => {
                        return (
                            <li key={index}
                                onClick={handlePathname}>
                                <Link
                                    to={page.path}
                                    className={pathname === page.path ? style.active : ''}>{page.text}</Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}