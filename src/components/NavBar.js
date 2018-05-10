import React from 'react'
import Link from 'gatsby-link'

import style from './header.module.scss'

const HeaderPageLink = ({to, title, active}) => (
  <div className={ `${style.HeaderLink} ${active ? style.HeaderLinkActive : ''}` }>
    <Link to={to ? to : '/#'}>
      {title}
    </Link>
  </div>
)

const Burger = ({onClick, isOpen}) => {
  const burgerClass = isOpen ? style.open: ''
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
    this.state = {
      menuOpen: false
    }
  }

  onClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render () {
    return (
      <div className={style.HeaderLinksWrapper}>
        <HeaderPageLink to="/#products" title="Products" active={true} />
        <HeaderPageLink to="/#news" title="News" />
        <HeaderPageLink to="/#careers" title="Careers" />
        <HeaderPageLink to="/#contact-us" title="Contact us" />
        <Burger onClick={this.onClick} isOpen={this.state.menuOpen}/>
      </div>
    )
  }
}

export default NavBar
