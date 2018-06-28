import React from 'react'
import style from './products.module.scss'

import PageHeader from '../components/PageHeader'
import ProductsCard from '../components/ProductsCard'

const Products = () => (
  <div>
    <PageHeader
      title="PRODUCTS"
      subtitle="Let that brush around there and play. God gave you this gift of imagination. Use it. Every single thing in the world has its own personality"/>
    <div className={style.products}>
      <ProductsCard
        addBoxShadow={true}
      />
    </div>
  </div>
)

export default Products
