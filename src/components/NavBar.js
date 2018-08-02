import React from 'react'
import Link from 'gatsby-link'

import Menu from './Menu'

import style from './Header.module.scss'

const HeaderPageLink = ({to, title, active, menu, onClick, handleClick}) => (
  <div className={ `${style.HeaderLink} ${active ? style.HeaderLinkActive : ''}`}>
    <Link to={to || '/#'} onClick={() => onClick(to) }>
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
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      menuOpen: false,
      activeTab: ''
    }
  }

  onClick (event) {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  // handleClick = async (active) => {
  async handleClick (active) {
    await this.setState({
      activeTab: active
    })
  }

  render () {
    const headerClass = this.state.menuOpen ? style.open : ''

    return (
      <div>
        <div className={`${style.HeaderLinksWrapper} ${headerClass}`}>
          <HeaderPageLink to="/products" title="Products" menu={<Menu className={style.menu} />} onClick={this.handleClick} active={this.state.activeTab === '/products'}/>
          <HeaderPageLink to="/news" title="News" onClick={this.handleClick} active={this.state.activeTab === '/news'}/>
          <HeaderPageLink to="/careers" title="Careers" onClick={this.handleClick} active={this.state.activeTab === '/careers'}/>
          <HeaderPageLink to="/find-us" title="Contact us" onClick={this.handleClick} active={this.state.activeTab === '/find-us'}/>
        </div>
        <Burger onClick={this.onClick} isOpen={this.state.menuOpen}/>
      </div>
    )
  }
}

export default NavBar
