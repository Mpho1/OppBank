import React from 'react'

import style from './CareerList.module.scss'

class CareerList extends React.Component {
  render () {
    return (
      <div>
        <div className={style.careerListCard}>
          <div>
            <img src={require('../img/building.svg')} className={style.careerListImg}/>
          </div>
          <div className={style.careerListing}>
            <h4>{this.props.jobTitle}</h4>
            <div className={style.jobDate}>
              <img src={require('../img/clock.svg')} className={style.imgClock}/>
              <span className={style.clockDate}>{this.props.date}</span>
            </div>
            <div className={style.jobLocation}>
              <img src={require('../img/location.svg')} className={style.imgLocation}/>
              <span className={style.jobCity}>{this.props.city}</span>
            </div>
            <p className={style.jobDescription}>{this.props.jobDescription}</p>
            <div>
              <span className={style.work}>
                Work type &nbsp;&nbsp;
                <span className={style.workType}>{this.props.workType}</span>
              </span>
              <p className={style.work}>
                Salary &nbsp;&nbsp;
                <span className={style.workType}>{this.props.salary}</span>
              </p>
            </div>
            <hr/>
            <div>
              <button className={style.readMore}>Read More</button>
              <button className={style.apply}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CareerList
