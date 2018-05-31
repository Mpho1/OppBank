import React from 'react'
import styles from './ThirdsColumns.module.scss'

/**
 * Creates a three columns grid by defining its own three children as columns
 */
class ThirdsColumns extends React.Component {
  constructor (props) {
    super(props)
    this.className = ''
  }

  generateClassName () {
    this.className = styles.ThirdsColumns
    if (this.props.breakOrder) {
      this.className += ' ' + styles['ThirdsColumns' + this.props.breakOrder]
    }
  }

  render () {
    this.generateClassName()

    return (
      <section className={this.className}>
        {
          Array.isArray(this.props.children) ? this.props.children.map(function (child, index) {
            return <div>{child}</div>
          }) : this.props.children
        }
      </section>
    )
  }
}

export default ThirdsColumns
