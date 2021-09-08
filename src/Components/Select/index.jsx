import { useState } from 'react'
import style from './style.module.css'

import { DownOutlined } from '@ant-design/icons'

export const Select = ({ options, defaultValue }) => {
  return (
    <select defaultValue={defaultValue}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option} className={style.option}>
            {option}
          </option>
        )
      })}
    </select>
  )
}

Select.defaultProps = {
  options: ['bebida', 'carnes', 'doces', 'todos'],
  defaultValue: 'todos',
}
