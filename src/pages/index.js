import React, { useState } from 'react'
import '../styles/index.scss'

import Screen from '../components/screen'

import bgImage from '../images/background.png'

import { StaticImage } from 'gatsby-plugin-image'

import changeYourStyle from '../images/change-your-style.gif'
import changeYourStyleMobile from '../images/change-your-style-mobile.gif'

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
                        <img src={changeYourStyle} alt="Change your style animation" className="is-desktop" />
                        <p className="is-mobile has-text-success mt-6 is-size-4 has-text-centered" style={{width: '50%'}}>The app for fashion lovers</p>
                        <img src={changeYourStyleMobile} alt="Change your style animation" className="is-mobile px-2" />
                      </div>
                      <div className="column is-half has-text-justified formscreen-right" style={{backgroundColor: 'white', height: '100vh', maxWidth: '100%'}}>
                        <p>
                          Baffs is a marketplace app and community for fashion and style enthusiasts to trade clothing items, 
                          find style inspiration, express themselves and connect with one another.
                        </p>
                        <div className="form-button">
                          <a href="https://forms.gle/dYCpogFHmwuBqrhW9" target="_blank" rel="noopener noreferrer">
                            <button className="button is-primary is-large is-size-3 is-size-4-mobile my-6">
                              <span role="img" aria-label="rocket emoji" className="mr-2">🚀</span>
                              Sign up for take off
                              <span role="img" aria-label="rocket emoji" className="ml-2">🚀</span>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Screen>

  const sessionsScreen = <Screen isPrevScreen={true} isNextScreen={true} screenData={screenData}>
                            <div className="hero-body columns" style={{padding: 0, marginBottom: 0}}>
                              <div className="column is-5 has-text-centered formscreen-right sessions-screen py-6 px-6" style={{backgroundColor: 'white', height: '100vh', justifyContent: 'center'}}>
                                <div className="is-mobile columns session-img-container mb-3">
                                  <StaticImage src="../images/sessions/session1.jpg" alt="Baffs session 1" className="column session-img" style={{transform: 'rotate(-12deg'}} />
                                  <StaticImage src="../images/sessions/session2.jpg" alt="Baffs session 2" className="column session-img" style={{transform: 'rotate(12deg'}} />
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
                                    <StaticImage src="../images/sessions/session1.jpg" alt="Baffs session 1" className="session-img" style={{transform: 'rotate(-12deg'}} />
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
