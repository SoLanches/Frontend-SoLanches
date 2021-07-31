import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

import styles from './styles.module.css';

export function SearchField(props) {

    const inputRef = useRef(null);

    const handleSearch = () => {
        alert(inputRef.current.value);
        inputRef.current.value = "";
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder={props.buttonTitle ? props.buttonTitle : 'Pesquisar'} ref={inputRef} />
            <button onClick={handleSearch}>
                <FiSearch size="1.5rem" color="636363"/>
            </button>
        </div>
    );
}
