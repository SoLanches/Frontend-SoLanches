/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useContext, useState, useEffect } from "react";

import { getCategories } from "../services/api";

const CategoryContext = createContext()

export function CategoryProvider({ children }) {
    const [category, setCategory] = useState([])
    const [currentFilter, setCurrentFilter] = useState('')
    

    useEffect(() => {
        async function getDadosCategories() {
            const response = await (await getCategories()).data
            setCategory(response)
            
        }
        getDadosCategories()
    }, [])

    const values = { category, setCategory, currentFilter, setCurrentFilter }

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

