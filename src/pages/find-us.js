import React from 'react'
import PageHeader from '../components/PageHeader'

import ThirdsColumns from '../components/ThirdsColumns'
import Cards from '../components/Cards'
import styles from '../components/card.module.scss'

const SecondPage = () => (
  <div>
    <PageHeader
      title="Find Us"
      subtitle="Got more questions or would you rather feel more comfortable just visiting one of our branches?"/>
    <ThirdsColumns breakOrder="213">
      <Cards/>
    </ThirdsColumns>
    <div>
      <button className={styles.Button}>Contact</button>
    </div>
  </div>
)

export default SecondPage
