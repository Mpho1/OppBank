import React from 'react'
import PageHeader from '../components/PageHeader'
import FindMap from '../components/FindMap'
import MapContainer from '../components/MapContainer'
import ThirdsColumns from '../components/ThirdsColumns'
import Cards from '../components/Cards'
import styles from '../components/card.module.scss'

class FindUs extends React.Component {
  render () {
    return (
      <div>
        <PageHeader
          title="Find Us"
          subtitle="Got more questions or would you rather feel more comfortable just visiting one of our branches?"/>
        <FindMap/>
        <MapContainer/>
        <ThirdsColumns breakOrder="213">
          <Cards/>
        </ThirdsColumns>
        <div>
          <button className={styles.Button}>Contact</button>
        </div>
      </div>
    )
  }
}

export default FindUs
