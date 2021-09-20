import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useRegister } from '../../../contexts/register.context';


export function RegisterSchedule() {

    // const {newCommerce, setNewCommerce} = useRegister();

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, opens: '', closes: '' }
    ])

    const dayOfWeek = [
        { value: '0', day: "Todos os dias" },
        { value: '1', day: "Domingo" },
        { value: '2', day: "Segunda-feira" },
        { value: '3', day: "Terça-feira" },
        { value: '4', day: "Quarta-feira" },
        { value: '5', day: "Quinta-feira" },
        { value: '6', day: "Sexta-feira" },
        { value: '7', day: "Sábado" },
    ]

    function addNewScheduleItem() {
        const prevItem = scheduleItems[scheduleItems.length - 1]
        if (prevItem.opens && prevItem.closes) {
            if (scheduleItems.length < 8) {
                setScheduleItems([...scheduleItems,
                {
                    week_day: scheduleItems.length,
                    opens: '',
                    closes: ''
                }])
            } else {
                alert("Não é possível adicionar novos horários.")
            }
        } else {
            alert("Por favor, preencha completamente o horário anterior antes de adicionar novos.")
        }
    }

    function setScheduleItemValue(position, field, value) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem;
        })
        setScheduleItems(updateScheduleItems);
    }

    // useEffect(() => {
    //     console.log("Recebido no componente schedule", newCommerce);
    // }, [newCommerce])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Construa seu perfil no SoLanches!</h1>
                <span>Adicione informações sobre os horários de funcionamento do seu estabelecimento</span>
            </div>
            <div className={styles.scheduleList}>
                <table>
                    <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Abre</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <tr key={index} className={styles.scheduleItem}>
                                        <td className={styles.dayOfWeek}>
                                            <select
                                                id="week_day"
                                                value={scheduleItem.week_day}
                                                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Selecione
                                                </option>
                                                {dayOfWeek.map((day, index) => {
                                                    return (
                                                        <option
                                                            key={index}
                                                            value={day.value}>
                                                            {day.day}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </td>
                                        <td className={styles.opensAt}>
                                            <input
                                                id="opens"
                                                type="time"
                                                value={scheduleItem.opens}
                                                onChange={e => setScheduleItemValue(index, 'opens', e.target.value)} />
                                        </td>
                                        <td className={styles.closesAt}>
                                            <input
                                                id="opens"
                                                type="time"
                                                value={scheduleItem.closes}
                                                onChange={e => setScheduleItemValue(index, 'closes', e.target.value)} />
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className={styles.addScheduleButton}>
                <button onClick={addNewScheduleItem}>
                    <span>+</span>
                    Adicionar horário
                </button>
            </div>
            <div className={styles.buttons}>
                <a href="#">
                    Voltar
                </a>
                <a href="#">
                    <button
                        type="submit"
                        className={styles.button}>
                        <span>
                            Avançar
                        </span>
                    </button>
                </a>
            </div>
        </div>
    );
}