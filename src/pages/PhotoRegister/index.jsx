import { ProfileImage } from '../../Components/ProfileImage';
import { Button } from '../../Components/Button';
import styles from './styles.module.css';

export function PhotoRegister() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Construa seu perfil no SoLanches</h1>
                <span>Adicione informações do seu estabelecimento</span>
            </div>
            <div className={styles.inputField}>
                <ProfileImage />
                <span>Clique no ícone acima para fazer o envio de uma foto de sua logo</span>
            </div>
            <div className={styles.buttons}>
                <a href="/">
                    Voltar
                </a>
                <Button title="Avançar" />
            </div>
        </div>
    )
}