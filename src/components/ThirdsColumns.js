import React from 'react'
import styles from './ThirdsColumns.module.scss'

/**
 * Creates a three columns grid by defining its own three children as columns
 */
class ThirdsColumns extends React.Component {
  render () {
    return (
      <section className={styles.ThirdsColumns}>
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
