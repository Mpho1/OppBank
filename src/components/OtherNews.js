import React from 'react'
import graphql from 'graphql'

import style from './NewsPage.module.scss'

class OtherNews extends React.Component {
  render () {
    return (
      <div>
        <div className={style.sideNews}>
          <h5 className={style.newsTitle}>Other News</h5>
          <div className={style.newsList}>
            <Link to={this.props.content[0].props.children.props.link || '#'}>
              <p>{this.props.content[0].props.children.props.content}</p>
            </Link>
            <Link to={this.props.content[1].props.children.props.link || '#'}>
              <p>{this.props.content[1].props.children.props.content}</p>
            </Link>
            <Link to={this.props.content[2].props.children.props.link || '#'}>
              <p>{this.props.content[2].props.children.props.content}</p>
            </Link>
            <Link to={this.props.content[3].props.children.props.link || '#'}>
              <p>{this.props.content[3].props.children.props.content}</p>
            </Link>
            <Link to={this.props.content[4].props.children.props.link || '#'}>
              <p>{this.props.content[4].props.children.props.content}</p>
            </Link>
            <Link to={this.props.content[5].props.children.props.link || '#'}>
              <p>{this.props.content[5].props.children.props.content}</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default OtherNews

export const otherNewsPage = graphql`
  query otherNewsPage {
    allContentfulNews {
     edges {
       node {
         title
         slug
       }
     }
   }
 }
`
