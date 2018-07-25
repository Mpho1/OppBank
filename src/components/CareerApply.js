import React from 'react'
import style from './CareerApply.module.scss'

class CareerApply extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      contactNumber: '',
      email: '',
      file: '',
      fileName: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onChange (event) {
    if (event.target.files && event.target.files.length > 0) {
      this.setState({file: event.target.files[0],
        fileName: event.target.files[0].name})
    }
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
              <input type="text" name="contactNumber" placeholder={this.props.contactNumber} className={style.inputField} onChange={this.handleChange.bind(this)}/>
            </p>
            <p>
              <input type="email" name="email" placeholder={this.props.email} className={style.inputField} onChange={this.handleChange.bind(this)}/>
            </p>
            <div>
              <input type="text" className={style.fileField} placeholder={this.state.fileName.length === 0 ? this.props.attachment : this.state.fileName}/>
              <button type="button" className={style.uploadButton}>Upload CV</button>
              <input type="file" className={style.invisibleField} onChange={this.onChange.bind(this)}/>
            </div>
            <hr/>
            <input type="submit" value="Submit" className={style.submitButton}/>
          </div>
        </form>
      </div>
    )
  }
}

export default CareerApply
