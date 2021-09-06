import { useEffect, useState } from 'react/cjs/react.development'
import { Schedule } from '../Schedule'

import style from './style.module.css'

export const RegisterHour = () => {
  const [schedules, setSchedules] = useState([
    { day: 'Sábado', opens: '', closes: '' },
  ])

  const handleClick = () => {
    let schedulesCopy = schedules
    schedulesCopy.push({ day: 'Domingo', opens: '', closes: '' })
    setSchedules([...schedulesCopy])
  }

  return (
    <div>
      <div className={style.schedulesContainer}>
        {schedules.map((schedule, index) => {
          return (
            <Schedule
              schedule={schedule}
              schedules={schedules}
              setSchedules={setSchedules}
              index={index}
            />
          )
        })}
      </div>
      <div onClick={handleClick}>sapato</div>
    </div>
  )
}
