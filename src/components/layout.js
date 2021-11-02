import React from 'react'
import '../styles/index.scss'

import SeoComponent from './seo'

const Layout = ({ children, sectionPadding }) => {
    return (
        <section className={sectionPadding ?  `${sectionPadding}`: 'section'}>
           <SeoComponent />
           { children } 
        </section>
    )
}

export default Layout
