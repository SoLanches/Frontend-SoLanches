import { AiOutlineMail, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { BiMap, BiBell } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { ServiceHours } from '../ServiceHours';
import styles from './styles.module.css'

export const CommerceInfo = ({ name, image, social_medias, address, phone, hours }) => {
    return (
        <div className={styles.container}>
            <div className={styles.commerce_image}>
                <img src={image} alt={name} />
            </div>
            <h1>{name}</h1>
            <div className={styles.social_medias}>
                <a href={social_medias.instagram} id={social_medias.instagram ? styles.social_icon : styles.none_icon}  >
                    <AiOutlineInstagram color="314E52" size="1.5rem" />
                </a>

                <a href={social_medias.facebook} id={social_medias.facebook ? styles.social_icon : styles.none_icon}  >
                    <AiOutlineFacebook color="314E52" size="1.5rem" />
                </a>

                <a href={`mailto:${social_medias.email}`}>
                    <AiOutlineMail color="314E52" size="1.5rem" id={styles.social_icon} />
                </a>
            </div>
            <div className={styles.address}>
                <BiMap color="FF983B" size="1.25rem" />
                <span>{address}</span>
            </div>
            <div className={styles.buttons}>
                <a href={`https://wa.me/55${phone}?text=Olá!%20Eu%20gostaria%20de%20fazer%20um%20pedido.`}>
                    <button>
                        <FaWhatsapp size="1.25rem" />
                        <span>Contate-nos</span>
                    </button>
                </a>
                <ServiceHours id={styles.schedule} hours={hours}/>
            </div>
        </div >
    );
}

CommerceInfo.defaultProps = {
    name: "Pirão de dona Socorro",
    image: "https://misscheckindotcom1.files.wordpress.com/2018/05/contato-chiozinho-sergipe-foto-do-blog-misscheck-in.jpg?w=640",
    social_medias: {
        instagram: "https://www.instagram.com",
        facebook: "https://www.facebook.com",
        email: "igrejamachado98@gmail.com"
    },
    address: "Beco do Timbú, 140 - Solânea",
    phone: "83994116318"
}
