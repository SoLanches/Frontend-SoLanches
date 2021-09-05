
import style from './style.module.css'

export const Hour = () => {
    return (
        <div className={style.container}>
            <select className={style.days}>
                <option value='Doming'>Domingo</option>
                <option value='segunda-feira'>Segunda-Feira</option>
                <option value='terça-feira'>Terça-Feira</option>
                <option value='quarta-feira'>Quarta-Feira</option>
                <option value='quinta-feira'>Quinta-Feira</option>
                <option value='sexta-feira'>Sexta-Feira</option>
                <option value='Sábado'>Sábado</option>
            </select>
            <input type="time"/>
            <input type="time"/>
        </div>
    )
}
