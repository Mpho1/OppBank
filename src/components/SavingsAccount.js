import React from 'react'

import style from './SavingsAccount.module.scss'

class SavingsAccount extends React.Component {
  render () {
    return (
      <div className={style.savingsDisplay}>
        <div className={style.savingsCard}>
          <img src={this.props.image} className={style.savingsImg}/>
          <h3 className={style.savingsHeader}>{this.props.header}</h3>
          <p className={style.savingsType}>{this.props.type}</p>
          <p className={style.savingsText}>{this.props.text}</p>
          <div className={style.savingsButton}>
            <button className={style.readMoreButton}>Read More</button>
            <button className={style.enquireButton}>Enquire</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SavingsAccount
