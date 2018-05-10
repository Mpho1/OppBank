import React from 'react'
import GatsbyLink from 'gatsby-link'

import Logo from '../components/logo'

import style from './header.module.scss'


const HeaderPageLink = ({to, title, active}) => (
  <div className={ `${style.HeaderLink} ${active ? style.HeaderLinkActive : ''}` }>
      <GatsbyLink to={
          to ? to : '/#'
      }>
          {title}
      </GatsbyLink>
  </div>
)


const Header = ({ siteTitle }) => (
  <div className={style.HeaderWrapper}>
    <div className={style.HeaderLogoWrapper}>
      <GatsbyLink
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        <Logo />
      </GatsbyLink>
    </div>
    <div className={style.HeaderLinksWrapper}>
        <HeaderPageLink to="/#products" title="Products" active={true} />
        <HeaderPageLink to="/#news" title="News" />
        <HeaderPageLink to="/#careers" title="Careers" />
        <HeaderPageLink to="/#contact-us" title="Contact us" />
    </div>
  </div>
)

export default Header
