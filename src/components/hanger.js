import React from 'react'

import { Icon } from '@iconify/react';

export const navigations = {
    prev: 'prev',
    next: 'next'
}

const Hanger = ({ navigateTo, screenData }) => {

    const { currentScreen, setCurrentScreen } = screenData

    const style = navigateTo === navigations.next ? { right: '5%', transform: 'rotate(90deg)' } : { left: '5%', transform: 'rotate(-90deg' }

    return (
        <Icon icon="icon-park-outline:hanger" 
            color="#05cd75" 
            style={style} 
            className="hanger"
            onClick={() => { setCurrentScreen(navigateTo === navigations.next ? currentScreen + 1 : currentScreen - 1 )}}
        />
    )
}

export default Hanger