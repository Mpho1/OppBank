import React from 'react'
import img from "../img/opportunity_logo.svg"

const Logo = ({width}) => (
    <img src={img} style={{
        width: width ? width : '250px',
        marginBottom: 0
    }} />
)

export default Logo