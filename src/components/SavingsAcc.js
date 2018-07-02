import React from 'react'
import styles from './SavingsAcc.module.scss'

import Button from './Button'

const SavingsContent = ({image, type, title, text}) => (
  <div>
    <div className={styles.SavingsImage}>
      <img src={image} />
    </div>
    <h4>
      {type}
    </h4>
    <h3>
      {title}
    </h3>
    <p>
      {text}
    </p>
    <div className={styles.HorizontalLine}></div>
    <Button text="ENQUIRE" />
  </div>
)

const SavingsCard = () => (
  <div className={styles.SavingsContainer}>
    <div className={styles.SavingsInfo}>
      <SavingsContent
        image={require('../img/savings.svg')}
        type='Fixed Term'
        title= 'Deposit account'
        text='This an account aimed at those customers who want to save without withdrawimg for specified periods and earn attractive interests.'
      />
    </div>
  </div>
)

export default SavingsCard
