import React from 'react'

import style from './Menu.module.scss'

class Menu extends React.Component {
  render () {
    return (
      <div className={`${style.TransparentBox} ${this.props.className}`}>
        <div className={style.MenuList}>
          <div className={style.MenuListItems}>
            <h5 className={style.MenuListHeading}>Savings Accounts</h5>
            <ul>
              <li>Ordinary Savings Account</li>
              <li>Business Savings Account</li>
              <li>Fixed Deposit Account</li>
              <li>Institutional Fixed Account</li>
              <li>Group Savings Account</li>
              <li>Target Savings Account</li>
            </ul>
          </div>
          <div className={style.VerticalLine}></div>
          <div className={style.MenuListItems}>
            <h5 className={style.MenuListHeading}>Loans</h5>
            <ul>
              <li>Solidarity Loans</li>
              <li>Business Loans</li>
              <li>Payroll Loans</li>
              <li>School Fees Loans</li>
              <li>Education Finance</li>
              <li>Asset Financing</li>
              <li>Microfinance Loans</li>
              <li>Solar Loans</li>
            </ul>
          </div>
          <div className={style.VerticalLine}></div>
          <div className={style.MenuListItems}>
            <h5 className={style.MenuListHeading}>Mobile Banking</h5>
            <ul>
              <li>Mobile Banking/Mobile Money Service</li>
              <li>Interswitch ATM Service</li>
              <li>Salary Processing</li>
              <li>School Fees Collection</li>
              <li>Standing Orders</li>
              <li>Western Union</li>
            </ul>
          </div>
          <div className={style.VerticalLine}></div>
          <div className={style.MenuListItems}>
            <h5 className={style.MenuListHeading}>Mobile Banking</h5>
            <ul>
              <li>Mobile Banking/Mobile Money Service</li>
              <li>Interswitch ATM Service</li>
              <li>Salary Processing</li>
              <li>School Fees Collection</li>
              <li>Standing Orders</li>
              <li>Western Union</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
