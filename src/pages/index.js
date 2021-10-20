import React from 'react'
import '../styles/index.scss'

import { StaticImage } from 'gatsby-plugin-image'
import bgImage from '../images/background.png'

import Hanger from '../components/hanger'

const Index = () => {

  const prev = 'prev'
  const next = 'next'

  return (
    <section className="hero is-fullheight is-primary">
      <div className="hero-body" style={{justifyContent: 'center', backgroundImage: `url(${bgImage})`}}>
        <StaticImage src='../images/hero image.png' alt="the app for fashion lovers" placeholder="blurred" />
        <Hanger navigateTo={next} />
      </div>
    </section>
  )
}

export default Index
