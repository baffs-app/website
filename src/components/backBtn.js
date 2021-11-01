import React from 'react'

import { Link } from 'gatsby'
import { Icon } from '@iconify/react';

const BackButton = () => {
    return (
        <Link to="/" className="is-size-4">
            <span style={{verticalAlign: 'middle', marginRight: '.5rem'}}><Icon icon="grommet-icons:previous" /></span>
            <span>Back to Baffs</span>
        </Link>
    )
}

export default BackButton
