import styles from "./styles.module.css";

export function CheckCategory(props) {
    return (
        <div className={styles.container}>
            <label className={styles.categoryCheck}>
                <input type="checkbox"/>
                <span class={styles.check}></span>
                <span className={styles.categoryName}>{props.categoryName}</span>
            </label>
        </div>
    );
}
