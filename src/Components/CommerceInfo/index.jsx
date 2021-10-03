import { ServiceHours } from '../ServiceHours'
import { Button } from '../Button'
import Instagram from '../../assets/icons/instagram.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Mail from '../../assets/icons/mail.svg'
import Whatsapp from '../../assets/icons/whatsapp.svg'
import { useEffect, useState } from 'react'
import { getCommerce } from '../../services/api'
import user from '../../assets/images/user.svg'
import { deformatName } from '../../util/format'
import styles from './styles.module.css'

export const CommerceInfo = ({ commerceName }) => {
  const [name, setName] = useState('')
  const [commerceInfo, setCommerceInfo] = useState(null)
  const [socialMedia, setSocialMedia] = useState({})

  useEffect(() => {
    async function getCommerceProducts() {
      const commerceInfoData = await getCommerce(commerceName)
      console.log(commerceInfoData)
      setCommerceInfo(commerceInfoData.attributes)
      setName(commerceInfoData.nome)
      setSocialMedia(commerceInfoData.attributes.social_media)
    }

    getCommerceProducts()
  }, [commerceName])

  return (
    commerceInfo && (
      <div className={styles.container}>
        <div className={styles.commerce_image}>
          <img src={user} alt='loja' />
        </div>
        <h1>{deformatName(name)}</h1>
        <div className={styles.social_medias}>
          <a
            className={socialMedia ? '' : styles.linkInactive}
            href={socialMedia ? socialMedia.instagram : undefined}
            target={socialMedia ? '_blank' : ''}
            rel='noreferrer'
          >
            <img src={Instagram} alt='Instagram' />
          </a>

          <a
            className={socialMedia ? '' : styles.linkInactive}
            href={socialMedia ? socialMedia.facebook : undefined}
            target={socialMedia ? '_blank' : ''}
            rel='noreferrer'
          >
            <img src={Facebook} alt='Facebook' />
          </a>

          <a
            className={socialMedia ? '' : styles.linkInactive}
            href={socialMedia ? `mailto:${socialMedia.email}` : undefined}
            target={socialMedia ? '_blank' : ''}
            rel='noreferrer'
          >
            <img src={Mail} alt='Email' />
          </a>
        </div>
        <div className={styles.address}>
          <span>{commerceInfo.endereco}</span>
        </div>
        <div className={styles.buttons}>
          <a
            href={`https://wa.me/55${commerceInfo.phone}?text=Olá!%20Eu%20gostaria%20de%20fazer%20um%20pedido.`}
            target='_blank'
            rel='noreferrer'
          >
            <Button title='Contate-nos' icon={Whatsapp} />
          </a>
          <ServiceHours hours={commerceInfo.horarios} />
        </div>
      </div>
    )
  )
}
