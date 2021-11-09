import React from 'react'

import Layout from '../components/layout'

import { useStaticQuery, graphql, Link } from 'gatsby'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import NavButton from '../components/navBtn'
import { nanoid } from 'nanoid'

import { navigation } from '../helpers/constants'

const Sessions = () => {

    const sessions = useStaticQuery(graphql`
        query {
            allContentfulSession {
                nodes {
                    name
                    age
                    occupation
                    sessionNumber
                    photos {
                        gatsbyImageData(
                            placeholder: BLURRED, 
                            width: 300
                        )
                    }
                }
            }
        }
    `).allContentfulSession.nodes

    return (
        <Layout>
            <NavButton navTo="/" navText="Back to Baffs" navDirection={navigation.BACK} />
            <div className="container has-text-centered">
                <h1 className="has-text-success">Baffs Sessions</h1>
                <p className="is-size-4">Our fave fashionistas talk to us about their style</p>
            </div>

            <div className="columns is-multiline">
                {
                    sessions.map(({ name, age, occupation, photos, sessionNumber }, index) => {
                        const rotateEffect = index % 2 === 0 ? 'rotate-left' : 'rotate-right'
                        return <div className="column is-half is-size-4 sessions-item has-text-centered" key={nanoid()}>
                                    <Link to={`/sessions/${sessionNumber}`} className="sessions-link">
                                        <GatsbyImage image={getImage(photos[0])} alt={name} className={rotateEffect} />
                                        <div className="mt-5">
                                            <p className="reduce-line-height"><span>{name.split(' ')[0]}</span>, <span>{age}</span></p>
                                            <p>{occupation}</p>
                                        </div>
                                    </Link>
                                </div>
                    })
                }
            </div>
        </Layout>
    )
}

export default Sessions
