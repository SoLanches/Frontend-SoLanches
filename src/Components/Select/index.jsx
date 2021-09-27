import style from './style.module.css'

export const Select = ({ options, defaultValue, setValue, name }) => {
  const handleChange = (e) => {
    if (setValue) {
      console.log(e.target.value)
      setValue(e.target.value)
    }
  }

  return (
    <div className={style.container}>
      <select defaultValue={defaultValue} id={name} onChange={handleChange}>
        <option value='default' className={style.option} disabled>
          Selecione
        </option>
        {options.map((option, index) => {
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
