import React from 'react'
import '../styles/index.scss'

import SeoComponent from './seo'

const Layout = ({ children }) => {
    return (
        <section className="section">
           <SeoComponent />
           { children } 
        </section>
    )
}

export default Layout
