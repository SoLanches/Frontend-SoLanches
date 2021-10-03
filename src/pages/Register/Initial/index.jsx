import { Button } from '../../../Components/Button'
import { requiredInfoAlert } from '../constants'
import { useRegister } from '../../../contexts/register.context'
import { useStep } from '../../../contexts/steps.context'

import { useHistory } from 'react-router-dom'

import { useFormik } from 'formik'
import * as yup from 'yup'
import NumberFormat from 'react-number-format'

import styles from './styles.module.css'
import { formatRoute } from '../../../util/format'

export function RegisterInitial() {
  const history = useHistory()

  const { newCommerce, setNewCommerce } = useRegister()
  const { nextStep } = useStep()

  const validationSchema = yup.object().shape({
    name: yup.string().required(requiredInfoAlert),
    email: yup.string().email('Email inválido.').required(requiredInfoAlert),
    phone: yup
      .string()
      .required(requiredInfoAlert)
      .min(11, 'Telefone inválido.'),
    cnpj: yup.string().required(requiredInfoAlert).min(16, 'CNPJ inválido.'),
    instagram: yup.string(),
    facebook: yup.string(),
    city: yup.string().required(requiredInfoAlert),
    district: yup.string(),
    street: yup.string().required(requiredInfoAlert),
    number: yup.number().required(requiredInfoAlert),
    password: yup
      .string()
      .min(6, 'Senha muito curta.')
      .max(18, 'Senha muito longa.')
      .required(requiredInfoAlert),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais.'),
  })

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      onSubmit: async (values) => {
        setNewCommerce({
          ...newCommerce,
          name: formatRoute(values.name),
          phone: values.phone,
          cnpj: values.cnpj,
          password: values.password,
          social_medias: {
            email: values.email,
            instagram: values.instagram,
            facebook: values.facebook,
          },
          address: {
            city: values.city,
            street: values.street,
            district: values.district,
            number: values.number,
          },
        })
        nextStep()
      },

      validationSchema: () => validationSchema,
      initialValues: {
        name: newCommerce.name,
        phone: newCommerce.phone,
        email: newCommerce.social_medias.email,
        cnpj: newCommerce.cnpj,
        instagram: newCommerce.social_medias.instagram,
        facebook: newCommerce.social_medias.facebook,
        city: newCommerce.address.city,
        district: newCommerce.address.district,
        street: newCommerce.address.street,
        number: newCommerce.address.number,
        password: '',
        passwordConfirm: '',
      },
    })

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Seja bem-vinde ao SoLanches!</h1>
        <div className={styles.description}>
          <span>Atenção:</span>
          <span>
            O cadastro só é necessário para usuários que querem vender algo.
          </span>
        </div>
      </section>
      <section className={styles.inputGroup}>
        <form onSubmit={() => handleSubmit()}>
          <div className={styles.name}>
            <label htmlFor='name'>
              Nome <span id={styles.required}>*</span>
            </label>
            <input
              type='text'
              id='name'
              placeholder='Digite o nome do estabelecimento'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.name && (
              <span className={styles.error}> {errors.name} </span>
            )}
          </div>
          <div className={styles.phone}>
            <label htmlFor='phone'>
              Telefone <span id={styles.required}>*</span>
            </label>
            <NumberFormat
              id='phone'
              placeholder='Digite o Telefone'
              onValueChange={(val) => {
                const { value } = val
                values.phone = value
              }}
              required
              mask='_'
              format='(##) #####-####'
            />
            {touched.phone && (
              <span className={styles.error}> {errors.phone} </span>
            )}
          </div>
          <div className={styles.email}>
            <label htmlFor='email'>
              E-mail <span id={styles.required}>*</span>
            </label>
            <input
              type='email'
              id='email'
              placeholder='Digite o email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.email && (
              <span className={styles.error}> {errors.email} </span>
            )}
          </div>
          <div className={styles.cnpj}>
            <label htmlFor='cnpj'>
              CNPJ <span id={styles.required}>*</span>
            </label>
            <NumberFormat
              id='cnpj'
              placeholder='Digite o CNPJ'
              mask='_'
              format='###.###.####/####-##'
              onValueChange={(val) => {
                const { value } = val
                values.cnpj = value
              }}
            />
            {touched.cnpj && (
              <span className={styles.error}> {errors.cnpj} </span>
            )}
          </div>
          <div className={styles.instagram}>
            <label htmlFor='instagram'>Instagram</label>
            <input
              type='text'
              id='instagram'
              value={values.instagram}
              placeholder='instagram.com/SoLanches'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.facebook}>
            <label htmlFor='facebook'>Facebook</label>
            <input
              type='text'
              id='facebook'
              value={values.facebook}
              placeholder='facebook.com/SoLanches'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.city}>
            <label htmlFor='city'>
              Cidade <span id={styles.required}>*</span>
            </label>
            <input
              type='text'
              id='city'
              value={values.city}
              placeholder='Digite a cidade'
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.city && (
              <span className={styles.error}> {errors.city} </span>
            )}
          </div>
          <div className={styles.street}>
            <label htmlFor='street'>
              Rua <span id={styles.required}>*</span>
            </label>
            <input
              type='text'
              id='street'
              value={values.street}
              placeholder='Digite a rua'
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.street && (
              <span className={styles.error}> {errors.street} </span>
            )}
          </div>
          <div className={styles.district}>
            <label htmlFor='district'>Bairro</label>
            <input
              type='text'
              id='district'
              value={values.district}
              placeholder='Digite o bairro'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.number}>
            <label htmlFor='number'>
              Número <span id={styles.required}>*</span>
            </label>
            <input
              type='number'
              id='number'
              value={values.number}
              placeholder='Ex: 109'
              onChange={handleChange}
              onBlur={handleBlur}
              min={0}
              step={1}
              required
            />
            {touched.number && (
              <span className={styles.error}> {errors.number} </span>
            )}
          </div>
          <div className={styles.password}>
            <label htmlFor='password'>
              Senha <span id={styles.required}>*</span>
            </label>
            <input
              type='password'
              id='password'
              value={values.password}
              placeholder='Digite uma senha'
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.password && (
              <span className={styles.error}> {errors.password} </span>
            )}
          </div>
          <div className={styles.passwordConfirm}>
            <label htmlFor='passwordConfirm'>
              Repita a senha <span id={styles.required}>*</span>
            </label>
            <input
              type='password'
              id='passwordConfirm'
              placeholder='Repita a senha'
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.passwordConfirm && (
              <span className={styles.error}> {errors.passwordConfirm} </span>
            )}
          </div>
        </form>
        <div className={styles.buttons}>
          <button onClick={() => history.push('/inicio')}>Cancelar</button>
          <Button title='Avançar' handleClick={(e) => handleSubmit()} />
        </div>
      </section>
    </div>
  )
}
