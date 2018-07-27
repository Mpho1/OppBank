import React from 'react'
import style from './products.module.scss'

import PageHeader from '../components/PageHeader'
import ProductsCard from '../components/ProductsCard'

const Products = () => (
  <div>
    <PageHeader
      title="PRODUCTS"
      subtitle="Opportunity Bank Uganda offers tailor made credit and savings and banking products to suit your pocket and your lifestyle."/>
    <div className={style.products}>
      <ProductsCard
        addBoxShadow={true}
      />
    </div>
  </div>
)

export default Products
