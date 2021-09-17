/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useContext, useState, useEffect } from "react";

import { getCategories } from "../services/api";

const CategoryContext = createContext()

export function CategoryProvider({ children }) {
    const [commerces, setCommerces] = useState([])
    const [currentFilter, setCurrentFilter] = useState('Todas')
    

    useEffect(() => {
        async function getDadosCategories() {
            const response = await (await getCategories()).data
            setCommerces(response)
            
        }
        getDadosCategories()
    }, [])

    const values = { commerces, setCommerces, currentFilter, setCurrentFilter }

    return (
        <>
            <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>
        </>
    )
}

    export default function useCategoryContext() {
        const context = useContext(CategoryContext)
        return {...context }
    }

