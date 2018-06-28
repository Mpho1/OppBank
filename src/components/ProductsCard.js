import React from 'react'
import styles from './Product.module.scss'
import bootstrapGrid from '../styles/bootstrap-grid.module.scss'

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
    <Button text="VIEW"
      customStyle={{
        marginBottom: `1em`
      }}
    />
  </div>
)

const ProductsCard = ({addBoxShadow}) => (
  <div className={`${styles.productContainer} ${bootstrapGrid['row']}`}>
    <div className={`${styles.columnSpacing} ${bootstrapGrid['col-md-3']} ${addBoxShadow ? styles.boxShadow : ''}`}>
      <div className={`${styles.productInfo}`}>
        <ProductsContent
          image={require('../img/savings.svg')}
          title='Savings accounts'
          text='Gain control over your finances with a free cash withdraw per month.'
        />
      </div>
    </div>
    <div className={`${styles.columnSpacing} ${bootstrapGrid['col-md-3']} ${addBoxShadow ? styles.boxShadow : ''}`}>
      <div className={`${styles.productInfo}`}>
        <ProductsContent
          image={require('../img/loans.svg')}
          title='Loans'
          text='Choose from our selection of specially tailored loans.'
        />
      </div>
    </div>
    <div className={`${styles.columnSpacing} ${bootstrapGrid['col-md-3']} ${addBoxShadow ? styles.boxShadow : ''}`}>
      <div className={`${styles.productInfo}`}>
        <ProductsContent
          image={require('../img/mobile_banking.svg')}
          title='Mobile Banking'
          text='Access your accounts and complete all of your business online.'
        />
      </div>
    </div>
    <div className={`${styles.columnSpacing} ${bootstrapGrid['col-md-3']} ${addBoxShadow ? styles.boxShadow : ''}`}>
      <div className={`${styles.productInfo}`}>
        <ProductsContent
          image={require('../img/other_services.svg')}
          title='Other services'
          text='Gain control over your finances with a free cash withdraw per month.'
        />
      </div>
    </div>

  </div>
)

export default ProductsCard
