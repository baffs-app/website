import React, { useState } from 'react'

import { useStaticQuery, graphql } from 'gatsby'

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

        allContentfulSession(filter: {sessionNumber: {eq: $sessionNumber }}) {
            edges {
                next {
                    sessionNumber
                }
                previous {
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

    const neighbouringSessions = data.allContentfulSession.edges[0]
    const prevSessionLink = neighbouringSessions.previous ? neighbouringSessions.previous : '/sessions'
    const nextSessionLink = neighbouringSessions.next ? neighbouringSessions.next : '/sessions'

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
            </section>
        </Layout>
    )
}

export default Session