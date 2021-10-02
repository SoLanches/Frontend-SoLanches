import React, { useEffect, useState } from 'react'
import { fetchProdutos } from '../../services/api'
import { ProductCard } from '../ProductCard'

const CategorySection = ({ produtosData }) => {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {produtosData.map((produto) => (
        <ProductCard
          title={produto.nome}
          category={produto.attributes.categoria}
          editable={false}
        />
      ))}
    </div>
  )
}

export const Menu = ({ menu }) => {
  if (!menu) {
    return 'Carregando...'
  }

  return (
    <>
      {' '}
      {Object.keys(menu).map((key) => {
        return (
          <>
            <h2>{key}</h2>
            <CategorySection produtosData={menu[key]}></CategorySection>
          </>
        )
      })}
    </>
  )
}
