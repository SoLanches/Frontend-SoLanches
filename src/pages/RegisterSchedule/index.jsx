import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsClockHistory, BsListTask } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

export function RegisterSchedule() {

    const initialState = [{
        day: '',
        opens: '',
        closes: ''
    }]

    const [schedule, setSchedule] = useState(initialState)


    const dayOfWeek = [
        {
            id: 1,
            name: "Todos os dias"
        }, {
            id: 2,
            name: "Segunda-feira"
        }, {
            id: 3,
            name: "Terça-feira"
        }, {
            id: 4,
            name: "Quarta-feira"
        }, {
            id: 5,
            name: "Quinta-feira"
        }, {
            id: 6,
            name: "Sexta-feira"
        }, {
            id: 7,
            name: "Sábado"
        }, {
            id: 8,
            name: "Domingo"
        }
    ]

    function handleIncrementSchedule() {
        setSchedule(prevState => {
            prevState.push({
                day: '',
                opens: '',
                closes: ''
            })
        })

        console.log(schedule)
        console.log(typeof (schedule))
    }

    useEffect(() => {
        console.log(schedule)
    }, [schedule])

    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <section className={styles.header}>
                    <h1>Construa seu perfil no SoLanches!</h1>
                    <div className={styles.description}>
                        <span>Adicione informações sobre o horário de funcionamento do seu estabelecimento.</span>
                    </div>
                </section>
                <section className={styles.inputGroup}>
                    <table>
                        <thead>
                            <tr>
                                <th>Dia da semana</th>
                                <th>Abre</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                schedule.map(value => {
                                    return (
                                        <tr key={value.day} className={styles.scheduleRegisterLine}>
                                            <td className={styles.day}>
                                                <div>
                                                    <select
                                                        id="day"
                                                        defaultValue="none"
                                                    >
                                                        <option value="none" disabled>
                                                            Selecione
                                                        </option>
                                                        {dayOfWeek.map((day) => {
                                                            return (
                                                                <option
                                                                    value={day.name}
                                                                    key={day.id}
                                                                >
                                                                    {day.name}
                                                                </option>
                                                            )
                                                        })}
                                                    </select>
                                                    {/* <i></i> */}
                                                </div>
                                            </td>
                                            <td className={styles.opens}>
                                                <input type="time" id="opens" />
                                            </td>
                                            <td className={styles.closes}>
                                                <input type="time" id="closes" />
                                            </td>
                                            <td className={styles.discard}>
                                                <button><span>Excluir</span></button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>

                    {
                        schedule.length === 0 ?
                            <div className={styles.noResults}>
                                <BsClockHistory color="#314e52" size="4rem" />
                                <span>Sem horários cadastrados. Por favor, insira-os clicando em "Adicionar horário".</span>
                            </div>
                            :
                            <form>

                            </form >
                    }
                    <div className={styles.addSchedule}>
                        <button className={styles.addButton} onClick={handleIncrementSchedule}>
                            <AiOutlinePlus size="1.25rem" color="#636363" />
                            <span>
                                Adicionar horário
                            </span>
                        </button>
                    </div>
                    <div className={styles.submitButtons}>
                        <Link to="/inicio">
                            <button>Voltar</button>
                        </Link>
                        <a href="#">
                            <button type="submit" className={styles.submitButton} onClick={handleIncrementSchedule}><span>Avançar</span></button>
                        </a>
                    </div>
                </section >
            </div>
        </div >
    );

}