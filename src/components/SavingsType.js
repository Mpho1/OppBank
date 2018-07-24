import React from 'react'

import style from './SavingsType.module.scss'

class SavingsType extends React.Component {
  constructor () {
    super()
    this.state = {
      shown: true
    }
  }

  toggle () {
    this.setState({
      shown: !this.state.shown
    })
  }

  render () {
    const shown = {
      display: this.state.shown ? 'block' : 'none'
    }

    const hidden = {
      display: this.state.shown ? 'none' : 'block'
    }

    return (
      <div>
        <div className={style.SavingsTypeCard}>
          <img src={this.props.image} className={style.SavingsTypeImg}/>
          <div className={style.SavingsTypeList}>
            <h2 className={style.title}>{this.props.productType}</h2>
            <h5 className={style.type}>{this.props.productTypeCategory}</h5>
            <p className={style.description}>{this.props.description}</p>
            <div className={style.Buttons}>
              <button
                className={style.BtnFeatures}
                onClick={this.toggle.bind(this)}>
                Features
              </button>
              <button
                className={style.BtnRequirements} onClick={this.toggle.bind(this)}>
                Requirements
              </button>
              <button
                className={style.BtnEnquire}
                onClick={() => { this.props.hideUnhideApplyForm(false) }}>
                Enquire
              </button>
            </div>
            <hr/>
            <div>
              <div style={ shown }>
                <h5 className={style.features}>Features</h5>
                <ul className={style.featuresList}
                  dangerouslySetInnerHTML={{ __html: this.props.featuresItems.replace(/\n/g, '<br />') }}/>
              </div>
              <div style={ hidden }>
                <h5 className={style.features}>Requirements</h5>
                <ul className={style.featuresList}
                  dangerouslySetInnerHTML={{ __html: this.props.requirementItems.replace(/\n/g, '<br />') }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SavingsType
