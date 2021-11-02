import React from 'react'

import { Icon } from '@iconify/react';
import { navigation } from '../helpers/constants'

const Hanger = ({ navigateTo, screenData }) => {

    const { currentScreen, setCurrentScreen } = screenData

    const { FWD, BACK } = navigation

    let divStyle;
    let iconStyle;
    if(navigateTo === navigation.FWD) {
        divStyle = { right: '5%' } 
        iconStyle = { transform: 'rotate(90deg)' }
    } else {
        divStyle = { left: '5%' } 
        iconStyle = { transform: 'rotate(-90deg)' }
    }

    return (
        <div className="hanger" style={divStyle}>
            <Icon icon="icon-park-outline:hanger" 
                color="#05cd75"
                style={iconStyle}
                onClick={() => { setCurrentScreen(navigateTo === navigation.FWD ? currentScreen + 1 : currentScreen - 1 )}}
            />
            {/* { navigateTo === FWD && <span className="is-size-5 has-text-primary">Next</span>}
            { navigateTo === BACK && <span className="is-size-5 has-text-primary">Prev</span>} */}
        </div>
    )
}

export default Hanger