import React from 'react'
import style from './ContactUsInfo.module.scss'

const AddressList = ['Plot 7A, John Babiha', '(Acacia Avenue)', 'P.O. BOX 33513, Kampala']

const Items = AddressList.map((AddressList) =>
  <p>{AddressList}</p>
)

class ContactUsInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      NAME: '',
      contactNumber: '',
      email: '',
      query: ''
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
    console.log(this.state)
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form className={style.contactform} onSubmit={this.handleSubmit}>
        <h4 className={style.contactus}>
          CONTACT US
        </h4>
        <h4>
          <img src={require('../img/headoffice_green2.svg')} className={style.icon} />
          Head Office
        </h4>
        <p className={style.description}>
          {Items}
        </p>
        <h4>
          <img src={require('../img/Page1.svg')} className={style.icon}/>
          Contact
        </h4>
        <p className={style.description}>0414 236 724 / 342 726</p>
        <h4>
          <img src={require('../img/email_green2.svg')} className={style.icon}/>
          Email
        </h4>
        <p className={style.description}>info@opportunitybank.co.ug </p>
        <p className={style.findus}>Find us on social media </p>
        <div>
          <p>
            <img src={require('../img/facebook.svg')} className={style.socialicon} />
            <img src={require('../img/twitter.svg')} className={style.socialicon} />
            <img src={require('../img/whatsapp.svg')} className={style.socialicon} />
          </p>
        </div>
        <div className={style.placeholders}>
          <p>
            <input type="text" name="name" placeholder= "NAME" className={style.inputbox} onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <input type="email" name="email" placeholder="EMAIL" className={style.inputbox} onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <input type="text" name="contact number" placeholder="CONTACT NUMBER" className={style.inputbox} onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <textarea id="subject" name="Your Query" placeholder="YOUR QUERY" className={style.inputquery} onChange={this.handleChange.bind(this)}/>
          </p>
          <input type="submit" value="SUBMIT" className={style.submitbutton}/>
        </div>
      </form>
    )
  }
}

export default ContactUsInfo
