import React, { useState } from 'react'
import '../styles/index.scss'

import Screen1 from '../components/screen1'
import Screen2 from '../components/screen2'

import bgImage from '../images/background.png'

const Index = () => {
  
  const [currentScreen, setCurrentScreen] = useState(0)
  
  const screens = [<Screen1 screenData={{currentScreen, setCurrentScreen}} />, 
                  <Screen2 screenData={{currentScreen, setCurrentScreen}} />]


  return (
    <section className="hero is-fullheight is-primary" style={{ backgroundImage: `url(${bgImage})` }}>
      {screens[currentScreen]}
    </section>
  )
}

export default Index
