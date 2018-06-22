import React from 'react'
import style from './Place.module.scss'

class Place extends React.Component {
  render () {
    return (
      <ol>
        {this.props.places.map(({
          place_id: placeId,
          name,
          formatted_address: formattedAddress,
          formatted_phone_number: formattedPhoneNumber,
          geometry: { location },
          opening_hours: openingHours = { weekday_text: [] }
        }) =>
          <li
            key={placeId}
            className={openingHours.weekday_text.length > 0 ? style.mapInfo : style.mapInfoNone}>
            <p className={style.name}>{name}
              <span className={style.distance}><img src={require('../img/distance.svg')} className={style.imgDistance}/>&nbsp; {this.props.distance}</span>
            </p>
            <p>
              <img src={require('../img/location.svg')} className={style.imgAddress}/>
              {formattedAddress}
            </p>
            <p>
              <img src={require('../img/contact_small.svg')} className={style.imgTelephone}/>
              {formattedPhoneNumber}
            </p>
            <p style={{display: 'inline'}}>
              <span>
                <img src={require('../img/clock.svg')} className={style.imgClock}/>
              </span>
              <span>
                {openingHours.weekday_text.map((val, index) => <span key={index} className={style.weekdays}>{val} <br/></span>)}
              </span>
            </p>
          </li>
        )}
      </ol>
    )
  }
}

export default Place
