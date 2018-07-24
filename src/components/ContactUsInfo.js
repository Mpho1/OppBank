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
      name: '',
      contactNumber: '',
      email: '',
      query: ''
    }

    // this.handleChange = this.handleChange.bind(this)
    // this.onChange = this.onChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form className={style.contactForm} onSubmit={this.handleSubmit}>
        <h4 className={style.ContactUs}>
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
        <p className={style.Findus}>Find us on social media </p>
        <div>
          <p>
            <img src={require('../img/facebook.svg')} className={style.socialIcon} />
            <img src={require('../img/twitter.svg')} className={style.socialIcon} />
            <img src={require('../img/whatsapp.svg')} className={style.socialIcon} />
          </p>
        </div>
        <div className={style.placeholders}>
          <p>
            <input type="text" name="NAME" placeholder= "NAME" className={style.inputBox} onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <input type="text" name="EMAIL" placeholder="EMAIL" className={style.inputBox} onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <input type="number" name="CONTACT NUMBER" placeholder="CONTACT NUMBER" className={style.inputBox} onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <textarea id="subject" name="Your Query" placeholder="Your Query" className={style.inputBoxQuery} onChange={this.handleChange.bind(this)}/>
          </p>
          <input type="submit" value="SUBMIT" className={style.submitButton}/>
        </div>
      </form>
    )
  }
}

export default ContactUsInfo
