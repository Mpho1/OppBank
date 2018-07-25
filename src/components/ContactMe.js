import React from 'react'
import style from './ContactMe.module.scss'

class ContactMe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      contactNumber: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onChange (event) {
    event.preventDefault()
  }

  onClick (event) {
    this.props.hideUnhideApplyForm(true)
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div className={ `${(this.props.hide ? style.blockHidden : style.blockShow)} ${style.block}` }>
        <form className={style.applyForm} onSubmit={this.handleSubmit}>
          <button
            className={style.closeButton} onClick={() => { this.props.hideUnhideApplyForm(true) }}>x
          </button>
          <h4 className={style.formText}>Contact me</h4>
          <div className={style.fields}>
            <p>
              <input type="text" name="name" placeholder={this.props.name} className={style.inputField} onChange={this.handleChange.bind(this)}/>
            </p>
            <p>
              <input type="text" name="surname" placeholder={this.props.surname} className={style.inputField} onChange={this.handleChange.bind(this)}/>
            </p>
            <p>
              <input type="text" name="contactNumber" placeholder={this.props.contactNumber} className={style.inputField} onChange={this.handleChange.bind(this)}/>
            </p>
            <p>
              <input type="text" name="email" placeholder={this.props.email} className={style.inputField} onChange={this.handleChange.bind(this)}/>
            </p>
            <div>
              <input type="textarea" name="message" className={style.messageTextarea} placeholder={this.props.message} onChange={this.handleChange.bind(this)}/>
            </div>
            <hr/>
            <input type="submit" value="Submit" className={style.submitButton}/>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactMe
