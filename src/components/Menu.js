import React from 'react'
import Link from 'gatsby-link'

import style from './Menu.module.scss'

class Menu extends React.Component {
  render () {
    return (
      <div className={`${style.TransparentBox} ${this.props.className}`}>
        <div className={style.MenuList}>
          <div className={style.MenuListItems}>
            <Link to={'/savings'}>
              <h5 className={style.MenuListHeading}>Savings Accounts</h5>
            </Link>
            <ul>
              <li>Ordinary Savings Account</li>
              <Link to={'/products/business'}>
                <li>Business Savings Account</li>
              </Link>
              <Link to={'/products/fixed-term'}>
                <li>Fixed Deposit Account</li>
              </Link>
              <li>Institutional Fixed Account</li>
              <li>Group Savings Account</li>
              <li>Target Savings Account</li>
            </ul>
          </div>
          <div className={style.VerticalLine}></div>
          <div className={style.MenuListItems}>
            <Link to={'/loans'}>
              <h5 className={style.MenuListHeading}>Loans</h5>
            </Link>
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
            <Link to={'/mobile-banking'}>
              <h5 className={style.MenuListHeading}>Mobile Banking</h5>
            </Link>
            <ul>
              <li>Mobile Banking/Mobile Money Service</li>
              <li>Interswitch ATM Service</li>
              <li>Western Union</li>
            </ul>
          </div>
          <div className={style.VerticalLine}></div>
          <div className={style.MenuListItems}>
            <Link to={'/mobile-banking'}>
              <h5 className={style.MenuListHeading}>Other Services</h5>
            </Link>
            <ul>
              <li>Salary Processing</li>
              <li>School Fees Collection</li>
              <li>Standing Orders</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
