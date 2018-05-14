import React from 'react'
import Link from 'gatsby-link'

const ContentSection = ({title, subtitle, children}) => (
    <section>
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
    </section>
)