import React from 'react'
import Link from 'gatsby-link'

import Menu from './Menu'

import style from './Header.module.scss'

const HeaderPageLink = ({to, title, active, menu}) => (
  <div className={ `${style.HeaderLink} ${active ? style.HeaderLinkActive : ''}` }>
    <Link to={to || '/#'}>
      {title}
    </Link>
    {menu}
  </div>
)

const Burger = ({onClick, isOpen}) => {
  const burgerClass = isOpen ? style.open : ''
  return (
    <div className={`${style.burger} ${burgerClass}`} onClick={onClick}>
      <div className={style.burgerBar}></div>
      <div className={style.burgerBar}></div>
      <div className={style.burgerBar}></div>
    </div>
  )
}

class NavBar extends React.Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
    this.state = {
      menuOpen: false
    }
  }

  onClick () {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render () {
    const headerClass = this.state.menuOpen ? style.open : ''
    return (
      <div>
        <div className={`${style.HeaderLinksWrapper} ${headerClass}`}>
          <HeaderPageLink to="/#products" title="Products" active={true} menu={<Menu className={style.menu} />} />
          <HeaderPageLink to="/#news" title="News" />
          <HeaderPageLink to="/#careers" title="Careers" />
          <HeaderPageLink to="/#contact-us" title="Contact us" />
        </div>
        <Burger onClick={this.onClick} isOpen={this.state.menuOpen}/>
      </div>
    )
  }
}

export default NavBar
