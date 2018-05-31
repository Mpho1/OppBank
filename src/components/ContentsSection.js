import React from 'react'

import style from './ContentsSection.module.scss'

class ContentsSection extends React.Component {
  render () {
    return (
      <section
        className={`${style.wrapper + (this.props.bgImage ? ' ' + style.sectionImageBackground : '') + ' ' + (this.props.customClass || '')}`}
        style={Object.assign({backgroundImage: `url(${this.props.bgImage})`}, this.props.customStyle || {})}
      >
        <h2>{this.props.title}</h2>
        <p>{this.props.subtitle}</p>
        <div>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default ContentsSection
