import React from 'react'
import PageHeader from '../components/PageHeader'
import FindMap from '../components/FindMap'
import MapContainer from '../components/MapContainer'
import Cards from '../components/Cards'
import style from './find-us.module.scss'

class FindUs extends React.Component {
  render () {
    return (
      <div>
        <PageHeader
          title="Find Us"
          subtitle="Got more questions or would you rather feel more comfortable just visiting one of our branches?"/>
        <FindMap/>
        <MapContainer/>
        <div className={style.cardsStyle}>
          <Cards/>
        </div>
      </div>
    )
  }
}

export default FindUs
