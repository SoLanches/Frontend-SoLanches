import { useRef, useState } from "react";
import styles from "./style.module.css";

export function ProfileImage (props) {
    const [image, setImage] = useState({ preview: '', file: '' })
    const inputFile = useRef(null) 

    const handleImageClick = () => {
        inputFile.current.click();
    }

    const handleImageUpload = (e) => {
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            file: e.target.files[0]
        })
    }

    return (
        <div className={styles.profileImage}>
            <input 
                className="fileInput" 
                type="file" 
                style={{display: "none"}}
                onChange={handleImageUpload}
                ref={inputFile}
            />
            <div className={styles.imageContainer} onClick={handleImageClick}>
                {image.preview === '' 
                    ? <span>Imagem</span>
                    : <img src={image.preview} alt="Logo"/>
                }
            </div>   
        </div>
    )
}
