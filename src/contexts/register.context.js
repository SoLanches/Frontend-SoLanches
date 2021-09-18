import { useContext, createContext, useState } from 'react';

const RegisterContext = createContext();

export default function RegisterProvider({ children }) {

    const [newCommerce, setNewCommerce] = useState({
        "name": "",
        "phone": "",
        "cnpj": "",
        "social_medias": {
            "email": "",
            "instagram": "",
            "facebook": "",
        },
        "address": {
            "city": "",
            "district": "",
            "street": "",
            "number": "",
        },
        "password": "",
        "schedule": {},
        "profileImage": "",
        "category": {}
    })

    return (
        <>
            <RegisterContext.Provider value={{
                newCommerce,
                setNewCommerce
            }}
            >
                {children}
            </RegisterContext.Provider>
        </>
    )
}

export function useRegister() {
    const context = useContext(RegisterContext);
    const { newCommerce, setNewCommerce } = context;
    return { newCommerce, setNewCommerce }
}