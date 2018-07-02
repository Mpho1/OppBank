import React from 'react'
import SavingsAccount from '../components/SavingsAccount'
import style from './savings.module.scss'

import PageHeader from '../components/PageHeader'
import ItemSwiper from '../components/ItemSwiper'

const Savings = () => (
  <div>
    <PageHeader
      title="SAVINGS ACCOUNT"
      subtitle="Let that brush dance around there and play. God gave you this gift of imagination. Use it, Every single thing in the world has its own personality">
    </PageHeader>
    <ItemSwiper>
      <div className={style.savingsItem}>
        <SavingsAccount
          image={require('../img/target.svg')}
          header="Fixed Term"
          type="Deposit Account"
          text="Gain control over your finances with a free cash withdrawal per month"/>
      </div>
      <div className={style.savingsItem}>
        <SavingsAccount
          image={require('../img/target.svg')}
          header="Fixed Term"
          type="Deposit Account"
          text="Gain control over your finances with a free cash withdrawal per month"/>
      </div>
      <div className={style.savingsItem}>
        <SavingsAccount
          image={require('../img/target.svg')}
          header="Fixed Term"
          type="Deposit Account"
          text="Gain control over your finances with a free cash withdrawal per month"/>
      </div>
      <div className={style.savingsItem}>
        <SavingsAccount
          image={require('../img/target.svg')}
          header="Fixed Term"
          type="Deposit Account"
          text="Gain control over your finances with a free cash withdrawal per month"/>
      </div>
      <div className={style.savingsItem}>
        <SavingsAccount
          image={require('../img/target.svg')}
          header="Fixed Term"
          type="Deposit Account"
          text="Gain control over your finances with a free cash withdrawal per month"/>
      </div>
    </ItemSwiper>
  </div>
)

export default Savings
