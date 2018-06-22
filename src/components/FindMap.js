import React from 'react'

import style from './FindMap.module.scss'

class FindMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      atm: false,
      branch: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div onSubmit={this.handleSubmit}>
        <div className={style.block}>
          <div className={style.blockText}>
            Find Us
          </div>
        </div>
      </div>
    )
  }
}

export default FindMap
