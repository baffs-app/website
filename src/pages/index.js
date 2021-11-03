import React, { useState } from 'react'
import '../styles/index.scss'

import Screen from '../components/screen'

import bgImage from '../images/background.png'

import { StaticImage } from 'gatsby-plugin-image'

import image1 from '../images/sessions/session1.jpg'
import image2 from '../images/sessions/session2.jpg'

import changeYourStyle from '../images/change-your-style.gif'

import SeoComponent from '../components/seo'

import { Link } from 'gatsby'

const Index = () => {
  
  const [currentScreen, setCurrentScreen] = useState(0)

  const screenData = { currentScreen, setCurrentScreen }

  const landingScreen = <Screen isPrevScreen={true} isNextScreen={false} screenData={screenData}>
                    <div className="hero-body" style={{justifyContent: 'center'}}>
                      <StaticImage src='../images/hero image.png' alt="the app for fashion lovers" placeholder="blurred" />
                    </div>
                  </Screen>


  const formScreen = <Screen isPrevScreen={false} isNextScreen={true} screenData={screenData}>
                    <div className="hero-body columns" style={{padding: 0, marginBottom: 0}}>
                      <div className="column is-half is-first-column p-0">
                        <img src={changeYourStyle} alt="Change your style animation" />
                      </div>
                      <div className="column is-half has-text-centered formscreen-right" style={{backgroundColor: 'white', height: '100vh'}}>
                        <p className="is-size-3 is-size-4-mobile has-text-justified-mobile">
                          baffs is a marketplace app and community for fashion and style enthusiasts.
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
                              <div className="column is-5 has-text-centered formscreen-right sessions-screen py-6 px-6" style={{backgroundColor: 'white', height: '100vh', justifyContent: 'center'}}>
                                <div className="is-mobile columns sessions-text mb-3">
                                  <img src={image1} alt="Baffs session 1" className="column is-half session-img" style={{transform: 'rotate(-12deg)', objectFit: 'contain'}} />
                                  <img src={image2} alt="Baffs session 2" className="column is-half session-img" style={{transform: 'rotate(12deg)', objectFit: 'contain'}} />
                                </div>
                                <h4 className="has-text-left has-text-justified-mobile is-size-5-mobile">
                                  We invited some of our fave fashionistas over to talk to us about their style
                                </h4>
                                <h4 className="has-text-left text-heading is-size-5-mobile">
                                  Check it out:
                                </h4>
                                <Link to="/sessions" className="button is-danger is-size-4 is-radiusless is-family-primary sessions-btn is-mobile" style={{padding: '1.5rem', marginBottom: '3rem' }}>
                                    Baffs Sessions
                                  </Link>
                                <Link to="/sessions" className="button is-large is-danger is-size-3 is-radiusless is-family-primary sessions-btn is-desktop">
                                  Baffs Sessions
                                </Link>
                              </div>
                              <div className="column columns is-7 is-desktop">
                                  <div className="column is-half session-img-container">
                                    {/* <StaticImage src="../images/sessions/session1.jpg" alt="Baffs session 1" className="session-img" layout="fullWidth" /> */}
                                    <img src={image1} alt="Baffs session 1" className="session-img" style={{transform: 'rotate(-12deg)', objectFit: 'contain'}} />
                                  </div>
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
