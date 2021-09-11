import style from './style.module.css'

export const Select = ({ options, defaultValue, setValue }) => {
  const handleChange = (e) => {
    if (setValue) {
      console.log(e.target.value)
      setValue(e.target.value)
    }
  }

  return (
    <select defaultValue={defaultValue} onChange={handleChange}>
      <option value='default' className={style.option} disabled>
        selecione
      </option>
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
  defaultValue: 'default',
}
