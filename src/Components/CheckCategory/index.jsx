import styles from "./styles.module.css";
import { useState } from 'react';

export function CheckCategory(props) {
    const [isSelected, setIsSelected] = useState(false);
    function handleSelect() {
        setIsSelected(prevState => !prevState);
    }
    return (
        <div className={styles.container} onClick={handleSelect}>
            <label className={styles.categoryCheck}>
                <input type="checkbox" className={isSelected ? styles.isChecked : ''} />
                <span className={styles.check}></span>
                <span className={styles.categoryName}>{props.categoryName}</span>
            </label>
        </div>
    );
}
 