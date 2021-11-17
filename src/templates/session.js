import React, { useState } from 'react'

import { graphql } from 'gatsby'

import BodyTextTemplate from '../components/bodyTextTemplate'

import Layout from '../components/layout'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Icon } from '@iconify/react';

import NavButton from '../components/navBtn'
import { navigation } from '../helpers/constants'

import { Link } from 'gatsby'

export const query = graphql`
    query($sessionNumber: String) {
        contentfulSession (sessionNumber: {
            eq: $sessionNumber
        }) {
            name
            age
            occupation
            interviewText {
                raw
            }
            photos {
                description
                gatsbyImageData(
                    placeholder: BLURRED
                )
            }
            sessionNumber
        }

        allContentfulSession{
            edges {
                next {
                    sessionNumber
                }
                previous {
                    sessionNumber
                }
                node {
                    sessionNumber
                }
            }
        }
    }
`

const Session = ({ data }) => {
    const { 
        name,
        interviewText,
        photos,
        sessionNumber
     } = data.contentfulSession

    const maxPhotoIndex = photos.length - 1
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

    const setPhotoIndex = (value) => {
        let newPhotoIndex 
        if(value > maxPhotoIndex){
            newPhotoIndex = 0
        } else if(value < 0 ) {
            newPhotoIndex = maxPhotoIndex
        } else {
            newPhotoIndex = value
        }
        setCurrentPhotoIndex(newPhotoIndex)
    }

    const { FWD, BACK } = navigation

    const neighbouringSessions = data.allContentfulSession.edges.filter(({ node }) => node.sessionNumber === sessionNumber)[0]
    const { previous, next } = neighbouringSessions
    
    const sessionsRoot = '/sessions'
    const prevSessionLink = previous ? `${sessionsRoot}/${previous.sessionNumber}` : sessionsRoot
    const nextSessionLink = next ? `${sessionsRoot}/${next.sessionNumber} `: sessionsRoot

    return (
        <Layout sectionPadding='session-section-padding'>
            <section>
                <div className="session-interview-container">
                    <div className="my-6 has-text-centered">
                        <Link to="/sessions" className="has-text-success has-text-weight-bold is-size-4">Baffs Sessions</Link>
                        <div className="level">
                            <NavButton navTo={prevSessionLink} navText="Prev" navDirection={BACK} className="level-item" size="is-size-3 is-desktop" />
                            <h1 className="level-item has-text-centered is-size-1 is-size-3-mobile">{name}</h1>
                            <NavButton navTo={nextSessionLink} navText="Next" navDirection={FWD} className="level-item" size="is-size-3 is-desktop" />
                            {/* Mobile Nav buttons */}
                            <div className="is-mobile session-nav-mobile">
                                <NavButton navTo={prevSessionLink} navText="Prev" navDirection={BACK} className="level-item" size="is-size-4" />
                                <NavButton navTo={nextSessionLink} navText="Next" navDirection={FWD} className="level-item" size="is-size-4" />
                            </div>                            
                        </div>
                    </div>

                    <div className="columns session-columns">
                        <div className="column is-7 px-5 session-interview-text">
                            <BodyTextTemplate richTextField={interviewText} />
                        </div>
                        <div className="column is-5 ml-3">
                            <div className="is-size-4 mb-3 session-photo-controls">
                                <Icon icon="grommet-icons:link-previous" className="is-clickable" 
                                    onClick={() => {setPhotoIndex( currentPhotoIndex-1 )}}
                                />
                                <p>{ `${currentPhotoIndex + 1} of ${maxPhotoIndex + 1}` }</p>
                                <Icon icon="grommet-icons:link-next" className="is-clickable" 
                                    onClick={() => {setPhotoIndex( currentPhotoIndex+1 )}}
                                />
                            </div>
                            <GatsbyImage image={getImage(photos[currentPhotoIndex].gatsbyImageData)} 
                                alt={photos[currentPhotoIndex].description} 
                            />
                        </div>
                    </div>
                </div>
                <footer>
                    <p className="has-text-centered is-size-4 is-size-5-mobile">Enjoyed this? Go on and spread the love:</p>
                    <ul className="social-share">
                        <li>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.baffs.app${sessionsRoot}/${sessionNumber}`} target="_blank" rel="noopener noreferrer">
                                <Icon icon="akar-icons:facebook-fill" className="is-clickable is-size-2" />
                            </a>
                        </li>
                        <li>
                            <a href={`https://twitter.com/intent/tweet?url=https://www.baffs.app${sessionsRoot}/${sessionNumber}&text=We%20invite%20our%20favourite%20fashionistas%20to%20talk%20to%20us%20about%20their%20style.%20Hear%20what%20they%20have%20to%20say:`} target="_blank" rel="noopener noreferrer">
                                <Icon icon="akar-icons:twitter-fill" className="is-clickable is-size-2" />
                            </a>
                        </li>
                        <li>
                            <a href={`https://pinterest.com/pin/create/button/?url=https://www.baffs.app${sessionsRoot}/${sessionNumber}&media=&description=We%20invite%20our%20favourite%20fashionistas%20to%20talk%20to%20us%20about%20their%20style.%20Hear%20what%20they%20have%20to%20say:`} target="_blank" rel="noopener noreferrer">
                                <Icon icon="akar-icons:pinterest-fill" className="is-clickable is-size-2" />
                            </a>
                        </li>
                        <li>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.baffs.app${sessionsRoot}/${sessionNumber}`} target="_blank" rel="noopener noreferrer">
                                <Icon icon="akar-icons:linkedin-fill" className="is-clickable is-size-2" />
                            </a>
                        </li>
                    </ul>
                    <p className="has-text-centered is-size-6 mt-4">&copy; Copyright Baffs App {new Date().getFullYear()}</p>
                </footer>
            </section>
        </Layout>
    )
}

export default Session