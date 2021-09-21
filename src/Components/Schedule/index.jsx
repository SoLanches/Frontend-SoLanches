import style from './style.module.css'
export const Schedule = ({ schedule, schedules, setSchedules, index }) => {
  const days = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ]

  const handleDaySelect = (event) => {
    let updatedSchedule = schedule
    updatedSchedule.day = event.target.value

    schedules[index] = updatedSchedule

    setSchedules([...schedules])
  }

  const handleOpeningTime = (event) => {
    let updatedSchedule = schedule
    updatedSchedule.opens = event.target.value

    schedules[index] = updatedSchedule

    setSchedules([...schedules])
  }

  const handleClosingTime = (event) => {
    let updatedSchedule = schedule
    updatedSchedule.closes = event.target.value

    schedules[index] = updatedSchedule

    setSchedules([...schedules])
  }

  return (
    <div className={style.container}>
      <select
        defaultValue={schedule.day}
        className={style.days}
        onChange={handleDaySelect}
      >
        <option value="notSelected">Selecione um dia</option>
        {days.map((day, i) => {
          return (
            <option key={day} id={day} value={day}>
              {day}
            </option>
          )
        })}
      </select>
      <input type="time" onChange={handleOpeningTime} />
      <input type="time" onChange={handleClosingTime} />
    </div>
  )
}
