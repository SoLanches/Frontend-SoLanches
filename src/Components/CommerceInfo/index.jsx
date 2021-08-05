import { AiOutlineMail, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { BiMap, BiBell } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './styles.module.css'

const commerce = {
    nome: "Burguer King - Partage Shopping Campina",
    imagem: "https://misscheckindotcom1.files.wordpress.com/2018/05/contato-chiozinho-sergipe-foto-do-blog-misscheck-in.jpg?w=640",
    redes: {
        instagram: "a",
        facebook: "https://www.facebook.com",
        email: "https://www.emails.com"
    },
    endereco: "Beco da facada, 140 - Solânea",
    telefone: "83994116317"
}

export function CommerceInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.commerce_image}>
                <img src={commerce.imagem} alt={commerce.nome} />
            </div>
            <h1>{commerce.nome}</h1>
            <div className={styles.social_medias}>
                { commerce.redes.instagram 
                ? <a href={commerce.redes.instagram}><AiOutlineInstagram color="314E52" size="1.5rem" id={styles.social_icon} /></a> 
                : ''}
                { commerce.redes.facebook 
                ? <AiOutlineFacebook color="314E52" size="1.5rem" id={styles.social_icon} /> : ''}
                { commerce.redes.email ? <AiOutlineMail color="314E52" size="1.5rem" id={styles.social_icon} /> : ''}
            </div>
            <div className={styles.address}>
                <BiMap color="FF983B" size="1.25rem" />
                <span>{commerce.endereco}</span>
            </div>
            <div className={styles.buttons}>
                <a href={`https://wa.me/55${commerce.telefone}?text=Olá!%20Eu%20gostaria%20de%20fazer%20um%20pedido.`}>
                    <button>
                        <FaWhatsapp size="1.25rem" />
                        <span>Contate-nos</span>
                    </button>
                </a>
                <button>
                    <BiBell size="1.25rem" />
                    <span>Horários</span>
                </button>
            </div>
        </div >
    );
}