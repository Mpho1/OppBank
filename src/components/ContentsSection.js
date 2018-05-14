import React from 'react'

import style from './ContentsSection.module.scss'

class ContentsSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={`${ style.wrapper + ( this.props.bgImage ? " "+style.colorWhite : '' ) }`} style={ {backgroundImage:`url(${ this.props.bgImage })`}}>
                <h2 className={style.h2}>{this.props.title}</h2>
                <h4 className={style.h4}>{this.props.subtitle}</h4>
                <div>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default ContentsSection