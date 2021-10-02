import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useParams } from 'react-router-dom'
import { getCardapio, getCommerce, fetchProdutos } from '../../services/api'
import { Menu } from '../../Components/Menu'
import { CommerceInfo } from '../../Components/CommerceInfo'
import { MenuIcon } from '../../assets/icons/MenuIcon'
import { StarFilled } from '@ant-design/icons'
import { FavProducts } from '../../Components/FavProducts'

export function MenuPage() {
  const [products, setProducts] = useState()
  const [menu, setMenu] = useState()
  const { commerceName } = useParams()

  useEffect(() => {
    async function getCommerceProducts() {
      const productsData = await fetchProdutos(commerceName)
      console.log(productsData)
      setProducts(productsData)
    }
    async function getCommerceMenu() {
      const menuData = await getCardapio(commerceName)
      console.log(menuData)
      setMenu(menuData)
    }

    getCommerceProducts()
    getCommerceMenu()
  }, [commerceName])

  return (
    <div className={style.menu}>
      <CommerceInfo commerceName={commerceName}></CommerceInfo>
      {/* <FavProducts products={products} favedIds={menu.destaques} /> */}

      <div className={style.divider} />
      <section>
        <div className={style.sectionTitle}>
          <MenuIcon />
          <h2>Cardápio</h2>
        </div>
        {/* <Menu menu={products} activeCategories={menu.categorias} /> */}
      </section>
    </div>
  )
}
