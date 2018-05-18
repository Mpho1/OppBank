import React from 'react'
import styles from './Product.module.scss'

import Button from './Button'
import ContentsSection from './ContentsSection'

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

  <ContentsSection
    bgImage={require('../img/city.png')}
    title="Our products"
    subtitle="We believe that there are many ways to assist our customers to allow financial ease.">
    <div className={styles.productContainer}>
      <div className={styles.productInfo}>
        <ProductsContent
          image={require('../img/savings.svg')}
          title='Savings accounts'
          text='Choose from a selection of accounts and stay in control of your assets'
        />
      </div>
      <div className={styles.productInfo}>
        <ProductsContent
          image={require('../img/loans.svg')}
          title='Loans'
          text='Choose from a selection of accounts and stay in control of your assets'
        />
      </div>
      <div className={styles.productInfo}>
        <ProductsContent
          image={require('../img/mobile_banking.svg')}
          title='Mobile Banking'
          text='Choose from a selection of accounts and stay in control of your assets'
        />
      </div>
      <div className={styles.productInfo}>
        <ProductsContent
          image={require('../img/other_services.svg')}
          title='Other services'
          text='Choose from a selection of accounts and stay in control of your assets'
        />
      </div>
    </div>
  </ContentsSection>
)

export default ProductsCard
