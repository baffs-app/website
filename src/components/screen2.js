import React from 'react'
import Hanger, { navigations } from './hanger'

const Screen2 = ({ screenData }) => {
    return (
        <div className="hero-body">
            <Hanger navigateTo={navigations.prev} screenData={screenData} />
            <p className="title">
                baffs
            </p>
            <Hanger navigateTo={navigations.next} screenData={screenData} />
        </div>
    )
}

export default Screen2
