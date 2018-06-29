import React from 'react'
import SavingsAccount from '../components/SavingsAccount'

import PageHeader from '../components/PageHeader'
import ItemSwiper from '../components/ItemSwiper'
import ContentsSection from '../components/ContentsSection'

const Savings = () => (
  <div>
    <PageHeader
      title="SAVINGS ACCOUNT"
      subtitle="Let that brush dance around there and play. God gave you this gift of imagination. Use it, Every single thing in the world has its own personality">
    </PageHeader>
    <ContentsSection>
      <ItemSwiper>
        <div style={style}>
          <SavingsAccount
            image={require('../img/target.svg')}
            header="Fixed Terms4"
            type="Deposit Account"
            text="Gain control over your finances with a free cash withdrawal per month"/>
        </div>
        <div style={style}>
          <SavingsAccount
            image={require('../img/target.svg')}
            header="Fixed Terms3"
            type="Deposit Account"
            text="Gain control over your finances with a free cash withdrawal per month"/>
        </div>
        <div style={style}>
          <SavingsAccount
            image={require('../img/target.svg')}
            header="Fixed Terms5"
            type="Deposit Account"
            text="Gain control over your finances with a free cash withdrawal per month"/>
        </div>
        <div style={style}>
          <SavingsAccount
            image={require('../img/target.svg')}
            header="Fixed Terms6"
            type="Deposit Account"
            text="Gain control over your finances with a free cash withdrawal per month"/>
        </div>
        <div style={style}>
          <SavingsAccount
            image={require('../img/target.svg')}
            header="Fixed Terms7"
            type="Deposit Account"
            text="Gain control over your finances with a free cash withdrawal per month"/>
        </div>
        <div style={style}>
          <SavingsAccount
            image={require('../img/target.svg')}
            header="Fixed Terms8"
            type="Deposit Account"
            text="Gain control over your finances with a free cash withdrawal per month"/>
        </div>
      </ItemSwiper>
    </ContentsSection>
  </div>
)

const style = {
  width: '265px',
  marginTop: '-3em'
}

export default Savings
