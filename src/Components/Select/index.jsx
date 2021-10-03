import { useRef, useState } from 'react'
import style from './style.module.css'

export const Select = ({ options, defaultValue, setValue, name }) => {
  console.log()
  const [selected, setSelected] = useState(defaultValue)
  const currentValue = useRef()

  const handleChange = () => {
    if (setValue) {
      setValue(currentValue.current.value)
    }
    setSelected(currentValue.current.value)
  }

  return (
    <div className={style.container}>
      <select
        selected={selected}
        value={selected}
        ref={currentValue}
        id={name}
        onChange={handleChange}
      >
        <option value='default' className={style.option}>
          Selecione
        </option>
        {options.length > 0 &&
          options.map((option, index) => {
            return (
              <option key={index} value={option} className={style.option}>
                {option}
              </option>
            )
          })}
      </select>
      <i></i>
    </div>
  )
}

Select.defaultProps = {
  options: ['bebida', 'carnes', 'doces', 'todos'],
  defaultValue: 'default',
}
