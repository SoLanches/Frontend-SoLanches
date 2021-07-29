import { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

export function SearchField(props) {

    const inputRef = useRef(null);
    const handleSearch = () => {
        alert(inputRef.current.value);
    }

    return (
        <div className="search-button-container">
            <input type="text" placeholder={props.buttonTitle} ref={ inputRef }/>
            <button onClick={handleSearch}>
                <FiSearch size="1.5em" />
            </button>
        </div>
    );
}