import React from 'react'

import { Link } from 'gatsby'
import { Icon } from '@iconify/react';

import { navigation } from '../helpers/constants';

const NavButton = ({ navTo, navText, navDirection, size }) => {
    const iconStyle = {
        verticalAlign: 'middle', 
        marginRight: '.5rem'
    }

    const { BACK } = navigation

    const linkSize = size ? size : "is-size-4"

    return (
        <>
            {
                navDirection === BACK ?
                    <Link to={navTo} className={linkSize}>
                        <span style={iconStyle}><Icon icon="grommet-icons:previous" /></span>
                        <span>{navText}</span>
                    </Link>
                    :
                    <Link to={navTo} className={linkSize}>
                        <span>{navText}</span>
                        <span style={iconStyle}><Icon icon="grommet-icons:next" /></span>
                    </Link>
            }
        </>
    )
}

export default NavButton
