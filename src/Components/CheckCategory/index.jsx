import styles from "./styles.module.css";
import { useState } from 'react';

export function CheckCategory(props) {
    const [isSelected, setIsSelected] = useState(false);
    const handleSelect = (event) => {
        event.preventDefault();
        setIsSelected(!isSelected);
        console.log(isSelected);
    }
    return (
        <div className={styles.container}>
            <label className={styles.categoryCheck} onClick={handleSelect}>
                <input type="checkbox" className={isSelected ? '' : styles.isChecked} />
                <span className={styles.check}></span>
                <span className={styles.categoryName}>{props.categoryName}</span>
            </label>
        </div>
    );
}
