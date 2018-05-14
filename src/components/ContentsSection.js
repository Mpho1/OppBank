import React from 'react'

import style from './ContentsSection.module.scss'

class ContentsSection extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    render() {
        return (
            <section className={`${ style.wrapper + ( this.props.bgImage ? " "+style.sectionImageBackground : '' ) }`} style={ {backgroundImage:`url(${ this.props.bgImage })`}}>
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