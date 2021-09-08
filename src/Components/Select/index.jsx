import style from './style.module.css'

export const Select = ({ options, defaultValue }) => {
  return (
    <select defaultValue={defaultValue}>
      <option value="default" className={style.option} disabled>
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
