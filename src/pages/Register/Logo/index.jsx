import { ProfileImage } from '../../../Components/ProfileImage';
import styles from './styles.module.css';
import { useRegister } from '../../../contexts/register.context';
import Coxinha from '../../../assets/images/coxinha.png'
import { useEffect } from 'react';

export function PhotoRegister() {

    const { newCommerce, setNewCommerce } = useRegister()

    function handleSubmitImage() {
        setNewCommerce({
            ...newCommerce,
            profileImage: Coxinha
        })

        console.log(newCommerce)
    }

    useEffect(() => {
        console.log("Estado recebido no PhotoRegister: ", newCommerce)
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
                    <button type="submit" className={styles.button} onClick={handleSubmitImage}><span>Avançar</span></button>
                </a>
            </div>
        </div>
    )
}