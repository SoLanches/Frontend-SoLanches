import { AiOutlineMail, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { BiMap, BiBell } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { ServiceHours } from '../ServiceHours';
import styles from './styles.module.css'

import Instagram from '../../assets/icons/instagram.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Mail from '../../assets/icons/mail.svg'

export const CommerceInfo = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.commerce_image}>
                <img src={props.image} alt={props.name} />
            </div>
            <h1>{props.name}</h1>
            <div className={styles.social_medias}>
                <a href={props.social_medias.instagram} id={props.social_medias.instagram ? styles.social_icon : styles.none_icon}  >
                    <img src={Instagram} alt="Instagram" />
                </a>

                <a href={props.social_medias.facebook} id={props.social_medias.facebook ? styles.social_icon : styles.none_icon}  >
                    <img src={Facebook} alt="Facebook" />
                </a>

                <a href={`mailto:${props.social_medias.email}`}>
                    <img src={Mail} alt="Email" />
                </a>
            </div>
            <div className={styles.address}>
                <span>{props.address}</span>
            </div>
            <div className={styles.buttons}>
                <a href={`https://wa.me/55${props.phone}?text=Olá!%20Eu%20gostaria%20de%20fazer%20um%20pedido.`}>
                    <button>
                        <FaWhatsapp size="1.25rem" />
                        <span>Contate-nos</span>
                    </button>
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
        instagram: "https://www.instagram.com",
        facebook: "https://www.facebook.com",
        email: "igrejamachado98@gmail.com"
    },
    address: "Beco do Timbú, 140 - Solânea",
    phone: "83994116318"
}
