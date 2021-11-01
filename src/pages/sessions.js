import React from 'react'

import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import BackButton from '../components/backBtn'

const Sessions = () => {

    const sessions = useStaticQuery(graphql`
        query {
            allContentfulSession {
                nodes {
                    name
                    age
                    occupation
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
            <BackButton />
            <div className="container has-text-centered">
                <h1 className="has-text-success">Baffs Sessions</h1>
                <p className="is-size-4">Our fave fashionistas talk to us about their style</p>
            </div>

            <div className="columns is-multiline">
                {
                    sessions.map(({ name, age, occupation, photos }, index) => {
                        const rotateEffect = index % 2 === 0 ? 'rotate-left' : 'rotate-right'
                        return <div className="column is-half is-size-4 p-6 mt-6 has-text-centered">
                            <GatsbyImage image={getImage(photos[0])} alt={name} className={rotateEffect} />
                            <div className="mt-5">
                                <p className="reduce-line-height"><span>{name.split(' ')[0]}</span>, <span>{age}</span></p>
                                <p>{occupation}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </Layout>
    )
}

export default Sessions
