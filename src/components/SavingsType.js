import React from 'react'

import style from './SavingsType.module.scss'

const featuresList = ['Minimum amount is U.shs 100,000/=', 'Viable for 3, 6, 12 months, Marketing', 'Premature withdrawals will cause you to forfeit interest', 'Interest is paid at the end of each contract less withholding tax', 'Ability yo roll over savings after expiry pretiod', 'Interest 5% pa <10m; 9% pa 10m-50m UGX', 'Interest is negotiable for 100m and above for more than 12 (twelve) months']

const featuresItems = featuresList.map((featuresList) =>
  <li>{featuresList}</li>
)

class SavingsType extends React.Component {
  render () {
    return (
      <div>
        <div className={style.SavingsTypeCard}>
          <div>
            <img src={require('../img/savings.svg')} className={style.SavingsTypeImg}/>
          </div>
          <div className={style.SavingsTypeList}>
            <h4 className={style.title}>FIXED TERM</h4>
            <h5 className={style.type}>Deposit account</h5>
            <p className={style.description}>This an account aimed at those customers who want to save without withdrawing for specified periods and earn attractive interests. </p>
            <div>
              <button className={style.BtnFeatures}>FEATURES</button>
              <button className={style.BtnRequirements}>REQUIREMENTS</button>
              <button className={style.BtnEnquire}>ENQUIRE</button>
            </div>
            <hr/>
            <h5 className={style.features}>Features</h5>
            <div>
              <ul className={style.featuresList}>
                {featuresItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SavingsType
