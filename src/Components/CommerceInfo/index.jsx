import { ServiceHours } from '../ServiceHours';
import { Button } from '../Button';
import Instagram from '../../assets/icons/instagram.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Mail from '../../assets/icons/mail.svg'
import Whatsapp from '../../assets/icons/whatsapp.svg'
import styles from './styles.module.css'

export const CommerceInfo = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.commerce_image}>
                <img src={props.image} alt={props.name} />
            </div>
            <h1>{props.name}</h1>
            <div className={styles.social_medias}>
                <a href={props.social_medias.instagram} target="_blank" id={props.social_medias.instagram ? '' : styles.none_icon}  >
                    <img src={Instagram} alt="Instagram" />
                </a>

                <a href={props.social_medias.facebook} target="_blank" id={props.social_medias.facebook ? '' : styles.none_icon}  >
                    <img src={Facebook} alt="Facebook" />
                </a>

                <a href={`mailto:${props.social_medias.email}`} target="_blank">
                    <img src={Mail} alt="Email" />
                </a>
            </div>
            <div className={styles.address}>
                <span>{props.address}</span>
            </div>
            <div className={styles.buttons}>
                <a href={`https://wa.me/55${props.phone}?text=Olá!%20Eu%20gostaria%20de%20fazer%20um%20pedido.`} target="_blank">
                    <Button title="Contate-nos" icon={Whatsapp}/>
                </a>
                <ServiceHours hours={props.hours} />
            </div>
        </div >
    );
}

CommerceInfo.defaultProps = {
    name: "Confeitaria Artesanal Bendito Doce",
    image: "https://misscheckindotcom1.files.wordpress.com/2018/05/contato-chiozinho-sergipe-foto-do-blog-misscheck-in.jpg?w=640",
    social_medias: {
        instagram: "http://instagram.com/",
        facebook: "https://www.facebook.com/",
        email: "igrejamachado98@gmail.com"
    },
    address: "Beco do Timbú, 140 - Solânea",
    phone: "83994116318"
}
