import { Button } from "../../../Components/Button";
import { ProfileImage } from "../../../Components/ProfileImage";
import { useRegister } from "../../../contexts/register.context";
import { useStep } from "../../../contexts/steps.context";
import Coxinha from "../../../assets/images/coxinha.png";

import styles from "./styles.module.css";

export function PhotoRegister() {
  const { newCommerce, setNewCommerce } = useRegister();
  const { nextStep, previousStep } = useStep();

  function handleSubmitImage() {
    setNewCommerce({
      ...newCommerce,
      profileImage: Coxinha,
    });

    nextStep();
  }

  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Construa seu perfil no SoLanches!</h1>
        <span>Adicione informações sobre seu estabelecimento</span>
      </div>
      <div className={styles.upload}>
        <ProfileImage />
        <span id={styles.description}>
          Clique no ícone para fazer o envio de uma foto da sua logo
        </span>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => previousStep()}>Voltar</button>
        <Button title="Avançar" handleClick={() => handleSubmitImage()} />
      </div>
    </div>
  );
}
