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
            <ul className={style.MenuProductTypes}>
              <Link to={'/savings/ordinary-savings'}>
                <li>Ordinary Savings Account</li>
              </Link>
              <Link to={'/savings/business-savings'}>
                <li>Business Savings Account</li>
              </Link>
              <Link to={'/savings/fixed-term-deposit-account'}>
                <li>Fixed Deposit Account</li>
              </Link>
              <Link to={'/savings/institutional-fixed-deposit-account'}>
                <li>Institutional Fixed Account</li>
              </Link>
              <Link to={'/savings/group-savings-account'}>
                <li>Group Savings Account</li>
              </Link>
              <Link to={'/savings/target-savings-account'}>
                <li>Target Savings Account</li>
              </Link>
              <Link to={'/savings/extra-save-account'}>
                <li>Extra Save Account</li>
              </Link>
            </ul>
          </div>
          <div className={style.VerticalLine}></div>
          <div className={style.MenuListItems}>
            <Link to={'/loans'}>
              <h5 className={style.MenuListHeading}>Loans</h5>
            </Link>
            <ul className={style.MenuProductTypes}>
              <Link to={'/loans/solidarity-loans'}>
                <li>Solidarity Loans</li>
              </Link>
              <Link to={'/loans/business-loans'}>
                <li>Small to Medium Business Loans</li>
              </Link>
              <Link to={'/loans/payroll-loans'}>
                <li>Payroll Loans</li>
              </Link>
              <Link to={'/loans/school-fees-loans'}>
                <li>School Fees Loans</li>
              </Link>
              <Link to={'/loans/education-financing'}>
                <li>Education Finance</li>
              </Link>
              <Link to={'/loans/asset-financing'}>
                <li>Asset Financing</li>
              </Link>
              <Link to={'/loans/microfinance-loans'}>
                <li>Microfinance Loans</li>
              </Link>
              <Link to={'/loans/solar-loans'}>
                <li>Solar Loans</li>
              </Link>
            </ul>
          </div>
          <div className={style.VerticalLine}></div>
          <div className={style.MenuListItems}>
            <Link to={'/mobile-banking'}>
              <h5 className={style.MenuListHeading}>Mobile Banking</h5>
            </Link>
            <ul className={style.MenuProductTypes}>
              <Link to={'/mobile-banking/banking-money'}>
                <li>Mobile Banking/Mobile Money</li>
              </Link>
              <Link to={'/mobile-banking/interswitch-ATM'}>
                <li>Interswitch ATM Service</li>
              </Link>
              <Link to={'/mobile-banking/western-union'}>
                <li>Western Union</li>
              </Link>
            </ul>
          </div>
          <div className={style.VerticalLine}></div>
          <div className={style.MenuListItems}>
            <Link to={'/other-services'}>
              <h5 className={style.MenuListHeading}>Other Services</h5>
            </Link>
            <ul className={style.MenuProductTypes}>
              <Link to={'/other-services/salary-processing'}>
                <li>Salary Processing</li>
              </Link>
              <Link to={'/other-services/school-fees-collection'}>
                <li>School Fees Collection</li>
              </Link>
              <Link to={'/other-services/standing-orders'}>
                <li>Standing Orders</li>
              </Link>
              <Link to={'/other-services/bill-collection'}>
                <li>Bill Collection</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
