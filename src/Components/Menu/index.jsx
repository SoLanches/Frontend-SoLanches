import React, { useEffect, useState } from 'react'
import { getProdutos } from '../../services/api';
import { ProductCard } from '../ProductCard';

const CategorySection = ({produtosData}) => {

    return (
        <div style={{ display:'flex', gap: '2rem' }}>
        {produtosData.map( (produto) => (
            <ProductCard title={produto.nome} category={produto.attributes.categoria} editable={false}/>

        ))}
        </div>
    )
}

export const Menu = ({commerceName}) => {
    const [menu, setMenu] = useState()

    useEffect( () => { 
        
        async function fetchMenu() {
            const produtosData = await getProdutos(commerceName)
            setMenu(produtosData)
            console.log(produtosData)
        }
        fetchMenu()
    }, [commerceName])

    if (!menu) {
        return "Carregando..."
    }

    return <> {

        Object.keys(menu).map( (key) => {
            return <>
            <h1>{key}</h1>
            <CategorySection produtosData={menu[key]}></CategorySection>
            </>
        })

    }
    </>

}