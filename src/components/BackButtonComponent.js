import React from 'react'
import style from './BackButtonComponent.module.scss'
class BackButton extends React.Component {
  render () {
    return (
      <button className={style.backButton} onClick={() => { window.history.back() }}>Back</button>
    )
  }
}

export default BackButton
