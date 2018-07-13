import React from 'react'
import Link from 'gatsby-link'

import style from './NewsLayout.module.scss'

class NewsLayout extends React.Component {
  render () {
    return (
      <div>
        <div className={style.columnSpacing}>
          <Link to={this.props.link || '#'}>
            <div>
              <img src={this.props.image}/>
              <p className={style.columnContent}>{this.props.content}</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default NewsLayout
