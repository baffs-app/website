import React from 'react'

import { Icon } from '@iconify/react';

const Hanger = ({ navigateTo }) => {

    const style = navigateTo === 'next' ? { right: '5%', transform: 'rotate(90deg)' } : { left: '5%', transform: 'rotate(-90deg' }

    return (
        <Icon icon="icon-park-outline:hanger" 
            color="#05cd75" 
            style={style} 
            className="hanger" 
        />
    )
}

export default Hanger
