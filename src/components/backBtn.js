import React from 'react'

import { Link } from 'gatsby'
import { Icon } from '@iconify/react';

const BackButton = () => {
    return (
        <Link to="/" style={{
            position: 'absolute',
            top: '5%', left: '5%'
        }} className="is-size-4">
            Back to Baffs
        </Link>
    )
}

export default BackButton
