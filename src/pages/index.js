import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <h1 className={styles.heading}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
