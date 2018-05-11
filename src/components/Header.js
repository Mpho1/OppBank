import React from 'react'
import Link from 'gatsby-link'

import Logo from './Logo'
import NavBar from './NavBar'

import style from './Header.module.scss'

const Header = ({ siteTitle }) => (
  <div className={style.HeaderWrapper}>
    <div className={style.HeaderLogoWrapper}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        <Logo />
      </Link>
    </div>
    <NavBar />
  </div>
)

export default Header
