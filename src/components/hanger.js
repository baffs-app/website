import React from 'react'

import { Icon } from '@iconify/react';
import { navigation } from '../helpers/constants'

const Hanger = ({ navigateTo, screenData }) => {

    const { currentScreen, setCurrentScreen } = screenData

    // const { FWD, BACK } = navigation

    let divStyle;
    let iconStyle;
    if(navigateTo === navigation.FWD) {
        divStyle = { right: '2.5%' } 
        iconStyle = { transform: 'rotate(90deg)' }
    } else {
        divStyle = { left: '2.5%' } 
        iconStyle = { transform: 'rotate(-90deg)' }
    }

    return (
        <div className="hanger" style={divStyle}>
            <Icon icon="icon-park-outline:hanger" 
                color="#05cd75"
                style={iconStyle}
                onClick={() => { setCurrentScreen(navigateTo === navigation.FWD ? currentScreen + 1 : currentScreen - 1 )}}
            />
            {
                currentScreen === 0 &&
                    <span className="is-size-5 has-text-primary">see more</span>
            }
        </div>
    )
}

export default Hanger