import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import Hanger, { navigations } from './hanger'

const Screen1 = ({ screenData }) => {
    return (
        <div className="hero-body" style={{justifyContent: 'center'}}>
            <StaticImage src='../images/hero image.png' alt="the app for fashion lovers" placeholder="blurred" />
            <Hanger navigateTo={navigations.next} screenData={screenData} />
        </div>
    )
}

export default Screen1
