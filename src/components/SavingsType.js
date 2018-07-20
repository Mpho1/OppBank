import React from 'react'

import style from './SavingsType.module.scss'

class SavingsType extends React.Component {
  render () {
    return (
      <div>
        <div className={style.SavingsTypeCard}>
          <div>
            <img src={this.props.image} className={style.SavingsTypeImg}/>
          </div>
          <div className={style.SavingsTypeList}>
            <h2 className={style.title}>{this.props.productType}</h2>
            <h5 className={style.type}>{this.props.productTypeCategory}</h5>
            <p className={style.description}>{this.props.description}</p>
            <div>
              <button className={style.BtnFeatures}>Features</button>
              <button className={style.BtnRequirements}>Requirements</button>
              <button className={style.BtnEnquire}>Enquire</button>
            </div>
            <hr/>
            <h5 className={style.features}>Features</h5>
            <div>
              <ul className={style.featuresList}>
                {this.props.featuresItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SavingsType
