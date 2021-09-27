import { Button } from "../../../Components/Button";
import { useRegister } from "../../../contexts/register.context";
import { useStep } from "../../../contexts/steps.context";
import { openNotification } from "../../../util/notification";
import { Select } from "../../../Components/Select";

import { useEffect, useState } from "react";
import { BiErrorAlt } from "react-icons/bi";

import styles from "./styles.module.css";

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
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
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
        openNotification(
          "schedule-limit",
          "Erro ao adicionar horário",
          "Você já adicionou o número máximo de horários permitidos.",
          <BiErrorAlt />,
          {
            color: "red",
          }
        );
      }
    } else {
      openNotification(
        "empty-schedule",
        "Erro ao adicionar horário",
        "Por favor, preencha os campos de horário antes de adicionar um novo.",
        <BiErrorAlt />,
        {
          color: "red",
        }
      );
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

  function hasEmptyScheduleItem() {
    const filtered = scheduleItems.filter((item) => {
      return !item.closes || !item.opens;
    });
    return filtered.length > 0;
  }

  function handleSubmit() {
    if (hasEmptyScheduleItem()) {
      openNotification(
        "empty-schedule-item",
        "Erro ao adicionar horário",
        "Preencha todos os horários antes de avançar.",
        <BiErrorAlt />,
        {
          color: "red",
        }
      );
    } else {
      setNewCommerce({
        ...newCommerce,
        schedule: scheduleItems,
      });

      nextStep();
    }
  }

  useEffect(() => {
    console.log(scheduleItems)
  }, [scheduleItems])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Construa seu perfil no SoLanches!</h1>
        <span>
          Adicione informações sobre os horários de funcionamento do seu
          estabelecimento.
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
                      onChange={e => {
                        console.log(e.target.value)
                      }}
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
