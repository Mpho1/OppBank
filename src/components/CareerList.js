import React from 'react'
import Link from 'gatsby-link'

import style from './CareerList.module.scss'

class CareerList extends React.Component {
  render () {
    return (
      <div>
        <div className={style.careerListCard}>
          <img src={require('../img/building.svg')} className={style.careerListImg}/>
          <div className={style.careerListing}>
            <h4 style ={{
              marginLeft: `-1em`
            }}>
              {this.props.node.title}
            </h4>
            <div className={style.jobDate}>
              <img src={require('../img/clock.svg')} className={style.imgClock}/>
              <span className={style.clockDate}>{this.props.node.postedAt}</span>
            </div>
            <div className={style.jobLocation}>
              <img src={require('../img/location.svg')} className={style.imgLocation}/>
              <span className={style.jobCity}>{this.props.node.location}</span>
            </div>
            <p className={style.jobDescription}>{this.props.node.description.description}</p>
            <div>
              <span className={style.work}>
                Work type &nbsp;&nbsp;
                <span className={style.workType}>{this.props.node.workType}</span>
              </span>
              <p className={style.work}>
                Salary &nbsp;&nbsp;
                <span className={style.workType}>{this.props.node.salary}</span>
              </p>
            </div>
            <hr/>
            <div>
              <Link to={this.props.link || '#'}>
                <button className={style.readMore}>Read More</button>
              </Link>
              <button onClick={() => { this.props.hideUnhideApplyForm(false) }} className={style.apply}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CareerList
