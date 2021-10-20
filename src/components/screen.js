import React from 'react'

import Hanger, { navigations } from './hanger'

const Screen1 = ({ isPrevScreen, isNextScreen, children, screenData }) => {
    return (
        <>
            { children }
            { isPrevScreen && <Hanger navigateTo={navigations.prev} screenData={screenData} /> }
            { isNextScreen && <Hanger navigateTo={navigations.next} screenData={screenData} /> }
        </>
    )
}

export default Screen1
