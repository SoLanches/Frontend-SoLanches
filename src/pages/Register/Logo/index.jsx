import { ProfileImage } from '../../../Components/ProfileImage';
import styles from './styles.module.css';
import { useRegister } from '../../../contexts/register.context';
import { useEffect } from 'react';

export function PhotoRegister() {

    const { newCommerce, setNewCommerce } = useRegister()

    useEffect(() => {
        console.log("Estado recebido: ", newCommerce)
    }, [newCommerce])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Construa seu perfil no SoLanches</h1>
                <span>Adicione informações sobre seu estabelecimento</span>
            </div>
            <div className={styles.upload}>
                <ProfileImage />
                <span id={styles.description}>Clique no ícone para fazer o envio de uma foto da sua logo</span>
            </div>
            <div className={styles.buttons}>
                <a href="#">
                    Voltar
                </a>
                <a href="#">
                    <button type="submit" className={styles.button}><span>Avançar</span></button>
                </a>
            </div>
        </div>
    )
}