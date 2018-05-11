import React from 'react'
import Link from 'gatsby-link'

import style from './Menu.module.scss'

class Menu extends React.Component {
  render () {
    return (
      <div>
        <div className={style.TransparentBox}>
          <ul className={style.MenuList}>
            <div className={style.VerticalLine}></div>
            <div className={style.MenuListItems}>
              <li className={style.MenuListHeading}>Savings Accounts</li>
              <li>Ordinary Savings Account</li>
              <li>Business Savings Account</li>
              <li>Fixed Deposit Account</li>
              <li>Institutional Fixed Account</li>
              <li>Group Savings Account</li>
              <li>Target Savings Account</li>
            </div>
            <div className={style.VerticalLine}></div>
            <div className={style.MenuListItems}>
              <li className={style.MenuListHeading}>Loans</li>
              <li>Solidarity Loans</li>
              <li>Business Loans</li>
              <li>Payroll Loans</li>
              <li>School Fees Loans</li>
              <li>Education Finance</li>
              <li>Asset Financing</li>
              <li>Microfinance Loans</li>
              <li>Solar Loans</li>
            </div>
            <div className={style.VerticalLine}></div>
            <div className={style.MenuListItems}>
              <li className={style.MenuListHeading}>Mobile Banking</li>
              <li>Mobile Banking/Mobile Money Service</li>
              <li>Interswitch ATM Service</li>
              <li>Salary Processing</li>
              <li>School Fees Collection</li>
              <li>Standing Orders</li>
              <li>Western Union</li>
            </div>
            <div className={style.VerticalLine}></div>
            <div className={style.MenuListItems}>
              <li className={style.MenuListHeading}>Mobile Banking</li>
              <li>Mobile Banking/Mobile Money Service</li>
              <li>Interswitch ATM Service</li>
              <li>Salary Processing</li>
              <li>School Fees Collection</li>
              <li>Standing Orders</li>
              <li>Western Union</li>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu
