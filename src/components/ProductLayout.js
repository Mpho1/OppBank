import React from 'react'

import style from './ProductLayout.module.scss'

class ProductLayout extends React.Component {
  render () {
    return (
      <div className={style.productLayoutDisplay}>
        <div className={style.productLayoutCard}>
          <img src={this.props.image} className={style.productLayoutImg}/>
          <h4 className={style.productLayoutHeader}>{this.props.header}</h4>
          <p className={style.productLayoutType}>{this.props.type}</p>
          <p className={style.productLayoutText}>{this.props.text}</p>
          <div className={style.productLayoutButton}>
            <button className={style.readMoreButton}>Read More</button>
            <button className={style.enquireButton}>Enquire</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductLayout
