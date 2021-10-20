import React, { useState } from 'react'
import '../styles/index.scss'

import Screen from '../components/screen'

import bgImage from '../images/background.png'

import { StaticImage } from 'gatsby-plugin-image'

const Index = () => {
  
  const [currentScreen, setCurrentScreen] = useState(0)

  const screenData = { currentScreen, setCurrentScreen }

  const screen1 = <Screen isPrevScreen={false} isNextScreen={true} screenData={screenData}>
                    <div className="hero-body" style={{justifyContent: 'center'}}>
                      <StaticImage src='../images/hero image.png' alt="the app for fashion lovers" placeholder="blurred" />
                    </div>
                  </Screen>

  const screen2 = <Screen isPrevScreen={true} isNextScreen={true} screenData={screenData}>
                    <div className="hero-body">
                      <p className="title">
                        baffs
                      </p>
                    </div>
                  </Screen>
  
  const screens = [ screen1, screen2 ]

  return (
    <section className="hero is-fullheight is-primary" style={{ backgroundImage: `url(${bgImage})` }}>
      {screens[currentScreen]}
    </section>
  )
}

export default Index
