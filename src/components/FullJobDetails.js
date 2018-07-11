import React from 'react'

import style from './FullJobDetails.module.scss'

class FullJobDetails extends React.Component {
  render () {
    return (
      <div>
        <div className={style.fullJobDetailsCard}>
          <div className={style.header}>
            <img src={require('../img/building.svg')} className={style.fullJobDetailsImg}/>
            <h4>{this.props.jobTitle}</h4>
          </div>
          <div className={style.fullJobListing}>
            <div className={style.jobDate}>
              <img src={require('../img/clock.svg')} className={style.imgClock}/>
              <span className={style.clockDate}>{this.props.date}</span>
            </div>
            <div className={style.jobLocation}>
              <img src={require('../img/location.svg')} className={style.imgLocation}/>
              <span className={style.jobCity}>{this.props.city}</span>
            </div>
            <div className={style.jobHours}>
              <img src={require('../img/calendar.svg')} className={style.imgCalendar}/>
              <span className={style.jobType}>{this.props.calendar}</span>
            </div>
            <div className={style.jobSalary}>
              <img src={require('../img/wallet1.svg')} className={style.imgSalary}/>
              <span className={style.salaryType}>{this.props.salary}</span>
            </div>
            <hr/>
            <button onClick={() => { this.props.hideUnhideApplyForm(false) }} className={style.apply}>Apply</button>
          </div>
          <div>
            <h6 className={style.introduction}>Introduction</h6>
            <p className={style.text}>{this.props.description}</p>
          </div>
          <div>
            <h6 className={style.introduction}>Qualifications and Experience:</h6>
            <ul className={style.experience}>
              <li dangerouslySetInnerHTML = {{ __html: this.props.qualifications.replace(/\n/g, '<br />') }}/>
            </ul>
          </div>
          <div>
            <h6 className={style.introduction}>Skills, Abilities and Job Related Knowledge:</h6>
            <ul className={style.experience}>
              <li dangerouslySetInnerHTML={{ __html: this.props.skills.replace(/\n/g, '<br />') }}/>
            </ul>
          </div>
          <div>
            <h6 className={style.introduction}>Competencies:</h6>
            <ul className={style.experience}>
              <li dangerouslySetInnerHTML={{ __html: this.props.competencies.replace(/\n/g, '<br />') }}/>
            </ul>
          </div>
          <p className={style.text}>Kindly note only applicants who meet the minimum requirements will be contacted. All positions will be filled in accordance with our Employment Equity plan. We also encourage people with disabilities to apply.</p>
          <div>
            <hr className={style.horizontalLine}/>
          </div>
          <button onClick={() => { this.props.hideUnhideApplyForm(false) }} className={style.applyBelow}>Apply</button>
        </div>
      </div>
    )
  }
}

export default FullJobDetails
