import React from 'react'

import Hanger from './hanger'
import { navigation } from '../helpers/constants'

const Screen1 = ({ isPrevScreen, isNextScreen, children, screenData }) => {
    const { FWD, BACK } = navigation
    return (
        <>
            { children }
            { isPrevScreen && <Hanger navigateTo={BACK} screenData={screenData} /> }
            { isNextScreen && <Hanger navigateTo={FWD} screenData={screenData} /> }
        </>
    )
}

export default Screen1
