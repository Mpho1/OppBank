import React from 'react'
import styles from './Product.module.scss'

import Button from './Button'

const ProductsContent = ({image, title, text}) => (
  <div>
    <div className={styles.productImage}>
      <img src={image} />
    </div>
    <h4>
      {title}
    </h4>
    <p>
      {text}
    </p>
    <div className={styles.HorizontalLine}></div>
    <Button text="VIEW" />
  </div>
)

const ProductsCard = () => (
  <div className={styles.productContainer}>
    <div className={styles.productInfo}>
      <ProductsContent
        image={require('../img/savings.svg')}
        title='Savings accounts'
        text='Gain control over your finances with a free cash withdraw per month.'
      />
    </div>
    <div className={styles.productInfo}>
      <ProductsContent
        image={require('../img/loans.svg')}
        title='Loans'
        text='Choose from our selection of specially tailored loans.'
      />
    </div>
    <div className={styles.productInfo}>
      <ProductsContent
        image={require('../img/mobile_banking.svg')}
        title='Mobile Banking'
        text='Access your accounts and complete all of your business online.'
      />
    </div>
    <div className={styles.productInfo}>
      <ProductsContent
        image={require('../img/other_services.svg')}
        title='Other services'
        text='Gain control over your finances with a free cash withdraw per month.'
      />
    </div>
  </div>
)

export default ProductsCard
