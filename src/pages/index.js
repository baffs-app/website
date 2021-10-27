import React, { useState, useEffect } from 'react'
import '../styles/index.scss'

import Screen from '../components/screen'

import bgImage from '../images/background.png'

import { StaticImage } from 'gatsby-plugin-image'

import illustration1 from '../images/illustrations/illustration1.png'
import illustration2 from '../images/illustrations/illustration2.png'
import illustration3 from '../images/illustrations/illustration3.png'
import illustration4 from '../images/illustrations/illustration4.png'

import SeoComponent from '../components/seo'

const Index = () => {
  
  const [currentScreen, setCurrentScreen] = useState(0)

  const screenData = { currentScreen, setCurrentScreen }

  const changeYourStyleText = [
    {text: "Change your style...", isEmphasis: false, illustration: illustration2},
    {text: "Another one", isEmphasis: false, illustration: illustration1},
    {text: "Another one", isEmphasis: true, illustration: illustration4},
    {text: "Be like that", isEmphasis: false, illustration: illustration3},
    {text: "Be like that", isEmphasis: true, illustration: illustration3}
  ]

  const [animCounter, setAnimCounter] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      animCounter < changeYourStyleText.length - 1 ? setAnimCounter(animCounter+1) : setAnimCounter(0)
    }, 3000);
    return () => clearInterval(interval);
  }, [animCounter, changeYourStyleText.length]);

  const landingScreen = <Screen isPrevScreen={true} isNextScreen={false} screenData={screenData}>
                    <div className="hero-body" style={{justifyContent: 'center'}}>
                      <StaticImage src='../images/hero image.png' alt="the app for fashion lovers" placeholder="blurred" />
                    </div>
                  </Screen>

  const { text, isEmphasis, illustration } = changeYourStyleText[animCounter]
  const textStyle = isEmphasis ? {fontStyle: 'italic', color: '#E67E22'} : {fontStyle: 'normal', color: '#E74C3C'}

  const formScreen = <Screen isPrevScreen={false} isNextScreen={true} screenData={screenData}>
                    <div className="hero-body columns" style={{padding: 0, marginBottom: 0}}>
                      <div className="column is-half">
                        <h1 className="has-text-centered" style={textStyle}>
                          { text }
                        </h1>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                          <img src={illustration} alt={text} />
                        </div>
                      </div>
                      <div className="column is-half has-text-centered screen2-right py-6 px-6" style={{backgroundColor: 'white', height: '100vh'}}>
                        <p className="is-size-3">
                          baffs is a marketplace app and community for, by and of people who care about looking good.
                        </p>
                        <div>
                          <h3 className="has-text-left mb-6">Sign up for take off</h3>
                          <form action="https://getform.io/f/9b9cf136-2a4a-4eee-914e-bbd473689f9c" method="POST" className="submit-form" target="_blank">
                            <input type="text" placeholder="name" name="name" className="my-3 py-2 is-size-6 has-text-success column is-5" />
                            <input type="email" placeholder="email" name="email"  className="my-3 py-2 is-size-6 has-text-success column is-5 is-offset-6"/>
                            <button className="my-6 button is-primary is-medium"><span role="img" aria-label="rocket emoji" className="is-size-3">🚀</span></button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Screen>

  const sessionsScreen = <Screen isPrevScreen={true} isNextScreen={true} screenData={screenData}>
                            <div className="hero-body columns" style={{padding: 0, marginBottom: 0}}>
                              <div className="column is-5 has-text-centered screen2-right py-6 px-6" style={{backgroundColor: 'white', height: '100vh', justifyContent: 'center'}}>
                                <h4 className="has-text-left">
                                  We invited our fave fashionistas over to come talk to us about their style
                                </h4>
                                <h4 className="has-text-left mt-6">
                                  Check it out:
                                </h4>
                                <button className="button is-large is-danger is-size-3 is-radiusless" style={{
                                  position: 'absolute', left: '50%', bottom: '10%', transform: `translate(-60%)`,
                                  boxShadow: `8px 8px 1px rgba(9,1,113,0.7)`
                                }}>
                                  Baffs Sessions
                                </button>
                              </div>
                              <div className="column is-7">
                              </div>
                            </div>
                          </Screen>
  
  const screens = [ formScreen, sessionsScreen, landingScreen ]

  return (
    <section className="hero is-fullheight is-primary" style={{ backgroundImage: `url(${bgImage})` }}>
      <SeoComponent />
      {screens[currentScreen]}
    </section>
  )
}

export default Index
