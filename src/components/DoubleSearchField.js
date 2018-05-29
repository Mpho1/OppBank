import React from 'react'

import Button from './Button'

import style from './DoubleSearchField.module.scss'

class DoubleSearchField extends React.Component {
  // { areaPlaceholder, textPlaceholder, text, onCustomSubmit }

  constructor () {
    super()

    if (!this.href) {
      this.href = '/submit/double-field'
    }
  }

  updateFirstInputValue (event) {
    this.setState({
      firstInputValue: event.target.value
    })
  }

  updateSecondIputValue (event) {
    this.setState({
      secondInputValue: event.target.value
    })
  }

  __submit () {
    // let firstInput = this.state.firstInputValue
    // let secondInput = this.state.firstSecondValue
    // let href = this.href

    // Submit default search here
    // alert("Submitting search")

    if (typeof this.props.onCustomSubmit === 'function') {
      this.props.onCustomSubmit()
    }
  }

  render () {
    return (
      <div className={style.searchField}>
        <input type="text" onChange={this.updateFirstInputValue} placeholder={this.props.areaPlaceholder} className={style.areaField} />
        <input type="text" onChange={this.updateSecondIputValue} placeholder={this.props.textPlaceholder} className={style.jobField} />
        <div>
          <Button type="submit" text="Search" customStyle={{
            textTransform: 'uppercase',
            lineHeight: '.4em',
            fontSize: '12px',
            padding: '17px 30px',
            fontWeight: 'Bold',
            letterSpacing: '1px'
          }}
          onClick={this.__submit.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default DoubleSearchField
