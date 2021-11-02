import React, { useState, useEffect } from 'react'
import '../styles/index.scss'

import Screen from '../components/screen'

import bgImage from '../images/background.png'

import { StaticImage } from 'gatsby-plugin-image'

import illustration1 from '../images/illustrations/illustration1.png'
import illustration2 from '../images/illustrations/illustration2.png'
import illustration3 from '../images/illustrations/illustration3.png'
import illustration4 from '../images/illustrations/illustration4.png'

import image1 from '../images/sessions/session1.jpg'

import SeoComponent from '../components/seo'

import { Link } from 'gatsby'

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
                      <div className="column is-half is-first-column">
                        <h1 className="has-text-centered" style={textStyle}>
                          { text }
                        </h1>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                          <img src={illustration} alt={text} />
                        </div>
                      </div>
                      <div className="column is-half has-text-centered formscreen-right" style={{backgroundColor: 'white', height: '100vh'}}>
                        <p className="is-size-3 is-size-4-mobile has-text-justified-mobile">
                          baffs is a marketplace app and community for, by and of people who care about looking good.
                        </p>
                        <div>
                          <h3 className="has-text-left has-text-justified-mobile form-heading">Sign up for take off</h3>
                          <form action="https://getform.io/f/9b9cf136-2a4a-4eee-914e-bbd473689f9c" method="POST" className="submit-form" target="_blank">
                            <input type="text" placeholder="name" name="name" className="my-3 py-2 is-size-6 has-text-success column is-5 is-12-mobile" />
                            <input type="email" placeholder="email" name="email"  className="my-3 py-2 is-size-6 has-text-success column is-5 is-offset-6 is-12-mobile"/>
                            <button className="button is-primary is-medium form-button mb-6"><span role="img" aria-label="rocket emoji" className="is-size-3">🚀</span></button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Screen>

  const sessionsScreen = <Screen isPrevScreen={true} isNextScreen={true} screenData={screenData}>
                            <div className="hero-body columns" style={{padding: 0, marginBottom: 0}}>
                              <div className="column is-5 has-text-centered formscreen-right py-6 px-6" style={{backgroundColor: 'white', height: '100vh', justifyContent: 'center'}}>
                                <h4 className="has-text-left has-text-justified-mobile">
                                  We invited some of our fave fashionistas over to talk to us about their style
                                </h4>
                                <h4 className="has-text-left mt-6">
                                  Check it out:
                                </h4>
                                <Link to="/sessions" className="button is-large is-danger is-size-3 is-radiusless is-family-primary is-desktop" style={{
                                  position: 'absolute', left: '50%', bottom: '10%', transform: `translate(-60%)`,
                                  zIndex: '10', 
                                  boxShadow: `8px 8px 1px rgba(0,0,0,0.25)`
                                }}>
                                  Baffs Sessions
                                </Link>
                              </div>
                              <div className="column columns is-7">
                                  <div className="column is-half session-img-container">
                                    {/* <StaticImage src="../images/sessions/session1.jpg" alt="Baffs session 1" className="session-img" layout="fullWidth" /> */}
                                    <img src={image1} alt="Baffs session 1" className="session-img" style={{transform: 'rotate(-12deg)', objectFit: 'contain'}} />
                                  </div>
                                  <Link to="/sessions" className="button is-danger is-size-4 is-radiusless is-family-primary sessions-btn-mobile is-mobile" style={{
                                      zIndex: '10', 
                                      boxShadow: `8px 8px 1px rgba(0,0,0,0.25)`
                                  }}>
                                    Baffs Sessions
                                  </Link>
                                  <div className="column is-half session-img-container">
                                    <StaticImage src="../images/sessions/session2.jpg" alt="Baffs session 2" className="session-img" style={{transform: 'rotate(12deg'}} />
                                  </div>
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
