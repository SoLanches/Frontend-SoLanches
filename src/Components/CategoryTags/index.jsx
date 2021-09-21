import React, { useState, useCallback } from 'react'
import style from './style.module.css'

export const CategoryTags = ({ title }) => {
  const [active, setActive] = useState(false)

  const handleClick = useCallback(() => {
    setActive(!active)
  }, [setActive, active])

  return (
    <div
      className={`${style.categoryTag} ${active ? ` ${style.active}` : ''}`}
      onClick={handleClick}
    >
      <p className={style.title}>{title}</p>
    </div>
  )
}
