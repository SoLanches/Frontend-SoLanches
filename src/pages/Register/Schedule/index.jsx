import { Button } from "../../../Components/Button";
import { useState } from "react";
import { useRegister } from "../../../contexts/register.context";
import { useStep } from "../../../contexts/steps.context";

import styles from "./styles.module.css";
import { Select } from "../../../Components/Select";
import { openNotification } from "../../../util/notification";

export function RegisterSchedule() {
  const { newCommerce, setNewCommerce } = useRegister();
  const { nextStep, previousStep } = useStep();

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: "Todos os dias", opens: "", closes: "" },
  ]);

  const dayOfWeek = [
    "Todos os dias",
    "Domingo",
    "Segunda-feira",
    "Terca-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
  ];

  function addNewScheduleItem() {
    const prevItem = scheduleItems[scheduleItems.length - 1];
    if (prevItem.opens && prevItem.closes) {
      if (scheduleItems.length < 8) {
        setScheduleItems([
          ...scheduleItems,
          {
            week_day: dayOfWeek[scheduleItems.length],
            opens: "",
            closes: "",
          },
        ]);
      } else {
        openNotification("schedule-limit", "Erro ao adicionar horário", "Você já adicionou o número máximo de horários permitidos.")
      }
    } else {
      openNotification(
        "empty-schedule", 
        "Erro ao adiconar horário", 
        "Por favor, preencha os campos de horário antes de adicionar um novo.");
    }
  }

  function setScheduleItemValue(position, field, value) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(updateScheduleItems);
  }

  function handleSubmit() {
    setNewCommerce({
      ...newCommerce,
      schedule: scheduleItems,
    });

    nextStep();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Construa seu perfil no SoLanches!</h1>
        <span>
          Adicione informações sobre os horários de funcionamento do seu
          estabelecimento
        </span>
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
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <tr key={index} className={styles.scheduleItem}>
                  <td className={styles.dayOfWeek}>
                    <Select
                      options={dayOfWeek}
                      name="week_day"
                      defaultValue={scheduleItem.week_day}
                      handleChange={(e) =>
                        setScheduleItemValue(index, "week_day", e.target.value)
                      }
                    />
                  </td>
                  <td className={styles.opensAt}>
                    <input
                      id="opens"
                      type="time"
                      value={scheduleItem.opens}
                      onChange={(e) =>
                        setScheduleItemValue(index, "opens", e.target.value)
                      }
                    />
                  </td>
                  <td className={styles.closesAt}>
                    <input
                      id="opens"
                      type="time"
                      value={scheduleItem.closes}
                      onChange={(e) =>
                        setScheduleItemValue(index, "closes", e.target.value)
                      }
                    />
                  </td>
                </tr>
              );
            })}
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
        <button onClick={() => previousStep()}>Voltar</button>
        <Button title="Avançar" handleClick={handleSubmit} />
      </div>
    </div>
  );
}
