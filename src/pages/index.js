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
                    <div className="hero-body columns" style={{padding: 0}}>
                      <div className="column is-half">
                      </div>
                      <div className="column is-half has-text-centered screen2-right py-6" style={{backgroundColor: 'white', height: '100vh'}}>
                        <p className="is-size-4">
                          baffs is a marketplace app and community for, by and of people who care about looking good.
                        </p>
                      </div>
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
