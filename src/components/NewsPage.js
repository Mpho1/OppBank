import React from 'react'
import Link from 'gatsby-link'
import bootstrapGrid from '../styles/bootstrap-grid.module.scss'
import NewsLayout from './NewsLayout'

import style from './NewsPage.module.scss'

class NewsPage extends React.Component {
  render () {
    return (
      <div>
        <div className={`${style.newsContainer} ${bootstrapGrid['container-fluid']}`}>
          <div className={bootstrapGrid['row']}>
            <div className={bootstrapGrid['col-md-3']}>
              <div className={style.sideNews}>
                <h5 className={style.newsTitle}>Other News</h5>
                <div className={style.newsList}>
                  <Link to={this.props.children[0].props.children.props.link || '#'}>
                    <p>{this.props.children[0].props.children.props.content}</p>
                  </Link>
                  <Link to={this.props.children[1].props.children.props.link || '#'}>
                    <p>{this.props.children[1].props.children.props.content}</p>
                  </Link>
                  <Link to={this.props.children[2].props.children.props.link || '#'}>
                    <p>{this.props.children[2].props.children.props.content}</p>
                  </Link>
                  <Link to={this.props.children[3].props.children.props.link || '#'}>
                    <p>{this.props.children[3].props.children.props.content}</p>
                  </Link>
                  <Link to={this.props.children[4].props.children.props.link || '#'}>
                    <p>{this.props.children[4].props.children.props.content}</p>
                  </Link>
                  <Link to={this.props.children[5].props.children.props.link || '#'}>
                    <p>{this.props.children[5].props.children.props.content}</p>
                  </Link>
                </div>
              </div>
            </div>
            <div>
            </div>
            <div className={`${style.columnSpacing} ${bootstrapGrid['col-md-3']}`}>
              <div>
                <NewsLayout
                  image={this.props.children[0].props.children.props.image}
                  content={this.props.children[0].props.children.props.content}
                  link={this.props.children[0].props.children.props.link}/>
              </div>
              <div>
                <NewsLayout
                  image={this.props.children[1].props.children.props.image}
                  content={this.props.children[1].props.children.props.content}
                  link={this.props.children[1].props.children.props.link}/>
              </div>
            </div>
            <div className={`${style.columnSpacing} ${bootstrapGrid['col-md-3']}`}>
              <div>
                <NewsLayout
                  image={this.props.children[2].props.children.props.image}
                  content={this.props.children[2].props.children.props.content}
                  link={this.props.children[2].props.children.props.link}/>
              </div>
              <div>
                <NewsLayout
                  image={this.props.children[3].props.children.props.image}
                  content={this.props.children[3].props.children.props.content}
                  link={this.props.children[3].props.children.props.link}/>
              </div>
            </div>
            <div className={`${style.columnSpacing} ${bootstrapGrid['col-md-3']}`}>
              <div>
                <NewsLayout
                  image={this.props.children[4].props.children.props.image}
                  content={this.props.children[4].props.children.props.content}
                  link={this.props.children[4].props.children.props.link}/>
              </div>
              <div>
                <NewsLayout
                  image={this.props.children[5].props.children.props.image}
                  content={this.props.children[5].props.children.props.content}
                  link={this.props.children[5].props.children.props.link}/>
              </div>
            </div>
          </div>
          <div className={style.financialBlock}>
            <div className={style.financialContent}>
              <p className={style.financialText}>Download the latest results of opportunity bank</p>
              <p>
                {this.props.href}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsPage
