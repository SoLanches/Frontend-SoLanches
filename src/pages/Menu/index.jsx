import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useParams } from 'react-router-dom'
import { getCardapio, fetchProdutos } from '../../services/api'
import { Menu as MenuComponent } from '../../Components/Menu'
import { CommerceInfo } from '../../Components/CommerceInfo'
import { FavProducts } from '../../Components/FavProducts'

export function MenuPage() {
  const [products, setProducts] = useState()
  const [menu, setMenu] = useState({})
  const { commerceName } = useParams()

  useEffect(() => {
    async function getCommerceProducts() {
      const productsData = await fetchProdutos(commerceName)
      setProducts(productsData)
    }
    async function getCommerceMenu() {
      const menuData = await getCardapio(commerceName)
      setMenu(menuData)
    }

    getCommerceProducts()
    getCommerceMenu()
  }, [commerceName])

  return (
    menu && (
      <div className={style.menu}>
        <CommerceInfo commerceName={commerceName} />
        <FavProducts
          products={products ? Object.values(products) : [[]]}
          favedIds={menu.destaques}
        />
        <MenuComponent menu={products} activeCategories={menu.categorias} />
      </div>
    )
  )
}
